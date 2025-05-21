"use client";
import { useState, useEffect } from "react";

export default function Example() {
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [rentTime, setRentTime] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();

          if (data && data.display_name) {
            setLocation(data.display_name);
          } else {
            setLocation(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          }
        } catch (error) {
          alert("Failed to fetch address from coordinates.");
          setLocation(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        }

        setLoading(false);
      },
      () => {
        alert("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  const handlePicturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setPictures(files);
  };

  useEffect(() => {
    if (!pictures) {
      setPreviewUrls([]);
      return;
    }
    const urls = Array.from(pictures).map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [pictures]);

  return (
    <form className="p-4 max-w-md mx-auto">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">

       what is your name?

      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black rounded-md px-3 py-2 mt-1 w-full"
      />

      <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mt-4">
        Item name
      </label>
      <input
        id="itemName"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="border border-black rounded-md px-3 py-2 mt-1 w-full"
      />

      <label htmlFor="rentAmount" className="block text-sm font-medium text-gray-700 mt-4">
        Rent amount
      </label>
      <input
        id="rentAmount"
        type="text"
        value={rentAmount}
        onChange={(e) => setRentAmount(e.target.value)}
        className="border border-black rounded-md px-3 py-2 mt-1 w-full"
      />

      <label htmlFor="rentTime" className="block text-sm font-medium text-gray-700 mt-4">
        Rent time
      </label>
      <input
        id="rentTime"
        type="text"
        value={rentTime}
        onChange={(e) => setRentTime(e.target.value)}
        className="border border-black rounded-md px-3 py-2 mt-1 w-full"
      />

      <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mt-4">
        Condition of item in depth
      </label>
      <input
        id="condition"
        type="text"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="border border-black rounded-md px-3 py-2 mt-1 w-full"
      />

      <label htmlFor="location" className="block mb-2 font-semibold text-gray-700 mt-4">
        Location
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          id="location"
          className="flex-grow border border-gray-400 rounded px-3 py-2"
          placeholder="Enter location or use button"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="button"
          onClick={handleGetLocation}
          disabled={loading}
          className={`px-4 py-2 rounded bg-blue-600 text-white ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Loading..." : "Use My Location"}
        </button>
      </div>

      <label htmlFor="pictures" className="block text-sm font-medium text-gray-700 mt-4">
        Pictures of item
      </label>
      <input
        id="pictures"
        type="file"
        
        multiple
        onChange={handlePicturesChange}
        className="border border-black rounded-md px-3 py-2 mt-1 w-full"
      />

      {/* Preview chosen images */}
      <div className="mt-4 flex gap-4 flex-wrap">
        {previewUrls.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`preview-${idx}`}
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </div>
    </form>
  );
}
