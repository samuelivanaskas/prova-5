import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <Campo
        type="text"
        placeholder="Contato completo"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      ></Campo>
      <S.Filtros>
        <FiltroCard
          valor={enums.Meio.EMAIL}
          criterio="meio"
          legenda="nome completo"
        />
        <FiltroCard valor={enums.Meio.EMAIL} criterio="meio" legenda="email" />
        <FiltroCard
          valor={enums.Meio.TELEFONE}
          criterio="meio"
          legenda="telefone"
        />
        <FiltroCard
          valor={enums.Status.ADICIONADO}
          criterio="status"
          legenda="adicionar"
        />
        <FiltroCard
          valor={enums.Status.REMOVIDO}
          criterio="status"
          legenda="removido"
        />
        <FiltroCard
          valor={enums.Status.EDITADO}
          criterio="status"
          legenda="editar"
        />
        <FiltroCard criterio="todas" legenda="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
