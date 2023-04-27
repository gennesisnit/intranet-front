import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { Navbar } from "@/components/Navbar";
import { Heading, Card } from "@chakra-ui/react";
import { LinkUtil } from "@/components/LinkUtil";
import Slider from "@/components/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { api } from "@/service/api";
import moment from "moment";
import { Noticias } from "@/components/Noticias";

import { MdContactPhone } from "react-icons/md";
import Router from "next/router";




export default function Home() {
  const [persona, setPersona] = useState<any>();

  useEffect(() => {
    api.get("/api/aniversariantes?populate=*").then((res) => {
      setPersona(res.data.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Gênnesis | Intranet</title>
      </Head>
      <Slider />
      <main className={styles.containerMain}>
        <section className={styles.contentMain}>
      
          <Heading className={styles.title} size="md">
            Noticias
          </Heading>
          <div>
            <Noticias />
          </div>
        </section>
        <section className={styles.sidebar}>
          <Heading className={styles.title} size="md">
            Links Úteis
          </Heading>

          <div className={styles.link}>
            <Card className={styles.cardLink} variant="filled">
              <LinkUtil />
            </Card>
          </div>


          <Heading className={styles.title} size="md">
            Acesso Rápido
          </Heading>
          <div className={styles.acessoRapido}>
            <button onClick={ ()=>{
              Router.push('/ramais')
            }}>
              <MdContactPhone size="40" color="3d65aa" />
              Ramais
            </button>
          </div>




          <div className={styles.aniversariantes}>
            <Heading className={styles.title} size="md">
              Aniversariantes
            </Heading>

            <Swiper
              pagination={{
                type: "fraction",
              }}
              autoplay={{ delay: 3000 }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className={styles.containerCarrousel}
            >
              {persona?.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className={styles.imgAniversariante}
                  >
                    <img
                      src={`http://localhost:1337${item?.attributes.foto.data.attributes.url}`}
                    />
                    <span>🎂</span>
                    <span className={styles.nameAniversariante}>
                      {item.attributes.nome}
                    </span>
                    <span className={styles.cargoAniversariante}>
                      {item.attributes.cargo}
                    </span>
                    <span className={styles.dataAniversariante}>
                      {moment(item.attributes.Data).format("DD/MM/YYYY")}
                    </span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}
