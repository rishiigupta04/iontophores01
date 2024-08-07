import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How often do I need to change the patch?",
      answer:
        "The patch is designed to be changed every 24 hours, providing consistent medication delivery throughout the day.",
    },
    {
      question: "Is the iontophoretic patch painful to use?",
      answer:
        "No, the patch is completely painless. You may feel a slight tingling sensation when it's active, but this is normal and not uncomfortable.",
    },
    {
      question: "Can I shower or swim with the patch on?",
      answer:
        "The patch is water-resistant, allowing you to shower. However, prolonged immersion in water, such as swimming, is not recommended.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Side effects are minimal compared to oral medications. Some users may experience mild skin irritation at the application site, which usually resolves quickly.",
    },
  ];

  return (
    <section id="faq" className="section faq container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQ;
