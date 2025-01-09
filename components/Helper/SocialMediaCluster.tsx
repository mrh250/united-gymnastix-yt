import React from 'react'
import Link from 'next/link'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb'

{/* 
interface SocialMediaClusterProps {
    color?: string; // optional color prop
*/}

const SocialMediaCluster = ({ color = 'text-yellow-400' }) => {
    return (
        <div className="flex items-center space-x-0">
            <div className="w-8 h-8 bg-black flex items-center justify-center flex-col">
                <Link href="https://www.facebook.com/unitedgymnastix/" passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer">
                        <TbBrandFacebook className={`"w-6 h-6 ${color}`}  />
                    </a>
                </Link>
            </div>
            <div className="w-8 h-8 bg-black flex items-center justify-center flex-col">
                <Link href="https://www.instagram.com/unitedgymnastix/?hl=en" passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer">
                        <TbBrandInstagram className={`"w-6 h-6 ${color}`}  />
                    </a>
                </Link>
            </div>
            <div className="w-8 h-8 bg-black flex items-center justify-center flex-col">
                <Link href="https://www.linkedin.com/company/united-gymnastix" passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer">
                        <TbBrandLinkedin className={`"w-6 h-6 ${color}`}  />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SocialMediaCluster
