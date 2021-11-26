import styled from 'styled-components';
import Link from 'next/link';

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

const StyledLink = styled.a`
  padding: 0 2em;

  &:hover {
    color: yellow;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <Logo>AroundMelbourne</Logo>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/history" passHref>
          <StyledLink>History</StyledLink>
        </Link>
        <Link href="/resources" passHref>
          <StyledLink>Resources</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Get in touch</StyledLink>
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar
