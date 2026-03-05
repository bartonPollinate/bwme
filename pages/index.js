import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero/Hero'
import StripeHeading from '@components/StripeHeading/StripeHeading'
import Grid from '@components/Grid/Grid'
import Link from 'next/link'

export default function Home() {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - 2017;
  return (
    <div className="container">
      <Head>
        <title>Barton White - Portfolio</title>
      </Head>

      <main>
        <Hero />
        <div className="wrapper">
          
          <div className="content bigText" style={{paddingBottom: '60px'}}>
            <StripeHeading>About Me</StripeHeading>
            <p>I have been making high quality websites in a variety of platforms for over {difference} years.</p>
            <p>From small brochure sites to huge high traffic sites, I craft sites that capture audiences of all kinds while being easy to maintain and edit for clients as well. Whether you're a solo entrepreneur or a state government, your website needs to represent you well.</p>
            <p>Below is my resume and below that are some highlights of sites I have developed.</p>
            <br />
            <Link className="button" href="/logo-netlify.svg">View my resume</Link>

          </div>
        </div>
        <Grid />
      </main>

      <Footer />
    </div>
  )
}
