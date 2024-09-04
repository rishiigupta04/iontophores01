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
    {
      question:
        "How does iontophoretic drug delivery work for rheumatoid arthritis?",
      answer:
        "Iontophoretic drug delivery uses a mild electrical current to deliver medication through the skin directly to the affected joints. The electrical current helps enhance the absorption of the drug, ensuring that it reaches deeper tissues where it can provide targeted relief from inflammation and pain associated with rheumatoid arthritis.",
    },
    {
      question:
        "Can the patch be used in conjunction with other rheumatoid arthritis medications?",
      answer:
        "Yes, the iontophoretic patch can be used alongside other rheumatoid arthritis medications. However, it is important to consult with your healthcare provider to ensure that the combination of treatments is safe and effective for your specific condition.",
    },
    {
      question:
        "What should I do if I experience irritation or discomfort at the application site?",
      answer:
        "If you experience irritation or discomfort, remove the patch immediately and rinse the area with cool water. Consult your healthcare provider before reapplying the patch. They may adjust the treatment or recommend an alternative medication or method.",
    },
    {
      question:
        "Are there any contraindications for using the iontophoretic patch?",
      answer:
        "Yes, there are certain contraindications, such as open wounds or sores at the application site or certain skin conditions. Always inform your healthcare provider of any medical conditions before using the patch.",
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
