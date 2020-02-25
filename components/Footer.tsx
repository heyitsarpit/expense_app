import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimary};
`

const Author = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.textPrimary};
`

const Footer: React.FC = () => {
  const t = useTranslation()
  return (
    <FooterWrapper>
      {t('common:footerCredits')}
      <span> </span>
      <Author href="https://arpit73.netlify.com/" target="_blank">
        Arpit Bharti
      </Author>
    </FooterWrapper>
  )
}

export default Footer
