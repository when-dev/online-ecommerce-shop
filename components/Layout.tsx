import { ReactNode } from "react";
import Header from "./header/Header";
import BottomBar from './header/mobile/BottomBar'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer></footer>
    <BottomBar />
  </>
);

export default Layout;
