// 4 - template expression

const TemplateExpression = () => {
  const name = "Luis";
  const data = {
    age: 31,
    job: "Programador"
  }
  return (
    <div>
      <p>A soma e {2 + 2}</p>
      <h3>Bem vindo {name}</h3>
    <p>Sua idade e {data.age} anos e voce e um {data.job}</p>
    </div>
  )
}

export default TemplateExpression
