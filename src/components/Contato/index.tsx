import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'
import { BotaoAdicionarRemover } from '../../styles'

type Props = ContatoClass

const Contato = ({
  descricao: descricaoOriginal,
  titulo,
  nomecompleto,
  meio,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{meio}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <BotaoAdicionarRemover
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    titulo,
                    nomecompleto,
                    meio,
                    status,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Adicionar
            </BotaoAdicionarRemover>
            <BotaoAdicionarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoAdicionarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Contato
