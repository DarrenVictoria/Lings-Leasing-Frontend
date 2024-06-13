import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: 'Filling car proposal form?',
      youtubeUrl: 'https://www.youtube.com/embed/H2HIZ_zuZw0?si=fyoGP8tpbHXx0vx9',
    },
    {
      title: 'Will I pass new car finance?',
      youtubeUrl: 'https://www.youtube.com/embed/Z-3at1rLykI?si=s9z_0B5ZauWXP_We',
    },
    {
      title: 'Can someone apply for me?',
      youtubeUrl: 'https://www.youtube.com/embed/3ru0lrYnUD8?si=MqF3kQq1mFq5Vi4Y',
    },
    {
      title: 'Can I cancel an order?',
      youtubeUrl: 'https://www.youtube.com/embed/o5MeKea2e_0?si=k8IUWSdqz7UlNhKS', 
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-open" data-accordion="open" className='mx-8 mb-16'>
      {items.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-open-heading-${index + 1}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-open-body-${index + 1}`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-open-body-${index + 1}`}
              onClick={() => handleClick(index)}
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {item.title}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-${activeIndex === index ? '0' : '180'} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-open-body-${index + 1}`}
            className={`p-5 border ${index === items.length - 1 ? 'border-gray-200 dark:border-gray-700' : 'border-b-0 border-gray-200 dark:border-gray-700'
              }`}
            aria-labelledby={`accordion-open-heading-${index + 1}`}
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            <div className="aspect-w-16 aspect-h-9">
              {activeIndex === index && (
                <div className="video-wrapper">
                  <iframe
                    className="w-full h-full"
                    src={item.youtubeUrl}
                    title={`YouTube video: ${item.title}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
