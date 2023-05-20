import MainNavbar from '../MainNavbar/MainNavbar';
import SideNavbar from '../SideNavbar/SideNavbar'
import './Layout.css'
const Layout = (props) => {
    return <div className="app-container">
        <SideNavbar />
        <div className='app-body-container'>
            <MainNavbar />
            <main className='app-main-body-container'>{props.children}</main>
        </div>
    </div>
}

export default Layout