import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({allDirectories}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Systems Engineer who loves Web Technologies, Algotithms, Software Architecture, Design Patterns, Apps, Cloud and more!</p>
      </section>
        <h2 className={utilStyles.headingLg}>Topics</h2>
      <div className={utilStyles.flex}>
        {allDirectories.map(item => (
          <Card title={item}></Card>
        ))}
      </div>
    </Layout>
  )
}

import {getAllDirectories} from '../lib/posts'
import Card from '../components/card'

export async function getServerSideProps(context) {
  const allDirectories = getAllDirectories();
  return {
    props: {
      allDirectories
    }
  }
}
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
