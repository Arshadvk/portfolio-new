import React from 'react'
import Navbar8 from './Navbar8'
import Footer from '../components/Footer'

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navbar8 />
      {children}
      <Footer />

    </React.Fragment>
  )
}

export default Layout