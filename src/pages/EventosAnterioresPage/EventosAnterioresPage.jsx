import React from "react";
import "./EventosAnteriores.css";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";

const EventosAnterioresPage = () => {
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
