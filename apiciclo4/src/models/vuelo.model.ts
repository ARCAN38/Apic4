import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  fecha: number;

  @property({
    type: 'string',
    required: true,
  })
  inicio: string;

  @property({
    type: 'number',
    required: true,
  })
  hora: number;

  @property({
    type: 'number',
    required: true,
  })
  fin: number;

  @property({
    type: 'string',
    required: true,
  })
  asientos: string;

  @property({
    type: 'string',
    required: true,
  })
  vendidos: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  piloto: string;

  @property({
    type: 'string',
    required: true,
  })
  ruta: string;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
