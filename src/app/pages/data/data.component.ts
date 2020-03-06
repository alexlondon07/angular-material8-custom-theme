import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { schema } from 'src/app/schema.value';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;


  options = new JsonEditorOptions();
  data = {
    products: [{
      name: 'car',
      product: [{
        name: 'honda',
        model: [
          { id: 'civic', name: 'civic' },
          { id: 'accord', name: 'accord' },
          { id: 'crv', name: 'crv' },
          { id: 'pilot', name: 'pilot' },
          { id: 'odyssey', name: 'odyssey' }
        ]
      }]
    }]
  };

  constructor() {
    this.options.mode = 'code';
    this.options.modes = ['code', 'text', 'tree', 'view'];
    this.options.schema = schema;
    this.options.statusBar = false;
    this.options.onChange = () => console.log(this.editor.get());
  }

}
