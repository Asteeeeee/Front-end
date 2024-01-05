
import './App.css'

// 2 - importando componente
import FirstComponent from "./components/FirstComponent.jsx"

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

function App() {

  return (
    <div className='App'>
      {/* 3 - comentario JSX */}
      <h1>Fundamentos de React</h1>
      <FirstComponent/>
      <TemplateExpression/>
    </div>
  )
}

export default App;
