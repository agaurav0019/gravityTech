import React from 'react'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import ViewDetailsBody from '../components/viewDetails/ViewDetailsBody'

const ViewDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ViewDetailsBody></ViewDetailsBody>
      <Footer></Footer>
    </div>
  )
}

export default ViewDetails
