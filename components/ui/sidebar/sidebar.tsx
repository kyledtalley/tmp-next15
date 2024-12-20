"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/buttons/button";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

const SidebarContext = React.createContext<{
  open: boolean;
  toggleSidebar: () => void;
} | null>(null);

export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => {
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${!prev}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      return !prev;
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({ open, toggleSidebar }),
    [open, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={cn("flex", open ? "w-[16rem]" : "w-[3rem]")}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider.");
  }
  return context;
}

export function SidebarContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col p-4">{children}</div>;
}