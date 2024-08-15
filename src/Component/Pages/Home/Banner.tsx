
import Button from '@/Component/Header/ui/Button';
import Container from '@/Container/Container';
import Image from 'next/image';
import React from 'react'


const getData = async () => {
  const response = await fetch(`http://localhost:3000/api/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  return response.json()
};

export const Banner = async() => {

  const {banner} = await getData()
  // console.log(banner)



  return (
    <div className="bg-bannerColor h-[480px] items-center">
      {/* left-side */}
      <Container className="flex justify-between items-center">
        <div className='mt-20 space-y-5'>
          <p className="text-white font-semibold">{banner.priceText}</p>
          <h1 className="text-white font-bold text-6xl">
          {banner.title}
          </h1>
          <h1 className="text-white font-semibold">
            {banner.textOne} <span className="text-[#FFD441]">{banner.offerPrice}</span> {banner.textTwo}
          </h1>
          <Button className='bg-white text-black w-32  hover:text-white hover:bg-transparent hover:bg-bannerColor border hover:border-white/40 duration-300 rounded-md '>Shop now</Button>
        </div>
        {/* right-side */}
        <div className='mt-20'>
          <Image className="w-80" src={banner.image} alt="bannerImage" />
        </div>
      </Container>
    </div>
  );
}
