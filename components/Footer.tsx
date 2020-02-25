import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimary};
  margin: 0 auto;
`

const Author = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.textPrimary};
`
const Grow = styled.div`
  flex-grow: 1;
`

const Footer: React.FC = () => {
  const t = useTranslation()
  return (
    <>
      <Grow></Grow>
      <FooterWrapper>
        <span>{t('common:footerCredits')} &nbsp; </span>
        <Author href="https://arpit73.netlify.com/" rel="noopener noreferrer" target="_blank">
          Arpit Bharti
        </Author>
      </FooterWrapper>
    </>
  )
}

export default Footer
