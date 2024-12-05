import PropTypes from 'prop-types';

const ItemCard = ({ item, onClick }) => (
  <div className="item-card" onClick={onClick} role="button" tabIndex="0">
    <img src={item.imageUrl || "https://via.placeholder.com/150"} alt={item.title || 'Item image'} />
    <span className="status-tag">{item.status || 'Available'}</span>
    <h3>{item.title}</h3>
    <p>{item.body}</p>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    status: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemCard;
