import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample staff data
const staffData = [
    {
        id: 1,
        name: "John Doe",
        imageUrl: "/images/staff/john.jpg",
        bio: "John has been with us for 10 years. He specializes in coaching young gymnasts and has a passion for teaching.",
    },
    {
        id: 2,
        name: "Jane Smith",
        imageUrl: "/images/staff/jane.jpg",
        bio: "Jane is a seasoned coach with 15 years of experience. She focuses on competitive gymnastics and has helped many gymnasts achieve national rankings.",
    },
    {
        id: 3,
        name: "Mark Johnson",
        imageUrl: "/images/staff/mark.jpg",
        bio: "Mark is our head coach and has been instrumental in shaping our training programs. His strategic approach has led our team to multiple championships.",
    },
];

const StaffCarousel = () => {
    const [selectedStaff, setSelectedStaff] = useState<number | null>(null);

    const handleImageClick = (id: number) => {
        setSelectedStaff(id);
    };

    const selectedMember = staffData.find(staff => staff.id === selectedStaff);

    return (
        <div className="pt-16 pb-16 bg-[url('/images/Text-Logo-yellow-op40.png')] bg-no-repeat bg-contain bg-center bg-black">
            <div className="flex flex-col items-center my-10">
                <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>

                {/* Staff Images Carousel */}
                <div className="flex space-x-6 overflow-x-auto mb-6">
                    {staffData.map((staff) => (
                        <motion.div
                            key={staff.id}
                            className={`cursor-pointer transition-all duration-300 transform hover:scale-110 ${selectedStaff === staff.id ? 'border-4 border-yellow-500' : ''
                                }`}
                            onClick={() => handleImageClick(staff.id)}
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                scale: selectedStaff === staff.id ? 1.3 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={staff.imageUrl}
                                alt={staff.name}
                                className="w-32 h-32 object-cover rounded-full"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Display Bio of the Selected Staff */}
                {selectedMember && (
                    <motion.div
                        className="flex items-center space-x-8 mt-6"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            src={selectedMember.imageUrl}
                            alt={selectedMember.name}
                            className="w-48 h-48 object-cover rounded-full"
                            animate={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
                            <p className="text-gray-700 mt-4">{selectedMember.bio}</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default StaffCarousel;
