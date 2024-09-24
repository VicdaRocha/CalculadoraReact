import { useState } from "react";
import { Container, Content, Keyboard } from "./styles";
import { GridContainer } from "./components/Grid/styles";
import { FlexContainer } from "./components/Flex/styles";
import Input from "./components/Input/index";
import Button from "./components/Button/index";

function App() {
  const numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operacao = ["+", "-", "*", "/", "="];
  const desfazer = ["C", "CE"];

  // Adiciona valor do botão clicado
  const [currentNumber, setCurrentNumber] = useState("0");
  // Salva o primeiro item da operação
  const [firstNumber, setFirstNumber] = useState("0");
  // Salva operação
  const [operation, setOperation] = useState("");
  // Identifica quando valor exibido é resultado de uma operação
  const [isResult, setIsResult] = useState(false);

  // Adiciona valor do botão clicado
  const handleAddNumber = (number) => {

    if(isResult && numero.includes(number)){
      
      setFirstNumber("");
      setCurrentNumber(number);
      setIsResult(false);
    } else {
      
      setCurrentNumber((prev) => (prev === "0" ? number : `${prev}${number}`));
    }
  };
  // Salva operação selecionada
  const handleOperation = (tecla) => {

    if (operation) handleResult();

    if(isResult){
      
      setFirstNumber(currentNumber);
      setOperation(tecla);
      setCurrentNumber("");
      setIsResult(false);
    }

    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation(tecla);
  };
  // Limpa input (C)
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  // Limpa ultimo caractere (CE)
  const handleClearEntry = () => {
    setCurrentNumber(
      currentNumber.length > 1 ? currentNumber.slice(0, -1) : "0"
    );
  };
  // Mostra resultado da operação
  const handleResult = () => {
    if (!operation) return;

    let result = 0;

    switch (operation) {
      case "+":
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(currentNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(currentNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(currentNumber);
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber(String(result));
    setOperation("");
    setIsResult(true);
  };

  // Gera elementos dos botões de números
  const teclaNumero = numero.map((item) => {

    return item === "0" ? (
      <Button tecla={item} onClick={() => handleAddNumber(item)} positionX={2} positionY={4} />
    ) : (
      <Button tecla={item} onClick={() => handleAddNumber(item)} />
    )
  });
  // Gera elementos dos botões de operações
  const teclaOperacao = operacao.map((item) => {

    return item === "=" ? (
      <Button tecla={item} onClick={handleResult} />
    ) : (
      <Button tecla={item} onClick={() => handleOperation(item)} />
    )
  });
  // Gera elementos dos botões de limpar
  const teclaDesfazer = desfazer.map((item) => {

    return item === "C" ? (
      <Button tecla={item} onClick={handleOnClear} />
    ) : (
      <Button tecla={item} onClick={handleClearEntry} />
    );
  });

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Keyboard>
            <GridContainer rows={4} columns={3}>
              {teclaNumero}
            </GridContainer>
            <FlexContainer column={true}>{teclaOperacao}</FlexContainer>
            <FlexContainer column={false}>{teclaDesfazer}</FlexContainer>
          </Keyboard>
        </Content>
      </Container>
    </div>
  );
}
export default App;
