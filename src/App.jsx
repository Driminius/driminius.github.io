import {  Outlet } from 'react-router-dom'
import SideBarRight from './SideBarRight'
import './App.css'
import './index.css'

import NavBar from './NavBar'

/*
Date: August 12, 2024
Author: Adrian Domingo
It was a bit of a pain to install bootstrap but this is how I did it; when I built the project 
with vite 

Step 1: I had to add these lines, which came from getbootstrap.com documentation

npm i --save bootstrap
npm i --save-dev sass

these dependancies are added into the package.json

Step 2: after adding that, I had to create a new folder and file:

src/scss/styles.scss

Step 3: within that file added this line:

@import "../../node_modules/bootstrap//scss/bootstrap.scss"

I did NOT modify "vite.config.js"

Step 4: finally, in "main.jsx"
added this line:

import '../src/scss/styles.scss'

*/

function MyScripts() {
  return(
    <>
 
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
        />
  

      <link rel="stylesheet" href="./css/animate.css" />
      <link rel="stylesheet" href="./testcss.css" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Caveat|Source+Sans+Pro|Special+Elite"
        rel="stylesheet"
      />
    </>
  )
}
function App() {

  return (
    <>
      <MyScripts />
      <NavBar />
      <div className="container-fluid">
  
      <div className="row">
        <div className='col-sm-9'>
          <Outlet />
          </div>
          <div className='col-sm-3 aside'>
        <SideBarRight />
        </div>
      </div> 
    
      </div>


   

    </>
  )
}

export default App
