import React, { useState } from "react";

const Faq = () => {
    const faqList = [
        {
            question: "What is special about comparing rental car deals?",
            answer:
                "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
        },
        {
            question: "How do I find the car rental deals?",
            answer:
                " You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions",
        },
        {
            question: "How do I find such low rental car prices?",
            answer:
                " Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
        },
    ];

    return (
        <section className="container px-32 mx-auto py-32">
            <div className="flex flex-col justify-center items-center gap-4">
                <h4 className="font-semibold text-xl">FAQ</h4>
                <h2 className="font-bold text-2xl md:text-3xl">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-400">
                    Frequently Asked Questions About the Car Rental Booking Process on
                    Our Website: Answers <br/> to Common Concerns and Inquiries.
                </p>
            </div>
            <div className="shadow-xl w-full mt-10 max-w-3xl mx-auto">
                {faqList.map((faqItem, index) => (
                    <FaqCard key={index} {...faqItem} />
                ))}
            </div>
        </section>
    );
};

const FaqCard = ({ question, answer }) => {
    const [isSelected, setSelected] = useState(false);

    const plus = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transform ${isSelected ? 'rotate-45' : 'rotate-0'}`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
            />
        </svg>
    );

    return (
        <div className="flex flex-col">
            <button
                className={`transition-colors duration-100 flex justify-between p-5 w-full ${isSelected ? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}
                onClick={() => setSelected(!isSelected)}
            >
                <p>{question}</p>
                <span>{plus}</span>
            </button>
            <div className={`${!isSelected ? "hidden" : "block"} p-4 w-full`}>
                {answer}
            </div>
        </div>
    );
};

export default Faq;
