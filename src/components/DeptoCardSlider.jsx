import React, { useEffect, useRef } from "react";
import DeptoCard from "./DeptoCard";
import { deptos } from "../consts/deptos";
import { register } from "swiper/element/bundle";

register();

const DeptoCardSlider = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="false"
      autoplay="true"
      style={{
        "--swiper-navigation-color": "#fff !important",
        "--swiper-navigation-size": "32px",
        "--swiper-navigation-sides-offset": "30px",
      }}
    >
      {deptos.slice(0, 8).map((depto, i) => {
        return (
          <swiper-slide key={i} class="flex">
            <DeptoCard depto={depto} client:load />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default DeptoCardSlider;
