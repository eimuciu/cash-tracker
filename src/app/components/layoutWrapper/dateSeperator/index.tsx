import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export default function DateSeperator() {
  const [activeSlide, setActiveSlide] = React.useState<string>('Current month');
  const [slideUnits, setSlideUnits] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(true);
  const swiperRef = React.useRef<any>(null);

  React.useEffect(() => {
    const resizeHandler = (e: any) => {
      if (e.target.innerWidth <= 640) {
        setSlideUnits(1);
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
    setLoading(false);
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
        {!loading && (
          <>
            <SwiperSlide
              onClick={() => {
                setActiveSlide('This year');
              }}
              className={
                (activeSlide === 'This year'
                  ? 'text-[#880D1E] font-bold'
                  : 'text-[black] font-normal') + ' cursor-pointer'
              }
            >
              {/* AWAITING DATA */}
              This year
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                setActiveSlide('Previous month');
              }}
              className={
                (activeSlide === 'Previous month'
                  ? 'text-[#880D1E] font-bold'
                  : 'text-[black] font-normal') + ' cursor-pointer'
              }
            >
              {/* AWAITING DATA */}
              Previous month
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                setActiveSlide('Current month');
              }}
              className={
                (activeSlide === 'Current month'
                  ? 'text-[#880D1E] font-bold'
                  : 'text-[black] font-normal') + ' cursor-pointer'
              }
            >
              {/* AWAITING DATA */}
              Current month
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                setActiveSlide('Custom date');
              }}
              className={
                (activeSlide === 'Custom date'
                  ? 'text-[#880D1E] font-bold'
                  : 'text-[black] font-normal') + ' cursor-pointer'
              }
            >
              {/* AWAITING DATA */}
              Custom date
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
}
