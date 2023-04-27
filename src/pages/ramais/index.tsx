import styles from "./styles.module.scss";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "@/service/api";
import Head from "next/head";

function Ramais() {
  const [ramais, setRamais] = useState<any>();

  useEffect(() => {
    api.get("/api/ramais?populate=*").then((res) => {
      setRamais(res.data.data);
    });
  }, []);

  console.log(ramais);

  return (
    <>
    <Head>
    <title> Gênnesis | Ramais</title>
    </Head>

      <div className={styles.containerRamais}>
        <Heading as='h2' className={styles.title} size="lg">
          Ramais
        </Heading>
        <TableContainer>
          <Table variant="striped">
            <TableCaption>Lista de ramais Gênnesis</TableCaption>
            <Thead>
              <Tr>
                <Th>Setor</Th>
                <Th>Ramal</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ramais?.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.attributes.setor}</Td>
                    <Td>{item.attributes.ramal}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Ramais;
