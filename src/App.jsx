import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo';
import Principal from './componentes/Principal/Principal';
import RodaPe from './componentes/Rodape/Rodape';

function App() {
    console.log('App render...');

  return (
  <>
    <Cabecalho />
    <LadoEsquerdo />
    <Principal />
    <RodaPe />  
  </>
  );
}

export default App;
