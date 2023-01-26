import './Card.css'
import {FaStar} from'react-icons/fa'
import {FaDownload} from'react-icons/fa'


const Card = (props) => {
return (
    <div className='MostPopular-item'>
    <div className='card-warpper'>
    <img className='most-popular-item-image' src={props.image} alt=""/>
    <div className='most-popular-item-content'>
    <h4 className='most-popular-item-title'>
    {props.title}

    <br/>
    <span>  {props.category}  </span>
    </h4>
    <ul> 
    <li><span style={{"color":"yellow"}}><FaStar/></span> <span>  {props.rate} </span>  </li>
    <li><span style={{"color": " var( --color-primary)"}}> <FaDownload/></span><span> {props.download}</span>  </li>
    </ul>
    </div>
    </div>
        </div>
)
}

export default Card