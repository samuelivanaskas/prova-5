import * as enums from '../utils/enums/Contato'

class Contato {
  titulo: string
  meio: enums.Meio
  status: enums.Status
  descricao: string
  id: number
  nomecompleto: string

  constructor(
    titulo: string,
    meio: enums.Meio,
    status: enums.Status,
    descricao: string,
    id: number,
    nomecompleto: string
  ) {
    this.titulo = titulo
    this.meio = meio
    this.status = status
    this.descricao = descricao
    this.id = id
    this.nomecompleto = nomecompleto
  }
}

export default Contato
