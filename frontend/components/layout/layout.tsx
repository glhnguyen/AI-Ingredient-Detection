import React from "react";
import { Header } from "@/components/layout/header";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="grid grid-cols-1 gap-x-8 min-h-full">
        <div className="flex flex-col min-h-full">
          <Header></Header>
          {children}
        </div>
      </main>
    </>
  );
};
