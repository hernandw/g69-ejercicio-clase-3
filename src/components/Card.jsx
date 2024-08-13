
import PropTypes from 'prop-types';

const Card = ({ item, cart, setCart }) => {

const addToCart = (item) => {
    
    setCart([...cart, item]);
};

  const { id,name, price } = item;
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">${price}</p>
      </div>
      <div className='d-flex'>
      <button>ver mas</button>
      <button className=" btn btn-primary" onClick={() => addToCart(item)}>agregar</button>
      </div>
    </div>
  );
};


Card.propTypes = {
  item: PropTypes.object
}
export default Card;
