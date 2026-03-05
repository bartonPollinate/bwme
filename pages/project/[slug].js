import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '@components/Footer'
import Data from '@components/Data'
import Link from 'next/link'
import styles from './project.module.scss'
import Grid from '@components/Grid/Grid'
import dynamic from 'next/dynamic'


export default function Home() {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - 2017;
  const router = useRouter();
  const postData = Data(router.query.slug);

  const Copy = dynamic(() => import('@components/ProjectCopy/'+router.query.slug+'.js'),{ssr:false})

  return (
    postData.url && (<div className="container">
          <Head>
            <title>{postData.name} - Barton White</title>
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.heading}>{postData.name}</h1>
              {postData.screens.length?
               postData.screens.map((v,i)=>(<img key={i} className={styles.img} src={v} alt={'screenshot from '+postData.name} />)):
               (<img className={styles.img} src="https://images.unsplash.com/photo-1772173136500-e91e46fe24b8?q=80&w=764&h=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={'screenshot from '+postData.name} />)}
              
            <div className={styles.content}>
              <Copy />
              <br />
              <Link className="button" href={postData.url} target="_blank">Visit the site</Link>
              <br />
              <br />
              <Link href="/">&#8592; Back to Home</Link>
            </div>
          </main>
          <Grid current={postData.slug}/>
    
          <Footer />
        </div>)
  )
}
