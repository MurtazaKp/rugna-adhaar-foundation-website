import React from "react";

// Functional component to display the Terms and Conditions
const TermsAndConditionsInner = () => {
  return (
    <div className="terms-and-conditions-container container py-5">
      <p className="lead">
        Welcome to the Rugan Aadhar Foundation website. Please read the
        following terms carefully.
      </p>

      {/* 1. Acceptance of Terms */}
      <section className="my-4">
        <h5>1. Acceptance of Terms</h5>
        <p>
          By accessing and using the <strong>Rugan Aadhar Foundation</strong>{" "}
          website, you agree to comply with and be bound by these Terms and
          Conditions. If you do not agree with any of these terms, please do not
          use our website.
        </p>
      </section>

      {/* 2. Purpose of the Website */}
      <section className="my-4">
        <h5>2. Purpose of the Website</h5>
        <p>
          Rugan Aadhar Foundation operates this website to share information
          about our programs, services, and initiatives aimed at providing
          support to <strong>homeless and underprivileged individuals</strong>.
          The website also facilitates donations and volunteer opportunities.
        </p>
      </section>

      {/* 3. Changes to Terms */}
      <section className="my-4">
        <h5>3. Changes to Terms</h5>
        <p>
          Rugan Aadhar Foundation reserves the right to{" "}
          <strong>update or modify</strong> these Terms and Conditions at any
          time without prior notice. Your continued use of the website following
          any changes indicates your acceptance of the new terms.
        </p>
      </section>

      {/* 4. Use of Content */}
      <section className="my-4">
        <h5>4. Use of Content (Copyright)</h5>
        <p>
          All content provided on this website, including text, images,
          graphics, and videos, is the property of Rugan Aadhar Foundation and
          is protected by <strong>copyright laws</strong>. You may not
          reproduce, distribute, or use any content without prior written
          permission from Rugan Aadhar Foundation.
        </p>
      </section>

      {/* 5. Donations and Payments */}
      <section className="my-4">
        <h5>5. Donations and Payments</h5>
        <ul>
          <li>
            All donations made to Rugan Aadhar Foundation are{" "}
            <strong>voluntary</strong> and <strong>non-refundable</strong>.
          </li>
          <li>
            The funds received will be used to support our various campaigns and
            operations as per the organization’s discretion.
          </li>
          <li>
            We are committed to transparency, and our financial reports are
            <strong> available upon request</strong>.
          </li>
        </ul>
      </section>

      {/* 6. Privacy Policy */}
      <section className="my-4">
        <h5>6. Privacy Policy</h5>
        <p>
          Your privacy is important to us. Our <strong>Privacy Policy</strong>{" "}
          outlines how we collect, use, and protect your personal information.
          By using our website, you agree to the collection and use of
          information as described in the Privacy Policy.
        </p>
      </section>

      {/* 7. External Links */}
      <section className="my-4">
        <h5>7. External Links</h5>
        <p>
          Our website may contain links to third-party websites. Rugan Aadhar
          Foundation is <strong>not responsible</strong> for the content,
          accuracy, or availability of these external sites. The inclusion of
          any link does not imply endorsement or association with the linked
          website.
        </p>
      </section>

      {/* 8. User Conduct */}
      <section className="my-4">
        <h5>8. User Conduct</h5>
        <p>
          You agree to use our website only for lawful purposes. You must not:
        </p>
        <ul>
          <li>
            1) Engage in any behavior that is harmful, unlawful, or violates the
            rights of others.
          </li>
          <li>
            2) Attempt to gain unauthorized access to our systems or interfere
            with the proper functioning of the website.
          </li>
        </ul>
      </section>

      {/* 9. Disclaimer & Liability */}
      <section className="my-4">
        <h5>9. Disclaimer & Limitation of Liability</h5>
        <p>
          <strong>Disclaimer:</strong> The information on this website is
          provided “as is” without any warranties of any kind, either express or
          implied. Rugan Aadhar Foundation does not guarantee the accuracy,
          completeness, or reliability of any content.
        </p>
        <p>
          <strong>Limitation of Liability:</strong> Rugan Aadhar Foundation will{" "}
          <strong>not be liable</strong> for any damages, losses, or expenses
          arising from the use or inability to use the website, including any
          damages resulting from viruses or other harmful elements.
        </p>
      </section>

      {/* 10. Governing Law */}
      <section className="my-4">
        <h5>10. Governing Law</h5>
        <p>
          These Terms and Conditions shall be governed and construed in
          accordance with the <strong>laws of [your jurisdiction]</strong>. Any
          disputes arising from the use of the website will be subject to the
          exclusive jurisdiction of the courts.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditionsInner;
