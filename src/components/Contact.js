// // import '../main.css';//tailwind css applied seperatly
// import accordionData from "../utils/accordianData";
// import React, { useState } from 'react';

// const Contact = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="flex p-5">
//       {/* Sidebar */}
//       <div className="bg-[#e8eef1] p-5 w-[250px] min-h-screen">
//         <h2 className="text-2xl font-bold text-[#004d66]">Help & Support</h2>
//         <p className="mt-2 text-base text-gray-700">Let's take a step ahead and help you better.</p>
//         <ul className="list-none p-0 mt-5">
//           <li className="py-2 text-base cursor-pointer text-gray-800 font-bold text-[#ff6600]">Partner Onboarding</li>
//           <li className="py-2 text-base cursor-pointer text-gray-800">Legal</li>
//           <li className="py-2 text-base cursor-pointer text-gray-800">FAQs</li>
//           <li className="py-2 text-base cursor-pointer text-gray-800">Instamart Onboarding</li>
//         </ul>
//       </div>

//       {/* Content */}
//       <div className="ml-7 flex-grow">
//         <h3 className="text-3xl mb-5 text-[#ff6600]">Partner Onboarding</h3>
//         <div className="border-t border-gray-300">
//           {accordionData.map((item, index) => (
//             <div key={index} className="border-b border-gray-300">
//               <div className="cursor-pointer py-3" onClick={() => toggleAccordion(index)}>
//                 <h4 className={`text-lg ${activeIndex === index ? 'text-[#ff6600]' : 'text-gray-800'}`}>
//                   {item.question}
//                 </h4>
//               </div>
//               {activeIndex === index && (
//                 <div className="py-2 text-base text-gray-600">
//                   <p>{item.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import accordionData from "../utils/accordianData";
import React, { useState } from 'react';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="contact-us-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Help & Support</h2>
        <p className="sidebar-subtitle">Let's take a step ahead and help you better.</p>
        <ul className="sidebar-list">
          <li className="sidebar-item active">Partner Onboarding</li>
          <li className="sidebar-item">Legal</li>
          <li className="sidebar-item">FAQs</li>
          <li className="sidebar-item">Instamart Onboarding</li>
        </ul>
      </div>

      <div className="content">
        <h3 className="content-title">Partner Onboarding</h3>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <h4 className={activeIndex === index ? "accordion-title active" : "accordion-title"}>
                  {item.question}
                </h4>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
