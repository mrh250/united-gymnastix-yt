import React from 'react';
import Iframe from 'react-iframe';
import HoursOfOperation from '@/components/Helper/HoursOfOperation';
import SectionDivider from '@/components/Helper/SectionDivider';
import SocialMediaCluster from '@/components/Helper/SocialMediaCluster';

const Footer: React.FC = () => {
    const frontOfficeHours = [
        { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
        { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
        { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
        { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
        { day: 'Friday', open: '9:00 AM', close: '6:00 PM' },
        { day: 'Saturday', open: '10:00 AM', close: '4:00 PM' },
        { day: 'Sunday', open: 'Closed', close: '' },
    ];

    const gymHours = [
        { day: 'Monday', open: '6:00 AM', close: '10:00 PM' },
        { day: 'Tuesday', open: '6:00 AM', close: '10:00 PM' },
        { day: 'Wednesday', open: '6:00 AM', close: '10:00 PM' },
        { day: 'Thursday', open: '6:00 AM', close: '10:00 PM' },
        { day: 'Friday', open: '6:00 AM', close: '10:00 PM' },
        { day: 'Saturday', open: '7:00 AM', close: '8:00 PM' },
        { day: 'Sunday', open: '8:00 AM', close: '6:00 PM' },
    ];

    return (
        <footer className="bg-black text-gray-100 py-2">
            <div className="container mx-auto px-4">
                {/* Position Section Divider at the top */}
                <SectionDivider />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-top mt-6 text-left">
                    {/* Location Section */}
                    <div>
                        <h3 className="text-xl font-semibold  text-white">Location</h3>
                        <div className="text-yellow-400 font-medium text-sm mb-4">
                            12300 Owings Mills Blvd <br />
                            Reisterstown, MD 21136
                        </div>
                        <div className="relative w-full h-full">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.4069759284243!2d-76.80178149999999!3d39.4601337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8166d29048d9d%3A0xb21a9b9d208efcf7!2sUnited%20Gymnastix!5e0!3m2!1sen!2sus!4v1736223038774!5m2!1sen!2sus"
                                className="absolute inset-0 w-full h-80"
                                styles={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>

                    </div>

                    {/* Hours of Operation Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold text-center mb-0">Hours of Operation</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col text-center">
                                <HoursOfOperation title="Front Office Hours" hours={frontOfficeHours} />
                            </div>
                            <div className="flex flex-col text-center">
                                <HoursOfOperation title="Gym Hours" hours={gymHours} />
                            </div>
                        </div>
                    </div>


                    {/* Contact Information Section */}
                    <div className='text-right'>
                        <h3 className="text-xl font-semibold  text-white">Contact Us</h3>
                        <div className="mt-4">
                            <h4 className="text-sm text-gray-200">Our Mobile Number</h4>
                            <h4 className="text-base font-bold text-yellow-400">555-555-5555</h4>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm text-gray-200">Our Email</h4>
                            <h4 className="text-base font-bold text-yellow-400">email@email.com</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="border-t border-gray-400 w-full mt-6"></div> {/* Dividing line above */}
            <div className="mt-0 w-[80%] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
                <p className="text-center md:text-left">
                    Copyright &copy; 2025 United Gymnastix. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <span>Socials:</span>
                    <SocialMediaCluster color="text-white" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
