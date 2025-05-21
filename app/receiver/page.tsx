"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  itemName: string;
  rentAmount: string;
  rentTime: string;
  condition: string;
  location: string;
  pictures: string[];
};

const dummyData: Item[] = [
  {
    id: 1,
    name: "Alice",
    itemName: "Camera",
    rentAmount: "500",
    rentTime: "2 days",
    condition: "Excellent - no scratches",
    location: "Ranchi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 2,
    name: "Bob",
    itemName: "Laptop",
    rentAmount: "1000",
    rentTime: "1 week",
    condition: "Good - minor wear",
    location: "Delhi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 3,
    name: "Charlie",
    itemName: "Bike",
    rentAmount: "200",
    rentTime: "1 day",
    condition: "Almost new",
    location: "Mumbai, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 1,
    name: "Alice",
    itemName: "Camera",
    rentAmount: "500",
    rentTime: "2 days",
    condition: "Excellent - no scratches",
    location: "Ranchi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 2,
    name: "Bob",
    itemName: "Laptop",
    rentAmount: "1000",
    rentTime: "1 week",
    condition: "Good - minor wear",
    location: "Delhi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 3,
    name: "Charlie",
    itemName: "Bike",
    rentAmount: "200",
    rentTime: "1 day",
    condition: "Almost new",
    location: "Mumbai, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 1,
    name: "Alice",
    itemName: "Camera",
    rentAmount: "500",
    rentTime: "2 days",
    condition: "Excellent - no scratches",
    location: "Ranchi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 2,
    name: "Bob",
    itemName: "Laptop",
    rentAmount: "1000",
    rentTime: "1 week",
    condition: "Good - minor wear",
    location: "Delhi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 3,
    name: "Charlie",
    itemName: "Bike",
    rentAmount: "200",
    rentTime: "1 day",
    condition: "Almost new",
    location: "Mumbai, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 1,
    name: "Alice",
    itemName: "Camera",
    rentAmount: "500",
    rentTime: "2 days",
    condition: "Excellent - no scratches",
    location: "Ranchi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 2,
    name: "Bob",
    itemName: "Laptop",
    rentAmount: "1000",
    rentTime: "1 week",
    condition: "Good - minor wear",
    location: "Delhi, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  {
    id: 3,
    name: "Charlie",
    itemName: "Bike",
    rentAmount: "200",
    rentTime: "1 day",
    condition: "Almost new",
    location: "Mumbai, India",
    pictures: [
      "/image.png",
      "/image.png",
    ],
  },
  
];

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Simulate fetching from backend
    setItems(dummyData);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Available Rental Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-md p-4 bg-white">
            <div className="flex gap-2 overflow-x-auto">
              {item.pictures.map((pic, idx) => (
                <img
                  key={idx}
                  src={pic}
                  alt={`Item ${item.itemName} preview ${idx}`}
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
            <h2 className="text-lg font-semibold mt-2">{item.itemName}</h2>
            <p className="text-sm text-gray-600">Owner: {item.name}</p>
            <p className="text-sm">Rent: ₹{item.rentAmount} / {item.rentTime}</p>
            <p className="text-sm">Condition: {item.condition}</p>
            <p className="text-sm text-gray-500">Location: {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
