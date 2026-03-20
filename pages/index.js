import Head from 'next/head'
import Header from '@components/Header'
import Menu from '@components/Menu/Menu'
import Footer from '@components/Footer'
import Hero from '@components/Hero/Hero'
import StripeHeading from '@components/StripeHeading/StripeHeading'
import Grid from '@components/Grid/Grid'
import Link from 'next/link'
import styles from './index.module.scss'

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
        <div className={styles.wrapper}>
        <Menu />
          <div className="wrapper">
            
            <div className="content bigText" style={{paddingBottom: '60px'}}>
              <StripeHeading>About Me</StripeHeading>
              <p>I have been making high quality websites in a variety of platforms for over {difference} years.</p>
              <p>From small brochure sites to large, high-traffic applications, I create experiences that engage users while remaining intuitive and easy for clients to manage. Whether you’re a solo entrepreneur or a state agency, your website should reflect your brand with clarity and confidence.</p>
              <p>Below is my resume and below that are some highlights of sites I have developed.</p>
              <br />
              <Link className="button" href="/BartonWhite-PublicResume2026.pdf" target="_blank">View my resume</Link>

            </div>
          </div>
          <Grid />
        </div>
      </main>

      <Footer />
    </div>
  )
}
