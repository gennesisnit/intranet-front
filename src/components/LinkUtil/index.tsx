import { List, ListItem, Link } from "@chakra-ui/react";
import {  ExternalLinkIcon } from "@chakra-ui/icons";
import styles from './styles.module.scss'
import { useEffect, useState } from "react";
import { api } from "@/service/api";



export function LinkUtil() {
  const [link, setLink] = useState<any>();
  
  useEffect(() => {
    api.get("/api/links").then((res) => {
      return setLink(res.data.data);
    });

    

  
  }, []);

  return (
    <List spacing={3} className={styles.list}>
   {
      link?.map(item =>{
        return(
          <ListItem key={item.id}>
          <Link className={styles.link} href={item.attributes.link} isExternal>
          {item.attributes.Titilo} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        )
      })

   }
    
    </List>
  );
}
