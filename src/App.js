import { useState } from "react";
import { Container, Content, Keyboard } from "./styles";
import { GridContainer } from "./components/Grid/styles";
import { FlexContainer } from "./components/Flex/styles";
import Input from "./components/Input/index";
import Button from "./components/Button/index";

function App() {

  const numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operacao = ["+", "-", "*", "/", "="];
  const desfazer = ["c","cc"];

  // Gera elementos dos botões
  const teclaNumero = numero.map((item) => {

    if(item === "0"){
      return (
        <Button tecla={item} onClick={() => handleAddNumber(item)} positionX={2} positionY={4}/>
      )
    }

    return (
      <Button tecla={item} onClick={() => handleAddNumber(item)}/>
    )
  });
  const teclaOperacao = operacao.map((item) => {

    return (
      <Button tecla={item} onClick={() => handleAddNumber(item)}/>
    )
  });
  const teclaDesfazer = desfazer.map((item) => {

    return (
      <Button tecla={item} onClick={() => handleAddNumber(item)}/>
    )
  });
  
  // Adiciona valor do botão clicado
  const [currentNumber, setCurrentNumber] = useState("0");

  const handleAddNumber = (number) => {
    // if (numero.includes(number)) setCurrentNumber(prev => prev === "0" ? number : `${prev}${number}`);
    // if (operacao.includes(number)) setCurrentNumber(prev => prev === "0" ? number : `${prev}${number}`);
    // if (desfazer.includes(number)) setCurrentNumber(prev => prev === "0" ? number : `${prev}${number}`);
    setCurrentNumber(prev => prev === "0" ? number : `${prev}${number}`);
  };

  // Limpa input
  // const handleOnClear = () => 

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Keyboard>
            <GridContainer rows={4} columns={3}>
              {teclaNumero}
            </GridContainer>
            <FlexContainer column={true}>
              {teclaOperacao}
            </FlexContainer>
            <FlexContainer column={false}>
              {teclaDesfazer}
            </FlexContainer>
          </Keyboard>
        </Content>
      </Container>
    </div>
  );
}

export default App;
