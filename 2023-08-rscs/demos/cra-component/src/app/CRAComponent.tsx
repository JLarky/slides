"use client";
import "client-only";

import { useEffect, useState } from "react";

export function CRAComponent(props: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return props.children;
}
