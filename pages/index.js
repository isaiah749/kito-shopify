import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'
import HeroVideo from '../components/HeroVideo'
import Hero from '../components/Hero'
import { useRouter } from 'next/router'
import HomeForm from '../components/Forms/HomeForm'
import SubHero from '../components/subComponents/SubHero'
import SubHeroTwo from '../components/subComponents/SubHero2'


export default function Home({ products }) {

  const router = useRouter();


  console.log(products)
  return (
    <main className="">

      <section className="h-[max-content] pt-5 pb-5 ">
        <Hero />
      </section>

      <section className="h-[max-content] pt-5 pb-5 ">
        <h2 className="mb-3 pl-5 text-xl font-semibold text-gray-400 opacity-70 md:text-2xl md:mb-5 md:opacity-60 ">What&apos;s Next...</h2>
        <div className="flex items-center overflow-x-scroll snap-x snap-mandatory py-5 md:py-10 ">
          <HeroVideo />
          <SubHero />
          <SubHeroTwo />
        </div>
      </section>
      <section className="bg-black h-[max-content] p-5">
        <h2 className="text-white font-bold text-center text-3xl ">Don't Miss Out</h2>
        <div className="text-white">
          <HomeForm />
        </div>
      </section>
    </main>

  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  
  return {
    props: { products }
  }
}
{/* <section className="text-xl font-bold md:mt-10 ">
  <ProductList products={products} />
</section> */}