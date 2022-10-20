import entradasImg from '../../assets/Entradas.svg';
import saidasImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';


import { Container } from "./style";

export function Sumary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={saidasImg} alt="Saidas" />
        </header>
        <strong> - R$500,00</strong>
      </div>
      <div className='highLifht-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}