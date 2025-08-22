import HomeBody from '@/components/HomeBody'
import ShowcaseBody from '@/components/ShowcaseBody'
import React from 'react'

const page = () => {
  return (
    <div className='md:max-w-[75vw] mx-auto'>
      <ShowcaseBody/>
      <HomeBody/>
    </div>
  )
}

export default page