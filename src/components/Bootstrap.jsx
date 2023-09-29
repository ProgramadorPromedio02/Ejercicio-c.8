import React, { useState, useEffect } from "react";
import { Button, Alert, Spinner } from "react-bootstrap";

export const Bootstrap = () => {
  const [like, setLike] = useState(null); // Inicialmente, el estado es null para indicar que la carga está en progreso

  useEffect(() => {
    // Simula una carga ficticia
    setTimeout(() => {
      setLike(false); // Cambia el estado a false después de la carga ficticia (puedes cambiarlo a true si lo deseas)
    }, 3000); // Cambia el tiempo de espera según tus necesidades
  }, []);

  //Muestra el contenido una vez que la carga ha terminado
  return (
    <>
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
        {like === null ? ( // Muestra el spinner mientras la carga está en progreso
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            <h4>Bueno Diego, ¿qué te parece mi página?</h4>
            <Button onClick={() => setLike(true)} variant="success">
              ME GUSTO 👍
            </Button>
            <Button onClick={() => setLike(false)} variant="danger">
              NO ME GUSTO 👎
            </Button>
            <h1>Esperando respuesta</h1>
            {like ? <h1>👍🏻</h1> : like === false ? <h1>👎🏻</h1> : null}
          </>
        )}
      </>
    </>
  );
};
