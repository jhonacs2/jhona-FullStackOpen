import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const MainNavBar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand to='/'>Blog</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/createBlog'>
            Create Blog
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <NavDropdown
            title={user && user.username}
            id='collasible-nav-dropdown'
          >
            <NavDropdown.Item
              onClick={() => {
                localStorage.removeItem('loggedBlogAppUser');
                window.location.reload();
              }}
            >
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
