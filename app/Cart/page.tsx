import React from 'react';
import Image from 'next/image';
export default function CartPage() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="bg-white shadow-md rounded-lg p-6">
  <div className="flex flex-wrap items-center border-b pb-4 gap-4">
    <Image
      src={"/Cart/cart1.png"}
      alt="cart1"
      className="rounded-md"
      width={100}
      height={50}
    />
    <div className="ml-0 sm:ml-4 flex-1">
      <h2 className="text-lg font-semibold">
        SanDisk SSD PLUS 1TB Internal SSD
      </h2>
      <p className="text-sm text-gray-500">SATA III 6 Gb/s electronics</p>
    </div>
    <div className="flex items-center space-x-4 justify-between w-full sm:w-auto">
      <p className="w-16 text-center border rounded-md">1</p>
      <p className="text-lg font-semibold">$109</p>
      <button className="text-red-500 hover:underline">Remove</button>
    </div>
  </div>

  <div className="flex flex-wrap items-center border-b py-4 gap-4">
    <Image
      src={"/Cart/cart2.jpeg"}
      alt="cart"
      className="rounded-md"
      width={100}
      height={50}
    />
    <div className="ml-0 sm:ml-4 flex-1">
      <h2 className="text-lg font-semibold">White Gold</h2>
      <p className="text-sm text-gray-500">Plated Princess</p>
    </div>
    <div className="flex items-center space-x-4 justify-between w-full sm:w-auto">
      <p className="w-16 text-center border rounded-md">2</p>
      <p className="text-lg font-semibold">$9.99</p>
      <button className="text-red-500 hover:underline">Remove</button>
    </div>
  </div>
</div>

        {/* Cart Summary */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p className="font-semibold">$128.98</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p className="font-semibold">$5.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Tax</p>
            <p className="font-semibold">$3.75</p>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>$137.73</p>
          </div>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
