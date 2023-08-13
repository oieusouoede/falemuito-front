import { Localidade } from './Localidade';

export class Tarifa {
  public id: number;
  public tarifa: number;
  public origem: Localidade;
  public destino: Localidade;
}
