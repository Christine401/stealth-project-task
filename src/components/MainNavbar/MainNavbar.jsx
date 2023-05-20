import './MainNavbar.css'
import { sideNavList } from '../../constants/sidenavList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { useLocation } from 'react-router'
export const MainNavbar = () => {
    const location = useLocation();
    const {pathname}= location;
    const title = sideNavList.find(item=>item.path===pathname).label
    return <div className='main-navigation-container'>
        <h1 className='main-navigation-title'>{title}</h1>
        <Button color="secondary" variant="contained" startIcon={<AddIcon />} classes={{containedSecondary:'main-button-text'}}>Upload</Button>
    </div>
}

export default MainNavbar