import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Founder from '@/components/Founder' // Importé ici
import Domains from '@/components/Domains'
import Context from '@/components/Context'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import UseCases from '@/components/UseCases'
import Roadmap from '@/components/Roadmap'
import Manifesto from '@/components/Manifesto'
// import Founder from '@/components/Founder' // Commenté car déjà importé plus haut
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Domains />
        <Founder />
        <Context />
        <Services />
        <Approach />
        <UseCases />
        <Roadmap />
        <Manifesto />
        {/* <Founder />  Commenté car déjà placé plus haut */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
