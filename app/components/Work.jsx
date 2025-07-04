import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700">
        Welcome to my web development portfolio! Explore a collection of projects 
        showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover rounded-lg relative
                       cursor-pointer group transition-all duration-500"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Info Box */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                            -translate-x-1/2 py-3 px-5 flex flex-col gap-1 items-start justify-between 
                            duration-500 group-hover:bottom-7">
              <h2 className="font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>

            {/* Send Icon */}
            <div className="border rounded-full border-black w-9 aspect-square absolute 
                            flex items-center justify-center bottom-8 right-10 group-hover:bg-lime-300 
                            transition duration-300 ease-in-out">
              <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
            </div>
          </div>
        ))}
      </div>
      <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 
      border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
        Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </a>
    </div>
  )
}

export default Work
