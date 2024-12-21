export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        Welcome to Java Bliss, your go-to coffee shop for artisan coffee,
        cozy ambiance, and a community-driven experience. Learn more about our
        locations, team, and values.
      </p>

      <h3 className="text-4xl font-bold">Our Locations</h3>
      <p className="mt-4 text-lg">Visit us at one of our cozy cafes:</p>
      <ul className="mt-4 space-y-4">
        <li>
          <strong>Downtown Bliss:</strong> 123 Java Lane, Coffee City
        </li>
        <li>
          <strong>Riverside Café:</strong> 456 Brew Boulevard, Bean Town
        </li>
      </ul>
    </div>



  );
}
