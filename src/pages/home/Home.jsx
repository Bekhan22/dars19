import { Link } from 'react-router-dom'
import data from '../../../public/data'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import  './home.css'

function Home() {
  return (
    <div>
        <Header></Header>
       
        <section className='container hero'>
            {data.map((m,i)=>{
                return <Link to={"/product/"+m.id} state={"mah}"}><Card key={i} mah={m}></Card></Link>
            })}
             
        </section>
    </div>
  )
}

export default Home
