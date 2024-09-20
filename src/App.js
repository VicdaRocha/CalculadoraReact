// import Button from "./components/Button";
import { Container, Content } from "./styles";
import Input from "./components/Input/index";
import Button from "./components/Button/index";

function App() {
  return (
    <div className="App">
      <Container>
        <Content>
          <Input />
          <Button />
        </Content>
      </Container>
    </div>
  );
}

export default App;
