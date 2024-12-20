"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/buttons/button";
import { Separator } from "@/components/ui/shared/separator";
import { Sheet, SheetContent } from "@/components/ui/shared/sheet";

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
  const isMobile = useIsMobile();
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
      <div
        className={cn(
          "relative flex h-screen",
          open ? "w-[16rem]" : "w-[3rem]"
        )}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("Sidebar must be used within SidebarProvider");
  }

  const { open } = context;

  return (
    <div
      className={cn(
        "transition-all duration-300 flex flex-col bg-sidebar text-sidebar-foreground",
        open ? "w-[16rem]" : "w-[3rem]"
      )}
    >
      {children}
    </div>
  );
}

export function SidebarTrigger() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("SidebarTrigger must be used within SidebarProvider");
  }

  const { toggleSidebar } = context;

  return (
    <Button
      onClick={toggleSidebar}
      variant="ghost"
      size="icon"
      className="absolute top-4 left-4"
    >
      <PanelLeft />
    </Button>
  );
}

export function SidebarContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col p-4">{children}</div>;
}

export function SidebarGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xs uppercase font-bold text-sidebar-foreground/70 mb-2">
        {label}
      </h3>
      {children}
    </div>
  );
}

export function SidebarMenu({
  items,
}: {
  items: { title: string; url: string; icon: React.ElementType }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.url}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent"
        >
          <item.icon className="w-5 h-5" />
          <span>{item.title}</span>
        </a>
      ))}
    </div>
  );
}
