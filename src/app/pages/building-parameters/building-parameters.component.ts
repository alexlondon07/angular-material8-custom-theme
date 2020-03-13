import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { schema } from "src/app/schema.value";

@Component({
  selector: "app-building-parameters",
  templateUrl: "./building-parameters.component.html",
  styleUrls: ["./building-parameters.component.css"]
})
export class BuildingParametersComponent implements OnInit {
  public breakpoint: number; // Breakpoint observer code
  public innerWidth: number;
  public defaultColums = 4;
  public form: FormGroup;
  submitted = false;
  requiredField = "Este campo es obligatorio";
  placeholderEspesor = "Espesor Arenilla";
  falta = 0;
  triturado = "triturado";
  arenilla = "arenilla";
  arenilla_triturado = "arenilla_triturado";
  retro_excavadora_120_320= "Retro excavadora de 120 o excavadora 320";
  retro_excavadora_312_320 = "Retro excavadora de 312 o excavadora 320";

  // Opciones de los selects
  ubicaciones = schema.ubicacion;
  niveltransito = schema.niveltransito;
  materialcimentacion = schema.materialcimentacion;
  materiallenocompactado = schema.materiallenocompactado;
  tipoderasante = schema.tipoderasante;
  horarios = schema.horarios;
  pmts = schema.pmts;
  cimentaciones = schema.cimentaciones;

  // Resultados
  resultados = {};

  constructor(public snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 500 ? 1 : this.defaultColums;
    this.innerWidth = window.innerWidth;

    this.buildFormBuilder();

    this.materialcimentacionChange();
  }

