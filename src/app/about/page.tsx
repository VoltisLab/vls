import AboutBody from '@/components/AboutBody'
import AboutBody2 from '@/components/AboutBody2'
import React from 'react'

const page = () => {
  return (
    <div >
        <AboutBody2
      leftTitle="About Amanita Design"
      paragraphs={[
        "Amanita Design is a Czech indie game developer. The studio was founded in 2003 by designer, artist and animator Jakub Dvorský, and is known for its emphasis on surreal worlds, light-hearted humour, hand-crafted appeal and audiovisual experience.",
        "Amanita is currently operating in several small teams, working on a bunch of new games for various platforms.",
      ]}
      rightTitle="Amanita Crew"
      imgSrc="/img3.jpg" // or any of: /img1.jpg /img2.jpg /img3.jpg /img4.jpg
      imgAlt="Amanita Crew"
    />
        <AboutBody/>
    </div>
  )
}

export default page