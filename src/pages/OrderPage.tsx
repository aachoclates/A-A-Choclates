import React from "react";
import { useLocation } from "react-router-dom";
import {
  OrderQuoteBuilder,
  QuotePrefillRequest,
} from "../components/OrderQuoteBuilder";

interface OrderLocationState {
  prefill?: QuotePrefillRequest;
}

export const OrderPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as OrderLocationState | null;

  return (
    <div className="bg-[#FAF6F0]">
      <OrderQuoteBuilder prefillRequest={state?.prefill ?? null} />
    </div>
  );
};
