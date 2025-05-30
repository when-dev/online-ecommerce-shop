import { ReactNode } from 'react'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Header />
		<main>{children}</main>
		<footer></footer>
	</>
)

export default Layout
