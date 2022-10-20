import { GlobalStyle } from "./styles/glovo";
import {Header} from "./compenents/Header";
import { Dashboard } from "./compenents/Dashborad";

function App() {
  return (
    <>
     <Header/>
     <Dashboard />
      <GlobalStyle/>
    </>
  );
}

export default App;
