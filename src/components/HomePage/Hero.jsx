import HeroImg from '../../assets/Hero.jpeg'

const Hero = () => {
  return (
    <div className='mt-5'>
      <div className='w-[100%] overflow-hidden'>
        <img className='absolute w-[100%] object-cover object-top h-[775px] max-[1400px]:h-[520px] z-[-1]' src={HeroImg} alt="" />
      </div>
      <div className='max-[900px]:pb-40 h-[775px] z-10 text-white flex text-center flex-col justify-center items-center'>
        <p className='junge italic text-xl drop-shadow-lg my-5'>Fashion</p>
          <h1 className='max-[1400px]:text-2xl text-5xl tracking-widest drop-shadow-lg leading-[4rem]  font-bold'>PERFECT BUNCH <br /> FOR EVERY OCCASION</h1>
          <button className='bg-red-600 text-white font-semibold py-5 px-10 mt-10'>Shop Now</button>
      </div>
    </div>
  )
}

export default Hero