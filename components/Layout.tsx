import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<header></header>
		<main>{children}</main>
		<footer></footer>
	</>
)

export default Layout
