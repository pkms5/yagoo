import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import MainCommunityList from './components/main/MainCommunityList'
import MainTodayResult from './components/main/MainTodayResult'
import MainUniformList from './components/main/MainUniformList'

function App() {
  

  return (
    <>
      <Header></Header>
      <MainCommunityList></MainCommunityList>
      <MainTodayResult></MainTodayResult>
      <MainUniformList></MainUniformList>
      <Footer></Footer>
    </>
  )
}

export default App
