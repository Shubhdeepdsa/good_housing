import HeroImage from './Hero.svg'
import HeroBg from './Background.svg'
const Hero = () => {
    return (
        <>
            <div className="flex flex-row hero_container justify-center -space-x-20 bg-[#1C4075] items-center tracking-tighter ">
                <div className="hero_text_section  h-[720px] w-[800px]   static ">
                    <img src={HeroBg} className='h-[720px] w-[800px] absolute  z-0' />
                    <div className="title_container w-[600px]  absolute z-2 pt-24 pl-28">
                        <p className='text-7xl font-semibold top-0 left-0 text-white  '>Homes that empower extraordinary lives</p>
                    </div>
                </div>
                <img src={HeroImage} className=' h-[720px] w-[720px] object-fill ' />
            </div>
        </> 
    )
}
export default Hero;
