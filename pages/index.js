import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'
import HeroVideo from '../components/HeroVideo'
import Hero from '../components/Hero'
import HomeForm from '../components/Forms/HomeForm'


export default function Home({ products }) {
  console.log(products)
  return (
    <main className="">

      <section className="h-[max-content] pt-5 pb-5 ">
        <Hero />
      </section>


      <section className="h-[max-content] pt-5 pb-5 ">
        <h2 className="mb-3 pl-5 text-xl font-semibold text-gray-400 opacity-70 md:text-2xl md:mb-5 md:opacity-60 ">Coming soon...</h2>
        <HeroVideo />
        <div className="px-5">
          <h2 className="font-bold text-3xl mt-2 md:mt-4">KITOWARES</h2>
          <h2 className="font-bold text-3xl -mt-2 mb-3">Creation & Destruction</h2>
          <p className="pl-2 text-sm md:max-w-2xl md:mx-auto md:text-[1.05rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis eius, ipsam consequatur cumque tempore illum sunt a deleniti laudantium, dolores delectus eveniet quam alias temporibus. Odit, nesciunt. Veniam, explicabo.
          </p>
          <div className="flex items-center justify-start pl-2 mt-5 md:max-w-2xl md:mx-auto">
                <button className="border-[1px] shadow-lg border-black rounded-3xl bg-gray-300 font-semibold px-4 py-2 md:text-lg ">Learn more</button>
            </div>
        </div>
      </section>
      <section className="bg-black h-[100vh] pt-5">
        <h2 className="text-white font-bold text-center text-3xl ">Don't Miss Out</h2>
        <h3 className="text-white font-semibold text-center text-xl mt-3">Stay Connected</h3>
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