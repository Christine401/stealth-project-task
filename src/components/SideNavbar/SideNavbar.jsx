import { NavLink } from 'react-router-dom'
import {sideNavList} from '../../constants/sidenavList'
import './SideNavbar.css'


export const SideNavbar = () => {

    const getSideNavList = sideNavList.map(navItem=>{
        const {label,path,src} = navItem
        return <NavLink to={path} key={label} 
        className={({ isActive, isPending }) =>
        isPending ? "pending nav-list-item-container" : isActive ? "active nav-list-item-container" : "nav-list-item-container"
  }>
            <img className='nav-icon' src={src} alt={label} />
                <p className='nav-list-text'>{label}</p>
            </NavLink>
  
    })

    return <div className='side-navbar'>
        <div className='side-navbar-header'>
            <img className='app-logo' src="https://media.licdn.com/dms/image/C4E0BAQEHs1C2gRRukA/company-logo_200_200/0/1620129594556?e=2147483647&v=beta&t=OJNnxV2Tz6cwTXmAk_Tm7P-8v7-MlLPsCsd5ugCoxFg" />
            <h3 className='side-nav-heading'>Stealth</h3>
        </div>
        <div className='side-navbar-body'>
            {getSideNavList}
        </div>
    </div>
}
export default SideNavbar