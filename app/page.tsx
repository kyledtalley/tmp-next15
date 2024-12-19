"use client";

import { Button } from "@/components/ui/buttons/button";
import { Alert } from "@/components/ui/feedback/alert";
import { Card } from "@/components/ui/layout/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/feedback/dialog";
import { Input } from "@/components/forms/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/shared/skeleton";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground space-y-8">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Explore ShadCN Components</h1>
        <p className="text-muted-foreground">
          A collection of reusable components styled with TailwindCSS.
        </p>
      </header>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <Alert variant="default">This is an info alert.</Alert>
        <Alert variant="destructive">This is a warning alert.</Alert>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p>This is a card component used for grouping content.</p>
        </Card>
      </section>

      {/* Dialogs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dialogs</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h3 className="text-lg font-semibold">Dialog Title</h3>
            </DialogHeader>
            <p>This is the content of the dialog.</p>
            <DialogFooter>
              <Button variant="default">Confirm</Button>
              <Button variant="outline">Cancel</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Input Fields */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input Fields</h2>
        <Input placeholder="Type something..." />
      </section>

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tabs</h2>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </Tabs>
      </section>

      {/* Skeleton */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skeleton Loader</h2>
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </section>
    </div>
  );
}
