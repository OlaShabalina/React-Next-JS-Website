import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

const Nav = styled.nav`
  height: 80px;
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`

const Logo = styled.a`
  padding: 0 2em;
  font-weight: 700;
  font-size: 20px;
  color: #154c79;
`

const FullNav = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 300px;
    float: right;
  }
`

const StyledLink = styled.a`
  padding: 0 2em;

  &:hover {
    color: #154c79;
  }

  @media (max-width: 850px) {
    padding: 10px 20px;
  }
`

const HanburgerMenu = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  color: #154c79;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 850px) {
    display: none;
  }
`

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <Logo>AroundMelbourne</Logo>
        </Link>
      </div>
      <HanburgerMenu onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
      </HanburgerMenu>
      <FullNav>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/history" passHref>
          <StyledLink>History</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Get in touch</StyledLink>
        </Link>
      </FullNav>
    </Nav>
  )
}

export default Navbar
