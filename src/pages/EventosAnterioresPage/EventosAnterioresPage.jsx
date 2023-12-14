import React, { useEffect } from "react";
import "./EventosAnteriores.css";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";

const EventosAnterioresPage = () => {

  const { idEvento } = useParams();

  useEffect(() => {
    alert("Fazer a funcao")
    alert(`Fazer o get do evento${idEvento}`)
  });
  
  return (
    <>
      <MainContent>
        <Container>
          <Title
            titleText={"Eventos Anteriores"}
            additionalClass="custom-title"
          />
        </Container>
      </MainContent>
    </>
  );
};

export default EventosAnterioresPage;
