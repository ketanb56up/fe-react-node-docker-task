import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <CssBaseline />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  )
}

export default Layout