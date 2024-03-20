import { register } from "swiper/element/bundle";
import { getDownloadURL, ref } from "firebase/storage";
import { useRef, useEffect, useState } from "react";
import { listAll } from "firebase/storage";
import { storage } from "../firebase";

register();

const Slider = ({ id }) => {
  const imgListRef = ref(storage, `${id}`);
  const [imgsURLS, setImgURLS] = useState([]);

  const swiperElRef = useRef(null);

  useEffect(() => {
    if (imgListRef) {
      listAll(imgListRef).then((res) =>
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImgURLS((prev) => [...prev, url]);
          });
        })
      );
    }

    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
      style={{
        "--swiper-navigation-color": "#fff !important",
        "--swiper-pagination-color": "#fff !important",
      }}
    >
      {imgsURLS.map((url, i) => {
        return (
          <swiper-slide key={i}>
            <img src={url} alt="Apartment Image" className="max-h-[600px]" />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default Slider;
