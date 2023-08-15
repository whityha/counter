import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { SliderContainer, SlideTitle, Text } from './styled';
import { NavigateButton } from './buttons';
import { DATA } from '../../mocks';
import { Transition } from 'react-transition-group';

export const Slider = ({data, activeIndex}: {data: typeof DATA; activeIndex: number}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isShow, setIsShow] = useState(false);
  
  const swiperRef = useRef<SwiperType>();
  const nodeRef = useRef(null);
  const activeIndexRef = useRef<number>(activeIndex);
  
  const currentSliderData = data[activeIndexRef.current];

  useEffect(() => {
    const timeout = setTimeout(() => {
      activeIndexRef.current = activeIndex
      setIsShow(true)
    }, 500);

    return () => {
      clearTimeout(timeout)
      setIsShow(false)
    }
  }, [activeIndex])

  return (
    <Transition in={isShow} nodeRef={nodeRef} timeout={0}>
      {(state) => 
        <SliderContainer ref={nodeRef} state={state} key={activeIndexRef.current}>
          <NavigateButton disabled={activeSlide === 0} type='prev' onClick={() => swiperRef.current?.slidePrev()} />
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Navigation]}
            onSlideChange={(a) => setActiveSlide(a.activeIndex)}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              setActiveSlide(0)
            }}
            >
            {
              currentSliderData.slider.map(({text, title}, i) => 
                <SwiperSlide key={title + i}>
                    <SlideTitle>{title}</SlideTitle>
                    <Text>{text}</Text>
                </SwiperSlide>)
            }
          </Swiper>
          <NavigateButton disabled={activeSlide === currentSliderData.slider.length - 3} type='next' onClick={() => swiperRef.current?.slideNext()} />    
        </SliderContainer>
      }
    </Transition>
  )
}
