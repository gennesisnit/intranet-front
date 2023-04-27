import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { api } from "@/service/api";
import moment from "moment";
import 'moment/locale/pt-br'

export function Noticias() {
  const [noticia, setNoticia] = useState<any>();

  useEffect(() => {
    api
      .get("/api/noticias?populate=*")
      .then((res) => {
        setNoticia(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
  <div  className={styles.cardNoticias}>
      {noticia?.map((item) => (
        <Card
        as='a'
        href={`/noticias/${item.id}`}
        key={item.id}
        overflow="hidden"
        marginLeft='1.5rem'
        marginTop='1.5rem'
        className={styles.cardContent}
        >
          <Image
            objectFit="cover"
            src={`http://localhost:1337${item?.attributes.preview.data?.attributes.url}`}
            alt={item.id}
            className={styles.cardImg}
          />

          <Stack>
            <CardBody className={styles.cardBody}>
              <Text className={styles.dataCreate} py="2">{ moment(item.attributes.createdAt).locale('pt-br').format('L')}</Text>
              <Heading size="sm" >{item.attributes.titulo}</Heading>
            </CardBody>
          </Stack>
        </Card>
        
      ))}

   </div>
  );
}
