import React from "react";

// Functional component to display the Return and Refund Policy for Donations
const ReturnRefundPolicyInner = () => {
  return (
    <div className="return-refund-policy-container container py-5">
      <p className="lead ">
        Thank you for supporting Rugan Aadhar Foundation. We are committed to
        using your generous contributions effectively for our mission of serving
        and uplifting communities. Please review our Return and Refund Policy
        carefully.
      </p>

      {/* 1. Donations Are Non-Refundable */}
      <section className="my-4">
        <h5>1. Donations Are Non-Refundable</h5>
        <p>
          As Rugan Aadhar Foundation operates as a{" "}
          <strong>nonprofit organization</strong>, all donations made to us are
          used immediately to support our charitable initiatives, including
          feeding the hungry, providing shelter for the homeless, and offering
          medical assistance to those in need. Therefore, all donations are{" "}
          <strong>final and non-refundable</strong>.
        </p>
      </section>

      {/* 2. No Refunds for Contributions */}
      <section className="my-4">
        <h5>2. No Refunds for Contributions</h5>
        <p>
          Once a donation is made, it **cannot be refunded**, either in full or
          in part.
        </p>
        <p>
          By contributing, you acknowledge and agree that your donation will be
          used to support our ongoing and future programs, and you **waive any
          right to a refund**.
        </p>
      </section>
    </div>
  );
};

export default ReturnRefundPolicyInner;
