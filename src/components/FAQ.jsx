import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null); // Create a ref for the answer div

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        {question}
      </div>
      <div
        className={`faq-answer ${isOpen ? "open" : ""}`}
        style={{
          height: isOpen ? `${answerRef.current.scrollHeight}px` : "0", // Set height based on content
        }}
        ref={answerRef} // Attach the ref to the answer div
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    // Menstrual Patch Questions
    {
      question: "How long does the menstrual patch provide relief?",
      answer:
        "Our menstrual patch is designed to provide continuous relief for up to 12 hours, allowing you to go about your day with minimal discomfort.",
    },
    {
      question: "Is the menstrual patch discreet to wear?",
      answer:
        "Yes, the patch is thin, flexible, and designed to be discreet. It adheres comfortably to your skin, so you can wear it under your clothes without it being noticeable.",
    },
    {
      question: "What is the patch made of?",
      answer:
        "The menstrual patch is made with a blend of natural, herbal ingredients that are known for their pain-relieving and soothing properties. It is 100% herbal and free from harsh chemicals.",
    },
    {
      question: "Can I exercise with the patch on?",
      answer:
        "Yes, the patch is designed to stay in place during physical activity. Its adhesive is strong enough to withstand light to moderate exercise.",
    },
    {
      question: "Can I shower or bathe with the menstrual patch on?",
      answer:
        "The patch is water-resistant, making it safe to wear in the shower. However, we recommend avoiding prolonged submersion in water, such as in a bath or while swimming, to ensure the patch remains effective.",
    },
    {
      question: "Are there any side effects from using the menstrual patch?",
      answer:
        "The patch uses natural ingredients, so side effects are rare. Some individuals with sensitive skin may experience mild irritation at the application site. If this occurs, remove the patch and consult a healthcare professional.",
    },
    {
      question: "What are the warnings for using the menstrual patch?",
      answer:
        "Do not use if you are allergic to any of the ingredients. Do not apply on eyes, mouth, genitals, or other mucous membranes. Avoid using on wounds or damaged skin or infected skin. Do not apply with a heating pad. If abnormal irritation occurs, stop using the patch and consult your healthcare provider.",
    },
    // Rheumatoid Arthritis Patch Questions
    {
      question: "How often do I need to change the RA patch?",
      answer:
        "The patch is designed to be changed every 24 hours, providing consistent medication delivery throughout the day.",
    },
    {
      question: "Is the iontophoretic patch painful to use?",
      answer:
        "No, the patch is completely painless. You may feel a slight tingling sensation when it's active, but this is normal and not uncomfortable.",
    },
    {
      question: "Can the patch be used with other RA medications?",
      answer:
        "Yes, the iontophoretic patch can be used alongside other rheumatoid arthritis medications. However, it is important to consult with your healthcare provider to ensure the combination of treatments is safe and effective.",
    },
    {
      question: "How does iontophoretic drug delivery work for RA?",
      answer:
        "Iontophoretic drug delivery uses a mild electrical current to deliver medication through the skin directly to the affected joints. The electrical current helps enhance the absorption of the drug, ensuring targeted relief from inflammation and pain.",
    },
    {
      question: "What if I experience irritation at the application site?",
      answer:
        "If you experience irritation, remove the patch immediately and rinse the area. Consult your healthcare provider before reapplying the patch. They may recommend an alternative.",
    },
    {
      question: "Are there any contraindications for using the RA patch?",
      answer:
        "Yes, there are certain contraindications, such as open wounds or sores at the application site. Always inform your healthcare provider of any medical conditions before using the patch.",
    },

  ];

  return (
    <section id="faq" className="section faq container">
      <h2>Frequently Asked Questions (FAQs)</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQ;