
import './search-box.styles.css';

//we import the styling for each component for the developer to know where the source of the styling
//when website goes to production, bundles all css into the same file.
//More modularity for the developer. 
const SearchBox =({className, placeholder, onChangeHandler }) =>(
                <input
                className={`search-box ${className}`}
                type='search'
                // turns input box into actual search box
                //creates little x to clear the search
                placeholder={placeholder}
                onChange={onChangeHandler}
                />
    
);

export default SearchBox;