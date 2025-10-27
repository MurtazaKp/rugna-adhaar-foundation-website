// /app/api/verify-payment/route.js (or /pages/api/verify-payment.js)

export const runtime = "nodejs";

import crypto from "crypto";
import nodemailer from "nodemailer";
import jsPDF from "jspdf";

// -------------------------
// Utility Function: Generate 80G PDF Receipt
// -------------------------
function generatePDFReceipt({
  name,
  email,
  amount,
  paymentId,
  pancard,
  address,
}) {
  try {
    console.log("📄 Starting PDF generation with data:", {
      name,
      email,
      amount,
      paymentId,
      pancard,
      address,
    });

    if (!name || !email || !amount || !paymentId) {
      throw new Error("Missing required donor information for PDF generation.");
    } // --- Setup ---

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const leftMargin = 20;
    const rightMargin = pageWidth - 20;
    let yPos = 0;
    const detailLineHeight = 7;
    const detailFontSize = 10;
    const boxColor = [50, 50, 50]; // FIX: Utility function to format amount without the leading artifact (e.g., '1')

    const formatAmount = (num) => {
      if (typeof num !== "number") num = parseFloat(num); // Use standard fixed decimal format
      return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }; // ------------------------- // HEADER BANNER & INFO // -------------------------

    const headerBoxHeight = 35;
    yPos = 15;

    doc.setFillColor(33, 150, 243);
    doc.rect(0, 0, pageWidth, headerBoxHeight, "F");

    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("Rugna Adhaar Foundation", leftMargin, yPos);

    yPos += 8;
    doc.setFontSize(8);
    doc.setFont(undefined, "normal");
    doc.setTextColor(200, 220, 255);
    doc.text(
      "Registered NGO | 80G Registration No: AAATR1234F/05/2019-20/T-123",
      leftMargin,
      yPos
    );

    yPos += 4;
    doc.text(
      "Plot No. 25, Shivaji Nagar, Pune - 411016, Maharashtra, India",
      leftMargin,
      yPos
    ); // ------------------------- // TITLE // -------------------------

    yPos = headerBoxHeight + 12;
    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Official Donation Receipt", pageWidth / 2, yPos, {
      align: "center",
    });

    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    doc.text(
      "(Eligible for Deduction under Section 80G)",
      pageWidth / 2,
      yPos,
      { align: "center" }
    ); // ------------------------- // RECEIPT DETAILS BLOCK // -------------------------

    yPos += 15;
    doc.setFontSize(detailFontSize);
    doc.setFont(undefined, "normal");
    doc.setTextColor(0, 0, 0);

    // --- Receipt Info (Left Aligned) ---
    const dateStr = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    doc.setFont(undefined, "bold");
    doc.text(`Receipt Date:`, leftMargin, yPos);
    doc.setFont(undefined, "normal");
    doc.text(dateStr, leftMargin + 25, yPos);

    yPos += detailLineHeight;
    doc.setFont(undefined, "bold");
    doc.text(`Receipt No:`, leftMargin, yPos);
    doc.setFont(undefined, "normal");
    doc.text(
      `RUGNA-${Math.floor(100000 + Math.random() * 900000)}`,
      leftMargin + 25,
      yPos
    );

    yPos += detailLineHeight;
    doc.setFont(undefined, "bold");
    doc.text(`Payment ID:`, leftMargin, yPos);
    doc.setFont(undefined, "normal");
    doc.text(paymentId, leftMargin + 25, yPos);

    // Horizontal line to separate receipt info from donor info
    yPos += detailLineHeight + 2;
    doc.setDrawColor(200, 200, 200);
    doc.line(leftMargin, yPos, rightMargin, yPos);

    // -------------------------
    // DONOR INFO BLOCK
    // -------------------------
    yPos += 5;

    // Name
    yPos += detailLineHeight;
    doc.setFont(undefined, "bold");
    doc.text(`Donor Name:`, leftMargin, yPos);
    doc.setFont(undefined, "normal");
    doc.text(name, leftMargin + 25, yPos);

    // Email & Pan Card (Side-by-side)
    yPos += detailLineHeight;
    doc.setFont(undefined, "bold");
    doc.text(`Email:`, leftMargin, yPos);
    doc.setFont(undefined, "normal");
    doc.text(email, leftMargin + 25, yPos);

    // FIX: Pan Card position corrected
    doc.setFont(undefined, "bold");
    doc.text(`Pan Card:`, pageWidth / 2 + 10, yPos);
    doc.setFont(undefined, "normal");
    doc.text(pancard, pageWidth / 2 + 30, yPos);

    // Address (Multi-line handling)
    yPos += detailLineHeight;
    doc.setFont(undefined, "bold");
    doc.text(`Address:`, leftMargin, yPos);
    doc.setFont(undefined, "normal");

    const addressLines = doc.splitTextToSize(
      address,
      rightMargin - leftMargin - 50
    );
    doc.text(addressLines, leftMargin + 25, yPos);

    yPos += detailLineHeight * addressLines.length;
    yPos = Math.max(yPos, 120); // ------------------------- // DONATION SUMMARY BOX (Left-Aligned, Stacked Style) // -------------------------

    const boxHeight = 24;
    yPos += 15;
    const boxTextX = leftMargin + 5;

    doc.setFillColor(...boxColor);
    doc.rect(leftMargin, yPos, pageWidth - 40, boxHeight, "F"); // Line 1: Donation Summary

    doc.setFontSize(12);
    doc.setFont(undefined, "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("Donation Summary", boxTextX, yPos + 7); // Line 2: Donation Amount (FIXED ARTIFACT)

    doc.setFontSize(14);
    const amountDisplay = `Donation Amount: ${formatAmount(amount)} Rs`;

    doc.text(amountDisplay, boxTextX, yPos + 16); // ------------------------- // 80G declaration // -------------------------

    yPos += boxHeight + 15;
    doc.setFontSize(10);
    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);

    const declaration =
      "This is to certify that the above donation has been received and qualifies for";
    const declaration2 =
      "deduction under Section 80G of the Income Tax Act, 1961.";

    doc.text(declaration, leftMargin, yPos);
    yPos += 5;
    doc.text(declaration2, leftMargin, yPos); // ------------------------- // SIGNATURE AREA // -------------------------

    const sigYStart = pageHeight - 60;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");

    doc.setLineWidth(0.3);
    doc.line(rightMargin - 90, sigYStart + 2, rightMargin, sigYStart + 2);

    doc.text("Authorized Signatory", rightMargin - 90 + 5, sigYStart + 8); // ------------------------- // FOOTER // -------------------------

    const footerYPos = pageHeight - 15;
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);

    const footer =
      "Thank you for supporting Rugna Adhaar Foundation. Together we make a difference.";

    const footerLines = doc.splitTextToSize(footer, pageWidth - 40);
    doc.text(footerLines, pageWidth / 2, footerYPos, { align: "center" });

    console.log("✅ PDF generated successfully");

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
    return pdfBuffer;
  } catch (err) {
    console.error("🔥 Error generating PDF:", err.message, err.stack);
    throw new Error("PDF generation failed: " + err.message);
  }
}

