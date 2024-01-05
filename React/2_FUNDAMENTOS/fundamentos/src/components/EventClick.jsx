import React from 'react'

function EventClick() {
    const handleClick = (e) => {
        console.log(e)
        console.log('Executou');
    };
// 8 - funcao de renderizacao
const renderSomething = (x) => {
    if(x) {
        return <h1>Renderizando isso!</h1>;
    } else {
        return <h1>Renderizando outra coisa!</h1>;
    }
}
  return (
    <div>
      <div> 
        <button onClick={() => console.log("Testando o evento")}> Clique aqui ! </button>
      </div> 
      {/*8 */}
      <div>
        <button onClick={handleClick}>Clique aqui - com funcao</button>
      </div>
      {/* 8 - Funcao com render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default EventClick
