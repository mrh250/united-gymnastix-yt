import React, { useState, useRef, useEffect } from "react";
import { staffData } from "@/constant/constant"; // Assuming staff data is imported from constant.tsx
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight, FaHandPointUp } from "react-icons/fa6";

const StaffCarousel = () => {
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const bioRef = useRef<HTMLDivElement | null>(null); // Reference for the bio container
  const isSmallScreen = window.innerWidth < 768; // Check if screen is small (tailwind 'sm' breakpoint)

  const handleClick = (id: number) => {
    setSelectedStaff(id === selectedStaff ? null : id); // Toggle selection
  };

  const handleImageClick = () => {
    setSelectedStaff(null); // Close the bio when the expanded image is clicked
  };

  const handleLeftClick = () => {
    if (selectedStaff !== null) {
      const prevIndex = (selectedStaff - 1 + staffData.length) % staffData.length;
      setSelectedStaff(prevIndex);
    }
  };

  const handleRightClick = () => {
    if (selectedStaff !== null) {
      const nextIndex = (selectedStaff + 1) % staffData.length;
      setSelectedStaff(nextIndex);
    }
  };

  const handleUpClick = () => {
    setSelectedStaff(null); // Close the expanded bio and show all the staff again
  };

  const selectedMember = staffData.find((staff) => staff.id === selectedStaff);

  // Scroll to bio when a staff member is selected (only for small screens)
  useEffect(() => {
    if (selectedStaff && bioRef.current && isSmallScreen) {
      const navbarHeight = document.querySelector("nav")?.clientHeight || 0; // Get navbar height
      const offset = navbarHeight + 20; // Adjust offset if necessary

      // Scroll the bio container into view
      bioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Start of the element
      });

      // Adjust the scroll position to account for the navbar height
      window.scrollBy(0, -offset); // Adjust scroll by navbar height
    }
  }, [selectedStaff]); // Run when selectedStaff changes

  return (
    <div className="relative flex flex-col items-center p-8 bg-black bg-[url('/images/Text-Logo-yellow-op20.png')] bg-no-repeat bg-contain bg-center">
      <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>

      {/* Staff Thumbnails - Hide on small screen if a staff member is selected */}
      {!selectedStaff && (
        <div className="flex space-x-4 overflow-visible mb-8 flex-wrap justify-center sm:space-x-6 md:space-x-8">
          {staffData.map((staff) => (
            <div
              key={staff.id}
              className="cursor-pointer mb-6" // Add margin for smaller screens
              onClick={() => handleClick(staff.id)}
            >
              <img
                src={staff.imageUrl}
                alt={staff.name}
                className="w-20 h-20 object-cover rounded-full border-2 border-yellow-400 md:w-24 md:h-24" // Adjust size for small screens
              />
              <p className="text-white text-xs mt-2 text-center sm:text-sm">{staff.name.split(" ")[0]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bio and Expanded Image */}
      {selectedMember && (
        <div
          ref={bioRef} // Attach the reference here
          className="relative flex flex-col items-center text-center text-white bg-black bg-opacity-70 p-6 rounded-lg mt-2 sm:w-full sm:px-4 md:w-[70%] lg:w-[60%] xl:w-[50%] overflow-hidden"
        >
          {/* Navigation Buttons */}
          <div className="relative top-0 left-0 w-full flex justify-between p-4 z-30">
            {/* Left Button */}
            <a
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-yellow-400 bg-black border border-yellow-400 rounded-lg shadow-inner group"
              onClick={(e) => {
                e.preventDefault();
                handleLeftClick();
              }}
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-yellow-400 opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-center transition-colors duration-300 delay-200 group-hover:text-black ease"><FaHandPointLeft/></span>
            </a>

            {/* Up Button */}
            <a
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-yellow-400 bg-black border border-yellow-400 rounded-lg shadow-inner group"
              onClick={(e) => {
                e.preventDefault();
                handleUpClick();
              }}
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-yellow-400 opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-center transition-colors duration-300 delay-200 group-hover:text-black ease"><FaHandPointUp/></span>
            </a>

            {/* Right Button */}
            <a
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-yellow-400 bg-black border border-yellow-400 rounded-lg shadow-inner group"
              onClick={(e) => {
                e.preventDefault();
                handleRightClick();
              }}
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-yellow-400 opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-center transition-colors duration-300 delay-200 group-hover:text-black ease"><FaHandPointRight/></span>
            </a>
          </div>

          {/* Bio and Image Section */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Image Section */}
            <div className="relative z-10"> {/* Ensure the image is on top of the background */}
              <img
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-yellow-400 border-4 sm:w-40 sm:h-40 md:w-48 md:h-48"
                />
            </div>

            {/* Bio Information */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">{selectedMember.name}</h3>
              <h4 className="text-lg italic text-white sm:text-xl">{selectedMember.titles}</h4>

              <p
                className="text-yellow-400 mt-2 sm:text-base md:text-lg"
                dangerouslySetInnerHTML={{
                  __html: selectedMember.bio, // Use the HTML content from the bio property
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffCarousel;
