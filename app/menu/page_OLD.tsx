"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card } from "@/components/ui/layout/card";
import { Input } from "@/components/forms/input";
import { Button } from "@/components/ui/buttons/button";
import { Separator } from "@/components/ui/shared/separator";

const menuSections = [
  {
    title: "Coffee",
    image: "/images/coffee.jpg",
    items: ["Drip", "Espresso", "Mocha", "Latte", "Custom"],
    options: [
      { label: "Size", placeholder: "Small, Medium, Large" },
      { label: "Milk Type", placeholder: "Whole, Almond, Oat, etc." },
      { label: "Sweetness", placeholder: "None, Low, Medium, High" },
    ],
  },
  {
    title: "Tea",
    image: "/images/tea.jpg",
    items: ["Green Tea", "Black Tea", "Herbal Tea", "Chai", "Matcha"],
    options: [
      { label: "Brewing Temperature", placeholder: "Hot, Cold" },
      { label: "Add-ons", placeholder: "Honey, Lemon, Milk, etc." },
      { label: "Caffeine Level", placeholder: "None, Low, Medium, High" },
    ],
  },
  {
    title: "Coffee Beans",
    image: "/images/coffee-beans.jpg",
    items: ["Arabica", "Robusta", "Blends", "Custom Roast"],
    options: [
      { label: "Grind Level", placeholder: "Whole Beans, Coarse, Medium, Fine" },
      { label: "Weight", placeholder: "250g, 500g, 1kg" },
      { label: "Roast Type", placeholder: "Light, Medium, Dark" },
    ],
  },
  {
    title: "Apparel",
    image: "/images/apparel.png",
    items: ["T-Shirts", "Hoodies", "Mugs", "Accessories"],
    options: [
      { label: "Size", placeholder: "S, M, L, XL" },
      { label: "Color", placeholder: "Black, White, Blue, etc." },
      { label: "Quantity", placeholder: "1, 2, 3, etc." },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuSections.map((section, index) => (
          <Card key={index} className="p-4">
            <img src={section.image} alt={section.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-bold mt-4">{section.title}</h2>
            <Accordion type="single" collapsible className="mt-4">
              {section.items.map((item, idx) => (
                <AccordionItem key={idx} value={item}>
                  <AccordionTrigger>{item}</AccordionTrigger>
                  <AccordionContent>
                    <Separator className="my-2" />
                    <form className="space-y-2">
                      {section.options.map((option, optionIdx) => (
                        <div key={optionIdx}>
                          <label className="text-sm font-medium">{option.label}:</label>
                          <Input type="text" placeholder={option.placeholder} />
                        </div>
                      ))}
                      <Button variant="default" size="sm" className="mt-2">
                        Add to Order
                      </Button>
                    </form>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        ))}
      </div>
    </div>
  );
}
