"use client";
import React, { useState } from "react";
import { Search } from 'lucide-react';
// import { useRouter } from "next/navigation";
import Image from "next/image";


const IncentivesPageApproved = () => {

    // Handles the font size of the body/paragraph content
  const contentFontSize = {
    fontSize: '15px',
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs: { q: JSX.Element; a: JSX.Element }[] = [
    {
      q: (
        <div>
            <h4 className="text-md">
                <b>Home Energy Efficient Grant</b>
            </h4>
          <table>
                <tbody>
                    <tr>
                      <td>
                        <div className="rounded-circle" 
                        style={{ width: '18px', height: '12px', borderRadius: '20%', backgroundColor: "limegreen"}}>
                        </div>
                      </td>
                      <td className="px-3">
                        <p style={contentFontSize}>Approved</p>
                      </td>
                    </tr>
                </tbody>
                
                </table> 
        </div>
        ),
      a: <p><i>Add the inner content here.</i></p>,
    },
   ];
  const toggle = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  

  // Responsible for accepting the search queries
  const [query, setQuery] = useState('');
  // Shows suggestions for the user which when clicked will be entered
  // in the search bar
  const suggestions = ['Windows', 'Heating', 'Cooling', 'Appliances'];

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
        {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>


      {/* Incentives heading, search bar and suggestions */}
      <div className="p-4 flex-col">
        <h1 className="text-2xl text-black font-bold">Incentives</h1>
        <p style={contentFontSize}>
            Browse incentives based on the type of project you want to complete.
        </p>
      
        <div className="mt-3 flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 focus-within:ring-1 focus-within:ring-gray-500">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none border-none bg-transparent text-gray-700 placeholder-gray-500 w-full"
          />
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => setQuery(item)}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-md hover:bg-gray-200 transition"
                style={{borderRadius: "10px", fontSize: "15px"}}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div> 


      {/* Matched incentives heading and table */}
      <div className="p-4 flex-col">
        <h3 className="text-xl text-black font-bold">Matched Incentives</h3>
            <p style={contentFontSize}>
              Based on your property energy assessment you are eligible for the following incentives:
            </p>

            <div className="my-3 p-4 border rounded border-transparent shadow-lg bg-white" style={{borderRadius: '20px' }}>
              <div>
                <table style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="rounded-circle" 
                        style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'lightgray' }}>
                        </div>
                      </td>
                      <td className="px-3">
                        <h4 className="text-md">
                        <b>Sustainable Living Grant</b>
                        </h4>
                        <p style={contentFontSize}>Healthy Planet Fund</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <hr className="my-3" style={{color: 'lightgray'}}></hr>
                      </td>
                      <td>
                        <hr className="my-3" style={{color: 'lightgray'}}></hr>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="rounded-circle" 
                        style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'lightgray' }}>
                        </div>
                      </td>
                      <td className="px-3">
                        <h4 className="text-md">
                        <b>Energy Star Appliance Rebate</b>
                        </h4>
                        <p style={contentFontSize}>Future Energy Solutions</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <hr className="my-3" style={{color: 'lightgray'}}></hr>
                      </td>
                      <td>
                        <hr className="my-3" style={{color: 'lightgray'}}></hr>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="rounded-circle" 
                        style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'lightgray' }}>
                        </div>
                      </td>
                      <td className="px-3">
                        <h4 className="text-md">
                        <b>Solar Saving Initiative</b>
                        </h4>
                        <p style={contentFontSize}>Solar Saving Initiative</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      </div>

      


      {/* My applications */}
      <div className="p-4 flex-col">
        <h3 className="text-xl text-black font-bold">My Applications</h3>
            <p style={contentFontSize}>
              Organize and track the incentives you apply for.
            </p>
            <div className="mt-3 px-6 py-4 border rounded border-transparent shadow-xl bg-white text-center" style={{ borderRadius: '20px' }}>
                <hr className="my-2" style={{color: 'lightgray'}}></hr>
                
                {faqs.map((faq, i) => (
                    <div key={i}>
                    <button
                        onClick={() => toggle(i)}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            background: "none",
                            border: "none",
                            fontSize: "16px",
                            cursor: "pointer",
                            padding: "8px 0",
                        }}
                    >
                        {faq.q}
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span 
                                                style={{
                                                    display: "inline-block",
                                                    transform: openIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                                                    transition: "0.2s",
                                                    fontSize: "14px",
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    marginLeft: "8px",
                                                }}>
                                            ﹥
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                    
                            </table>
                    </button>
                    {openIndex === i && <div>{faq.a}</div>}
                </div>
            ))}

        <hr className="my-2" style={{color: 'lightgray'}}></hr>

        </div>
    </div>
            
    </div>
    
  );
};

export default IncentivesPageApproved;