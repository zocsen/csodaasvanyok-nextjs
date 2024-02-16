"use client";

import React from "react";

import SideDrawer from "../SideDrawer/SideDrawer";
import CartFooter from "./CartFooter/CartFooter";
import CartContent from "./CartContent/CartContent";
import { useCart } from "@/hooks/CartContext";

export default function Cart() {
  const { isCartOpen, closeCart } = useCart();

  return (
    <SideDrawer
      isDrawerOpen={isCartOpen}
      closeSideDrawer={closeCart}
      title={"Kosár"}
      ContentComponent={CartContent}
      FooterComponent={CartFooter}
    />
  );
}
