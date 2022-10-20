import { Sumary } from '../Sumarry';
import { TransactionsTable } from '../TransactionsTable';
import {Container} from './style'

export function Dashboard(){
  return (
    <Container>
        <Sumary />
        <TransactionsTable />
    </Container>
  );
}