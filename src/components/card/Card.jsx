import  './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.mah.img[0]} alt="fd" />
        <h2>{props.mah.name}</h2>
        <h3>Price: ${props.mah.price}</h3>
    </div>
  )
}

export default Card
