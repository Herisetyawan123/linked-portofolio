import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import SectionWrap from '@/components/wrapper/SectionWrap'

import BannerAsset from '@/assets/banner'
import ProfileImg from "@/assets/profile.jpeg";
import Unej from "@/assets/unej.jpeg";

export default function HeroPartial() {
    return (
        <SectionWrap>
            {/* banner */}
            <div className="banner w-full h-44 bg-slate-600 relative">
                <BannerAsset />
                <Image src={ProfileImg} alt="profile" className="absolute -bottom-[30%] left-5 rounded-full w-28 h-28 border-4 border-white" />
                {/* <div className="w-20 h-20 bg-blue-800 rounded-full"></div> */}
            </div>
            {/* content */}
            <div className="p-5 mt-10 grid grid-cols-5 items-start">
                {/* information */}
                <div className="col-span-3">
                    <h1 className="font-bold text-[1.4rem] md:text-[2.4rem]">
                        Heri Setyawan
                        <span className="font-light text-gray-400 text-[0.8rem] md:text-[1.4rem] ml-2">(He/Him)</span>
                    </h1>

                    <p className="mt-4">Junior Fullstack Engineer</p>
                    <p className="mt-2 text-gray-400 font-light text-sm">Jawa Timur, Indonesia</p>

                    {/* button */}
                    <div className="flex mt-4">
                        <Link href={'/'} className="bg-blue-600 text-white px-5 py-1 block rounded-full font-medium">
                            Hire Me
                        </Link>
                    </div>
                </div>
                {/* education */}
                <div className="col-span-2 flex gap-2 items-center">
                    <Image src={Unej} alt="Unej" className="w-8" />
                    <Link href={'https://unej.ac.id/'} className="font-semibold hover:text-blue-500 hover:underline">Universitas Jember</Link>
                </div>
            </div>

            <div className="grid grid-cols-3 w-full bg-blue-600">
                <Link href={''} className="text-center py-5 hover:bg-blue-500 text-white opacity-90 hover:opacity-100">Project</Link>
                <Link href={''} className="text-center py-5 hover:bg-blue-500 text-white opacity-90 hover:opacity-100">Feed</Link>
                <Link href={''} className="text-center py-5 hover:bg-blue-500 text-white opacity-90 hover:opacity-100">Chat with me</Link>
            </div>
        </SectionWrap>
    )
}
