import React from 'react'
import SectionWrap from '../wrapper/SectionWrap'
import Image from 'next/image'
import VidioImg from "@/assets/experience/vidio_dot_com_logo.jpeg"

export default function ExperienceSection() {
  return (

    <SectionWrap>
    <div className="p-5">
      <h3 className="font-semibold">Pengalaman</h3>

      {/* list experience */}
      <div className="divide-y-[1px] gap-8 flex flex-col mt-4">

        <div className="flex gap-2 pt-5">
          <Image src={VidioImg} className="w-14 h-14" alt="vidio.com" />
          <div className="">
            <h4 className="font-semibold">Frontend Engineer</h4>
            <p className="text-sm font-light">Vidio · Magang</p>
            <p className="text-sm font-light text-gray-400">Feb 2023 - Jun 2023 · 5 bln</p>
            <p className="text-sm font-light text-gray-400">Jakarta Pusat, Jakarta Raya, Indonesia</p>
          </div>
        </div>

        <div className="flex gap-2 pt-5">
          <Image src={VidioImg} className="w-14 h-14" alt="vidio.com" />
          <div className="">
            <h4 className="font-semibold">Frontend Engineer</h4>
            <p className="text-sm font-light">Vidio · Magang</p>
            <p className="text-sm font-light text-gray-400">Feb 2023 - Jun 2023 · 5 bln</p>
            <p className="text-sm font-light text-gray-400">Jakarta Pusat, Jakarta Raya, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrap>
  )
}
