import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700">
        I am a Frontend Developer from India with 2 years of experience in multiple companies like
        Microsoft, Tesla, and Apple.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-md hover:-translate-y-1 transition duration-500"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline"
            >
              Read more
              <Image src={assets.right_arrow} className="w-4" alt="arrow" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
