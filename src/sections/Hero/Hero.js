import './Hero.css'
import { PrimaryButton } from '../../components/index'



function Hero() {
return (
    <div className='hero-main'>
        <div className='hero-text'>
        <h6 className='hero-subtitle'> welcome to cyborg</h6>
        <h4 className='hero-title'> <em> Browse </em> Our popular games here  </h4>
        <PrimaryButton>browse nw</PrimaryButton>
     {  /* <div className='main-button'>
        <a href='browse.html'> Browse NOw </a>
</div>*/}
        </div>
    </div>
)
}

export default Hero