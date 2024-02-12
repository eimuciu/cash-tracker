import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export default function DateSeperator() {
  const [slideUnits, setSlideUnits] = React.useState<number>(1);
  const swiperRef = React.useRef<any>(null);

  React.useEffect(() => {
    const resizeHandler = (e: any) => {
      if (e.target.innerWidth <= 640) {
        setSlideUnits(2);
      } else if (e.target.innerWidth <= 768) {
        setSlideUnits(3);
      } else {
        setSlideUnits(4);
      }
      swiperRef.current.swiper.slideTo(2);
    };

    if (window.innerWidth <= 640) {
      setSlideUnits(1);
    } else if (window.innerWidth <= 768) {
      setSlideUnits(3);
    } else {
      setSlideUnits(4);
    }
    swiperRef.current.swiper.slideTo(2);

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={slideUnits}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          {/* AWAITING DATA */}
          This year
        </SwiperSlide>
        <SwiperSlide>
          {/* AWAITING DATA */}
          Previous month
        </SwiperSlide>
        <SwiperSlide className="text-[#880D1E] font-bold">
          {/* AWAITING DATA */}
          Current month
        </SwiperSlide>
        <SwiperSlide>
          {/* AWAITING DATA */}
          Custom date
        </SwiperSlide>
      </Swiper>
    </>
  );
}
