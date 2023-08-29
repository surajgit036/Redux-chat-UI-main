import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

export default function Search({setSearchtext}) {
  return (
    <MDBContainer className='d-flex justify-space-between align-items-center search'>
    <i className="fa-solid fa-magnifying-glass"></i>
    <input
    type="text"
    placeholder="Search"
    onChange={(e) => setSearchtext(e.target.value)}
    className='form-control width-90 my-4 border-0'
   />
  </MDBContainer>
  )
}
