import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand style={{color:'white'}} className='fw-bolder'>
            <i className="fa-solid fa-music me-2"></i>
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
