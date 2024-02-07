import React from 'react'
import SectionWrap from '../wrapper/SectionWrap'
import UnejImg from "@/assets/unej.jpeg";
import Image from 'next/image';

export default function EducationSection() {
    return (
        <SectionWrap>
            <div className="p-5">
                <h3 className="font-semibold">Pendidikan</h3>

                {/* list experience */}
                <div className="divide-y-[1px] gap-8 flex flex-col mt-4">

                    <div className="flex gap-2 pt-5">
                        <Image src={UnejImg} className="w-14 h-14" alt="vidio.com" />
                        <div className="">
                            <h4 className="font-semibold">University of Jember</h4>
                            <p className="text-sm font-light">Bacjelor of Technology - BTech</p>
                            <p className="text-sm font-light text-gray-400">Jul 2020 - 2024</p>
                            <p className="text-sm font-light">Kegiatan dan masyarakat: assistant laboratory of programming</p>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrap>
    )
}
