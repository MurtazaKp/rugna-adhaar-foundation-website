"use client";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import useEffect
import ModalVideo from "react-modal-video";

// --- Data for the essential items ---
// !! IMPORTANT: Update 'imgSrc' to your actual image paths in /public/assets/...
const essentialItems = [
  {
    id: "rice",
    name: "Rice 10 Kg",
    price: 500,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/rice.webp",
  },
  {
    id: "oil",
    name: "Cooking Oil 5 L",
    price: 700,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/cooking-oil.webp",
  },
  {
    id: "moong",
    name: "Moong Daal 1 Kg",
    price: 140,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/moong-dal.webp",
  },
  {
    id: "toor",
    name: "Toor Daal 1 Kg",
    price: 160,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/toor-dal.webp",
  },
  {
    id: "urad",
    name: "Urad Daal 1 Kg",
    price: 150,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/urad-dal.webp",
  },
  {
    id: "sugar",
    name: "Sugar 5 Kg",
    price: 250,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/sugar.webp",
  },
  {
    id: "turmeric",
    name: "Turmeric 1 Kg",
    price: 210,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/tumeric.webp",
  },
  {
    id: "cylinder",
    name: "Gas Cylinder",
    price: 1200,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/gas-cylinder.webp",
  },
  {
    id: "fruit",
    name: "Fruit Kit",
    price: 400,
    unit: "/ Unit",
    imgSrc: "/assets/images/donate-us/essentials/fruit-kit.png",
  },
  {
    id: "ors",
    name: "ORS",
    price: 300,
    unit: "/ Pack of 60",
    imgSrc: "/assets/images/donate-us/essentials/ors.png",
  },
];

// Create an initial state object from the essentialItems array
const initialQuantities = essentialItems.reduce((acc, item) => {
  acc[item.id] = 0;
  return acc;
}, {});

