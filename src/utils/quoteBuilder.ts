import { siteConfig } from "../config/siteConfig";

export type OrderType = "Individual Box" | "Bulk & Corporate";

export const CAKES_KUNAFA_CATEGORY = "Artisanal Dry Cakes & Kunafa Bakes";
export const LATEST_QUOTE_STORAGE_KEY = "aa_choclates_latest_quote_v1";

export interface QuoteFormState {
  orderType: OrderType;
  selectedCategory: string;
  productName: string;
  quantity: number;
  isEggless: boolean;
  customMessage: string;
  deliveryDate: string;
  cityArea: string;
  customerName: string;
  whatsappNumber: string;
}

export interface QuotePayload {
  orderId: string;
  orderType: OrderType;
  selectedCategory: string;
  productName: string;
  quantity: number;
  egglessPreference: string;
  customMessage: string;
  deliveryDate: string;
  cityArea: string;
  customerName: string;
  whatsappNumber: string;
}

export interface SavedQuoteRecord {
  orderId: string;
  orderType: OrderType;
  selectedCategory: string;
  productName: string;
  quantity: number;
  egglessPreference: string;
  customerName: string;
  whatsappUrl: string;
  createdAt: string;
}

export type QuoteValidationErrors = Partial<Record<keyof QuoteFormState, string>>;

export function generateQuoteReferenceId(now: Date = new Date()): string {
  const year = now.getFullYear().toString();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const randomDigits = Math.floor(1000 + Math.random() * 9000).toString();
  return `AA-${year}${month}${day}-${randomDigits}`;
}

export function isCakesOrKunafaSelected(selectedCategory: string): boolean {
  return selectedCategory.trim() === CAKES_KUNAFA_CATEGORY;
}

export function createInitialQuoteForm(
  overrides?: Partial<QuoteFormState>
): QuoteFormState {
  const orderType = overrides?.orderType ?? "Individual Box";
  const defaultQty = orderType === "Bulk & Corporate" ? 15 : 1;
  return {
    orderType,
    selectedCategory:
      overrides?.selectedCategory ?? "Signature Celebration Box (8–12 pcs)",
    productName: overrides?.productName ?? "",
    quantity: overrides?.quantity ?? defaultQty,
    isEggless: overrides?.isEggless ?? false,
    customMessage: overrides?.customMessage ?? "",
    deliveryDate: overrides?.deliveryDate ?? "",
    cityArea: overrides?.cityArea ?? "",
    customerName: overrides?.customerName ?? "",
    whatsappNumber: overrides?.whatsappNumber ?? "",
  };
}

export function getNextQuantityOnOrderTypeSwitch(
  nextType: OrderType,
  currentQuantity: number
): number {
  if (nextType === "Bulk & Corporate") {
    return currentQuantity < 10 ? 15 : currentQuantity;
  }
  return currentQuantity === 15 ? 1 : Math.max(1, currentQuantity);
}

export function sanitizeTextInput(value: string, maxLength = 200): string {
  return value.replace(/[<>]/g, "").trim().slice(0, maxLength);
}

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/[^\d+]/g, "").trim();
}

export function validateQuoteForm(form: QuoteFormState): QuoteValidationErrors {
  const errors: QuoteValidationErrors = {};

  if (!form.selectedCategory.trim()) {
    errors.selectedCategory = "Please select a product or gift box category.";
  }

  if (!Number.isFinite(form.quantity) || form.quantity < 1) {
    errors.quantity = "Quantity must be at least 1.";
  } else if (form.orderType === "Bulk & Corporate" && form.quantity < 10) {
    errors.quantity =
      "Bulk & Corporate orders start at MOQ 10 units (15 recommended for favors).";
  }

  const trimmedName = form.customerName.trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.customerName = "Please enter your full name.";
  }

  const digitsOnly = form.whatsappNumber.replace(/\D/g, "");
  if (!digitsOnly) {
    errors.whatsappNumber =
      "Please enter your WhatsApp number so we can share your quote.";
  } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.whatsappNumber = "Enter a valid 10-digit WhatsApp mobile number.";
  }

  return errors;
}

