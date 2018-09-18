/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';

class MyLibrary extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        iron-image {
          width: 300px;
          height: 300px;
        }
      </style>

      <iron-ajax
        auto
        url="https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json"
        handle-as="json"
        last-response="{{response}}">
      </iron-ajax>



      <div class="card">
        <iron-image sizing="contain" alt="image for challenge" src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
      </br>
        <span>{{response.title}}</span>
        <span>{{response.contributors}}</span>
        <p>Published: </p>
          <span>ISBN: {{response.isbn}}</span>
        </br>
          <span> Date: {{response.date}}</span>
            <template is="dom-repeat" items="{{response.toc}}" as="toc">
              <div>{{toc.file}}</div>
            </template>
        </div>
    `;
  }
}

window.customElements.define('my-library', MyLibrary);
