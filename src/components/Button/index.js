import { ButtonContainer } from "./styles";

const Button = ({ 
  tecla, 
  onClick, 
  positionX, 
  positionY 
}) => {

  console.log(onClick);

  return (<>
    <ButtonContainer positionX={positionX} positionY={positionY} >
      <button onClick={onClick}> { tecla } </button>
    </ButtonContainer>
    </>
  );
};

export default Button;
