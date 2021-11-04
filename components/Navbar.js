import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #0288d1;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
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
          <StyledLink>Logo</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar
