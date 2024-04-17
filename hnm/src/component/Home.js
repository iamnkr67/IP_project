import React from 'react';
import Head from "next/head";
import Hero from "../component/Hero";
import Testimonials from "../component/Testimonials";
import Footer from "../component/Footer";
//import Carousal from "../component/Carousal";


function Home() {
  return (
      <>
          <Head>
              <title>Hunger No More</title>
              <link rel="icon" href="/logo.png" />
              {/* Meta Tags Dynamically generated  */}
              <meta name="title" content="Hunger No More" />
              <meta
                  name="description"
                  content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
              />
              <meta name="copyright" content="VishwaGauravIn" />

              <meta property="og:type" content="website" />
              <meta property="og:url" content="teamhnm.org" />
              <meta property="og:title" content="Hunger No More" />
              <meta
                  property="og:description"
                  content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
              />
              <meta property="og:image" content="/" />
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="teamhnm.org" />
              <meta property="twitter:title" content="Hunger No More" />
              <meta
                  property="twitter:description"
                  content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
              />
              <meta property="twitter:image" content="/" />
          </Head>

          <main className="">
            
              <Hero />
              {/*<Carousal />*/}
              <Testimonials />
          </main>

          <Footer />
      </>
  )
}

export default Home