import React from 'react';
import Slider from 'react-slick';
import Products from '../../products.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='mx-[140px] max-[1400px]:mx-[10px]'>
      <div className='mt-10'>
        <h2 className='text-center text-2xl'>New Arrivals</h2>
      </div>
      <div className='mt-10'>
        <div className='hidden md:flex flex-wrap gap-6 justify-center items-center'>
          {Products.map(product => (
            <div className='my-5' key={product.key}>
              <img className='w-[268px] h-[322px] max-[1400px]:w-[156px] max-[1400px]:h-[171px]' src={product.imageLink} alt={product.title} />
              <h2 className='text-center font-semibold text-xl my-5'>{product.title}</h2>
              <div className='flex justify-center items-center gap-10'>
                <p>${product.discountedPrice}.00</p>
                <p className='font-light text-red-600 line-through'>${product.price}.00</p>
              </div>
            </div>
          ))}
        </div>

        <div className='md:hidden'>
          <Slider {...settings}>
            {[Products.slice(0, 4), Products.slice(4, 8)].map((group, index) => (
              <div key={index}>
                <div className='flex flex-wrap justify-center items-center gap-6'>
                  {group.map(product => (
                    <div className='my-5' key={product.key}>
                      <img className='w-[268px] h-[322px] max-[1400px]:w-[156px] max-[1400px]:h-[171px]' src={product.imageLink} alt={product.title} />
                      <h2 className='text-center font-semibold text-xl my-5 max-[1400px]:text-lg'>{product.title}</h2>
                      <div className='max-[1400px]:gap-4 flex justify-center items-center gap-10'>
                        <p className='max-[1400px]:text-sm'>${product.discountedPrice}.00</p>
                        <p className='max-[1400px]:text-sm font-light text-red-600 line-through'>${product.price}.00</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
