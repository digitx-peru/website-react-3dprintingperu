import PageContent from "../../Components/PageContent";

import NewsCard from "../../Components/HomeScreen/NewsCard";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Home() {
  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  const styles = {
    newsCardContainer: {
      display: "flex",
      flexDirection: isColumnLayoutWidth ? "column" : "row",
      gap: 40,
      justifyContent: "space-between",
      padding: 15,
    },
  };

  return (
    <>
      <PageContent
        heroTitle={"Desafia los limites con la Impresion 3D Industrial"}
        heroMessage={null}
        heroImage={"hero/hero_img_home.jpg"}
      >
        <div className="newsCardContainer" style={styles.newsCardContainer}>
          <NewsCard
            redirectUrl="/noticias/universidad-salsburgo-realiza-cirugia"
            title="La universidad de Salsburgo realiza sorprendente cirugía"
            // message="Lorem ipsum"
            image={
              "/images/news/newsOne/news_image_thumbail_3dprint_organs.jpeg"
            }
          />
          <NewsCard
            redirectUrl="/noticias/la-nueva-sls-300"
            title="La nueva SLS 300"
            image={"/images/news/newsTwo/news_image_thumbnail_new_sls_300.png"}
            // message="Lorem ipsum"
          />
          <NewsCard
            redirectUrl="/noticias/la-nueva-ext-1270"
            title="La nueva EXT 1270"
            image={
              "/images/news/newsThree/news_image_new_ext_1270_titan_pellet.png"
            }
            // message="Lorem ipsum"
          />
        </div>
      </PageContent>
    </>
  );
}
