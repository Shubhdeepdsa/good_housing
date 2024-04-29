import React from 'react';
import bed from './PillImages/bed.svg'
import bath from './PillImages/bath.svg'
import car from './PillImages/car.svg'
interface ProductCardProps {
  img: string; // Assuming img is the URL or base64 encoded string of the image
  title: string;
  location: string;
  bedCount: number;
  bathCount: number;
  carCount: number;
}
const ProductCard: React.FC<ProductCardProps> = ({ img, title, location, bedCount, bathCount, carCount }) => {
  return (
    <>
      <div className="product-container flex flex-col border-2 border-[#1C40751F shadow-lg rounded-[12px] pb-6">
        <img src={img} />
        <div className="card_content px-4 mt-6">
          <p className=' font-bold text-[#1C4075]'>{title}</p>
          <p className='text-[#1C4075] '>{location}</p>
          <div className="pill_container flex space-x-2 justify-start mt-4">
            <div className="bed flex rounded-[6px] px-2 py-[6px] bg-[#F6F7F9]">
              <img src={bed} />
              <p className='text-[#1C4075] text-sm font-semibold'>&nbsp; {bedCount} Bed</p>
            </div>
            <div className="bath flex rounded-[6px] px-2 py-[6px] bg-[#F6F7F9]">
              <img src={bath} />
              <p className='text-[#1C4075] text-sm font-semibold'>&nbsp; {bathCount} Bath</p>
            </div>
            <div className="car flex rounded-[6px] px-2 py-[6px] bg-[#F6F7F9]">
              <img src={car} />
              <p className='text-[#1C4075] text-sm font-semibold'>&nbsp; {carCount} Car Space</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
