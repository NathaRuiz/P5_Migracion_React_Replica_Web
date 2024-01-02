import React from 'react'
import UserTestimonial from '../components/Cards/UserTestimonial'

const Screens = () => {
  return (
    <>
      <article className='user-testimonials'>

        <div className='section-title'>
          <h2>User Testimonials</h2>
        </div>

        <section className='testimonials'>
          <div className='users'>
            <UserTestimonial opinion={"I love using Sync for my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills."}
                             name={"Rick Jones "} profession={" Designer"}/>
          </div>

        </section>

      </article>
    </>
  )
}

export default Screens