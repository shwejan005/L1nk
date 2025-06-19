import LayoutWrapper from '@/components/LayoutWrapper'
import FeaturesSection from '@/components/ui/Features'
import Hero from '@/components/ui/Hero'
import React from 'react'

function page() {
  return (
    <div>
      <LayoutWrapper>
        
        <Hero />
        <FeaturesSection />

      </LayoutWrapper>
    </div>
  )
}

export default page