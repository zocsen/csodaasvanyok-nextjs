"use client";
import React from "react";

type IsMobileContextType = boolean | undefined;

const IsMobileContext = React.createContext<IsMobileContextType>(undefined);

export default IsMobileContext;
