import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './Input.css'
const Input = ({setSearchValue}) => {
    const handleChange = (e) => {
        setValue(e.target.value)
        setTimeout(()=>setSearchValue(e.target.value),1500)
    }
    const [value,setValue] = useState('')
    return (
    <div className='input-container'>
                <FormControl sx={{marginRight: '60px',marginBottom:"20px",backgroundColor:"white",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border:0}}>
                <OutlinedInput
                    color='secondary'
                    sx={{height:"40px",width:"350px"}}
                    id="outlined-adornment-weight"
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    placeholder='search by name'
                    inputProps={{
                        'aria-label': 'weight',
                     }}
                     onChange={handleChange}
                     value={value}
                />
                </FormControl>
    </div>

    )
}

export default Input