"use client";

export default function HowToUse() {
  const steps = [
    {
      title: "Create an Account",
      description:
        "Sign up quickly with your email or social login to start renting and listing items.",
    },
    {
      title: "Browse or List Items",
      description:
        "Explore a wide variety of items available for rent, or add your own items to share with others.",
    },
    {
      title: "Select Rental Period",
      description:
        "Choose how long you want to rent an item, whether it’s for a day, a week, or even longer.",
    },
    {
      title: "Secure Payment & Assurance",
      description:
        "Make your payment through our secure system and enjoy our assurance policy for a worry-free experience.",
    },
    {
      title: "Pick Up or Delivery",
      description:
        "Coordinate with the owner to pick up the item or arrange for delivery.",
    },
    {
      title: "Enjoy & Return",
      description:
        "Use the item for your selected period, then return it safely. Leave a review to help the community grow.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "3rem auto",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>
        How to Use Our Rental Platform
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              width: "280px",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#4f46e5",
                color: "#fff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "1rem",
                userSelect: "none",
              }}
            >
              {idx + 1}
            </div>
            <h3 style={{ marginBottom: "0.8rem" }}>{step.title}</h3>
            <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.5 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
