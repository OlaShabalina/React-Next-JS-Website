import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar
