// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import{RiAdvertisementLine}from 'react-icons/ri';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// next link
import Link from 'next/link';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Laat jouw merk opvallen in de menigte en een blijvende indruk kunt achterlaten',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Of je nu een gloednieuw website nodig hebt of uw bestaande site wil upgraden',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Samen kunnen we jouw digitale visie omzetten in een overtuigende online realiteit',
  },
  {
    icon: <RiAdvertisementLine />,
    title: 'SEA',
    description: 'Een kleine ondernemer bent die lokale klanten wil aantrekken naar zijn platform',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Als je jouw website beter wilt optimaliseren voor betere resultaten & vindbaarheid',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={'/contact'} className='group'>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
