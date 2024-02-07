import React from 'react'

type Props = {
    children: React.ReactElement[] | React.ReactElement
}

export default function SectionWrap({ children }: Props) {
  return (
    <section className='bg-white w-full md:max-w-[50%] md:mx-auto my-2 rounded-md overflow-hidden shadow'>
        { children }
    </section>
  )
}
