import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Systems Engineer who loves Web Technologies, Web Architecture, Fullstack, Mobile Apps, Cloud and more!. Today, I am focus on Web Tecnologies and I am sharing all my practices in this Github profile.</p>
      </section>
    </Layout>
  )
}
