import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Testamonials = () => {
    return (
        <div className="pt-[calc(4rem+1rem)] pb-16 bg-[url('/images/Text-Logo-yellow-op40.png')] bg-no-repeat bg-contain bg-center bg-black">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div>
                    <div className="mt-8 border-l-2 border-gray-400">
                        <div className="ml-6">
                            <p className="text-gray-400 font-medium">
                                &quot; United is the best gym we have been with in my children&apos;s gymnastic career. The coaches are not only amazingly qualified and dedicated, they are good with parents too! The families are nice, the gymnasts are supportive of each other at all levels and the class atmospheres are gentle and nurturing.  I only wish we had started our competitive career at this gym instead of starting at others where not only I but my children felt less supported and coached, and were ultimately less successful, personally and competitively. Definitely try this place!&quot;
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


export default Testamonials