// -------------------------
// Utility Function: Send 80G Email with PDF Attachment
// -------------------------
async function sendEmailWithPDF({ to, name, amount, pdfBuffer }) {
  try {
    console.log("📧 Preparing to send 80G email with PDF to:", to);

    if (!to || !name || !amount || !pdfBuffer) {
      throw new Error("Missing required email information");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format amount for text body only
    const formattedAmount = parseFloat(amount).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });

    await transporter.sendMail({
      from: `"Rugna Adhaar Foundation" <${process.env.SMTP_USER}>`,
      to,
      subject: "80G Donation Receipt - Rugna Adhaar Foundation",
      text: `Dear ${name},\n\nThank you for your generous donation of ${formattedAmount}.\nPlease find your official 80G receipt attached below.\n\nWarm regards,\nRugna Adhaar Foundation`,
      attachments: [
        {
          filename: "DonationReceipt_80G.pdf",
          content: pdfBuffer,
        },
      ],
    });

    console.log(`✅ 80G Email sent successfully to ${to}`);
  } catch (err) {
    console.error(`❌ Failed to send 80G email to ${to}:`, err);
    throw new Error("Email sending failed: " + err.message);
  }
}

// -------------------------
// Utility Function: Send Basic Confirmation Email (No PDF)
// -------------------------
async function sendConfirmationEmail({ to, name, amount }) {
  try {
    console.log("📧 Preparing to send basic confirmation email to:", to);

    if (!to || !name || !amount) {
      throw new Error("Missing required email information for confirmation.");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format amount for text body only
    const formattedAmount = parseFloat(amount).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });

    await transporter.sendMail({
      from: `"Rugna Adhaar Foundation" <${process.env.SMTP_USER}>`,
      to,
      subject: "Thank You for Your Donation",
      text: `Dear ${name},\n\nThank you for your generous donation of ${formattedAmount} to the Rugna Adhaar Foundation. Your payment has been successfully processed.\n\nWarm regards,\nRugna Adhaar Foundation`,
    });

    console.log(`✅ Confirmation email sent successfully to ${to}`);
  } catch (err) {
    console.error(`❌ Failed to send confirmation email to ${to}:`, err);
    throw new Error("Confirmation email sending failed: " + err.message);
  }
}

