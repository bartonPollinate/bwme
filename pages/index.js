import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero/Hero'
import Link from 'next/link'

export default function Home() {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - 2017;
  return (
    <div className="container">
      <Head>
        <title>Barton White - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Hero />
        <div className="content">
          <p>I have been making high quality websites in a variety of platforms for over {difference} years. Below are the highlights of sites I have developed.</p>
          <p>I create websites with the user in mind from start to finish. I am well-versed in HTML, CSS, Javascript, PHP, Python, and Node. Many of my sites are Wordpress and I have created custom plugins and themes for that platform. The site you are looking at now was created with Gatsby and I am really excited about JAMstack and advanced static sites.</p>
          <p>Click on my projects below to read more about my role in each of them. More images are coming soon.</p>
          <Link className="button" href="/logo-netlify.svg">View my resume</Link>

        </div>
      </main>

      <Footer />
    </div>
  )
}
