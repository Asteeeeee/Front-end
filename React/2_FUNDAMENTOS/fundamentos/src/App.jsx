
import './App.css'

// 2 - importando componente
import FirstComponent from "./components/FirstComponent.jsx"
import MyComponente from './components/MyComponente';
import UIButton  from './components/Button/Button';

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

// 6 - eventos
import EventClick from "./components/EventClick.jsx"
function App() {

  return (
    <div className='App'>
      {/* 3 - comentario JSX */}
      <h1>Fundamentos de React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponente />
      <EventClick />
      <UIButton />
    </div>
  )
}

export default App;
