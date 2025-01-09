import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbGymnastics } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import the arrows
import SocialMediaCluster from "@/components/Helper/SocialMediaCluster";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/constant/constant"; // Import navLinks from constants.ts

// Import all icon components to render dynamically
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
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) setNavbg(true);
            else setNavbg(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSetSelectedTab = (val: number | null) => {
        setSelectedTab(val);
    };

    // Map the icon strings to the actual icons
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

    return (
        <div
            className={`transition-all duration-200 h-[10vh] z-[100] fixed w-full ${navbg ? "bg-black shadow-md" : "bg-black"
                }`}
        >
            <section className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Link href="/" passHref>
                        {/* Directly wrap both the icon and the text */}
                        <div className="flex items-center space-x-2 cursor-pointer"> {/* Flex for horizontal alignment */}
                            {/* Icon container */}
                            <div className="w-8 h-8 bg-black flex items-center justify-center">
                                <TbGymnastics className="w-6 h-6 text-yellow-400" />
                            </div>
                            {/* Text next to the icon */}
                            <h1 className="text-2xl text-yellow-400 bg-black font-bold">
                                UNITED
                            </h1>
                        </div>
                    </Link>
                    <SocialMediaCluster color="text-yellow-400" />
                </div>
                {/* Nav Links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <div key={link.id} className="relative group">
                            <button
                                onMouseEnter={() => handleSetSelectedTab(link.id)}
                                onClick={() => handleSetSelectedTab(link.id)}
                                className={`${navbg ? "bg-black" : "bg-transparent"
                                    } text-white font-semibold transition-all duration-200 ${pathname === link.url
                                        ? "text-yellow-400"
                                        : "hover:text-yellow-400"
                                    }`}
                            >
                                {link.label}
                                {/* Add the arrow if dropdown exists */}
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
                                                const Icon = dropdownItem.icon ? iconMap[dropdownItem.icon] : null; // Check if icon exists

                                                return (
                                                    <li
                                                        key={dropdownItem.id}
                                                        className="hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded-lg p-3 text-sm font-medium whitespace-nowrap"
                                                    >
                                                        <Link href={dropdownItem.url} className="flex items-center space-x-2">
                                                            {/* Render the icon if it exists */}
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

                {/* Buttons */}
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
