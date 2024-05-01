import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { useThemeContext } from '@/app/store/themeStore';

export default function DateSeperator() {
  const [slideUnits, setSlideUnits] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(true);
  const swiperRef = React.useRef<any>(null);

  const [activeSlide, setActiveSlide] = React.useState<string>('Current month');

  const { themeColorsList }: any = useThemeContext();

  React.useEffect(() => {
    const resizeHandler = (e: any) => {
      if (e.target.innerWidth <= 640) {
        setSlideUnits(1);
      } else if (e.target.innerWidth <= 768) {
        setSlideUnits(3);
      } else {
        setSlideUnits(4);
      }
    };

    if (window.innerWidth <= 640) {
      setSlideUnits(1);
    } else if (window.innerWidth <= 768) {
      setSlideUnits(3);
    } else {
      setSlideUnits(4);
    }

    switch (activeSlide) {
      case 'This year': {
        swiperRef.current.swiper.slideTo(0);
        break;
      }
      case 'Previous month': {
        swiperRef.current.swiper.slideTo(1);
        break;
      }
      case 'Current month': {
        swiperRef.current.swiper.slideTo(2);
        break;
      }
      case 'Custom date': {
        swiperRef.current.swiper.slideTo(3);
        break;
      }
      default: {
        swiperRef.current.swiper.slideTo(2);
        break;
      }
    }

    window.addEventListener('resize', resizeHandler);
    setLoading(false);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [activeSlide]);

  const handleFilterSelection = (filter: string) => {
    setActiveSlide(filter);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={slideUnits}
        modules={[Pagination, Navigation]}
        navigation={true}
        style={{ backgroundColor: themeColorsList.secondColor }}
      >
        {!loading && (
          <>
            <SwiperSlide
              onClick={() => {
                handleFilterSelection('This year');
              }}
              className="cursor-pointer"
              style={
                activeSlide === 'This year'
                  ? { color: themeColorsList.activeColor, fontWeight: 'bold' }
                  : { color: 'black', fontWeight: 'normal' }
              }
            >
              This year
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleFilterSelection('Previous month');
              }}
              className="cursor-pointer"
              style={
                activeSlide === 'Previous month'
                  ? { color: themeColorsList.activeColor, fontWeight: 'bold' }
                  : { color: 'black', fontWeight: 'normal' }
              }
            >
              Previous month
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleFilterSelection('Current month');
              }}
              className="cursor-pointer"
              style={
                activeSlide === 'Current month'
                  ? { color: themeColorsList.activeColor, fontWeight: 'bold' }
                  : { color: 'black', fontWeight: 'normal' }
              }
            >
              Current month
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                handleFilterSelection('Custom date');
              }}
              className="cursor-pointer"
              style={
                activeSlide === 'Custom date'
                  ? { color: themeColorsList.activeColor, fontWeight: 'bold' }
                  : { color: 'black', fontWeight: 'normal' }
              }
            >
              Custom date
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
}
