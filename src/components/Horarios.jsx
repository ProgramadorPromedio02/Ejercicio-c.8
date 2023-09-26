import { Table } from "react-bootstrap";
import styles from "../styles/styles.module.css";

export const Horarios = () => {
  return (
    <>
    <h1 className={styles['TituloComision']} >Comisión 3</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Horarios</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00 - 10:00</td>
            <td>
              Legislación
              <h6>Dr. Sergio Soría</h6>
            </td>
            <td>
              Diseño y Administración de bases de datos
              <h6>Ing. Victor Sauma</h6>
            </td>
            <td>
              Laboratorio de Computación IV
              <h6>Ing. Bayur</h6>
            </td>
            <td>
              Diseño y Administración de bases de datos
              <h6>Ing. Victor Sauma</h6>
            </td>
            <td>
              Laboratorio de Computación IV
              <h6>Ing. Bayur</h6>
            </td>
            
          </tr>
          <tr>
            <td>10:15 - 12:15</td>
            <td>
              Metodología de los Sistemas I
              <h6>Ing. Nadia Petrelli</h6>
            </td>
            <td>.....................</td>
            <td>
              Metodología de los Sistemas I
              <h6>Ing. Nadia Petrelli</h6>
            </td>
            <td>
              Metodología de los Sistemas I
              <h6>Ing. Nadia Petrelli</h6>
            </td>
            <td>
              Metodología de los Sistemas I
              <h6>Ing. Nadia Petrelli</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
