import './category-directory.styles.scss';
import CategoryItem from '../category-item/category-item.jsx';


const CategoryDirectory = ( {categories} ) =>{
  return (
    <div className = "category-directory">
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
  )
      }


      export default CategoryDirectory;