import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { schema } from 'src/app/schema.value';

@Component({
  selector: 'app-building-parameters',
  templateUrl: './building-parameters.component.html',
  styleUrls: ['./building-parameters.component.css']
})
export class BuildingParametersComponent implements OnInit {

  public breakpoint: number; // Breakpoint observer code
  public innerWidth: number;
  public defaultColums = 4;
  public form: FormGroup;
  submitted = false;
  requiredField = 'Este campo es obligatorio';
  placeholderEspesor = 'Espesor Arenilla';
  ubicaciones = schema.ubicacion;
  niveltransito = schema.niveltransito;
  materialcimentacion = schema.materialcimentacion;
  materiallenocompactado = schema.materiallenocompactado;
  horarios = schema.horarios;
  pmts = schema.pmts;
  cimentaciones = schema.cimentaciones;

  constructor(public snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 500 ? 1 : this.defaultColums;
    this.innerWidth = window.innerWidth;

    this.buildFormBuilder();
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
      ubicacion: new FormControl('', [Validators.required]),
      niveldetransito: new FormControl('', [Validators.required]),
      promedioExcavacion: new FormControl(1, [Validators.required]),
      anchobrecha: new FormControl(1, [Validators.required]),
      longitud_tuberia_excabar: new FormControl(1, [Validators.required]),
      ayudantes: new FormControl(1, [Validators.required]),
      oficiales: new FormControl(1, [Validators.required]),
      maestros: new FormControl(1, [Validators.required]),
      sst: new FormControl(1, [Validators.required]),
      ingenieros: new FormControl(1, [Validators.required]),
      materialcimentacion: new FormControl('arenilla', [Validators.required]),
      material_cimentacion_espesor: new FormControl(1, [Validators.required]),
      material_cimentacion_espesor_2: new FormControl(1),
      material_lleno_compactado: new FormControl('', [Validators.required]),
      material_lleno_espesor: new FormControl(1, [Validators.required]),
      diametro_tuberia: new FormControl(1, [Validators.required]),
      tipo_rasante_provisional: new FormControl(1, [Validators.required]),
      horarios_de_trabajo: new FormControl(1, [Validators.required]),
      jornadas_horas: new FormControl(1, [Validators.required]),
      espesor_pavimento: new FormControl(1, [Validators.required]),
      pmt: new FormControl('', [Validators.required]),
      carriles_permitidos: new FormControl(1, [Validators.required]),
      cimentacion: new FormControl('', [Validators.required]),
      radio_de_tuberia: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Método para validar campo de cimentación
   */
  materialcimentacionChange() {
    if (this.form.value.materialcimentacion === 'triturado') {
      this.placeholderEspesor = 'Espesor Triturado';
    }
    if (this.form.value.materialcimentacion === 'arenilla_triturado' || this.form.value.materialcimentacion === 'arenilla') {
      this.placeholderEspesor = 'Espesor Arenilla';
    }
    if (this.form.value.materialcimentacion === 'arenilla_triturado') {
      this.form.get('material_cimentacion_espesor_2').setValidators([Validators.required]);
    }
  }
}
