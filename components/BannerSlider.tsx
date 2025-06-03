import { FC, useRef, useState } from "react";
import { Banner } from "../types/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface BannerSliderProps {
  banners: Banner[];
}

const ARROW_SRC = "/img/arrow.svg";
const AUTOPLAY_DELAY = 5000;

const BannerSlider: FC<BannerSliderProps> = ({ banners }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slidesCount = banners.length;

  const handleAutoplayTimeLeft = (
    _swiper: SwiperType,
    time: number,
    p: number
  ) => {
    setProgress(1 - p);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handlerMouseEnter = () => {
    swiperRef.current?.autoplay?.pause();
  };

  const handlerMouseLeave = () => {
    swiperRef.current?.autoplay?.resume();
  };

  return (
    <div className="w-full md:px-6 lg:px-4">
      <div className="relative w-full max-w-[1240px] mx-auto md:mt-6">
        <div
          className="absolute top-0 right-0 w-full bg-[#ebebeb] z-0 translate-x-[12px] translate-y-[8px] opacity-60 pointer-events-none"
          style={{ height: "calc(100% - 8px)" }}
        ></div>
        <div
          className="absolute top-0 right-0 w-full bg-[#cacaca] z-10 translate-x-[6px] translate-y-[4px] opacity-80 pointer-events-none"
          style={{ height: "calc(100% - 4px)" }}
        ></div>
        <div
          className="relative z-20 overflow-hidden shadow-lg bg-white cursor-pointer banner-hover-gradient"
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            navigation={{
              nextEl: ".banner-next",
              prevEl: ".banner-prev"
            }}
            autoplay={{
              delay: AUTOPLAY_DELAY,
              disableOnInteraction: false
            }}
            onSlideChange={handleSlideChange}
            onBeforeInit={swiper => (swiperRef.current = swiper)}
            onAutoplayTimeLeft={handleAutoplayTimeLeft}
            className="w-full "
          >
            {banners.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={banner.imageUrl}
                  alt={`banner ${idx + 1}`}
                  className="w-full h-[210px] md:h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}

            <div className="hidden md:flex absolute z-10 bottom-5 right-8 pointer-events-none flex-row items-center space-x-3">
              <button
                className="banner-prev pointer-events-auto bg-black/50 hover:bg-orange transition-colors rounded-full w-9 h-9 flex items-center justify-center"
                aria-label="Previous"
                tabIndex={0}
                type="button"
              >
                <img
                  src={ARROW_SRC}
                  alt="prev"
                  className="w-3 h-3 filter invert"
                  draggable={false}
                />
              </button>
              <div className="flex flex-col items-center min-w-[60px] mx-2">
                <span className="text-white font-regular select-none leading-none text-sm">
                  {activeIndex + 1} / {slidesCount}
                </span>
                <div className="w-[60px] h-[2px] bg-white/40 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-orange"
                    style={{
                      width: `${progress * 100}%`,
                      transition: progress === 0 ? "none" : "width 0.15s linear"
                    }}
                  />
                </div>
              </div>
              <button
                className="banner-next pointer-events-auto bg-black/50 hover:bg-orange transition-colors rounded-full w-9 h-9 flex items-center justify-center"
                aria-label="Next"
                tabIndex={0}
                type="button"
              >
                <img
                  src={ARROW_SRC}
                  alt="next"
                  className="w-3 h-3 filter invert rotate-180"
                  draggable={false}
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
