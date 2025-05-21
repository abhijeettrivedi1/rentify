"use client";

import React, { useState } from "react";
import { reviews } from "./data";
import Image from "next/image";

export default function Review() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleCount:number = 4;
  const totalReviews:number = reviews.length;
  
  // Get 4 reviews starting from startIndex, wrapping around the array
  const visibleReviews = [];

  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % totalReviews;
    visibleReviews.push(reviews[index]);
  }
  
  
  const prevReview:()=>void= ():void=> {
    // Move start index backward by 1, wrap around
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + totalReviews) % totalReviews
    );
  };

  const nextReview = () => {
    // Move start index forward by 1, wrap around
    setStartIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  return (
    <section
      style={{
        marginTop: "4rem",
        padding: "2rem 1rem",
        backgroundColor: "#white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        What Our Users Say
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevReview}
          style={{
            fontSize: "2rem",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          aria-label="Previous reviews"
        >
          &#8592;
        </button>

        {/* Review Cards */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {visibleReviews.map((review, idx) => (
            <div
              key={idx}
              style={{
                width: "300px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "1.5rem",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
              <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
                {review.name}
              </h3>
              <div style={{ color: "#f5c518", margin: "0.5rem 0" }}>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextReview}
          style={{
            fontSize: "2rem",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          aria-label="Next reviews"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
