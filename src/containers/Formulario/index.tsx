import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import { BotaoAdicionarRemover } from '../../styles'
import * as enums from '../../utils/enums/Contato'
import Contato from '../../models/Contato'
import { cadatrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomecompleto, setNomeCompleto] = useState('')
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [status, setStatus] = useState(enums.Status.ADICIONADO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      titulo,
      enums.Meio.TELEFONE,
      nomecompleto,
      status,
      descricao,
      6
    )
    dispatch(cadatrar(contatoParaAdicionar))
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Novo Contato"
        />
        <Campo
          value={nomecompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          type="number"
          placeholder="Telefone"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          type="text"
          placeholder="email"
        />
        <Opcoes>
          <p>Status de Contato</p>
          {Object.values(enums.Status).map((status) => (
            <Opcao key={status}>
              <input
                value={status}
                name="status"
                type="radio"
                onChange={(evento) =>
                  setStatus(evento.target.value as enums.Status)
                }
                id={status}
                defaultChecked={status === enums.Status.ADICIONADO}
              />{' '}
              <label htmlFor={status}>{status}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoAdicionarRemover type="submit">
          Novo contato
        </BotaoAdicionarRemover>
      </Form>
    </MainContainer>
  )
}

export default Formulario
