import { useDispatch, useSelector } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

export type Props = {
  legenda: string
  criterio: 'meio' | 'status' | 'todas'
  valor?: enums.Meio | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }
  const contarContatos = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'meio') {
      return contatos.itens.filter((item) => item.meio === valor).length
    }
    if (criterio === 'status') {
      return contatos.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaAtivo()
  const contador = contarContatos()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda} </S.Label>
    </S.Card>
  )
}
export default FiltroCard
