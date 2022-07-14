import { Col, Button } from "react-bootstrap";
import React, { useState } from "react";

const GameOptionsComp = ({ disks, setDisks, reset, moveCount }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="container p-1 border-radius">
        <div className=" text-center row row-cols-2 row-cols-lg-3">
          <div className="col-4 col-lg-2">
            <h6>
              Total de discos: <Button className="btn btn-info">{disks}</Button>
            </h6>{" "}
          </div>
          <div className="col-4 col-lg-6">
            <Button
              type="button"
              className="btn btn-info"
              aria-hidden="true"
              variant="success"
              text="dark"
              onClick={() => {
                setDisks((disks += 1));
              }}
            >
              Agregar
            </Button>

            <Button
              className="text-black"
              variant="warning"
              onClick={() => {
                if (disks >= 2) {
                  setDisks((disks -= 1));
                }
              }}
            >
              Quitar
            </Button>
          </div>
          <div className="col-4 col-lg-2">
            <h6>
              Movimientos: <Button className="btn btn-info">{moveCount}</Button>
            </h6>
          </div>
          <div className="col-4 col-lg-2">
            <div className="col-sm mx-auto">
              <Col>
                <Button variant="btn btn-danger" onClick={() => reset()}>
                  Reiniciar
                </Button>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameOptionsComp;
