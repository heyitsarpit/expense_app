import Meta from './Meta'

const Page: React.FC = ({ children }) => (
  <>
    <Meta />
    <div>{children}</div>
  </>
)

export default Page
