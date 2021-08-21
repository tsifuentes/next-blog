import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({allPostsData, allDirectories}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Systems Engineer who loves Web Technologies, Algotithms, Software Architecture, Design Patterns, Apps, Cloud and more!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <div className={utilStyles.flex}>
      {allDirectories.map(item => (
        <Card title={item}></Card>
      ))}
      </div>
    </Layout>
  )
}

import {getAllDirectories, getSortedPostsData} from '../lib/posts'
import Card from '../components/card'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  const allDirectories = getAllDirectories();
  return {
    props: {
      allPostsData,
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
