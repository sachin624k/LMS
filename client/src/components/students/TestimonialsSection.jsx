import React from 'react'
import { dummyTestimonialData, assets } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journey of transformation, success stories, and <br />
        the impact our courses have made in their lives.
      </p>

      <div className='grid grid-cols-auto gap-8 mt-14'>
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className='text-sm text-left border border-hray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img
                className='h-12 w-12 rounded-full'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>
                  {testimonial.name}
                </h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) =>
                  i < testimonial.rating ? (
                    <img
                      key={i}
                      src={assets.star}
                      className="h-5"
                      alt="star"
                    />
                  ) : (
                    <span key={i} className="w-3.5 h-3.5"></span>
                  )
                )}
              </div>

              <p className='text-gray-500 mt-5'>
                {testimonial.feedback}
              </p>
            </div>
            <a href='https://www.linkedin.com/in/sachin624k/' className='text-blue-500 hover:underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
