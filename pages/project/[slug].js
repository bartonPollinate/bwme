import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '@components/Footer'

import Menu from '@components/Menu/Menu'
import Data from '@components/Data'
import Link from 'next/link'
import styles from './project.module.scss'
import Grid from '@components/Grid/Grid'
import OpgrImages from '@components/OpgrImages/OpgrImages'
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
          <Menu />
          <main className={styles.main 
            //+' '+ styles[router.query.slug]
          }>
            <h1 className={styles.heading}>{postData.name}</h1>
              {(router.query.slug !== 'opgr')?
                postData.screens.length > 0 &&
                  postData.screens.map((v,i)=>(
                    <img key={i} className={styles.img} src={'/projects/screens/'+v} alt={'screenshot from '+postData.name} />
                  )):
                <OpgrImages />
               
              }
              
            
              <Copy />
              <br />
              <Link className="button" href={postData.url} target="_blank">Visit the site</Link>
              <br />
              <br />
              <Link href="/">&#8592; Back to Home</Link>
            
          </main>
          <Grid current={postData.slug}/>
    
          <Footer />
        </div>)
  )
}
