import Main from "./Main"
import NavList from "./NavList"
import Footer from "./Footer"
export default function AppLayout({children}) {

    return(
        <>
        <Main/>
        <NavList />
        {children}
        <Footer />
        </>
    )
}