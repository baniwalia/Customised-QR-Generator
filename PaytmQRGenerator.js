 import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const PaytmQRGenerator = () => {
  const [amount, setAmount] = useState("");
  const [upiLink, setUpiLink] = useState("");

  const payeeAddress = "Enter Paytm Link";
  const payeeName = "Bani Walia";

  const generateLink = () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const link = `upi://pay?pa=${payeeAddress}&pn=${encodeURIComponent(
      payeeName
    )}&am=${amount}&cu=INR`;

    setUpiLink(link);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial" }}>
      <h2>Pay Bani via UPI</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        style={{
          padding: "10px",
          fontSize: "1rem",
          width: "200px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={generateLink}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate QR Code
      </button>

      {upiLink && (
        <div style={{ marginTop: "2rem" }}>
          <h3>NFC X ABC (Scan to Pay)</h3>
          <QRCodeCanvas value={upiLink} size={256} />
          <p style={{ marginTop: "1.5rem" }}>
            <a
              href={upiLink}
              style={{
                backgroundColor: "#02b875",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 Tap to Pay in Paytm / UPI App
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default PaytmQRGenerator;
