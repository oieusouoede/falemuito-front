import { Localidade } from '../model/Localidade';
import { Tarifa } from '../model/Tarifa';

export class RequestDTO {
  public tarifa: Tarifa;
  public minutos: number;
  public plano: string;
}
