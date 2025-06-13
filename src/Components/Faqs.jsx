import { useState } from 'react';

function Faqs() {
  // State to track which FAQ is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for expanding/collapsing FAQs
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Dummy FAQ data
  const faqData = [
    {
      question: "What comes in a BhauBox?",
      answer: "Every month you'll receive 2 toys, 2 bags of treats, and a surprise item—all in a theme exclusive to BhauBox subscribers. Looking for a specific BARK-themed toy? Check out bark.co."
    },
    {
      question: "What kind of toys are in a BhauBox?",
      answer: "BhauBox toys are designed to suit different play styles and preferences. Each month features unique, themed toys that can include plush toys, rubber toys, or interactive puzzle toys. All toys are tested for safety and durability to ensure they're appropriate for your furry friend."
    },
    {
      question: "Is BhauBox approved for puppies and different dog breeds?",
      answer: "Yes! BhauBox offers options for all dog sizes and ages. For puppies under 6 months, we recommend our Puppy Box with specially designed toys for teething. Our regular boxes come in options for small, medium, and large dogs, ensuring appropriate toy sizes and treat formulations for different breeds."
    },
    {
      question: "Is BhauBox customizable?",
      answer: "Absolutely! You can customize your BhauBox based on your dog's size, allergies, and preferences. If your dog has specific dietary restrictions, you can request certain treats to be excluded. You can also upgrade to the Super Chewer option for dogs who need more durable toys."
    },
    {
      question: "How much does a BhauBox cost?",
      answer: "BhauBox subscriptions start at $23 per month with a 12-month commitment. 6-month subscriptions are $26 per month, and month-to-month plans are $35. Special editions and Super Chewer boxes may have different pricing. All subscriptions include free shipping within the continental US."
    },
    {
      question: "How can you cancel a BhauBox?",
      answer: "You can cancel your BhauBox subscription by contacting our customer service team via email or phone. For subscriptions with a commitment period, you'll need to complete your current term before cancellation takes effect. You can also pause your subscription for up to 3 months if you need a temporary break."
    }
  ];

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">FAQs</h1>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? 
                  <i className="bi bi-chevron-up"></i> : 
                  <i className="bi bi-chevron-down"></i>
                }
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
            <hr className="faq-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;