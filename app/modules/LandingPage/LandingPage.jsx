import Header from '@/app/components/Header/Header'
import OnDemandSection from '@/app/components/OnDemandSection/OnDemandSection'
import PreviousWorkSection from '@/app/components/PreviousWorkSection/PreviousWorkSection'
import MakingProcessSection from '@/app/components/MakingProcessSection/MakingProcessSection'
import React from 'react'
import ContactForm from '@/app/components/ContactForm/ContactForm'
import ScrollContainer from '@/app/components/ScrollContainer/ScrollContainer'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <img src="/banner.svg" alt="Logo" className="h-auto mr-3" />
      <OnDemandSection />

      {/* Divider */}
      <div 
        className="w-[60%] h-[1px] my-8 mx-auto"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 53.75%, rgba(255, 255, 255, 0) 100%)'
        }}
      ></div>
      <PreviousWorkSection />
      <MakingProcessSection />
      <ContactForm />
      <ScrollContainer />
    </div>
  )
}

export default LandingPage