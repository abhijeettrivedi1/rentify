"use client";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "4rem",
        padding: "1.5rem 2rem",
        backgroundColor: "#white",
        color: "#black",
        textAlign: "center",
        fontSize: "0.9rem",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} YourRentalPlatform. All rights reserved.
      </p>
      <p>
        Built with ❤️ by Your Team. &nbsp;|&nbsp;{" "}
        <a
          href="/privacy"
          style={{ color: "#black", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>{" "}
        &nbsp;|&nbsp;{" "}
        <a
          href="/terms"
          style={{ color: "#black", textDecoration: "underline" }}
        >
          Terms of Service
        </a>
      </p>
    </footer>
  );
}
