"use client";

import { Button } from "@/components/ui/buttons/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Welcome to The Boiler</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A reusable, modern boilerplate for your next web project.
      </p>
      <Button
        className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
        onClick={() => alert("Get started!")}
      >
        Get Started
      </Button>
    </div>
  );
}