// -------------------------
// POST handler (Main Logic)
// -------------------------
export async function POST(req) {
  try {
    console.log("🔔 Payment verification request received");

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      donor,
    } = await req.json();

    console.log("📦 Payment data:", {
      razorpay_order_id,
      razorpay_payment_id,
      donor: { name: donor?.name, email: donor?.email, amount: donor?.amount },
    }); // ------------------------- // 1️⃣ Verify Razorpay signature // -------------------------

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign.toLowerCase() !== razorpay_signature.toLowerCase()) {
      console.log("❌ Signature verification failed");
      return new Response(
        JSON.stringify({ verified: false, error: "Invalid signature" }),
        { status: 400 }
      );
    }

    console.log("✅ Signature verified successfully"); // ---------------------------------------------------- // 2️⃣ Conditional Logic: 80G vs. Basic Confirmation // ----------------------------------------------------

    if (!donor.claim80G) {
      // SCENARIO 1: 80G NOT CLAIMED - Send simple confirmation email only.
      console.log(
        "ℹ️ Donation not eligible for 80G. Sending basic confirmation email."
      );

      try {
        await sendConfirmationEmail({
          to: donor.email,
          name: donor.name,
          amount: donor.amount,
        });
      } catch (err) {
        console.error("❌ Basic confirmation email failed:", err); // Non-critical failure: Payment is verified, but send a warning.
        return new Response(
          JSON.stringify({
            verified: true,
            warning: "Payment verified, but confirmation email failed to send.",
            detail: err.message,
          }),
          { status: 200 }
        );
      }

      return new Response(
        JSON.stringify({
          verified: true,
          message: "Payment verified, basic confirmation sent.",
        }),
        { status: 200 }
      );
    } // ------------------------- // 3️⃣ Generate PDF // -------------------------

    // --- SCENARIO 2: 80G CLAIMED - Proceed with PDF/80G Email ---

    let pdfBuffer;
    try {
      pdfBuffer = generatePDFReceipt({
        name: donor.name,
        email: donor.email,
        amount: donor.amount,
        paymentId: razorpay_payment_id,
        pancard: donor.pancard,
        address: donor.address,
      });
    } catch (err) {
      console.error("❌ PDF generation failed:", err);
      return new Response(
        JSON.stringify({
          verified: true,
          error: "PDF generation failed",
          detail: err.message,
        }),
        { status: 500 }
      );
    } // ------------------------- // 4️⃣ Send 80G email with PDF // -------------------------

    try {
      await sendEmailWithPDF({
        to: donor.email,
        name: donor.name,
        amount: donor.amount,
        pdfBuffer,
      });
    } catch (err) {
      console.error("❌ Email sending failed:", err);
      return new Response(
        JSON.stringify({
          verified: true,
          error: "Email sending failed",
          detail: err.message,
        }),
        { status: 500 }
      );
    } // ------------------------- // 5️⃣ Success response (80G) // -------------------------

    console.log(
      "🎉 Payment verification and receipt email completed successfully"
    );
    return new Response(
      JSON.stringify({
        verified: true,
        message: "Payment verified and receipt sent successfully (80G)",
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("💥 Unexpected error in POST:", err.message, err.stack);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        detail: err.message,
      }),
      { status: 500 }
    );
  }
}
