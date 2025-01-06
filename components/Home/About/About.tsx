import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className="pt-16 pb-16 bg-[url('/images/Text-Logo-yellow-op40.png')] bg-no-repeat bg-contain bg-center bg-black">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image Content */}
                <div>
                    <Image
                        src="/images/happy-girls-gymnast.png"
                        alt="About us."
                        width={600}
                        height={600}
                    />
                </div>
                {/* Text Content */}
                <div>
                    <BoxText>About Us</BoxText>
                    <h1 className="text-2xl sm:text-3xl font-bold text-yellow-300 mt-3 leading-[2.5rem] sm:leading-[3rem]">
                        Mission, Vision, & Values
                    </h1>
                    <h2 className="text-xl italic underline text-yellow-300 mt-3 leading-[2.5rem] sm:leading-[3rem]">
                        Mission
                    </h2>
                    <p className="mt-3 leading-relaxed text-sm sm:text-base text-yellow-300">
                        Welcome to United Gymnastix, a multi-faceted facility whose goal is for children to achieve their highest potential in the sport of gymnastics, while developing both mentally and physically. Our diversified programs have been structured to accommodate students of all levels from the very beginner up through the very advanced.The class sizes are small, allowing for more individualized attention as well as promoting a safe and healthy learning environment. United's large gymnasium is fully equipped to stimulate and challenge every level student.
                    </p>
                    <h2 className="text-xl italic underline text-yellow-300 mt-3 leading-[2.5rem] sm:leading-[3rem]">
                        Vision
                    </h2>
                    <p className="mt-3 leading-relaxed text-sm sm:text-base text-yellow-300">
                        From our two-year-old "Super Tots" to our highly competitive team athletes, United offers a myriad of opportunities for all to enjoy physical activity, regardless of ability. Studies show that children who exercise - even if it's so much fun that they don't know they are exercising! - are more likely to develop a life-long interest in fitness and health. The challenges of gymnastics develop coordination needed for other sports, too; as well as sharpen mental focus. Many of our students say their gymnastics experiences taught them to rationalize and conquer fears, plus helped them learn to set realistic goals...and then to work hard toward accomplishing them!
                    </p>
                    <h2 className="text-xl italic underline text-yellow-300 mt-3 leading-[2.5rem] sm:leading-[3rem]">
                        Values
                    </h2>
                    <p className="mt-3 leading-relaxed text-sm sm:text-base text-yellow-300">
                        Our Safety Certified Staff are caring professionals whose number one priority is to see that your child is getting the most out of their gymnastics experience. You will often see a reluctant child coaxed out onto the floor for a first class and minutes later having a great time. At United, we know how to make gymnastics a fun activity, while increasing coordination, body awareness, strength, flexibility and self-confidence.
                    </p>
                    <button className="mt-5 text-white font-bold pb-1 border-b-2 border-white">Learn More! &#8594;</button>
                    <div className="mt-8 border-l-2 border-gray-400">
                        <div className="ml-6">
                            <p className="text-gray-400 font-medium">
                                &quot; United is the best gym we have been with in my children's gymnastic career. The coaches are not only amazingly qualified and dedicated, they are good with parents too! The families are nice, the gymnasts are supportive of each other at all levels and the class atmospheres are gentle and nurturing.  I only wish we had started our competitive career at this gym instead of starting at others where not only I but my children felt less supported and coached, and were ultimately less successful, personally and competitively. Definitely try this place!&quot;
                            </p>
                            <div className="flex items-center space-x-6 mt-6">
                                <Link href="https://g.co/kgs/S2vAJWq" passHref legacyBehavior>
                                    <a target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/u1.png"
                                            alt="user"
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    </a>
                                </Link>
                                <div>
                                    <Link href="https://g.co/kgs/S2vAJWq" passHref legacyBehavior className="text-gray-400 font-medium">
                                        <a target="_blank" rel="noreferrer"> Kim Drnec
                                        </a>
                                    </Link> <br />
                                    <Link href="https://g.co/kgs/S2vAJWq" passHref legacyBehavior className="text-gray-400 text-sm">
                                        <a target="_blank" rel="noreferrer"> Google Review
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About
