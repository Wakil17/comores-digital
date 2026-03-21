import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Domains from '@/components/Domains'
import Context from '@/components/Context'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import UseCases from '@/components/UseCases'
import Roadmap from '@/components/Roadmap'
import Manifesto from '@/components/Manifesto'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Domains />
        <Context />
        <Services />
        <Approach />
        <UseCases />
        <Roadmap />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
