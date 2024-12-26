import * as React from "react";

import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
