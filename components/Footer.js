import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #0288d1;
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Footer() {
  return (
    <FooterSection>
      <p>Next Project by Olga Shabalina 2021. All Rights Reserved.</p>
    </FooterSection>
  )
}

export default Footer
