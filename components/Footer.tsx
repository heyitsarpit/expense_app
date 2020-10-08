import styled from 'styled-components'

import { useTranslation } from '../lib/useTranslation'

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimary};
  margin: 0 auto;
  padding-top: 1em;
  margin-top: auto;
`

const Author = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.textPrimary};
`

const Footer: React.FC = () => {
  const t = useTranslation()
  return (
    <Wrapper>
      <span>{t('common:footerCredits')} &nbsp; </span>
      <Author href="https://arpit73.netlify.com/" rel="noopener noreferrer" target="_blank">
        Arpit Bharti
      </Author>
    </Wrapper>
  )
}

export default Footer