const DonateInner = () => {
  // State for the *additional cash* donation amount
  let [amount, setAmount] = useState(50);

  // --- NEW --- State for 80G claim
  const [claim80G, setClaim80G] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // State for all donor details in one object
  let [donorDetails, setDonorDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "", // Now used for 80G
    panCard: "", // Added for 80G
    // 'message' has been removed
  });

  // --- New State for Essential Item Quantities ---
  const [itemQuantities, setItemQuantities] = useState(initialQuantities);
  const [essentialsTotal, setEssentialsTotal] = useState(0);

  // --- Calculate Essentials Total whenever quantities change ---
  useEffect(() => {
    let total = 0;
    for (const item of essentialItems) {
      total += (itemQuantities[item.id] || 0) * item.price;
    }
    setEssentialsTotal(total);
  }, [itemQuantities]); // Dependency array

  // --- Calculate Grand Total (for display and submission) ---
  const grandTotal = essentialsTotal + Number(amount || 0);

  // Handler to update the donor details state
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDonorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // --- NEW --- Handler for 80G radio buttons
  const handle80GChange = (e) => {
    setClaim80G(e.target.value === "yes");
  };

  // --- New Handlers for Quantity Steppers ---
  const handleQuantityChange = (itemId, change) => {
    setItemQuantities((prevQuantities) => {
      const newQuantity = Math.max(0, (prevQuantities[itemId] || 0) + change);
      return {
        ...prevQuantities,
        [itemId]: newQuantity,
      };
    });
  };

  // Handler for the single form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Consolidate all data
    const allDonationData = {
      ...donorDetails,
      claim80G: claim80G,
      essentialsDonation: itemQuantities,
      essentialsTotalCost: essentialsTotal,
      additionalCashAmount: Number(amount || 0),
      grandTotal: grandTotal,
    };

    // If not claiming 80G, remove panCard and address
    if (!claim80G) {
      delete allDonationData.panCard;
      delete allDonationData.address;
    }

    // You can now send 'allDonationData' to your API
    console.log("Submitting Donation Data:", allDonationData);

    // Example: Show a thank you message
    alert(
      `Thank you, ${allDonationData.firstName}! Your total donation is Rs. ${allDonationData.grandTotal}.`
    );

    // Optionally, reset the form here
  };

  // Logic to check if the custom amount button should be active
  const isCustomAmountActive = ![20, 50, 100, 200].includes(Number(amount));

  return (
    <>
      <div className="cm-details donate-us community checkout faq">
        <div className="container">
          <div className="row gutter-60">
            <div className="col-12 col-xl-7">
              <div className="cm-details__content">
                <div
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="cm-details__poster"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img
                    src="assets/images/donate-us/bannerImg.png"
                    alt="Image_inner"
                  />
                  <div className="video-btn-wrapper">
                    <button
                      // onClick={() => setIsOpen(true)}
                      className="open-video-popup"
                    >
                      <i className="icon-play" />
                    </button>
                  </div>
                </div>
                <div
                  className="donate-inner"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="cm-group">
                    <h3 className="title-animation_inner">
                      Dadasaheb Need Your Help To Feed Hundreds Of Homeless And
                      Disabled People
                    </h3>
                    <p>Donations are covered under 80G of Income Tax</p>
                  </div>
                  <div className="cta">
                    <div className="checkout__form">
                      <div className="intro">
                        <h5>Details Information</h5>
                      </div>
                      <div className="input-group">
                        <div className="input-single">
                          <input
                            type="text"
                            name="firstName"
                            id="cName"
                            placeholder="First Name"
                            value={donorDetails.firstName}
                            onChange={handleDetailsChange}
                          />
                          <i className="fa-solid fa-user" />
                        </div>
                        <div className="input-single">
                          <input
                            type="text"
                            name="lastName"
                            id="clastName"
                            placeholder="Last Name"
                            value={donorDetails.lastName}
                            onChange={handleDetailsChange}
                          />
                          <i className="fa-solid fa-user" />
                        </div>
                      </div>
                      <div className="input-group">
                        <div className="input-single">
                          <input
                            type="email"
                            name="email"
                            id="cEmail"
                            placeholder="Your Email"
                            value={donorDetails.email}
                            onChange={handleDetailsChange}
                          />
                          <i className="fa-solid fa-envelope" />
                        </div>
                        <div className="input-single">
                          <input
                            type="text"
                            name="phone"
                            id="cPhone"
                            placeholder="Your Number"
                            value={donorDetails.phone}
                            onChange={handleDetailsChange}
                          />
                          <i className="fa-solid fa-phone" />
                        </div>
                      </div>

                      {/* --- NEW: 80G Claim Section --- */}
                      <div className="donation-form__single">
                        <h5>Claim 80G Benefit?</h5>
                        {/* Assuming you have radio-wrapper styles from before */}
                        <div className="radio-wrapper">
                          <div className="radio-single">
                            <input
                              type="radio"
                              id="80g_no"
                              name="claim80g"
                              value="no"
                              checked={!claim80G}
                              onChange={handle80GChange}
                            />
                            <label htmlFor="80g_no">No</label>
                          </div>
                          <div className="radio-single">
                            <input
                              type="radio"
                              id="80g_yes"
                              name="claim80g"
                              value="yes"
                              checked={claim80G}
                              onChange={handle80GChange}
                            />
                            <label htmlFor="80g_yes">Yes</label>
                          </div>
                        </div>
                      </div>

                      {/* --- NEW: Conditional 80G Fields --- */}
                      {claim80G && (
                        <>
                          <div className="input-single">
                            <input
                              type="text"
                              name="panCard" // Matches state key
                              id="cPanCard"
                              placeholder="PAN Card Number"
                              value={donorDetails.panCard}
                              onChange={handleDetailsChange}
                            />
                            <i className="fa-solid fa-id-card" />
                          </div>
                          <div className="input-single">
                            <input
                              type="text"
                              name="address" // Matches state key
                              id="cAddressTwo"
                              placeholder="Your Address (for 80G)"
                              value={donorDetails.address}
                              onChange={handleDetailsChange}
                            />
                            <i className="fa-solid fa-location-dot" />
                          </div>
                        </>
                      )}

                      {/* --- Message and old Address fields removed --- */}
                    </div>

                    {/* The entire donation process is now one form */}
                    <form
                      className="community-donation"
                      onSubmit={handleSubmit}
                    >
                      <div className="community-donation__inner">
                        <div
                          className="donation-form__single essentials-section"
                          data-aos="fade-up"
                        >
                          <h5 style={{ marginBottom: "20px" }}>
                            Donate Essentials
                          </h5>
                          {/* --- BOOTSTRAP GRID --- */}
                          <div className="row g-3">
                            {essentialItems.map((item) => (
                              // Added Bootstrap col classes for responsiveness
                              <div
                                className="col-6 col-md-4 col-lg-3"
                                key={item.id}
                              >
                                <div className="essential-card">
                                  <img src={item.imgSrc} alt={item.name} />
                                  <h6>{item.name}</h6>
                                  <p>
                                    Rs. {item.price} {item.unit}
                                  </p>
                                  <div className="quantity-stepper">
                                    <button
                                      className="d-flex justify-content-center"
                                      type="button"
                                      onClick={() =>
                                        handleQuantityChange(item.id, -1)
                                      }
                                    >
                                      <i className="fa-solid fa-minus" />
                                    </button>
                                    <input
                                      type="number"
                                      readOnly
                                      value={itemQuantities[item.id]}
                                    />
                                    <button
                                      className="d-flex justify-content-center"
                                      type="button"
                                      onClick={() =>
                                        handleQuantityChange(item.id, 1)
                                      }
                                    >
                                      <i className="fa-solid fa-plus" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* --- END BOOTSTRAP GRID --- */}
                        </div>
                        {/* --- End of Donate Essentials --- */}

                        {/* --- Section 2: Details Information --- */}

                        {/* --- Section 3: Donation Amount --- */}
                        <div className="donation-form" data-aos-delay={300}>
                          {/* --- Display Essentials Total --- */}

                          <div className="donation-form__single">
                            <h5>Additional Cash Donation:</h5>
                            <div className="input-group-icon">
                              <div className="thumb">
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                              </div>
                              <input
                                type="number"
                                name="donation-amount"
                                id="donationAmount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                            </div>
                            <div className="made-amount">
                              <span
                                className={`donation-amount ${
                                  Number(amount) === 20 && "active"
                                }`}
                                onClick={() => setAmount(20)}
                              >
                                20
                              </span>
                              <span
                                className={`donation-amount ${
                                  Number(amount) === 50 && "active"
                                }`}
                                onClick={() => setAmount(50)}
                              >
                                50
                              </span>
                              <span
                                className={`donation-amount ${
                                  Number(amount) === 100 && "active"
                                }`}
                                onClick={() => setAmount(100)}
                              >
                                100
                              </span>
                              <span
                                className={`donation-amount ${
                                  Number(amount) === 200 && "active"
                                }`}
                                onClick={() => setAmount(200)}
                              >
                                200
                              </span>
                              <span
                                className={`donation-amount custom-amount ${
                                  isCustomAmountActive && "active"
                                }`}
                                onClick={() => setAmount("")}
                              >
                                Custom
                              </span>
                            </div>
                          </div>

                          {/* --- NEW: Grand Total Display --- */}
                          <div
                            className="donation-form__single"
                            style={{
                              border: "1px solid #28a745",
                              padding: "15px",
                              borderRadius: "8px",
                              textAlign: "center",
                              background: "#f0fff4",
                              marginTop: "20px",
                            }}
                          >
                            <h4 style={{ margin: 0, fontWeight: 700 }}>
                              Total Donation: Rs. {grandTotal}
                            </h4>
                          </div>

                          {/* --- Section 4: Common Submit Button --- */}
                          <div
                            className="form-cta"
                            style={{ marginTop: "20px" }} // Added spacing
                          >
                            <button
                              type="submit"
                              aria-label="Submit Donation"
                              title="Submit Donation"
                              className="btn--primary"
                            >
                              Donate Now{" "}
                              <i className="fa-solid fa-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* End of the single form */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-5">
              <div className="cm-details__sidebar">
                {/* ... all your sidebar widgets ... */}
                <div
                  className="cm-sidebar-widget"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src="/assets/images/home/paymentOptions.png" alt="" />
                  <h5 className="mt-5">
                    "Hunger is not a choice, but feeding the hungry is."
                  </h5>
                  <p className="pb-3">
                    Thousands of people across our cities live on the streets,
                    uncertain where their next meal will come from. Many of them
                    are elderly, sick, or children who cannot fend for
                    themselves. With little or no access to regular food, their
                    health deteriorates, and their will to survive diminishes.
                    This is where Feed the Helpless comes in. We are on a
                    mission to reach these individuals with warm, nutritious
                    meals that not only nourish their bodies but also restore
                    their hope in humanity.
                  </p>

                  <img
                    className="rounded-3"
                    src="/assets/images/home/blogTwo.png"
                    alt=""
                  />

                  <div className="">
                    <h5 className="pt-4">Our Approach</h5>
                    <p className="pb-3">
                      We go beyond just delivering food; we make sure it’s a
                      meal filled with love and compassion. Our volunteers work
                      tirelessly to cook meals that not only satisfy hunger but
                      also bring joy to those receiving them. From preparing
                      fresh vegetables and grains to ensuring hygienic food
                      handling, every meal is made with care. Each food
                      distribution is a heartfelt experience—sharing stories,
                      exchanging smiles, and most importantly, connecting with
                      those who are often ignored.
                    </p>

                    <img
                      className="rounded-3"
                      src="/assets/images/home/campaignTwo.png"
                      alt=""
                    />

                    <h5 className="pt-4">Your Help Can Feed a Life</h5>
                    <p>
                      Every contribution counts. With just a small donation, you
                      can help us prepare more meals, reach more areas, and
                      uplift more lives. Whether you donate funds, food
                      supplies, or volunteer your time, your support will
                      directly impact those who need it the most. Together, we
                      can turn the tide on hunger.
                    </p>
                  </div>
                </div>
                {/* ... other sidebar widgets ... */}
              </div>
            </div>
          </div>
          <div>
            <section class="py-5">
              <div class="container">
                <div class=" mb-5">
                  <h4 class="fw-bold">Nourishing Lives, One Meal at a Time</h4>
                  <p class="text-muted mx-auto">
                    In a world full of abundance, it’s heartbreaking to witness
                    so many go hungry. At{" "}
                    <strong>Rugan Aadhar Foundation</strong>, we believe that no
                    one should have to fight for a basic necessity like food.
                    Our
                    <em>Feed the Helpless</em> campaign provides nutritious
                    meals to those struggling to survive on the streets—homeless
                    individuals, helpless families, and forgotten souls.
                  </p>
                </div>

                <div class="mb-4">
                  <h4 class="fw-semibold">Our Donors</h4>
                </div>

                <div class="row ">
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="border rounded shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <h5 class="fw-bold mb-1">Manik</h5>
                        <p class="text-muted mb-0">Amount Donated</p>
                      </div>
                      <h5 class="text-success fw-bold mt-2">₹500.00</h5>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="border rounded shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <h5 class="fw-bold mb-1">Chetan Chandane</h5>
                        <p class="text-muted mb-0">Amount Donated</p>
                      </div>
                      <h5 class="text-success fw-bold mt-2">₹302.00</h5>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="border rounded shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <h5 class="fw-bold mb-1">Anjali</h5>
                        <p class="text-muted mb-0">Amount Donated</p>
                      </div>
                      <h5 class="text-success fw-bold mt-2">₹2,000.00</h5>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="border rounded shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
                      <div>
                        <h5 class="fw-bold mb-1">Sourav</h5>
                        <p class="text-muted mb-0">Amount Donated</p>
                      </div>
                      <h5 class="text-success fw-bold mt-2">₹3,000.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="award">
              {/* ... rest of your static content ... */}
              <div className="container">
                <h4>"A meal shared is a step toward a better future."</h4>
                <p className="pt-2">
                  At Rugan Aadhar Foundation, we believe that no one should go
                  to bed hungry. Our Feed the Helpless campaign is more than
                  just providing meals; it’s about restoring hope and dignity to
                  the lives of those who need it most. Together, we can make
                  sure that everyone, regardless of their situation, gets the
                  nourishment they need to survive and thrive.
                </p>
                <div className="row gutter-24 pt-4">
                  <div className="col-12 col-lg-6">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <div className="thumb">
                        <Link href="/event-details">
                          <img
                            src="assets/images/home/blogTwo.png"
                            alt="Image_inner"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={200}
                    >
                      <div className="thumb">
                        <Link href="/event-details">
                          <img
                            className="h-100"
                            src="assets/images/home/campaignTwo.png"
                            alt="Image_inner"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={100}
                    >
                      <div className="thumb">
                        <Link href="/event-details">
                          <img
                            src="assets/images/blog/blogPostTwo/subImgOne.png"
                            alt="Image_inner"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div
                      className="award__single"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      <div className="thumb">
                        <Link href="/event-details">
                          <img
                            src="assets/images/blog/blogPostThree/subImgTwo.png"
                            alt="Image_inner"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="5pqp2THBbdk"
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DonateInner;
