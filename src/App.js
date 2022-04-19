import {useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css'
// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       monsters:[],
//       searchField:'',
     
//     }
//     console.log('constructor')
    // this.handleClick = this.handleClick.bind(this);
  // }
  
  
  // componentDidMount(){
  //   console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //    .then((response)=> response.json())
  //    .then((users) => this.setState(() =>{
  //      return {monsters: users}
  //    }))
  //   };
  // onSearchChange = (event) =>{
  //   const searchField = event.target.value.toLowerCase();
  
  //   this.setState(()=>{
  //     return {searchField};
  //   });
    
  //   };


    const App = () =>{
      console.log('render')
      //with functional component body is render method
      //whenever args (props) in functional component change, there's a rerender
      const [searchField, setSearchField] = useState('');
      const [monsters, setMonsters] = useState([]) //[value, setValue]
      const [filteredMonsters, setFilteredMonsters] = useState(monsters)
      // const [stringField, setStringField] = useState('');


      //useEffect takes in two arguments, first a callback funtion, second an array of dependencies
       //empty array is like componentWillMount
      //useEffect is run whenever the second argument of dependency values changes

      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users) => setMonsters(users));
      }, []);
      //everytime this runs it's a different array in memory
      //puts us in a circular loop
      //the solution is to use a useEffect hook

      useEffect(()=>{
        const newFilteredMonsters = monsters
        .filter((monster)=>{ 
          return monster.name.toLocaleLowerCase().includes(searchField)
             }
          );
        

        setFilteredMonsters(newFilteredMonsters)
      }, [monsters, searchField])
     

  
      

      const onSearchChange=(event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
      }
    

       

                console.log(filteredMonsters)
  
    //        this.setState(()=>{
    //   return {searchField};
    // });
    
      
      return(
        <div className="App">
            
          <h1 className='AppTitleWastedTime'>Was this really the best way to prepare for this interview</h1>
        
          <SearchBox 
           className='monsters-search-box'
          onChangeHandler={onSearchChange}
           placeholder='search monsters' 
          
           />
           <CardList monsters={filteredMonsters} />
           </div>
        )
    };
    //by moving this method out of the render function, it is only loaded once instead of on each re-render

  // render() {

  
  //   const {monsters, searchField} = this.state;
  //   const {onSearchChange} = this;
  //   // handleClick(){
    //   this.setState({

    //   }){
    //     if(prevProps === 'bootyMaster'){
    //       nextState === 'booty pahtner'
    //     }
    //   }
    //}
// )
//     console.log('render')
//   return(
//     <div className="App">
        
//       <h1 className='AppTitleWastedTime'>Was this really the best way to prepare for this interview</h1>
    
//       <SearchBox onChangeHandler={onSearchChange}
//        placeholder='search-monsters' 
//        className='monsters-search-box'
//        />
    
     
      
//       {/* {

        
//       filteredMonsters.map((monster)=>{
//         return <div key={monster.id}><h1>{monster.name}</h1></div>
//       })
//       } */}
//        <CardList monsters={filteredMonsters}/>
//     </div>
//   );
  
  
//   }
// }
// // function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
