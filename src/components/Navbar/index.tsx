import styles from "./styles.module.scss";

import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "@/service/api";
import Link from "next/link";

export function Navbar() {
  const [page, setPage] = useState<any>();
  const [menu, setMenu] = useState<any>();

  useEffect(() => {
    api.get("/api/page?populate=*").then((res) => {
      return setPage(res.data.data);
    });

    api.get("/api/menus?populate=*").then((res) => {
      return setMenu(res.data.data);
    });
  }, []);

 

  return (
    <>
      <div className={styles.ContainerNavbar}>
        <div className={styles.navbar}>
         <Link href='/'>
         <Image
            src={`http://localhost:1337${page?.attributes?.logo.data.attributes.url}`}
            alt="logo"
          />
         </Link>
         

          <nav>
            <ul className={styles.menu}>
              {
              menu?.map( item => {
                return(
                  <li key={item.id}>
                  <a
                    href={item.attributes.link}
                    target="__blank"
                  >
                    <Image src={`http://localhost:1337${item?.attributes?.logo.data.attributes?.url}`} alt="Helpdesk" />
                  </a>
                  <a
                    href={item.attributes.link}
                    target="__blank"
                  >
                   {item.attributes.titulo}
                  </a>
                </li>
                )
              })
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
