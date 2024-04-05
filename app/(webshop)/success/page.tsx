"use client";

import { useCart } from "@/hooks/CartContext";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const Success = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { setCartItems } = useCart();

  useEffect(() => {
    const postOrderDetails = async (sessionId: string) => {
      try {
        const tempOrderId = localStorage.getItem("tempOrderId");

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId, tempOrderId }),
          }
        );

        if (response.ok) {
          localStorage.clear();
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error posting order details:", error);
      }
    };

    if (sessionId) {
      postOrderDetails(sessionId);
    }
  }, [sessionId, setCartItems]);

  return (
    <div style={{ display: "block", textAlign: "center", paddingTop: "100px" }}>
      <h1>Köszönjük a vásárlást!</h1>
      <h2>A szállítás részleteiről hamarosan e-mailben értesítjük!</h2>
    </div>
  );
};

const PaymentSuccessfulPage = () => {
  return (
    <Suspense>
      <Success />;
    </Suspense>
  );
};

export default PaymentSuccessfulPage;
