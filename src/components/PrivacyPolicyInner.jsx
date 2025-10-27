import React from "react";

// Functional component to display the Privacy Policy
const PrivacyPolicyInner = () => {
  return (
    <div className="privacy-policy-container container py-5">
      <p className="lead">
        Rugan Aadhar Foundation (“we,” “our,” or “us”) is committed to
        protecting your privacy. This Privacy Policy outlines how we collect,
        use, disclose, and safeguard your information when you visit our
        website. By using our website, you agree to the terms of this Privacy
        Policy.
      </p>

      {/* 1. Information We Collect */}
      <section className="my-4">
        <h5>1. Information We Collect</h5>
        <p>
          We may collect personal and non-personal information from you in
          various ways, including when you visit our site, make a donation, fill
          out a form, or interact with our services.
        </p>
        <p>
          <strong>Personal Information:</strong> This includes your name, email
          address, mailing address, phone number, and payment details when
          making a donation or signing up for updates.
        </p>
        <p>
          <strong>Non-Personal Information:</strong> We may collect
          non-identifiable information such as browser type, device type, and
          pages visited on our site.
        </p>
      </section>

      {/* 2. How We Use Your Information */}
      <section className="my-4">
        <h5>2. How We Use Your Information</h5>
        <p>We use the information we collect to:</p>
        <ul>
          <li>1) Process donations and send confirmation receipts.</li>
          <li>2) Improve our website and services based on user feedback.</li>
          <li>3) Respond to inquiries, questions, or requests.</li>
          <li>
            4) Provide updates about our campaigns, events, or activities.
          </li>
          <li>5) Ensure compliance with our Terms and Conditions.</li>
        </ul>
        <p>
          <strong>Email Communications:</strong> By providing your email, you
          consent to receive communications related to our organization,
          including newsletters and fundraising appeals. You can{" "}
          <strong>opt out</strong> of these communications at any time.
        </p>
      </section>

      {/* 3. How We Protect Your Information */}
      <section className="my-4">
        <h5>3. How We Protect Your Information</h5>
        <p>
          We adopt <strong>robust security measures</strong> to safeguard your
          information against unauthorized access, alteration, or destruction.
          This includes secure servers and encrypted connections (SSL) for
          handling sensitive information.
        </p>
        <p>
          However, no method of transmission over the internet is 100% secure.
          While we strive to protect your personal data, we cannot guarantee its
          absolute security.
        </p>
      </section>

      {/* 4. Sharing Your Information */}
      <section className="my-4">
        <h5>4. Sharing Your Information</h5>
        <p>
          We <strong>do not sell, trade, or rent</strong> your personal
          information to third parties. We may share your information with:
        </p>
        <ul>
          <li>
            1) <strong>Trusted Partners:</strong> Third-party service providers
            who assist us in operating our website, conducting our business, or
            serving our users, as long as these parties agree to keep your
            information confidential.
          </li>
          <li>
            2) <strong>Legal Requirements:</strong> We may disclose your
            information if required to do so by law or to protect our rights or
            the safety of our users.
          </li>
        </ul>
      </section>

      {/* 5. Cookies and Tracking Technologies */}
      <section className="my-4">
        <h5>5. Cookies and Tracking Technologies</h5>
        <p>
          Our website may use <strong>“cookies”</strong> to enhance user
          experience. Cookies are small files placed on your device that help us
          understand your preferences and optimize your experience. You can
          choose to disable cookies through your browser settings, but this may
          limit some features of our site.
        </p>
        <p>
          We may also use third-party tracking technologies (like Google
          Analytics) to collect information about your online behavior. This
          data is used to analyze website traffic and improve our services.
        </p>
      </section>

      {/* 6. Third-Party Links */}
      <section className="my-4">
        <h5>6. Third-Party Links</h5>
        <p>
          Our website may include links to third-party websites for your
          convenience. We are <strong>not responsible</strong> for the privacy
          practices of these external sites. We encourage you to review their
          privacy policies before sharing any information.
        </p>
      </section>

      {/* 7. Children’s Privacy */}
      <section className="my-4">
        <h5>7. Children’s Privacy</h5>
        <p>
          We <strong>do not knowingly collect information</strong> from
          individuals under the age of 13. If we discover that we have collected
          personal data from a child under 13 without parental consent, we will
          take steps to delete such information promptly.
        </p>
      </section>

      {/* 8. Your Privacy Rights */}
      <section className="my-4">
        <h5>8. Your Privacy Rights</h5>
        <p>You have the right to:</p>
        <ul>
          <li>
            1) Request access to the personal information we hold about you.
          </li>
          <li>2) Request corrections to inaccurate or incomplete data.</li>
          <li>
            3) Request the deletion of your personal data under certain
            conditions.
          </li>
          <li>4) Opt-out of receiving our marketing communications.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the details
          provided below.
        </p>
      </section>

      {/* 9. Changes to This Privacy Policy */}
      <section className="my-4">
        <h5>9. Changes to This Privacy Policy</h5>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an <strong>updated effective date</strong>
          . We encourage you to review our Privacy Policy periodically to stay
          informed about how we are protecting your information.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyInner;
