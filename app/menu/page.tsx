"use client";

import { useState } from "react";
import { Button } from "@/components/ui/buttons/button";
import { Separator } from "@/components/ui/shared/separator";

interface Option {
  label: string;
  tags?: string[];
  exclusive?: boolean;
  unlimited?: boolean;
  default?: {
    value: number;
    max?: number;
    priceIncrement?: number;
  };
}

interface MenuItem {
  name: string;
  basePrice: number;
  options: Option[];
}

interface Syrup {
  flavor: string;
  intensity: "Light" | "Regular" | "Bold";
  price: number;
}

interface CurrentDrink {
  name: string;
  size: string;
  syrups: Syrup[];
  addOns: string[];
  price: number;
}

interface OrderItem extends CurrentDrink {}

const menuSections = [
  {
    title: "Coffee",
    items: [
      {
        name: "Drip Coffee",
        basePrice: 2.5,
        options: [{ label: "Size", tags: ["Small", "Medium", "Large"], exclusive: true }],
      },
      {
        name: "Espresso",
        basePrice: 3.0,
        options: [{ label: "Size", tags: ["Small", "Medium", "Large"], exclusive: true }],
      },
      {
        name: "Latte",
        basePrice: 3.5,
        options: [
          { label: "Size", tags: ["Small", "Medium", "Large"], exclusive: true },
          { label: "Syrups", tags: ["Vanilla", "Caramel", "Hazelnut"], unlimited: true },
        ],
      },
      {
        name: "Mocha",
        basePrice: 4.0,
        options: [
          { label: "Size", tags: ["Small", "Medium", "Large"], exclusive: true },
          { label: "Syrups", tags: ["Chocolate", "White Chocolate"], unlimited: true },
        ],
      },
    ],
  },
  {
    title: "Tea",
    items: [
      {
        name: "Green Tea",
        basePrice: 2.5,
        options: [
          { label: "Brewing Temperature", tags: ["Hot", "Cold"], exclusive: true },
          { label: "Add-ons", tags: ["Honey", "Lemon"], unlimited: true },
          { label: "# of Tea Bags", default: { value: 1, max: 5 } },
        ],
      },
      {
        name: "Matcha",
        basePrice: 4.0,
        options: [
          { label: "Scoops of Matcha", default: { value: 1, max: 5, priceIncrement: 0.5 } },
          { label: "Bitterness", tags: ["Light", "Normal", "Extra"], exclusive: true },
        ],
      },
      {
        name: "Chai",
        basePrice: 3.0,
        options: [
          { label: "Brewing Temperature", tags: ["Hot", "Cold"], exclusive: true },
          { label: "Add-ons", tags: ["Honey", "Cinnamon"], unlimited: true },
        ],
      },
    ],
  },
  {
    title: "Coffee Beans",
    items: [
      { name: "Arabica", basePrice: 12.0, options: [] },
      { name: "Robusta", basePrice: 10.0, options: [] },
      { name: "Holiday Blend", basePrice: 15.0, options: [] },
      { name: "Blonde Roast", basePrice: 11.0, options: [] },
      { name: "Dark Roast", basePrice: 13.0, options: [] },
    ],
  },
  {
    title: "Apparel",
    items: [
      {
        name: "T-Shirts",
        basePrice: 20.0,
        options: [
          { label: "Size", tags: ["S", "M", "L", "XL"], exclusive: true },
          { label: "Color", tags: ["Black", "White", "Blue"], exclusive: true },
          { label: "Quantity", default: { value: 1, max: 10 } },
        ],
      },
      { name: "Hoodies", basePrice: 40.0, options: [] },
      { name: "Mugs", basePrice: 10.0, options: [] },
      { name: "Accessories", basePrice: 15.0, options: [] },
    ],
  },
];

