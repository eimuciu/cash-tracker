import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export default function DateSeperator() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        <SwiperSlide>This year</SwiperSlide>
        <SwiperSlide>Previous month</SwiperSlide>
        <SwiperSlide className="text-[#880D1E] font-bold">
          Current month
        </SwiperSlide>
        <SwiperSlide>Custom date</SwiperSlide>
      </Swiper>
    </>
  );
}
