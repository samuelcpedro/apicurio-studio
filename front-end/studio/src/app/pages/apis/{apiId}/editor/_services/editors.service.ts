/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import {Injectable} from "@angular/core";
import {ServerEditorComponent} from "../_components/editors/server-editor.component";
import {SecuritySchemeEditorComponent} from "../_components/editors/security-scheme-editor.component";
import {SecurityRequirementEditorComponent} from "../_components/editors/security-requirement-editor.component";
import {DataTypeEditorComponent} from "../_components/editors/data-type-editor.component";

export interface IEditorsProvider {

    getServerEditor(): ServerEditorComponent;
    getSecuritySchemeEditor(): SecuritySchemeEditorComponent;
    getSecurityRequirementEditor(): SecurityRequirementEditorComponent;
    getDataTypeEditor(): DataTypeEditorComponent;

}


/**
 * A simple service that provides access to global entity editors.  These are the full page
 * modal editors used to perform advanced editing of specific model entities.  Examples include
 * the Server Editor, Response Editor, and Parameter Editor.
 */
@Injectable()
export class EditorsService implements IEditorsProvider {

    private provider: IEditorsProvider;

    constructor() {}

    public setProvider(provider: IEditorsProvider): void {
        console.info("[EditorsService] Setting provider to: ", provider);
        this.provider = provider;
    }

    public getServerEditor(): ServerEditorComponent {
        return this.provider.getServerEditor();
    }

    public getSecuritySchemeEditor(): SecuritySchemeEditorComponent {
        return this.provider.getSecuritySchemeEditor();
    }

    public getSecurityRequirementEditor(): SecurityRequirementEditorComponent {
        return this.provider.getSecurityRequirementEditor();
    }

    public getDataTypeEditor(): DataTypeEditorComponent {
        return this.provider.getDataTypeEditor();
    }

}