export default function MenuPage() {
  const [currentDrink, setCurrentDrink] = useState<CurrentDrink | null>(null);
  const [mainOrder, setMainOrder] = useState<OrderItem[]>([]);
  const [selectedSyrup, setSelectedSyrup] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState<"Light" | "Regular" | "Bold" | null>(null);

  const startNewDrink = (menuItem: MenuItem) => {
    setCurrentDrink({
      name: menuItem.name,
      size: "Medium", // Default size
      syrups: [],
      addOns: [],
      price: menuItem.basePrice,
    });
  };

  const selectSize = (size: string) => {
    if (!currentDrink) return;
    const sizePriceAdjustment = size === "Small" ? -0.5 : size === "Large" ? 0.5 : 0;
    setCurrentDrink({
      ...currentDrink,
      size,
      price: currentDrink.price + sizePriceAdjustment,
    });
  };

  const addSyrup = () => {
    if (!currentDrink || !selectedSyrup || !selectedIntensity) return;

    const syrupPrice =
      selectedIntensity === "Light" ? 0.25 : selectedIntensity === "Regular" ? 0.5 : 0.75;

    setCurrentDrink({
      ...currentDrink,
      syrups: [...currentDrink.syrups, { flavor: selectedSyrup, intensity: selectedIntensity, price: syrupPrice }],
      price: currentDrink.price + syrupPrice,
    });

    setSelectedSyrup(null);
    setSelectedIntensity(null);
  };

  const removeSyrup = (flavor: string) => {
    if (!currentDrink) return;

    const updatedSyrups = currentDrink.syrups.filter((syrup) => syrup.flavor !== flavor);
    const priceReduction = currentDrink.syrups
      .filter((syrup) => syrup.flavor === flavor)
      .reduce((sum, syrup) => sum + syrup.price, 0);

    setCurrentDrink({
      ...currentDrink,
      syrups: updatedSyrups,
      price: currentDrink.price - priceReduction,
    });
  };

  const finalizeDrink = () => {
    if (!currentDrink) return;

    setMainOrder([...mainOrder, currentDrink]);
    setCurrentDrink(null);
  };

  const removeDrinkFromOrder = (index: number) => {
    setMainOrder(mainOrder.filter((_, idx) => idx !== index));
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Menu</h1>

      {menuSections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="space-y-4">
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.items.map((menuItem, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <h3 className="text-xl font-bold">{menuItem.name}</h3>
                <p>Starting at ${menuItem.basePrice.toFixed(2)}</p>
                <Button onClick={() => startNewDrink(menuItem)}>Customize</Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {currentDrink && (
        <div className="p-4 bg-gray-100 rounded-lg space-y-4">
          <h2 className="text-xl font-bold">Current Drink: {currentDrink.name}</h2>
          <p>Size: {currentDrink.size}</p>
          <div>
            <h3 className="text-lg font-bold">Select Size</h3>
            <div className="flex gap-2">
              {["Small", "Medium", "Large"].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    currentDrink.size === size ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => selectSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Add Syrup</h3>
            <div className="flex gap-2">
              {["Vanilla", "Caramel", "Hazelnut", "Chocolate", "White Chocolate"].map((flavor) => (
                <button
                  key={flavor}
                  className={`px-3 py-1 border rounded ${
                    selectedSyrup === flavor ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSyrup(flavor)}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {selectedSyrup && (
            <div>
              <h3 className="text-lg font-bold">Syrup Intensity</h3>
              <div className="flex gap-2">
                {["Light", "Regular", "Bold"].map((intensity) => (
                  <button
                    key={intensity}
                    className={`px-3 py-1 border rounded ${
                      selectedIntensity === intensity ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedIntensity(intensity as "Light" | "Regular" | "Bold")}
                  >
                    {intensity}
                  </button>
                ))}
              </div>
              <Button onClick={addSyrup} disabled={!selectedIntensity}>
                Add Syrup
              </Button>
            </div>
          )}

          {currentDrink.syrups.length > 0 && (
            <div>
              <h3 className="text-lg font-bold">Current Syrups</h3>
              <ul>
                {currentDrink.syrups.map((syrup, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>
                      {syrup.flavor} ({syrup.intensity}) - ${syrup.price.toFixed(2)}
                    </span>
                    <Button onClick={() => removeSyrup(syrup.flavor)}>Remove</Button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h3 className="text-lg font-bold">Price: ${currentDrink.price.toFixed(2)}</h3>
          <Button onClick={finalizeDrink}>Add to Order</Button>
        </div>
      )}

      <div className="p-4 bg-gray-200 rounded-lg">
        <h2 className="text-xl font-bold">Your Order</h2>
        <ul>
          {mainOrder.map((orderItem, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>
                {orderItem.size} {orderItem.name} - ${orderItem.price.toFixed(2)}
              </span>
              <Button onClick={() => removeDrinkFromOrder(idx)}>Remove</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
