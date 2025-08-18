import HomeBody from '@/components/HomeBody'
import ShowcaseBody from '@/components/ShowcaseBody'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[url('/vls.png')] bg-no-repeat bg-fill">
      <ShowcaseBody/>
      <HomeBody/>
    </div>
  )
}

export default page