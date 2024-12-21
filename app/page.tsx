"use client";

import Link from "next/link";
import { Button } from "@/components/ui/buttons/button";

export default function Home() {
  return (
    <main className="flex-1 p-8 bg-background text-foreground space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to Java Bliss</h1>
        <p className="text-lg text-muted-foreground">
          Your next favorite coffee shop website, powered by The Boiler.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild size="lg" variant="default">
            <Link href="/menu">View Menu</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
    </main>
  );
}
