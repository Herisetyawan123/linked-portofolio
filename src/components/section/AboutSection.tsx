import Link from 'next/link'
import React from 'react'
import SectionWrap from '../wrapper/SectionWrap'

export default function AboutSection() {
    return (
        <SectionWrap>
            <div className="p-5">
                <h3 className="font-semibold">Tentang</h3>
                <div className="mt-4 ">
                    <span>
                        hello friend,<br />introduce my self, my name is heri setyawan, i live in Jember, East Java.
                        <span className="white-space-pre">
                        </span>
                        <br />
                        Now, i have studying at the faculty of computer science and in the department of informatics in  University of Jember
                        <br />
                        <br />
                        you can find me at:
                        <br />
                        github: <Link href={'https://github.com/Herisetyawan123'} className="hover:underline">https://github.com/Herisetyawan123</Link>
                        <br />
                        instagram: <Link href={'https://instagram.com/herisetyawan233'} className="hover:underline">https://instagram.com/herisetyawan233</Link>
                    </span>
                </div>
            </div>
        </SectionWrap>        
    )
}
