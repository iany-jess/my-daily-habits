const BemVindo = ({ nomeUsuario = 'Visitante', totalHabitos = 0 }) => {
  const nomeFormatado = nomeUsuario.toUpperCase()

  const mensagem = totalHabitos > 0
  ? `Você tem ${totalHabitos} hábitos para acompanhar.`
  : 'Organize sua rotina e acompanhe seus hábitos do dia.'

  return (
    <>
      <section>
        <h2>Olá, {nomeFormatado}!</h2>
        <p>{mensagem}</p>
      </section>
    </>
  )
}

export default BemVindo
