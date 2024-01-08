import { FiSearch} from 'react-icons/fi'
import lixo from './icon/delete.png';
import lampada from './icon/lampada.png';
import Switch from '@mui/material/Switch';

import './styles.css';

function App() {
  return (
    <div className="container">
        <h1 className="title">Buscador CEP</h1>

        <div className="containerInput">
          <input 
          type="text"
          placeholder="Digite seu cep..."
          />

          <button className="buttonSearch">
            <FiSearch size={25} color='#FFF'/>
          </button>
        </div>
        
        <div className='cardDispositivos'>
          <div className='elementosCard'>
            <div className='nomeDescricao'>
              <h3 >Dispositivo</h3>
              <h4>LAICP</h4>
              
            </div>

            <div>
            <img src={lampada} alt="Lampada"/>
            </div>

            <button className='botaoLixeira'>
              <img src={lixo} alt="Delete"/>
            </button>
          </div>
        </div>

        <main className='main'>
          <h2>CEP: 69053090</h2>

          <span>Rua Teste</span>
          <span>Complemento: Algum</span>
          <span>Vila Rosa</span>
          <span>Campo Grande - MS</span>
        </main>

    </div>
  );
}

export default App;
