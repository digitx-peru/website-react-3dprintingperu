import { Button, Card } from "antd";

export default function ApplicationContent() {
  return (
      <div style={styles.container}>
        <img
          src="https://picsum.photos/400/300"
          alt=""
          style={{ float: "right", marginLeft: 20}}
        />
        <h3>The Challenge</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          assumenda? Neque doloribus eos iusto quidem architecto tempore,
          voluptate repudiandae molestiae saepe dolore atque ipsam corporis
          minima laudantium sint at. Fugiat.
        </p>
        <h3>The Solution</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          lacus laoreet non curabitur gravida arcu ac. Senectus et netus et
          malesuada fames ac turpis egestas. Consequat mauris nunc congue nisi
          vitae suscipit. Porta non pulvinar neque laoreet suspendisse interdum
          consectetur libero id. Euismod quis viverra nibh cras pulvinar mattis
          nunc sed. Vel risus commodo viverra maecenas accumsan lacus vel
          facilisis. Nam aliquam sem et tortor consequat id porta. Aliquam ut
          porttitor leo a. Dui sapien eget mi proin sed. Est lorem ipsum dolor
          sit. Non quam lacus suspendisse faucibus interdum posuere lorem. Non
          consectetur a erat nam at. Mi in nulla posuere sollicitudin aliquam
          ultrices. Suscipit adipiscing bibendum est ultricies integer quis
          auctor elit sed. Ac turpis egestas sed tempus urna et pharetra
          pharetra. Ut aliquam purus sit amet luctus. Aliquam faucibus purus in
          massa tempor nec feugiat nisl pretium. Tortor consequat id porta nibh
          venenatis cras. Vitae nunc sed velit dignissim sodales ut eu. Nisl
          purus in mollis nunc sed id semper risus. Vel pharetra vel turpis nunc
          eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin.
          Ultricies leo integer malesuada nunc vel risus commodo viverra
          maecenas. Elit ullamcorper dignissim cras tincidunt. Leo in vitae
          turpis massa sed elementum tempus. Sociis natoque penatibus et magnis
          dis. Fermentum iaculis eu non diam phasellus. Rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Turpis
          egestas pretium aenean pharetra magna ac placerat vestibulum lectus.
          Risus feugiat in ante metus dictum at. Nibh tortor id aliquet lectus
          proin nibh nisl. In tellus integer feugiat scelerisque varius morbi
          enim. Interdum velit laoreet id donec ultrices. At augue eget arcu
          dictum varius duis at consectetur. In vitae turpis massa sed. Porta
          nibh venenatis cras sed felis eget velit. Pellentesque nec nam aliquam
          sem et tortor consequat. Sed id semper risus in hendrerit gravida
          rutrum. At elementum eu facilisis sed odio. Pellentesque eu tincidunt
          tortor aliquam nulla facilisi cras. Etiam tempor orci eu lobortis
          elementum nibh tellus molestie nunc. Nisl purus in mollis nunc. Id
          donec ultrices tincidunt arcu non sodales neque sodales.
        </p>
      </div>
  );
}

const styles = {
  container: {
    padding: 50,
    textAlign: "left",
  },
};
