import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Altruistic First Kangaroo</title>
        <meta property="og:title" content="Altruistic First Kangaroo" />
      </Helmet>
    </div>
  )
}

export default Home
