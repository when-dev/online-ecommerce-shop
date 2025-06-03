import Head from 'next/head'
import type { NextPage } from 'next'
import BannerSlider from 'components/BannerSlider'
import { Banner } from 'types/banner'

const banners: Banner[] = [
  { imageUrl: '/img/banners/1.png' },
  { imageUrl: '/img/banners/2.png' },
  { imageUrl: '/img/banners/3.png' }
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>New District</title>
      </Head>
      <BannerSlider banners={banners} />
    </>
  )
}

export default Home