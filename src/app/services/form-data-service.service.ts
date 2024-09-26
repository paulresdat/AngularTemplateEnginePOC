import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataService } from '../app-engine/IDataService';

@Injectable({
  providedIn: 'root'
})
export class FormDataService extends IDataService {
  constructor() {
    super();
  }

  protected dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  setData(appId: number) {
    if (appId != 1 && appId != 2) {
      throw new Error('invalid app id');
    }
    this.dataSubject.next(this.__data[appId-1]);
  }

  private __data: any = [
    {
      "appId": 1,
      "template": "bootstrap-theme",
      "section": [
        {
          "content": [
            {
              "name": "dropdown-button-content",
              "meta-data": [
                {"name": "class-name", "value": "col", "type": "styling"},
                {"name": "dropdown1", "value": null, "type": "template"},
              ],
              "question": {
                "label": "Select One",
                "type": "dropdown",
                "name": "dropdown-name",
                "default-value": 1,
                "values": [
                  {"name": "value-1", "value": 1},
                  {"name": "value-2", "value": 2},
                  {"name": "value-3", "value": 3},
                  {"name": "value-4", "value": 4},
                ]
              }
            },
            {
              "name": "radio-content",
              "meta-data": [
                {"name": "class-name", "value": "col", "type": "styling"},
                {"name": "radio-bootstrap2", "value": null, "type": "template"},
              ],
              "question": {
                "label": "Check one",
                "type": "radio",
                "name": "radio-name",
                "default-value": "value",
                "values": [
                  {"name": "radio 1", "value": 1},
                  {"name": "radio 2", "value": 2}
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "appId": 2,
      "template": "bootstrap-theme",
      "section": [
        {
          "content": [
            {
              "name": "dropdown2-button-content",
              "meta-data": [
                {"name": "class-name", "value": "col", "type": "styling"},
                {"name": "dropdown1", "value": null, "type": "template"},
              ],
              "question": {
                "label": "Select all the things!",
                "type": "dropdown",
                "name": "dropdown2-name",
                "default-value": 1,
                "values": [
                  {"name": "value-1", "value": 1},
                  {"name": "value-2", "value": 2},
                  {"name": "value-3", "value": 3},
                  {"name": "value-4", "value": 4},
                ]
              }
            },
            {
              "name": "radio2-content",
              "meta-data": [
                {"name": "class-name", "value": "col", "type": "styling"},
                {"name": "radio-bootstrap2", "value": null, "type": "template"},
              ],
              "question": {
                "label": "Check all the things!",
                "type": "radio",
                "name": "radio2-name",
                "default-value": "value",
                "values": [
                  {"name": "radio 3", "value": 3},
                  {"name": "radio 4", "value": 4}
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
