import React from 'react'
import './Home.css'
import GreenDiamond from '../assets/images/decorative-green-diamond.svg'
import YellowCircle from '../assets/images/decorative-yellow-circle.svg'
import ButtonColor from '../components/buttons/ButtonColor'
import CardProperty from '../components/Cards/CardProperty'
import phoneImg1 from  '../assets/images/header-iphone.png'

const Home = () => {

  return (
    <main className='bg-primary-background w-full'>
      <article className='home-page'>

        <div className='images-background'>
          <div className='image-green-diamond'>
            <img src={GreenDiamond} alt="green diamond" />
          </div>

          <div className='image-yellow-circle'>
            <img src={YellowCircle} alt="yellow circle" />
          </div>
        </div>

        <section className='home-page-info '>
          <h1 className='font-bold text-7xl text-primary-letter-color leading-normal'>Mobile App Landing Page</h1>
          <p className=' text-secondary-letter-color text-xl leading-normal pt-4 pb-7'>
            Star focusing on your goals and get more things done with Sync mobile application. It's
            the first app to harness the power of social connections to help you stay focused and get
            organized
          </p>
          <div className='flex justify-center gap-1'>
            <ButtonColor url={"https://femcoders.factoriaf5.org/"} icon={"fab fa-apple"} title={"DOWNLOAD"}/>
            <ButtonColor url={"https://www.somosf5.org/"} icon={"fab fa-google-play"} title={"DOWNLOAD"}/>
          </div>
        </section>

        <section className='img-info'>
          <img className='iphone' src={phoneImg1} alt="iphone whit the app"/>
        </section>

        <section className='app-properties'>

           <CardProperty title={"Identify Goals"} name={"users"}/>
           <CardProperty title={"Situation Analysis"} name={"code"}/>
           <CardProperty title={"Tasks Settings"} name={"cog"}/>
           <CardProperty title={"Social Interactions"} name={"comments"}/>
           <CardProperty title={"Get Things Done"} name={"rocket"}/>
        </section>

      </article>
    </main>
  )
}

export default Home