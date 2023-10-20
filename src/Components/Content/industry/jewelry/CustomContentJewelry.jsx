import useMediaQuery from "../../../../hooks/useMediaQuery";

import jewelryGeneric from "../../../../assets/industryImages/jewelry/industry_jewelry_generic.jpg";
import jewelryProcess from "../../../../assets/industryImages/jewelry/industry_jewelry_process.jpg";

import EndOfContent from "../../EndOfContent";

export default function CustomContentJewelry({ width }) {
  const isDevice = useMediaQuery(768);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      rowGap: 15,
      width: width,
      fontSize: isDevice ? "16px" : "20px",
      lineHeight: "1.5",
    },
    imageRight: {
      float: "right",
      marginLeft: 20,
    },
    imageLeft: {
      float: "left",
      marginRight: 20,
    },
  };

  return (
    <div className="textContainer" style={styles.container}>
      <h2>Joyeria</h2>
      <p>
        La aplicacion de la impresión 3D (o manufactura aditiva) en joyeria ha
        traído avances importantes para esta industria, transformando la forma
        en que las joyas son diseñadas y manufacturadas. Esta tecnología ofrece
        varios beneficios, que incluyen la mejora de las capacidades de diseño,
        mejora de la eficiencia, y aumento de las opciones de personalización
        para sus clientes.
      </p>
      <div style={{display: 'flex', flexDirection: 'row', gap: "25px", padding: "40px 0 40px 0"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ height: "300px" }} src={jewelryGeneric} alt="" />
        </div>
        <p>
          De la mejora en las capacidades de diseño, el método tradicional
          requiere de una artesanía minuciosa, lo que limita el producto final.
          Sin embargo, con la impresión 3D, los diseñadores pueden transformar
          intrincados diseños a piezas físicas, sin ningún esfuerzo, ampliando
          así los limites a la creatividad y permitiendo la producción de piezas
          complejas y llenas de detalles.
        </p>
      </div>
      <p>
        Esta última, es una capacidad especialmente importante en la industria
        de la joyería y ahora posible mediante la impresión 3D. Sus clientes
        pueden obtener ahora piezas personalizadas y únicas, diseñadas
        específicamente con sus gustos. Desde anillos de compromiso hasta
        pendientes, la manufactura aditiva permite a los joyeros producir joyas
        únicas en su clase con diseños complejos.
      </p>
      <p>
        Nuestras soluciones de impresión en 3D se desarrollaron para producir
        patrones de fundición de joyería que se adaptan a su método actual de
        fabricación. Esto permite la creación, iteración y producción rápida y
        rentable de todos los estilos de joyas, incluidas aquellas de geometrías
        más complejas. Los equipos de nuestro portafolio que se usan para este
        proceso son la Figure 4 Jewelry y la MJP 2500W Plus, siendo la ultima la
        impresora usada por los líderes mundiales en joyería.
      </p>
      <p>
        Los principales criterios para determinar cuál es la mejor opción para
        su empresa son los siguientes:
      </p>
      <p>
        Recomendamos la impresora 3D, Figure 4 Jewelry, para joyerías con las
        siguientes características
      </p>
      <ul>
        <li>Produce menos de 50kg al año</li>
        <li>
          Tiene un volumen mayor a 50kg y busca un complemento en resina para
          producción rápida de lotes chicos.
        </li>
        <li>
          Produce piezas muy delicadas, con paredes muy delgados, estilo medio
          oriente e hindú.
        </li>
      </ul>
      <p>
        Así mismo, recomendamos la impresora 3D, MJP 2500W Plus, en los
        siguientes casos:
      </p>
      <ul>
        <li>Produce más de 50kg al año.</li>
        <li>
          Ideal para las que ya usan el método de vaciado (lost wax casting) o
          las que quieren comenzar a producir de esta manera.
        </li>
      </ul>
      <p>
        Las impresoras de 3D Systems te permiten trabajar en varias etapas del
        proceso de vaciado (Lost wax casting). Las etapas que puedes optimizar
        con la manufactura aditiva son:
      </p>
      <ul>
        <li>Diseño de prototipos para pruebas</li>
        <li>
          Impresión del patrón en cera, estas piezas son impresas usualmente con
          el soporte para el “árbol”
        </li>
        <li>
          Impresión de patrón maestro para la elaboración de moldes de caucho
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 40px 0",
        }}
      >
        <img style={{ height: "300px" }} src={jewelryProcess} alt="" />
      </div>
      <EndOfContent />
    </div>
  );
}