  /**
   * Método para obtener las dimensiones de la pantalla
   */
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth >= 1000 ? this.defaultColums : 2;
    this.innerWidth = event.target.innerWidth;
  }
  /**
   * Método para construir las validaciones del formulario
   */
  buildFormBuilder() {
    this.form = this.fb.group({
      ubicacion: new FormControl("pavimento_flexible", [Validators.required]),
      niveldetransito: new FormControl("nivel_1", [Validators.required]),
      promedioExcavacion: new FormControl(2, [Validators.required]),
      anchobrecha: new FormControl(1, [Validators.required]),
      longitud_tuberia_excabar: new FormControl(100, [Validators.required]),
      ayudantes: new FormControl(1, [Validators.required]),
      oficiales: new FormControl(1, [Validators.required]),
      maestros: new FormControl(1, [Validators.required]),
      sst: new FormControl(1, [Validators.required]),
      ingenieros: new FormControl(1, [Validators.required]),
      materialcimentacion: new FormControl("arenilla", [Validators.required]),
      material_cimentacion_espesor: new FormControl("", [Validators.required]),
      material_cimentacion_espesor_2: new FormControl(1),
      material_lleno_compactado: new FormControl("subbase", [
        Validators.required
      ]),
      material_lleno_espesor: new FormControl(1, [Validators.required]),
      diametro_tuberia: new FormControl(27, [Validators.required]),
      tipo_rasante_provisional: new FormControl("fresado", [
        Validators.required
      ]),
      horarios_de_trabajo: new FormControl("diurnos", [Validators.required]),
      jornadas_horas: new FormControl(1, [Validators.required]),
      espesor_pavimento: new FormControl(0.5, [Validators.required]),
      pmt: new FormControl("cierres_parciales", [Validators.required]),
      carriles_permitidos: new FormControl(1, [Validators.required]),
      cimentacion: new FormControl("tipo1", [Validators.required]),
      radio_de_tuberia: new FormControl(0.34, [Validators.required]),
      cama_de_cimentacion: new FormControl(0.15, [Validators.required]),
      espesor_suelo_cemento: new FormControl(0.1, [Validators.required]),
      manhole_a_contruir: new FormControl(1, [Validators.required])
    });
  }

  /**
   * Metodo para calcular los resultados
   */
  calcularResultados() {

    this.calcularEspesorArenillaEspesorTriturado();

    this.calcularCantidadesObra();

    this.calcularEquipoDeTrabajo();
  }

  /**
   * Metodo para calcular las cantiadades de la obra
   */
  calcularCantidadesObra() {
    this.resultados = {};

    // Corte de pavimento
    this.resultados["corte_de_pavimento"] =
      this.form.value.longitud_tuberia_excabar * 2;

    // Demolicion del pavimento
    this.resultados["demolicion_del_pavimento"] =
      this.form.value.longitud_tuberia_excabar *
      this.form.value.espesor_pavimento *
      this.form.value.anchobrecha;

    // Excavación mecánica
    this.resultados["excavacion_mecanica"] =
      this.form.value.longitud_tuberia_excabar *
      this.form.value.anchobrecha *
      this.form.value.promedioExcavacion;

    // Instalación de tubería
    this.resultados[
      "instalacion_tuberia"
    ] = this.form.value.longitud_tuberia_excabar;

    // LLeno compactado
    this.resultados["lleno_compactado"] =
      this.form.value.longitud_tuberia_excabar *
      this.form.value.anchobrecha *
      this.form.value.material_lleno_espesor;

    // Rasante Temporal
    this.resultados["rasante_temporal"] =
      this.form.value.longitud_tuberia_excabar * this.form.value.anchobrecha;

    // Cimentación m3
    let pi = 3.1415926535;
    if (
      this.form.value.materialcimentacion == this.arenilla ||
      this.form.value.materialcimentacion == this.triturado
    ) {
      let cal1 =
        this.form.value.longitud_tuberia_excabar *
        this.form.value.anchobrecha *
        this.form.value.material_cimentacion_espesor -
        pi *
        this.form.value.longitud_tuberia_excabar *
        Math.pow(this.form.value.radio_de_tuberia, 2);
      this.resultados["cimentacion"] = cal1;
    } else {
      let cimentacion_arenilla =
        this.form.value.longitud_tuberia_excabar *
        this.form.value.anchobrecha *
        this.form.value.material_cimentacion_espesor -
        (pi *
          this.form.value.longitud_tuberia_excabar *
          Math.pow(this.form.value.radio_de_tuberia, 2)) /
        2;
      this.resultados["cimentacion_arenilla"] = cimentacion_arenilla;

      let cimentacion_triturado =
        this.form.value.longitud_tuberia_excabar *
        this.form.value.anchobrecha *
        this.form.value.material_cimentacion_espesor_2 -
        (pi *
          this.form.value.longitud_tuberia_excabar *
          Math.pow(this.form.value.radio_de_tuberia, 2)) /
        2;
      this.resultados["cimentacion_triturado"] = cimentacion_triturado;
    }

    // Botada de material
    let botada_material =
      this.form.value.longitud_tuberia_excabar *
      this.form.value.anchobrecha *
      this.form.value.promedioExcavacion *
      1.3 +
      this.form.value.longitud_tuberia_excabar *
      this.form.value.anchobrecha *
      this.form.value.espesor_pavimento *
      1.5;
    this.resultados["botada_material"] = botada_material;

    // Rasante temporal
    let rasante_temporal =
      this.form.value.longitud_tuberia_excabar *
      this.form.value.anchobrecha *
      this.form.value.espesor_suelo_cemento;
    this.resultados["rasante_temporal"] = rasante_temporal;

    // Manhole
    this.resultados["manhole"] = this.form.value.manhole_a_contruir;

    // Cantidad de volquetas
    let botada = this.resultados["botada_material"] / 15;
    this.resultados["cantidad_volquetas"] = botada.toFixed();
  }

  /**
   * Calcular el espesor de arenilla y espesor triturado
   */
  calcularEspesorArenillaEspesorTriturado() {
    let opcion = this.form.value.materialcimentacion;
    if (opcion === "arenilla_triturado") {
      // Calcular espesor arenilla
      let cal0 = parseFloat(this.form.value.radio_de_tuberia) + 0.25;
      let cal1 = cal0.toFixed(2);
      this.form.get("material_cimentacion_espesor").setValue(cal1);

      // Calcular espesor triturado
      let cal2 =
        parseFloat(this.form.value.cama_de_cimentacion) +
        parseFloat(this.form.value.radio_de_tuberia);
      this.form.get("material_cimentacion_espesor_2").setValue(cal2);
    } else {
      let cal0 = 2 * this.form.value.radio_de_tuberia;
      let cal1 = cal0 + 0.25;
      let cal = parseFloat(this.form.value.cama_de_cimentacion) + cal1;
      this.form.get("material_cimentacion_espesor").setValue(cal);
    }
  }

  /**
   * Método para validar campo de cimentación y calcular el espesor arenilla y triturado
   */
  materialcimentacionChange() {
    if (this.form.value.materialcimentacion === this.triturado) {
      this.placeholderEspesor = "Espesor Triturado";

      this.calcularEspesorArenillaEspesorTriturado();
    }
    if (
      this.form.value.materialcimentacion === this.arenilla_triturado ||
      this.form.value.materialcimentacion === this.arenilla
    ) {
      this.placeholderEspesor = "Espesor Arenilla";

      if (this.form.value.materialcimentacion === this.arenilla) {
        this.calcularEspesorArenillaEspesorTriturado();
      }
    }
    if (this.form.value.materialcimentacion === this.arenilla_triturado) {
      this.form
        .get("material_cimentacion_espesor_2")
        .setValidators([Validators.required]); // Espesor triturado

      this.calcularEspesorArenillaEspesorTriturado();
    }

    this.calcularResultados();
  }

  /**
   * Metodo para calcular el equipo de trabajo para la obra
   */
  calcularEquipoDeTrabajo() {

    this.resultados["demolicion"] = '';

    console.log('Hola');

    // Pavimento Flexible
    if (this.form.value.ubicacion === "pavimento_flexible") {
      if (this.form.value.espesor_pavimento >= 0 && this.form.value.espesor_pavimento <= 0.20) {
        this.resultados["demolicion"] = "Martillo neumatico";
      }
      if (this.form.value.espesor_pavimento >= 0.20 && this.form.value.espesor_pavimento <= 0.30) {
        this.resultados["demolicion"] = "Mini cargador o Mini retro";
      }
      if (this.form.value.espesor_pavimento >= 0.30) {
        this.resultados["demolicion"] = this.retro_excavadora_120_320;
      }
    }
    // Pavimento Rigido
    if (this.form.value.ubicacion === "pavimento_rigido") {
      if (this.form.value.espesor_pavimento >= 0 && this.form.value.espesor_pavimento <= 0.20) {
        this.resultados["demolicion"] = "Mini cargador o Mini retro";
      }

      if (this.form.value.espesor_pavimento > 0.20) {
        this.resultados["demolicion"] = this.retro_excavadora_120_320;
      }
    }

    // PMT con excavacion
    this.resultados["pmt_con_excavacion"] = '';

    // Cierre parciales
    if (this.form.value.pmt === 'cierres_parciales') {

      if (this.form.value.carriles_permitidos <= 3 && this.form.value.diametro_tuberia < 40 && this.form.value.longitud_tuberia_excabar < 2.5) {
        this.resultados["pmt_con_excavacion"] = 'Mini reto o mini cargador';
      }

      if (this.form.value.carriles_permitidos >= 3 && this.form.value.diametro_tuberia < 40 && this.form.value.longitud_tuberia_excabar < 2.5) {
        this.resultados["pmt_con_excavacion"] = this.retro_excavadora_312_320;
      }

      if (this.form.value.carriles_permitidos <= 3 && this.form.value.diametro_tuberia > 40 && this.form.value.longitud_tuberia_excabar < 2.5) {
        this.resultados["pmt_con_excavacion"] = "Mini cargador";
      }

      if (this.form.value.carriles_permitidos >= 3 && this.form.value.diametro_tuberia > 40 && this.form.value.longitud_tuberia_excabar < 2.5) {
        this.resultados["pmt_con_excavacion"] = this.retro_excavadora_312_320;
      }
    }

    // Cierre totales
    if (this.form.value.pmt === 'cierres_totales') {
      if (this.form.value.diametro_tuberia < 40 && this.form.value.longitud_tuberia_excabar < 2.5) {
        this.resultados["pmt_con_excavacion"] = "Mini cargador";
      }
      if (this.form.value.diametro_tuberia > 40 && this.form.value.longitud_tuberia_excabar < 2.5) {
        this.resultados["pmt_con_excavacion"] = this.retro_excavadora_312_320;
      }
    }

    // Cierres parciales o Cierres totales
    if (this.form.value.pmt === 'cierres_totales' || this.form.value.pmt === 'cierres_parciales' && this.form.value.longitud_tuberia_excabar > 2.50) {
      this.resultados["pmt_con_excavacion"] = this.retro_excavadora_120_320;
    }

    // Jornal
    if (this.form.value.pmt === 'jornal') {
      if (this.form.value.jornadas_horas >= 0 && this.form.value.jornadas_horas < 5) {
        this.resultados["pmt_con_excavacion"] = `Realizar solo actividades unicas como (corte de pavimentos, demolicion de pavimento, instalacion de tuberia o manhole) solo una actividad por jornal.`;
      }

      if (this.form.value.jornadas_horas >= 5 && this.form.value.jornadas_horas <= 8) {
        this.resultados["pmt_con_excavacion"] = `Realizar solo actividades combinadas como (corte de pavimento con demolicion de pavimento, demolicion de pavimento con instalacion de tuberia, demolicion de pavimento con construccion de manholes) solo dos actividades por jornal`;
      }
    }

    // Cimentación de tubería
    if (this.form.value.materialcimentacion === this.arenilla) {
      this.resultados["cimentacion_de_tuberia"] = `Cama de cimentacion compactado mecanicamente con canguro y por encima del tubo minimo 15 cm compactado manualmente`;

    }
    if (this.form.value.materialcimentacion === this.arenilla_triturado) {
      this.resultados["cimentacion_de_tuberia"] = `Capa de arenilla debe ser compactada manualmente con pison de mano`;
    }

    // Instalación de tubería
    if ( this.form.value.promedioExcavacion < 1.50) {
      this.resultados["instalacion_de_tuberia"] = "Compactar con dos canguros";
    }
    if ( this.form.value.promedioExcavacion > 1.50) {
      this.resultados["instalacion_de_tuberia"] = "Compactar con 1 canguro y 1 rodillo compactador";
    }

    // Botada de material
    if (this.form.value.pmt === 'cierres_parciales') {
      this.resultados["botada_material_equipo"] ="Utilizar volquetas sencillas";
    }
    if (this.form.value.pmt === 'cierres_totales') {
      this.resultados["botada_material_equipo"] ="Utilizar volquetas doble troque.";
    }

    // Rasante de vía
    if ( this.form.value.niveltransito === 'nivel_3') {
      this.resultados["rasante_en_la_via"] = "Utilizar pavimentadora";
    } else {
      this.resultados["rasante_en_la_via"] = "Utilizar 2 canguros";
    }

  }
}
