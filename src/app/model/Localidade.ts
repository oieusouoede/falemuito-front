import { Tarifa } from './Tarifa';

export class Localidade {
  public id: number;
  public ddd: string;
  public regiao: string;
  public uf: string;
  public tarifas: Tarifa[];
}
