import axios, { Axios } from "axios";
import Head from "next/head";
import styles from './styles.module.scss'
import moment from "moment";
import 'moment/locale/pt-br'

function NoticiasPage({ noticias }) {


  return (
    <>
    <Head>
        <title> Gênnesis | {noticias.attributes.titulo}</title>
    </Head>

      <div className={styles.container}>
        <h1 className={styles.titulo}>{noticias.attributes.titulo}</h1>
        <h4 className={styles.att}>{moment(noticias.attributes.updatedAt).locale('pt-br').format('LLL')}</h4>

        <div
          dangerouslySetInnerHTML={{ __html: noticias.attributes.conteudos }}
        ></div>
      </div>
    </>
  );
}


export default NoticiasPage;



export async function getStaticProps({ params }) {
  const noticiasRes = await axios.get(
    `http://localhost:1337/api/noticias/${params.id}`
  );

  return {
    props: {
      noticias: noticiasRes.data.data,
    },
  };
}



export async function getStaticPaths() {
  const noticiasRes = await axios.get("http://localhost:1337/api/noticias");

  const paths = noticiasRes.data.data.map((res) => {
    return { params: { id: res.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
