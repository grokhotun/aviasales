import React from 'react'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Content from '@/components/Content/Content'

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="aviasales">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
