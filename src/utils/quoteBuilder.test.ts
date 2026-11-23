import test from "node:test";
import assert from "node:assert/strict";
import {
  CAKES_KUNAFA_CATEGORY,
  createInitialQuoteForm,
  generateQuoteReferenceId,
  getNextQuantityOnOrderTypeSwitch,
  isCakesOrKunafaSelected,
  validateQuoteForm,
  buildQuotePayload,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
} from "./quoteBuilder";

test("generateQuoteReferenceId follows AA-YYYYMMDD-XXXX format", () => {
  const sampleDate = new Date(2026, 10, 23); // Nov 23, 2026
  const refId = generateQuoteReferenceId(sampleDate);
  assert.match(refId, /^AA-20261123-\d{4}$/);
});

test("createInitialQuoteForm sets sensible defaults for Individual and Bulk", () => {
  const individual = createInitialQuoteForm();
  assert.equal(individual.orderType, "Individual Box");
  assert.equal(individual.quantity, 1);
  assert.equal(individual.isEggless, false);

  const bulk = createInitialQuoteForm({ orderType: "Bulk & Corporate" });
  assert.equal(bulk.orderType, "Bulk & Corporate");
  assert.equal(bulk.quantity, 15);
});

test("getNextQuantityOnOrderTypeSwitch adjusts defaults smoothly", () => {
  assert.equal(getNextQuantityOnOrderTypeSwitch("Bulk & Corporate", 1), 15);
  assert.equal(getNextQuantityOnOrderTypeSwitch("Bulk & Corporate", 25), 25);
  assert.equal(getNextQuantityOnOrderTypeSwitch("Individual Box", 15), 1);
  assert.equal(getNextQuantityOnOrderTypeSwitch("Individual Box", 3), 3);
});

test("validateQuoteForm flags missing customer name, invalid WhatsApp, and bulk MOQ under 10", () => {
  const emptyForm = createInitialQuoteForm({
    customerName: "",
    whatsappNumber: "123",
    orderType: "Bulk & Corporate",
    quantity: 4,
  });

  const errors = validateQuoteForm(emptyForm);
  assert.ok(errors.customerName);
  assert.ok(errors.whatsappNumber);
  assert.ok(errors.quantity);
});

test("validateQuoteForm passes for valid individual order", () => {
  const validForm = createInitialQuoteForm({
    selectedCategory: "Customized Name Chocolates",
    productName: "Aarav Custom Name Bar",
    quantity: 2,
    customerName: "Teena Khan",
    whatsappNumber: "+91 98260 12345",
  });

  const errors = validateQuoteForm(validForm);
  assert.deepEqual(errors, {});
});

test("Eggless preparation preference appears for Artisanal Dry Cakes & Kunafa Bakes", () => {
  assert.equal(isCakesOrKunafaSelected(CAKES_KUNAFA_CATEGORY), true);
  assert.equal(isCakesOrKunafaSelected("Grand Luxe Hamper"), false);

  const bakeForm = createInitialQuoteForm({
    selectedCategory: CAKES_KUNAFA_CATEGORY,
    productName: "Walnut Dry Cake",
    quantity: 2,
    isEggless: true,
    customerName: "Shabnam Bee",
    whatsappNumber: "9826054321",
  });

  const payload = buildQuotePayload(bakeForm, "AA-20261123-4821");
  assert.equal(payload.orderId, "AA-20261123-4821");
  assert.equal(payload.egglessPreference, "100% Eggless Preparation");

  const message = buildWhatsAppMessage(payload);
  assert.match(message, /Quote Reference ID: AA-20261123-4821/);
  assert.match(message, /Preparation Preference: 100% Eggless Preparation/);
});

test("buildQuotePayload and buildWhatsAppUrl format clean WhatsApp message addressed to 917697568715", () => {
  const form = createInitialQuoteForm({
    orderType: "Bulk & Corporate",
    selectedCategory: "Grand Luxe Hamper",
    productName: "Nikah Favor Hamper",
    quantity: 20,
    customMessage: "Zoya & Ayaan",
    deliveryDate: "2026-12-10",
    cityArea: "Arera Colony, Bhopal",
    customerName: "Muskan Khan",
    whatsappNumber: "9826011223",
  });

  const payload = buildQuotePayload(form, "AA-20261123-9012");
  const message = buildWhatsAppMessage(payload);
  const url = buildWhatsAppUrl(payload, "917697568715");

  assert.equal(payload.egglessPreference, "N/A");
  assert.match(message, /Quote Reference ID: AA-20261123-9012/);
  assert.match(message, /Order Type: Bulk & Corporate/);
  assert.match(message, /Category \/ Tier: Grand Luxe Hamper/);
  assert.match(message, /Product \/ Custom Order: Nikah Favor Hamper/);
  assert.match(message, /Quantity: 20/);
  assert.match(message, /Custom Chocolate Name \/ Message: Zoya & Ayaan/);
  assert.match(message, /Delivery \/ Pickup Date: 2026-12-10/);
  assert.match(message, /City \/ Area: Arera Colony, Bhopal/);
  assert.match(message, /Customer Name: Muskan Khan/);
  assert.ok(url.startsWith("https://wa.me/917697568715?text="));
});
