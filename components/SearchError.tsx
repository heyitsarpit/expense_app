import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

const Error = styled.div`
  font-family: ${(props) => props.theme.fontMain};
  text-transform: uppercase;
  margin: 0 auto;
  padding: 1em;
  text-align: center;
  margin-top: 10em;
`

const SearchError: React.FC = () => {
  const t = useTranslation()
  return <Error>{t('common:searchError')}</Error>
}

export default SearchError
