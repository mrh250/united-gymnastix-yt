import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Import all required icons dynamically
const iconMap: Record<string, React.ComponentType<any>> = {
  FaBalanceScale: require("react-icons/fa").FaBalanceScale,
  FaBirthdayCake: require("react-icons/fa").FaBirthdayCake,
  FaUsers: require("react-icons/fa").FaUsers,
  FiUsers: require("react-icons/fi").FiUsers,
  FiBookOpen: require("react-icons/fi").FiBookOpen,
  FiAward: require("react-icons/fi").FiAward,
  GiGymBag: require("react-icons/gi").GiGymBag,
  MdFamilyRestroom: require("react-icons/md").MdFamilyRestroom,
  Bs1CircleFill: require("react-icons/bs").Bs1CircleFill,
  Bs2CircleFill: require("react-icons/bs").Bs2CircleFill,
  Bs3CircleFill: require("react-icons/bs").Bs3CircleFill,
};

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  const handleLinkClick = (e: React.MouseEvent, url: string, isLink: boolean, closeMenu: boolean) => {
    // Prevent the default behavior (navigation)
    e.preventDefault();

    if (closeMenu) {
      closeNav(); // Close the sidebar
      setTimeout(() => {
        window.location.href = url; // Navigate after the animation is done (300ms delay)
      }, 100); // Delay to ensure the sidebar has time to close
    } else {
      window.location.href = url; // Directly navigate for submenus without closing the sidebar
    }
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
        onClick={closeNav}
      ></div>

      {/* NavLinks */}
      <div
        className={`text-white fixed ${navOpen} flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-yellow-400 z-[1050] space-y-6 px-6 py-8`}
      >
        {navLinks.map((link) => (
          <div key={link.id}>
            {/* Parent Menu Item */}
            <div
              className="flex justify-between items-center cursor-pointer border-b-[1.5px] pb-1 border-black"
              onClick={(e) => {
                const clickedElement = e.target as HTMLElement;
                if (!clickedElement.closest("a")) {
                  toggleMenu(link.id);
                }
              }}
            >
              <Link
                href={link.isLink ? link.url : "#"}
                legacyBehavior
              >
                <div
                  className="flex items-center"
                  onClick={(e) => {
                    if (!link.isLink) {
                      e.preventDefault(); // Prevent navigation if isLink is false
                      toggleMenu(link.id); // Toggle the submenu
                    } else {
                      handleLinkClick(e, link.url, link.isLink, true); // Handle navigation for true links
                    }
                  }}
                >
                  {/* No icon for top-level links */}
                  <p className="text-black text-[20px] ml-4 sm:text-[30px]">
                    {link.label}
                  </p>
                </div>
              </Link>
              {/* Show dropdown arrow if there's a dropdown */}
              {link.dropdown && link.dropdown.length > 0 && (
                <span className="mr-4">
                  {expandedMenu === link.id ? (
                    <FiChevronUp className="w-5 h-5 text-black" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-black" />
                  )}
                </span>
              )}
            </div>

            {/* Submenu */}
            {expandedMenu === link.id && link.dropdown && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={expandedMenu === link.id ? "open" : "closed"}
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="ml-6 mt-2 overflow-hidden"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={expandedMenu === link.id ? "open" : "closed"}
                  variants={{
                    open: { height: "auto" },
                    closed: { height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {link.dropdown.map((submenu) => (
                    <Link
                      key={submenu.id}
                      href={submenu.url}
                      legacyBehavior
                    >
                      <div
                        className="flex items-center"
                        onClick={(e) => handleLinkClick(e, submenu.url, submenu.isLink, true)} // Close and navigate
                      >
                        {/* Icon for submenu */}
                        {submenu.icon && (
                          <span className="mr-2 text-black cursor-pointer">
                            {React.createElement(iconMap[submenu.icon])}
                          </span>
                        )}
                        {/* Text */}
                        <p className="text-black cursor-pointer text-[18px] sm:text-[25px] mb-2 hover:underline">
                          {submenu.label}
                        </p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-black cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
