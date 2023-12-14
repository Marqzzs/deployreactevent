import React, { useEffect, useState } from "react";
import "./EventosAnteriores.css";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import api, { eventsResource } from "../../Services/Service";
import { Input } from "../../components/FormComponents/FormComponents";

const EventosAnterioresPage = () => {
  const { idEvent } = useParams();
  const [evento, setEvento] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataEvento, setDataEvento] = useState("");

  useEffect(() => {
    async function getEventId() {
      try {
        const promise = await api.get(`${eventsResource}/${idEvent}`);
        const dados = promise.data;
        console.log(dados);
        setEvento(dados);
        setTitulo(dados.nomeEvento);
        setDescricao(dados.descricao);
        setDataEvento(dados.dataEvento);
      } catch (error) {
        console.log("nao trouxe o evento");
      }
    }
    getEventId();
  }, [idEvent]);

  return (
    <>
      <MainContent>
        <Container>
          <Title
            titleText={"Eventos Anteriores"}
            additionalClass="custom-title"
          />
          {evento && (
            <div>
              <Input
                type="text"
                id="titulo"
                name="titulo"
                value={titulo} // Use o estado para preencher o valor
                // Atualize o estado ao digitar usando manipulationFunction se necessário
                manipulationFunction={(e) => setTitulo(e.target.value)}
              />
              <Input
                type="text"
                id="descricao"
                name="descricao"
                value={descricao} // Use o estado para preencher o valor
                // Atualize o estado ao digitar usando manipulationFunction se necessário
                manipulationFunction={(e) => setDescricao(e.target.value)}
              />
              <Input
                type="text"
                id="dataEvento"
                name="dataEvento"
                value={dataEvento} // Use o estado para preencher o valor
                // Atualize o estado ao digitar usando manipulationFunction se necessário
                manipulationFunction={(e) => setDataEvento(e.target.value)}
              />
            </div>
          )}
        </Container>
      </MainContent>
    </>
  );
};

export default EventosAnterioresPage;