export function buildQuotePayload(
  form: QuoteFormState,
  orderId: string = generateQuoteReferenceId()
): QuotePayload {
  const isBakeCategory = isCakesOrKunafaSelected(form.selectedCategory);
  const egglessPreference = isBakeCategory
    ? form.isEggless
      ? "100% Eggless Preparation"
      : "Standard Preparation"
    : "N/A";

  return {
    orderId,
    orderType: form.orderType,
    selectedCategory: sanitizeTextInput(form.selectedCategory, 140),
    productName:
      sanitizeTextInput(form.productName, 140) ||
      sanitizeTextInput(form.selectedCategory, 140),
    quantity: Math.max(1, Math.floor(form.quantity)),
    egglessPreference,
    customMessage: sanitizeTextInput(form.customMessage, 240),
    deliveryDate: sanitizeTextInput(form.deliveryDate, 32),
    cityArea: sanitizeTextInput(form.cityArea, 160),
    customerName: sanitizeTextInput(form.customerName, 100),
    whatsappNumber: normalizePhoneDigits(form.whatsappNumber),
  };
}

export function buildWhatsAppMessage(payload: QuotePayload): string {
  const lines = [
    "Hello A&A Choclates Team,",
    "I would like to request an order / quote with the details below:",
    "",
    `Quote Reference ID: ${payload.orderId}`,
    `Order Type: ${payload.orderType}`,
    `Category / Tier: ${payload.selectedCategory}`,
    `Product / Custom Order: ${payload.productName}`,
    `Quantity: ${payload.quantity}`,
  ];

  if (isCakesOrKunafaSelected(payload.selectedCategory)) {
    lines.push(`Preparation Preference: ${payload.egglessPreference}`);
  }

  lines.push(
    `Custom Chocolate Name / Message: ${payload.customMessage || "None specified"}`,
    `Delivery / Pickup Date: ${payload.deliveryDate || "Flexible"}`,
    `City / Area: ${payload.cityArea || "Bhopal"}`,
    `Customer Name: ${payload.customerName}`,
    `Customer WhatsApp: ${payload.whatsappNumber}`,
    "",
    "Please share availability and final pricing. (Noted: 50% advance payment confirms all customized and bulk orders.)"
  );

  return lines.join("\n");
}

export function buildWhatsAppUrl(
  payload: QuotePayload,
  targetNumber: string = siteConfig.WHATSAPP_NUMBER
): string {
  const cleanTarget = targetNumber.replace(/\D/g, "");
  const message = buildWhatsAppMessage(payload);
  return `https://wa.me/${cleanTarget}?text=${encodeURIComponent(message)}`;
}

export function saveLatestQuoteRecord(record: SavedQuoteRecord): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(
        LATEST_QUOTE_STORAGE_KEY,
        JSON.stringify(record)
      );
    }
  } catch {
    // Ignore storage quota or private browsing restrictions
  }
}

export function loadLatestQuoteRecord(): SavedQuoteRecord | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }
    const raw = window.localStorage.getItem(LATEST_QUOTE_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "orderId" in parsed &&
      typeof (parsed as SavedQuoteRecord).orderId === "string" &&
      "whatsappUrl" in parsed &&
      typeof (parsed as SavedQuoteRecord).whatsappUrl === "string" &&
      "customerName" in parsed &&
      typeof (parsed as SavedQuoteRecord).customerName === "string"
    ) {
      return parsed as SavedQuoteRecord;
    }
    return null;
  } catch {
    return null;
  }
}

export function clearLatestQuoteRecord(): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.removeItem(LATEST_QUOTE_STORAGE_KEY);
    }
  } catch {
    // Ignore
  }
}
