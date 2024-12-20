"use client";

export default function Menu() {
  const items = [
    { name: "Espresso", price: "$3.00" },
    { name: "Latte", price: "$4.00" },
    { name: "Cappuccino", price: "$4.50" },
    { name: "Croissant", price: "$3.50" },
    { name: "Blueberry Muffin", price: "$2.50" },
  ];

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.name} className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-muted-foreground">{item.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
