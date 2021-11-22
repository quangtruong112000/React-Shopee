import React from 'react'
import Category from '../components/Category/Category'
import Hero from '../components/Hero/Hero'
import Flashsale from '../components/Flashsale/Flashsale'
import Shopeemall from '../components/Shopeemall/Shopeemall'
import Recommended from '../components/Recomended/Recommended'
import Trendsearch from '../components/Trendsearch/Trendsearch'
import Topsearch from '../components/Topsearch/Topsearch'

function Home() {
    return (
        <div className="margin-top">
          <Hero/>
          <Category/>
          <Flashsale/>
          <Shopeemall/>
          <Trendsearch/>
          <Topsearch/>
          <Recommended/>
        </div>
    )
}

export default Home
