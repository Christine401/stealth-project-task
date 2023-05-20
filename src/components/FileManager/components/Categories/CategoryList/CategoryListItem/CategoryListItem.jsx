import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './CategoryListItem.css';
const CategoryListItem = ({label,handleOnLabelChange}) => {
    const {Name,id,checked} = label
   const onCheckboxChange =(event)=>{
    handleOnLabelChange(id,event.target.checked);
   }
    return <li>
        <FormControlLabel 
            classes={{label:'checkbox-category-label'}}
            label={Name}
            control={ <Checkbox checked={checked} color="secondary" onChange={onCheckboxChange} />}
        />
       </li>
}

export default CategoryListItem