export const schema = {
    "horarios": [
      { value: 'diurnos', name: 'Diurnos' },
      { value: 'nocturnos', name: 'Nocturnos' },
      { value: 'dominicales', name: 'Dominicales' },
    ],
    "ubicacion": [
      { value: 'pavimento_flexible', name: 'Pavimento Flexible' },
      { value: 'pavimento_rigido', name: 'Pavimento Rigído' },
      { value: 'zonaverde', name: 'Zona verde' }
    ],
    "niveltransito": [
      { value: 'nivel_1', name: 'Nivel de transito 1' },
      { value: 'nivel_2', name: 'Nivel de transito 2' },
      { value: 'nivel_3', name: 'Nivel de transito 3' }
    ],
    "personal": [
      { value: 'ayudantes', name: 'Ayudantes', hora_noctura: 11440, salario_dia: 54263, recargo_dominical_hora: 32680},
      { value: 'oficiales', name: 'Oficiales', hora_noctura: 16328, salario_dia: 77467 , recargo_dominical_hora: 46664},
      { value: 'sst', name: 'SST' , hora_noctura: 18664, salario_dia: 88533, recargo_dominical_hora: 53320 },
      { value: 'maestros', name: 'Maestros' , hora_noctura: 21000, salario_dia: 996000 , recargo_dominical_hora: 60000},
      { value: 'ingenieros', name: 'Ingenieros' , hora_noctura: 29160 , salario_dia: 138333, recargo_dominical_hora: 83312},
    ],
    "materialcimentacion": [
      { value: 'arenilla', name: 'Arenilla', unidad: 'm3', precio: 35833 },
      { value: 'triturado', name: 'Triturado', unidad: 'm3', precio: 76208   },
      { value: 'arenilla_triturado', name: 'Arenilla + Triturado', precio: 0 },
      { value: 'subbase', name: 'Sub Base', unidad: 'm3' , precio: 70833  },
      { value: 'basegranular', name: 'Base Granular', unidad: 'm3' , precio: 82333  },
      { value: 'suelo_cemento', name: 'Suelo Cemento', unidad: 'm3' , precio: 97083  },
      { value: 'fresado', name: 'Fresado', unidad: 'm3' , precio: 180000  },
    ],
    "costosmateriales": [
      { value: 'arenilla', name: 'Arenilla' },
      { value: 'triturado', name: 'Triturado' },
      { value: 'arenilla_triturado', name: 'Arenilla + Triturado' },
    ],
    "materiallenocompactado": [
      { value: 'subbase', name: 'Sub base' },
      { value: 'basegranular', name: 'Base granular' },
    ],
    "tipoderasante": [
      { value: 'fresado', name: 'Fresado' },
      { value: 'suelocemento', name: 'Suelo cemento' },
    ],
    "materiales": [
      { value: 'triturado', name: 'Triturado', unidad: 'm3', precio: 91000 },
      { value: 'arenilla', name: 'Arenilla', unidad: 'm3', precio: 35000 },
      { value: 'subbase', name: 'Sub Base', unidad: 'm3', precio: 85000 },
      { value: 'tuberia', name: 'Tubería', unidad: 'und', precio: 0 },
      { value: 'suelo_cemento', name: 'Suelo cemento', unidad: 'm3', precio: 105000 },
      { value: 'fresado', name: 'Fresado', unidad: 'm2', precio: 13565 },
    ],
    "pmts": [
      { value: 'cierres_parciales', name: 'Cierres Parciales' },
      { value: 'cierres_totales', name: 'Cierres Totales' },
      { value: 'jornal', name: 'Jornal' }
    ],
    "cimentaciones": [
      { value: 'tipo1', name: 'Tipo I' },
      { value: 'tipo2', name: 'Tipo II' },
      { value: 'tipo3', name: 'Tipo III' },
      { value: 'tipo4', name: 'Tipo IV' },
    ],
    "maquinas": [
      { value: 'cortadora_de_piso', name: 'Cortadora de piso', dia: 53330},
      { value: 'martillo_neumatico', name: 'Martillo neumatico', dia: 60000},
      { value: 'mini_cargador_con_martillo', name: 'Mini Cargador con martillo (Bocat)', dia: 480000 },
      { value: 'pajarita', name: 'Pajarita' , dia: 552000},
      { value: 'retro_excavadora_120', name: 'Retro Excavadora 120' , dia: 720000},
      { value: 'retro_excavadora_320', name: 'Retro Excavadora 320' , dia: 840000},
      { value: 'mini_retro', name: 'Mini retro', dia: 510000},
      { value: 'volqueta', name: 'Volqueta', hora: 234000, viaje: 234000},
      { value: 'canguro', name: 'Canguro', dia:32130 },
      { value: 'vibrador_para_concreto', name: 'Vibrador para concreto', dia: 34000 },
      { value: 'formaleta_cilindro_mh', name: 'Formaleta Cilidro MH', dia: 9520 },
      { value: 'rodillo_compactador', name: 'Rodillo compactador', dia: 142800 },
    ],
    "redimientos": [
      { value: 'excavacion_mecanica', name: 'Excavasión mecánica', rendimiento: 5.35, unidadmedida: 'm3'},
    ]
  }
