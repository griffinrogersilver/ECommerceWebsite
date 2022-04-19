
import './card.styles.css';

const Card = ({monster}) =>{
  const {id, name, email} = monster;
  // functional components are usu. only passed two arguments, props, or rarely, forwardRef
             return (
                  <div className='card-container' key={id}>
                   <img 
                   alt={`monster ${name}`} 
                   src={`https://robohash.org/${id}?set=set2&size=180x180`}
                   />
                 <h2>{name}</h2>
                 <p>{email}</p>
                  </div>
             );
        
            };


export default Card;