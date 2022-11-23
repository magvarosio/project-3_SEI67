
import { Link, useNavigate } from 'react-router-dom'

import { isAuthenticated, handleLogout } from '../../components/helpers/auth'
import { useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



const PageNavbar = () => {

  const navigate = useNavigate()


  useEffect(() => {
    console.log(isAuthenticated())
  }, [])

  return (
    <Navbar expand="sm">
      <Container>
        <>
          {/* add isAuthenticate and conditional logic to hide logout/login */}
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <span className='nav-link' onClick={() => handleLogout(navigate)}>Logout</span>

        </>

      </Container>
    </Navbar>
  )
}

export default PageNavbar