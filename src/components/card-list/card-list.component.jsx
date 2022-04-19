
import './card-list.styles.css';
import Card from '../card-component/card.component.jsx';

const CardList = ({ monsters }) =>(
    //runs constructor under the hood
    <div className = 'card-list'>
        {monsters.map((monster)=>{
             console.log('monster in CardList', monster)
            return  <Card key={monster.id} monster={monster}/>
        })}           
 </div>
);

export default CardList;


// import Card from '../card/card.component';
// import './card-list.styles.css';

// const CardList = ({ monsters }) => (
//   <div className='card-list'>
//     {monsters.map((monster) => {
//       return <Card key={monster.id} monster={monster} />;
//     })}
//   </div>
// );

// export default CardList;