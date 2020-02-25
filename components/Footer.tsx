import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

const FooterWrapper = styled.span`
  margin: 0 auto;
  margin-bottom: 1em;
`
const Author = styled.a``

const Footer: React.FC = () => {
  const t = useTranslation()
  return (
    <FooterWrapper>
      {t('common:footerCredits')}
      <Author href="https://arpit73.netlify.com/" target="_blank">
        Arpit Bharti
      </Author>
    </FooterWrapper>
  )
}

export default Footer
