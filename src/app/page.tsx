import HomeBody from '@/components/HomeBody'
import ShowcaseBody from '@/components/ShowcaseBody'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[90vw] mx-auto'>
      <ShowcaseBody/>
      <HomeBody/>
    </div>
  )
}

export default page