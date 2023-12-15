import React, { useEffect, useState } from "react";
import "./EventosAnteriores.css";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import api, { eventsResource, allCommentaryEventResource } from "../../Services/Service";
import { Input } from "../../components/FormComponents/FormComponents";
import { dateFormatDbToView } from "../../Utils/stringFunctions";

const EventosAnterioresPage = () => {
  const { idEvent } = useParams();
  const [evento, setEvento] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [comentarios, setComentarios] = useState([]);

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
        // Obter comentários associados ao evento
        const promiseComentarios = await api.get(`${allCommentaryEventResource}/${idEvent}`);
        const dadosComentarios = promiseComentarios.data;
        console.log(dadosComentarios);
        setComentarios(dadosComentarios);
      } catch (error) {
        console.log("Erro ao buscar detalhes do evento ou comentários", error);
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
                value={dateFormatDbToView(dataEvento)} // Use o estado para preencher o valor
                // Atualize o estado ao digitar usando manipulationFunction se necessário
                manipulationFunction={(e) => setDataEvento(e.target.value)}
              />

              {/* Tabela para listar comentários */}
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {comentarios.map((comentario) => (
                    <tr key={comentario.idComentarioEvento}>
                      <td>{comentario.usuario.nome}</td>
                      <td>{comentario.descricao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Container>
      </MainContent>
    </>
  );
};

export default EventosAnterioresPage;
