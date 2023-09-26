import { Button, Alert, Spinner } from "react-bootstrap";

export const Bootstrap = () => {
  return (
  <>
     <Alert variant="primary">
        Me gusta la programación, pero me cuesta entenderla.
      </Alert>
      <Alert variant="secondary">
        Yo deseo poder aprobar programación III en diciembre, para tener que
        estar laboratorio III.
      </Alert>
      <Alert variant="success">
        Se que voy a poder, solo espero tener el tiempo, el amor y deseo de
        cosas que quiero hacer para mi vida.
      </Alert>
      <Alert variant="danger">
        Me enoja en tener problemas y cosas que la facultad me sorprende cada
        día, porque yo la veo impredecible.
      </Alert>
      <br />
      <h4>Bueno Diego, ¿qué te parece mi página?</h4>
      <Button variant="success">ME GUSTO 👍</Button>
      <Button variant="danger">NO ME GUSTO 👎</Button>
      <h1>Esperando respuesta</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  </>
  );
};
