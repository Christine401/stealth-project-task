import CategoryListItem from './CategoryListItem/CategoryListItem'
import './CategoryList.css'
const CategoryList = ({category,handleOnLabelChange}) => {
     const {id,Name,Labels} = category
     return <ul key={id}>
                <p className="category-name">{Name}</p>
                {Labels.map(label=><CategoryListItem key={label.id} label={label} handleOnLabelChange={handleOnLabelChange}/>)}
            </ul>
}

export default CategoryList