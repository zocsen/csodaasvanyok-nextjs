"use client";
import React from "react";

type IsMobileContextType = boolean | null;

const IsMobileContext = React.createContext<IsMobileContextType>(null);

export default IsMobileContext;
