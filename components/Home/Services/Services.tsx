import BoxText from '@/components/Helper/BoxText'
import React from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import { FaRocket } from 'react-icons/fa6'

const Services = () => {
    return (
        <div className="pt-16 pb-16 bg-black">
            <div className="w-[80%] mx-auto">
                <BoxText> Our Services </BoxText>
                {/* Heading */}
                <h1 className="mt-4 text-2xl md:text-3xl font-bold text-white">
                    What Services Do We Have For You?
                </h1>
                {/* Description */}
                <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-yellow-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt incidunt aut quos eius necessitatibus, aperiam temporibus soluta accusamus suscipit laudantium. Sed neque ullam architecto ad ut hic, obcaecati alias?
                </p>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
                    {/* 1st Service */}
                    <div className="flex items-center space-x-5">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-yellow-400 bg-opacity-20">
                            <FaBirthdayCake className="w-6 h-6 text-yellow-400"></FaBirthdayCake>
                        </div>
                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-bold text-gray-300"> Start Up </p>
                            <p className="text-sm text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quisquam est ipsam quia doloribus dolorem repellendus repudiandae eaque ex consequatur et fuga, vel quam totam vitae, fugiat mollitia eveniet.</p>
                        </div>
                    </div>
                    {/* 2nd Service */}
                    <div className="flex items-center space-x-5">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                            <FaRocket className="w-6 h-6 text-orange-400"></FaRocket>
                        </div>
                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-bold text-gray-300"> Start Up </p>
                            <p className="text-sm text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quisquam est ipsam quia doloribus dolorem repellendus repudiandae eaque ex consequatur et fuga, vel quam totam vitae, fugiat mollitia eveniet.</p>
                        </div>
                    </div>
                    {/* 3rd Service */}
                    <div className="flex items-center space-x-5">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                            <FaRocket className="w-6 h-6 text-orange-400"></FaRocket>
                        </div>
                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-bold text-gray-300"> Start Up </p>
                            <p className="text-sm text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quisquam est ipsam quia doloribus dolorem repellendus repudiandae eaque ex consequatur et fuga, vel quam totam vitae, fugiat mollitia eveniet.</p>
                        </div>
                    </div>
                    {/* 4th Service */}
                    <div className="flex items-center space-x-5">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                            <FaRocket className="w-6 h-6 text-orange-400"></FaRocket>
                        </div>
                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-bold text-gray-300"> Start Up </p>
                            <p className="text-sm text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quisquam est ipsam quia doloribus dolorem repellendus repudiandae eaque ex consequatur et fuga, vel quam totam vitae, fugiat mollitia eveniet.</p>
                        </div>
                    </div>
                    {/* 5th Service */}
                    <div className="flex items-center space-x-5">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                            <FaRocket className="w-6 h-6 text-orange-400"></FaRocket>
                        </div>
                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-bold text-gray-300"> Start Up </p>
                            <p className="text-sm text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quisquam est ipsam quia doloribus dolorem repellendus repudiandae eaque ex consequatur et fuga, vel quam totam vitae, fugiat mollitia eveniet.</p>
                        </div>
                    </div>
                    {/* 6th Service */}
                    <div className="flex items-center space-x-5">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                            <FaRocket className="w-6 h-6 text-orange-400"></FaRocket>
                        </div>
                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-bold text-gray-300"> Start Up </p>
                            <p className="text-sm text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quisquam est ipsam quia doloribus dolorem repellendus repudiandae eaque ex consequatur et fuga, vel quam totam vitae, fugiat mollitia eveniet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
