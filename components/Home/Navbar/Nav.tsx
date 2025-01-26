import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbGymnastics } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SocialMediaCluster from "@/components/Helper/SocialMediaCluster";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { FiUsers, FiBookOpen, FiAward } from "react-icons/fi";
import { FaBirthdayCake, FaBalanceScale } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false); // Ensure hydration

  const pathname = usePathname();

  useEffect(() => {
    setHydrated(true); // Mark as hydrated on the client
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavbg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconMap: { [key: string]: React.ElementType } = {
    FiUsers,
    FiBookOpen,
    FiAward,
    FaBirthdayCake,
    GiGymBag,
    MdFamilyRestroom,
    Bs1CircleFill,
    Bs2CircleFill,
    Bs3CircleFill,
    FaBalanceScale,
  };

  if (!hydrated) {
    return null; // Avoid rendering until hydration is complete
  }

  return (
    <div
      className={`transition-all duration-200 h-[10vh] z-[100] fixed w-full ${
        navbg ? "bg-black shadow-md" : "bg-black"
      }`}
    >
      <section className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" passHref legacyBehavior>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <TbGymnastics className="w-6 h-6 text-yellow-400" />
              </div>
              <h1 className="text-2xl text-yellow-400 bg-black font-bold">
                UNITED
              </h1>
            </div>
          </Link>
          <SocialMediaCluster color="text-yellow-400" />
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative group"
              onMouseEnter={() => setSelectedTab(link.id)}
              onMouseLeave={() => setSelectedTab(null)} // Close only when leaving the parent
            >
              <button
                className={`${
                  navbg ? "bg-black" : "bg-transparent"
                } text-white font-semibold transition-all duration-200 ${
                  pathname === link.url
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <span className="ml-2">
                    {selectedTab === link.id ? (
                      <FiChevronUp className="inline-block" />
                    ) : (
                      <FiChevronDown className="inline-block" />
                    )}
                  </span>
                )}
              </button>
              <AnimatePresence>
                {selectedTab === link.id && link.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute left-0 top-[100%] mt-2 w-auto min-w-[200px] max-w-[300px] bg-black text-white p-4 rounded-lg shadow-xl border-2 border-yellow-400"
                  >
                    <ul className="space-y-2">
                      {link.dropdown.map((dropdownItem) => {
                        const Icon = iconMap[dropdownItem.icon] || null;
                        return (
                          <li
                            key={dropdownItem.id}
                            className="hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded-lg p-3 text-sm font-medium whitespace-nowrap"
                          >
                            <Link
                              href={dropdownItem.url}
                              className="flex items-center space-x-2"
                            >
                              {Icon && <Icon className="w-4 h-4" />}
                              <span>{dropdownItem.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-yellow-400 lg:hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Nav;
