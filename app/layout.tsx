"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Dialog } from "@/components/ui/feedback/dialog";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <div className="relative flex h-screen">
            <AppSidebar className="fixed left-0 top-0 h-full w-[250px] transition-transform transform -translate-x-full lg:translate-x-0" />
            <main className="flex-1 transition-all duration-300 lg:ml-[250px]">
              <SidebarTrigger />
              <div className="max-w-screen-lg mx-auto p-4">{children}</div>
            </main>
          </div>
          <Dialog />
        </SidebarProvider>
      </body>
    </html>
  );
}
