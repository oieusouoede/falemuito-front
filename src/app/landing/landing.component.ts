import { Component, OnInit } from '@angular/core';
import { RequestDTO } from '../dto/RequestDTO';
import { ResponseDTO } from '../dto/ResponseDTO';
import { Tarifa } from '../model/Tarifa';
import { SimuladorService } from '../service/simulador.service';
import { TarifaService } from '../service/tarifa.service';
import { LocalidadeService } from '../service/localidade.service';
import { Localidade } from '../model/Localidade';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  calculoRequest: RequestDTO = new RequestDTO();
  localidades: Localidade[];
  tarifas: Tarifa[];
  origem: Localidade;
  tarifa: Tarifa;
  minutos: number;
  plano: string;
  listaResponse: ResponseDTO[] = [];

  constructor(
    private simuladorService: SimuladorService,
    private localidadeService: LocalidadeService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.getLocalidades();
  }

  getSimulacao() {
    this.calculoRequest.tarifa = this.tarifa;
    this.calculoRequest.minutos = this.minutos;
    this.calculoRequest.plano = this.plano;
    this.simuladorService
      .getSimulacao(this.calculoRequest)
      .subscribe((resp: ResponseDTO) => {
        this.listaResponse.push(resp);
      });
  }

  getLocalidades() {
    this.localidadeService.getAllLocalidades().subscribe({
      next: (resp: Localidade[]) => {
        this.localidades = resp;
      },
    });
  }

  getTarifas() {
    this.tarifas = this.origem.tarifas;
  }
}
