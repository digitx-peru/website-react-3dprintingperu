import PageContent from "../Components/PageContent";

import NewsCard from "../Components/Content/NewsCard";
import HomePageBrandsBanner from "../Components/HomeScreen/HomePageBrandsBanner";
import TitleMessageContainer from "../Components/Content/TitleMessageComponent/TitleMessageContainer";
import IconInfoCard from "../Components/Content/TitleMessageComponent/IconInfoCard";

export default function Home() {
  return (
    <>
      <PageContent
        heroTitle={"Desafia los limites con la Impresion 3D Industrial"}
        heroMessage={null}
        backgroundImage={"/images/pages/home/hero_img_home.jpg"}
      >
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        <HomePageBrandsBanner />
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        <TitleMessageContainer
          title={"Noticias"}
        >
          <NewsCard
            redirectUrl="/noticias/universidad-salsburgo-realiza-cirugia"
            title="La universidad de Salsburgo realiza sorprendente cirugía"
            image={
              "/images/news/newsOne/news_image_thumbail_3dprint_organs.jpeg"
            }
          />
          <NewsCard
            redirectUrl="/noticias/la-nueva-sls-300"
            title="La nueva SLS 300"
            image={"/images/news/newsTwo/news_image_thumbnail_new_sls_300.png"}
          />
          <NewsCard
            redirectUrl="/noticias/la-nueva-ext-1270"
            title="La nueva EXT 1270"
            image={
              "/images/news/newsThree/news_image_new_ext_1270_titan_pellet.png"
            }
          />
        </TitleMessageContainer>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        <TitleMessageContainer
          title={"En todo el proceso de Manufactura Digital"}
        >
          <IconInfoCard
            title={"En todo el ciclo de producción"}
            message={
              "Acompañamos tu proyecto desde el prototipo hasta la producción, garantizando rapidez, calidad y eficiencia en costos."
            }
            iconImagePath="/images/components/homePage/infocard/info_card_icon_1.png"
            backgroundColor={"#7BEFB1"}
          />
          <IconInfoCard
            title={"Diseño 3D y Prototipado Rápido"}
            message={
              "Obtén retroalimentación de tu diseño 3D desde la cotización para optimizar el diseño antes de fabricar y luego prototipalo con facilidad."
            }
            iconImagePath="/images/components/homePage/infocard/info_card_icon_2.png"
            backgroundColor={"#7BEFB1"}
          />
          <IconInfoCard
            title={"Producción a Corto Plazo"}
            message={
              "Soluciones de fabricación de componentes industriales para necesidades rápidas y lotes de piezas chicos a medianos."
            }
            iconImagePath="/images/components/homePage/infocard/info_card_icon_3.png"
            backgroundColor={"#7BEFB1"}
          />
        </TitleMessageContainer>
      </PageContent>
    </>
  );
}
