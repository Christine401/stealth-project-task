import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import SettingsIcon from '@mui/icons-material/Settings';

import CategoryList from './CategoryList/CategoryList'
import './Categories.css';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState('')
  const handleOnLabelChange=(labelId,isChecked)=>{
    const modifiedData = categories.map(category=>{
      const {Labels} = category;
          return {...category,Labels:Labels.map(label=>{
          if(label.id === labelId) {
            return {...label,checked:isChecked}
          }
          else {
            return {...label}
          }
        })}

    

    })
    setCategories(modifiedData)
  }
  const categoriesUrl =
    "https://646312614dca1a661353d0ee.mockapi.io/api/Category";
  useEffect(() => {
    const fetchCategories = async () => {
      try {
      setIsLoading(true);
      const { data } = await axios.get(categoriesUrl);
    console.log(data)
      const modifiedData = data.map(d=>{
        const {Labels} = d
        return {...d,Labels:Labels.map(label=>{
          return {...label,checked:false}
        })}
      })
        setCategories(modifiedData);
        setIsLoading(false)
        setErrorMessage('')
      }
      catch(e) {
        setIsLoading(false)
        setErrorMessage(e.message)
        setCategories([])
      }
    };
    fetchCategories()
  }, []);
  const renderTable = () => {
    if(isLoading) {
        return <CircularProgress color="secondary" />
    } 
    else if(errorMessage !== "") {
      return <h1>{errorMessage}</h1>
    }
    else if(categories.length){
      return <>
      <div className="category-header">
         <h3 className="categories-title">Categories</h3>
        <SettingsIcon />
     </div>
     {categories.map(category=>{
        return <CategoryList key={category.id} category={category} handleOnLabelChange={handleOnLabelChange} />
      })}
     </>
    }
  }
  return <div className="categories-container">{renderTable()}</div>;
};

export default Categories;
