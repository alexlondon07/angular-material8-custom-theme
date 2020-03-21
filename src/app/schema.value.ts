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
      { value: 'ayudantes', name: 'Ayudantes', salario: 1627890, hora: 6783 },
      { value: 'oficiales', name: 'Oficiales', salario: 2324000, hora: 9683 },
      { value: 'maestros', name: 'Maestros' , salario: 2988000, hora: 12450 },
      { value: 'sst', name: 'SST' , salario: 2656000, hora: 11067 },
      { value: 'ingenieros', name: 'Ingenieros' , salario: 4150000 },
    ],
    "materialcimentacion": [
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
      { value: 'cortadora_de_piso', name: 'Cortadora de piso', hora: 6694, dia: 0, mes: 0},
      { value: 'martillo_neumatico', name: 'Martillo neumatico', hora: 7500, dia: 0, mes: 0 },
      { value: 'mini_cargador_con_martillo', name: 'Mini Cargador con martillo', hora: 80000, dia: 0, mes: 0 },
      { value: 'retro_excavadora_120', name: 'Retro Excavadora 120' , hora: 120000, dia: 0, mes: 0},
      { value: 'retro_excavadora_320', name: 'Retro Excavadora 320' , hora: 140000, dia: 0, mes: 0},
      { value: 'mini_retro', name: 'Mini Excavadora', hora: 85000, dia: 0, mes: 0 },
      { value: 'volqueta', name: 'Volqueta', hora: 234000, dia: 0, mes: 0 },
      { value: 'canguro', name: 'Canguro', hora: 4016, dia: 0, mes: 0 },
      { value: 'vibrador_para_concreto', name: 'Vibrador para concreto', hora: 4250, dia: 0, mes: 0 },
      { value: 'formaleta_cilindro_mh', name: 'Formaleta Cilidro MH', hora: 1190, dia: 0, mes: 0 },
      { value: 'rodillo_compactador', name: 'Rodillo compactador', hora: 17850, dia: 0, mes: 0 },
    ],
    "redimientos": [
      { value: 'excavacion_mecanica', name: 'Excavasión mecánica', rendimiento: 5.35, unidadmedida: 'm3'},
    ]
  }
