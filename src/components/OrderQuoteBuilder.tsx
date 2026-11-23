import React, { useEffect, useState } from "react";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { QUOTE_SELECTION_OPTIONS } from "../data/catalogData";
import { siteConfig } from "../config/siteConfig";
import {
  OrderType,
  QuoteFormState,
  QuoteValidationErrors,
  SavedQuoteRecord,
  buildQuotePayload,
  buildWhatsAppUrl,
  clearLatestQuoteRecord,
  createInitialQuoteForm,
  generateQuoteReferenceId,
  getNextQuantityOnOrderTypeSwitch,
  isCakesOrKunafaSelected,
  loadLatestQuoteRecord,
  saveLatestQuoteRecord,
  validateQuoteForm,
} from "../utils/quoteBuilder";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export interface QuotePrefillRequest {
  orderType?: OrderType;
  selectedCategory?: string;
  productName?: string;
  quantity?: number;
  nonce?: number;
}

interface OrderQuoteBuilderProps {
  prefillRequest?: QuotePrefillRequest | null;
}

export const OrderQuoteBuilder: React.FC<OrderQuoteBuilderProps> = ({
  prefillRequest = null,
}) => {
  const [form, setForm] = useState<QuoteFormState>(() =>
    createInitialQuoteForm(
      prefillRequest
        ? {
            orderType: prefillRequest.orderType,
            selectedCategory: prefillRequest.selectedCategory,
            productName: prefillRequest.productName,
            quantity: prefillRequest.quantity,
          }
        : undefined
    )
  );
  const [errors, setErrors] = useState<QuoteValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedOrderId, setCopiedOrderId] = useState(false);
  const [submittedState, setSubmittedState] =
    useState<SavedQuoteRecord | null>(() => loadLatestQuoteRecord());

  useEffect(() => {
    if (!prefillRequest) return;

    setForm((prev) => {
      const nextOrderType = prefillRequest.orderType ?? prev.orderType;
      const nextQuantity =
        prefillRequest.quantity ??
        (prefillRequest.orderType
          ? getNextQuantityOnOrderTypeSwitch(
              prefillRequest.orderType,
              prev.quantity
            )
          : prev.quantity);

      return {
        ...prev,
        orderType: nextOrderType,
        selectedCategory:
          prefillRequest.selectedCategory ?? prev.selectedCategory,
        productName: prefillRequest.productName ?? prev.productName,
        quantity: nextQuantity,
      };
    });
    setErrors({});
  }, [prefillRequest]);

  const handleOrderTypeChange = (nextType: OrderType) => {
    setForm((prev) => ({
      ...prev,
      orderType: nextType,
      quantity: getNextQuantityOnOrderTypeSwitch(nextType, prev.quantity),
    }));
    setErrors((prev) => ({ ...prev, quantity: undefined }));
  };

  const handleFieldChange = <K extends keyof QuoteFormState>(
    field: K,
    value: QuoteFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCopyOrderId = async (orderId: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(orderId);
        setCopiedOrderId(true);
        window.setTimeout(() => setCopiedOrderId(false), 2000);
      }
    } catch {
      // Clipboard API unavailable
    }
  };

  const handleDismissConfirmation = () => {
    clearLatestQuoteRecord();
    setSubmittedState(null);
    setCopiedOrderId(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateQuoteForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const orderId = generateQuoteReferenceId();
    const payload = buildQuotePayload(form, orderId);
    const whatsappUrl = buildWhatsAppUrl(payload, siteConfig.WHATSAPP_NUMBER);

    // 1. Asynchronously POST JSON payload to Google Apps Script webhook if configured
    if (siteConfig.GOOGLE_SCRIPT_WEBHOOK_URL.trim()) {
      fetch(siteConfig.GOOGLE_SCRIPT_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Non-blocking fallback: WhatsApp handoff remains primary confirmation path
      });
    }

    // 2. Open formatted WhatsApp message in a new tab
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Mobile pop-up blockers are handled by the confirmation button below
    }

    // 3. Persist latest quote reference in localStorage and render confirmation card
    const savedRecord: SavedQuoteRecord = {
      orderId: payload.orderId,
      orderType: payload.orderType,
      selectedCategory: payload.selectedCategory,
      productName: payload.productName,
      quantity: payload.quantity,
      egglessPreference: payload.egglessPreference,
      customerName: payload.customerName,
      whatsappUrl,
      createdAt: new Date().toISOString(),
    };
    saveLatestQuoteRecord(savedRecord);
    setSubmittedState(savedRecord);
    setCopiedOrderId(false);
    setIsSubmitting(false);
  };

  const showEgglessOption = isCakesOrKunafaSelected(form.selectedCategory);

  return (
    <section
      id="order-builder"
      className="scroll-mt-28 bg-[#FAF6F0] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Context & Bhopal Atelier Contact Card */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
                Order &amp; Bulk Quote Builder
              </p>
              <h1 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
                Reserve Your{" "}
                <span className="italic text-[#8B3A42]">
                  Custom Treats &amp; Hampers
                </span>
              </h1>
              <p className="mt-3 text-base leading-[1.75] text-[#644E46] font-light">
                Share your assortment, custom name engraving, and preferred
                date. Your details route straight to our Bhopal studio on
                WhatsApp so {siteConfig.founderName} can confirm availability and
                pricing.
              </p>
            </div>

            {/* Studio Production Process Card */}
            <div className="rounded-3xl border border-[#B58938]/25 bg-[#F2EAE0] p-6">
              <h2 className="brand-font text-lg font-medium text-[#2A1812]">
                How Studio Production Works
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-[1.7] text-[#644E46] font-light">
                <li>
                  <strong className="font-medium text-[#2A1812]">
                    01. Fresh Small-Batch Prep:
                  </strong>{" "}
                  Every bar, floral disc, Kunafa bake, and hamper is made to
                  order—never off a warehouse shelf.
                </li>
                <li>
                  <strong className="font-medium text-[#2A1812]">
                    02. Custom &amp; Bulk Confirmation:
                  </strong>{" "}
                  50% advance payment confirms all customized and bulk orders.
                </li>
                <li>
                  <strong className="font-medium text-[#2A1812]">
                    03. Pickup &amp; Dispatch:
                  </strong>{" "}
                  Collect from Nehru Nagar, Bhopal or opt for local delivery and
                  MP bulk dispatch.
                </li>
              </ul>

              <div className="mt-4 flex items-start gap-2.5 border-t border-[#B58938]/20 pt-4 text-xs font-medium text-[#644E46]">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#B58938]"
                  aria-hidden="true"
                />
                <span>
                  Founded by {siteConfig.founderName} · {siteConfig.tagline}
                </span>
              </div>
            </div>

            {/* Bhopal Atelier Contact Card */}
            <div className="rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] p-6 shadow-[0_12px_35px_rgba(42,24,18,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#8B3A42]">
                    Atelier Location
                  </p>
                  <h2 className="mt-0.5 brand-font text-xl font-medium text-[#2A1812]">
                    Bhopal Studio Pickup &amp; Contact
                  </h2>
                </div>
                <a
                  href={siteConfig.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-[#B58938]/40 bg-[#FAF6F0] px-4 py-1.5 text-xs font-medium text-[#2A1812] transition-colors hover:bg-[#B58938] hover:text-white"
                >
                  <span>Directions</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-5 space-y-4 border-t border-[#B58938]/15 pt-4 text-sm text-[#644E46] font-light">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.ADDRESS}</span>
                </div>

                <div className="flex items-center gap-3 tabular-nums">
                  <Phone
                    className="h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:+${siteConfig.WHATSAPP_NUMBER}`}
                    className="hover:text-[#2A1812]"
                  >
                    {siteConfig.DISPLAY_PHONE}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    className="h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${siteConfig.EMAIL}`}
                    className="hover:text-[#2A1812]"
                  >
                    {siteConfig.EMAIL}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon className="h-4 w-4 shrink-0 text-[#8B3A42]" />
                  <a
                    href={siteConfig.INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#8B3A42] hover:text-[#2A1812]"
                  >
                    {siteConfig.INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_12px_35px_rgba(42,24,18,0.06)]">
              {/* Order Type Segmented Toggle */}
              <div>
                <span className="block text-xs font-semibold tracking-wider uppercase text-[#644E46]">
                  Order Type
                </span>
                <div
                  role="group"
                  aria-label="Select order type"
                  className="mt-2 grid grid-cols-2 rounded-full border border-[#B58938]/30 bg-[#FAF6F0] p-1"
                >
                  {(["Individual Box", "Bulk & Corporate"] as const).map(
                    (type) => {
                      const active = form.orderType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={active}
                          onClick={() => handleOrderTypeChange(type)}
                          className={`min-h-[44px] rounded-full px-3 py-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] ${
                            active
                              ? "bg-[#2A1812] text-[#FAF6F0]"
                              : "bg-transparent text-[#644E46] hover:text-[#2A1812]"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Bulk Inline Info Banner */}
              {form.orderType === "Bulk & Corporate" && (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-3 rounded-2xl border border-[#B58938]/30 bg-[#F2EAE0] p-4 text-sm text-[#2A1812]"
                >
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold">
                      Bulk &amp; Corporate Pricing Active (MOQ 10–15+)
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#644E46]">
                      Includes volume rate tiers, custom company sleeves or
                      wedding couple monograms, and negotiable pricing on 25+
                      hampers.
                    </p>
                  </div>
                </div>
              )}

              {/* Warm Confirmation Banner with Unique Quote Reference ID & localStorage Persistence */}
              {submittedState && (
                <div
                  role="status"
                  aria-live="polite"
                  data-testid="quote-confirmation-card"
                  className="mt-5 rounded-3xl border border-[#B58938] bg-[#FAF6F0] p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#B58938]"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <h2 className="brand-font text-lg font-medium text-[#2A1812]">
                        Quote Ready for {submittedState.customerName}
                      </h2>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#B58938]/30 bg-[#F2EAE0] px-4 py-2.5">
                        <div>
                          <span className="block text-[10px] font-semibold tracking-widest uppercase text-[#644E46]">
                            Quote Reference ID
                          </span>
                          <span
                            data-testid="quote-reference-id"
                            className="font-mono text-sm font-bold tracking-wider tabular-nums text-[#2A1812]"
                          >
                            {submittedState.orderId}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopyOrderId(submittedState.orderId)
                          }
                          className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-[#B58938]/40 bg-[#FAF6F0] px-3.5 py-1.5 text-xs font-semibold text-[#2A1812] transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer"
                        >
                          {copiedOrderId ? (
                            <>
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Copy ID</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="mt-3 text-sm text-[#644E46]">
                        {submittedState.orderType} request prepared for{" "}
                        <strong className="font-medium text-[#2A1812]">
                          {submittedState.quantity} ×{" "}
                          {submittedState.productName}
                        </strong>
                        {submittedState.egglessPreference ===
                          "100% Eggless Preparation" &&
                          " (100% Eggless Preparation)"}
                        . Tap below if WhatsApp did not open automatically.
                      </p>

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a
                          href={submittedState.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0F2A1A] transition-opacity hover:opacity-90"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          <span>Open WhatsApp Chat</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleDismissConfirmation}
                          className="min-h-[44px] px-3 py-2 text-xs font-medium text-[#644E46] underline underline-offset-4 hover:text-[#2A1812] cursor-pointer"
                        >
                          Clear Saved Reference
                        </button>
                      </div>

                      <p className="mt-3 text-xs font-medium text-[#8B3A42]">
                        50% advance payment confirms all customized and bulk
                        orders.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* 1. Product / Box Selection */}
                <div>
                  <label
                    htmlFor="quote-category"
                    className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                  >
                    Product / Box Selection *
                  </label>
                  <select
                    id="quote-category"
                    value={form.selectedCategory}
                    onChange={(e) =>
                      handleFieldChange("selectedCategory", e.target.value)
                    }
                    className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#2A1812] focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                  >
                    {QUOTE_SELECTION_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.selectedCategory && (
                    <p className="mt-1 text-xs font-medium text-[#8B3A42]">
                      {errors.selectedCategory}
                    </p>
                  )}
                </div>

                {/* Conditional 100% Eggless Preparation Toggle */}
                {showEgglessOption && (
                  <div className="rounded-2xl border border-[#B58938]/35 bg-[#F2EAE0] p-4">
                    <label
                      htmlFor="quote-eggless-toggle"
                      className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4"
                    >
                      <div>
                        <span className="block text-sm font-medium text-[#2A1812]">
                          100% Eggless Preparation
                        </span>
                        <span className="mt-0.5 block text-xs text-[#644E46]">
                          Available across Walnut Dry Cake, Kunafa Bakes &amp;
                          Atta-Jaggery Healthy Cake (₹350–₹650).
                        </span>
                      </div>
                      <input
                        id="quote-eggless-toggle"
                        type="checkbox"
                        checked={form.isEggless}
                        onChange={(e) =>
                          handleFieldChange("isEggless", e.target.checked)
                        }
                        className="h-5 w-5 shrink-0 accent-[#B58938] cursor-pointer"
                      />
                    </label>
                  </div>
                )}

                {/* 2 & 3. Custom Order / Product Name + Quantity */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                  <div className="sm:col-span-8">
                    <label
                      htmlFor="quote-product-name"
                      className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                    >
                      Custom Order / Product Name
                    </label>
                    <input
                      id="quote-product-name"
                      type="text"
                      value={form.productName}
                      onChange={(e) =>
                        handleFieldChange("productName", e.target.value)
                      }
                      placeholder="e.g., Rose Almond Disc Box or Nikah Favor Hamper"
                      className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#2A1812] placeholder:text-[#644E46]/60 focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="quote-quantity"
                      className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                    >
                      Quantity *
                    </label>
                    <input
                      id="quote-quantity"
                      type="number"
                      min={1}
                      value={form.quantity}
                      onChange={(e) =>
                        handleFieldChange(
                          "quantity",
                          Math.max(1, parseInt(e.target.value || "1", 10))
                        )
                      }
                      className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm tabular-nums text-[#2A1812] focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                    />
                    {errors.quantity && (
                      <p className="mt-1 text-xs font-medium text-[#8B3A42]">
                        {errors.quantity}
                      </p>
                    )}
                  </div>
                </div>

                {/* 4 & 5. Custom Name/Message + Delivery/Pickup Date */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                  <div className="sm:col-span-7">
                    <label
                      htmlFor="quote-custom-message"
                      className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                    >
                      Custom Name / Message on Chocolate (Optional)
                    </label>
                    <input
                      id="quote-custom-message"
                      type="text"
                      value={form.customMessage}
                      onChange={(e) =>
                        handleFieldChange("customMessage", e.target.value)
                      }
                      placeholder="e.g., Happy Anniversary Priya & Rahul"
                      className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#2A1812] placeholder:text-[#644E46]/60 focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                    />
                  </div>

                  <div className="sm:col-span-5">
                    <label
                      htmlFor="quote-delivery-date"
                      className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                    >
                      Delivery / Pickup Date
                    </label>
                    <input
                      id="quote-delivery-date"
                      type="date"
                      value={form.deliveryDate}
                      onChange={(e) =>
                        handleFieldChange("deliveryDate", e.target.value)
                      }
                      className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm tabular-nums text-[#2A1812] focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                    />
                  </div>
                </div>

                {/* 6. City / Area */}
                <div>
                  <label
                    htmlFor="quote-city-area"
                    className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                  >
                    City / Area
                  </label>
                  <input
                    id="quote-city-area"
                    type="text"
                    value={form.cityArea}
                    onChange={(e) =>
                      handleFieldChange("cityArea", e.target.value)
                    }
                    placeholder="e.g., Arera Colony Bhopal (Pickup/Delivery) or Indore (MP Bulk)"
                    className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#2A1812] placeholder:text-[#644E46]/60 focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                  />
                </div>

                {/* 7 & 8. Customer Name + WhatsApp Number */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-customer-name"
                      className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                    >
                      Customer Name *
                    </label>
                    <input
                      id="quote-customer-name"
                      type="text"
                      required
                      value={form.customerName}
                      onChange={(e) =>
                        handleFieldChange("customerName", e.target.value)
                      }
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.customerName)}
                      className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#2A1812] placeholder:text-[#644E46]/60 focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-xs font-medium text-[#8B3A42]">
                        {errors.customerName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-whatsapp"
                      className="block text-xs font-semibold tracking-wider uppercase text-[#2A1812]"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      id="quote-whatsapp"
                      type="tel"
                      required
                      value={form.whatsappNumber}
                      onChange={(e) =>
                        handleFieldChange("whatsappNumber", e.target.value)
                      }
                      placeholder="e.g., +91 98260 12345"
                      aria-invalid={Boolean(errors.whatsappNumber)}
                      className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#B58938]/35 bg-[#FAF6F0] px-4 py-2.5 text-sm tabular-nums text-[#2A1812] placeholder:text-[#644E46]/60 focus:border-[#B58938] focus:outline-none focus:ring-1 focus:ring-[#B58938]"
                    />
                    {errors.whatsappNumber && (
                      <p className="mt-1 text-xs font-medium text-[#8B3A42]">
                        {errors.whatsappNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold min-h-[50px] w-full px-6 py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Preparing Quote...</span>
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="h-4 w-4" />
                        <span>Send Quote &amp; Open WhatsApp</span>
                      </>
                    )}
                  </button>
                  <p className="mt-2.5 text-center text-xs text-[#644E46]">
                    50% advance payment confirms all customized and bulk orders.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
