import { Card, CardGroup } from "react-bootstrap";
import styles from "../styles/styles.module.css";

export const MortalKombat = () => {
  return (
    <>
      <h1 className={styles['TituloKombat']}>Personajes de Mortal Kombat</h1>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sub-Zero_Mortal_Kombat_X.png"
          />
          <Card.Body className={styles["body"]}>
            <Card.Title>Sub-Zero</Card.Title>
            <Card.Text>
              Kuai Liang y su hermano mayor Bi-Han, a muy corta edad, fueron
              raptados por expertos asesinos del clan Lin Kuei, donde se les
              entrenó y enseñó a dominar la técnica del control del hielo.
              Bi-Han adoptó el nombre Sub-Zero. Cuando Bi-Han fue asesinado por
              Scorpion, Kuai Liang juró venganza. Perfeccionó sus técnicas de
              hielo y tomó el nombre de su hermano "Sub-Zero". Entró al torneo
              de Mortal Kombat para poder vengar la muerte de su hermano Bi-Han
              junto a su amigo Smoke.
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles["footer"]}>
            <small className="text-muted">
              Universo ficticio: Mortal Kombat
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Scorpion_Mortal_Kombat_X.png"
          />
          <Card.Body className={styles["body"]}>
            <Card.Title>Scorpion</Card.Title>
            <Card.Text>
              Hanzo Hasashi pertenecía a un clan llamado Shirai Ryu, rivales del
              clan Lin Kuei. Era un guerrero con extraordinarias habilidades,
              las cuales llamaron la atención del malévolo hechicero Quan Chi,
              quien lo contrató para robar un mapa en un Templo Shaolin. Lo que
              Hanzo Hasashi desconocía era que Quan Chi también había contratado
              a Sub-Zero para la misma misión. Sub-Zero y Hanzo se encuentran en
              el Templo Shaolín y ambos mantienen una dura batalla en la que
              Sub-Zero asesina a Hanzo Hasashi de forma deshonrosa por la
              espalda. Luego, Quan Chi se encargó de revivir a Hanzo Hasashi y
              este adoptó el nombre Scorpion.
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles["footer"]}>
            <small className="text-muted">
              Universo ficticio: Mortal Kombat
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.vox-cdn.com/thumbor/CjYI9jVgdI1nhfR4zK0PSklz22Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/14722560/johnny.jpg"
          />
          <Card.Body className={styles["body"]}>
            <Card.Title>Johnny Cage</Card.Title>
            <Card.Text>
              Johnny Cage es un actor de Hollywood experto en artes marciales,
              pero toda la gente cree que los golpes de sus películas son un
              fraude. Harto de la opinión de los críticos, el actor decide
              entrar en el torneo de Mortal Kombat para demostrar lo contrario.
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles["footer"]}>
            <small className="text-muted">
              Universo ficticio: Mortal Kombat
            </small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://e0.pxfuel.com/wallpapers/188/672/desktop-wallpaper-liu-kang-mk11-liu-kang-mortal-kombat.jpg"
          />
          <Card.Body className={styles["body"]}>
            <Card.Title>Liu Kang</Card.Title>
            <Card.Text>
              Liu Kang sigue las enseñanzas de la Sociedad del Loto Blanco del
              Shaolin y fue enviado por el Templo de la Luz a derrotar a Shang
              Tsung. Él deseó derrotar a Shang Tsung y traer el torneo de nuevo
              a sus dueños de Shaolin.
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles["footer"]}>
            <small className="text-muted">
              Universo ficticio: Mortal Kombat
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <hr />
    </>
  );
};
