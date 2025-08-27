import AboutBody from '@/components/AboutBody'
import AboutBody2 from '@/components/AboutBody2'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[75vw] mx-auto w-full'>
        <AboutBody2
      leftTitle="About Voltis Labs Games"
      paragraphs={[
        `Voltis Labs Games is the game development arm of **Voltis Labs**,  built to push the boundaries of play, creativity, and interactive storytelling.
        We craft unique, addictive, and visually striking experiences that merge fun with imagination. From high-speed racers like Spinnersonic to experimental titles still in the lab, our mission is simple: to make games that feel good to play and hard to put down.
We believe in player-first design, ADHD-friendly features, and building global communities around our titles - all from a remote, creative-first studio culture that thrives on innovation.`,
        `Our games are not just for entertainment. They’re ecosystems, challenges, and canvases built with care, purpose, and the same experimental energy that defines Voltis Labs.`,
`Whether you’re here to race, build, explore, or collaborate, welcome to the new era of gaming.`,
`Welcome to Voltis Labs Games`
      ]}
      rightTitle="Dooms Lane"
      imgSrc="/doom.png" 
      imgAlt="Dooms Lane"
    />
        <AboutBody/>
    </div>
  )
}

export default page
