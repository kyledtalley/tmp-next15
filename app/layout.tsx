"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
          <Sidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
          <Dialog />
        </SidebarProvider>
      </body>
    </html>
  );
}
