import React from 'react'
import { Emaillist } from '../../components/Emaillist/Emaillist'


import { Featured } from '../../components/featured/Featured'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import "./home.css"

export const Home = () => {
  return (
    <div> 
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
<Featured/>
<Emaillist/>
<Footer/>
        </div>
    </div>
   
  )
}
