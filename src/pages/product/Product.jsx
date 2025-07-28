import { useParams } from 'react-router-dom';
import data from '../../../public/data';
import Header from '../../components/header/Header';
import  './product.css'

function Product() {
    const {id}=useParams();
    console.log(id);
    let mah=data.filter(m=> m.id==id)[0];
    console.log(mah);
    
  return (
    <div>
       <Header></Header>
       <a href="/">Back</a>
       <div className="ota container">
         <img src={mah.img[0]} alt="" />
         <div className="text">
            <h1>{mah.name}</h1>
            <p>{mah.description}</p>
            <h2>{mah.price}</h2>
            <p>{mah.stars} stars</p>
            <p>color:{mah.color}</p>
            <button>Add to Cart</button>
         </div>
       </div>
    </div>
  )
}

export default Product
