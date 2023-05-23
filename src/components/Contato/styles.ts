import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  meio?: enums.Meio
  status?: enums.Status
  parametro: 'meio' | 'status'
}

function retornaCordeFundo(props: TagProps): string {
  if (props.parametro === 'meio') {
    if (props.meio === enums.Meio.TELEFONE) return variaveis.vermelho
    if (props.meio === enums.Meio.EMAIL) return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.ADICIONADO) return variaveis.verde
    if (props.status === enums.Status.REMOVIDO) return variaveis.amarelo
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  paddinf: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCordeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: Roboto;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
