import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { api } from "@/service/api";
import { useEffect } from "react";
import { useState } from "react";


export default function Slider(){

    const [slider, setSlider] = useState<any>();
  
  useEffect(() => {
    api.get("/api/sliders?populate=*").then((res) => {
      return setSlider(res.data.data);
    });

  
  }, []);


    return(
        
      <Swiper
      effect="fade"
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className={styles.containerCarrousel}
    >
   {
      slider?.map(item =>{
        return(
          <SwiperSlide key={item.id} className={styles.item}>
          <img src={`http://localhost:1337${item?.attributes.slider.data.attributes.url}`} alt={item.id} />
        </SwiperSlide>
        )
      })
   }


    </Swiper>
    )
}