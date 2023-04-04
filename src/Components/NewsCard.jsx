import { Button, Card } from "antd";

export default function NewsCard() {
  return (
    <Card style={styles.container}>
      <img src="https://picsum.photos/200/300" alt="" />
      <h3>
        Introducing the SLA 750, the Next Revolution in Stereolithography (SLA)
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        assumenda? Neque doloribus eos iusto quidem architecto tempore,
        voluptate repudiandae molestiae saepe dolore atque ipsam corporis minima
        laudantium sint at. Fugiat.
      </p>
      <Button>Leer mas...</Button>
    </Card>
  );
}

const styles = {
    container: {
        width: 400,
    }
}
