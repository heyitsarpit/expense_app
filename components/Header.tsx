import ColorThemeSelector from './ColorThemeSelector'
import LanguageSelector from './LanguageSelector'

const Header: React.FC<any> = ({ setTheme }) => (
  <div>
    <ColorThemeSelector setTheme={setTheme} />
    <LanguageSelector />
  </div>
)

export default Header
