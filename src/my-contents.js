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

class MyContents extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        #toc_container {
          background: #f9f9f9 none repeat scroll 0 0;
          border: 1px solid #aaa;
          display: table;
          font-size: 95%;
          margin-bottom: 1em;
          padding: 20px;
          width: auto;
        }

        .toc_title {
          font-weight: 700;
          text-align: center;
        }

        #toc_container li, #toc_container ul, #toc_container ul li{
          list-style: outside none none !important;
        }
      </style>

      <iron-ajax
        auto
        url="https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json"
        handle-as="json"
        last-response="{{response}}">
      </iron-ajax>

      <div class="card">
        <h2>{{response.title}}</h2>
        <div id="toc_container">
          <p class="toc_title">Contents</p>
          <ul class="toc_list">
            <li><a href="#First_Point_Header">1 Copyright</a></li>
            <li><a href="#Second_Point_Header">2 Basic algebra and arithmetic</a>
              <ul>
                <li><a href="#Second_Sub_Point_1">2.1 Powers, roots and logarithms</a></li>
                <li><a href="#Second_Sub_Point_2">2.2 Quadratic equations</a></li>
                <li><a href="#Second_Sub_Point_3">2.3 Simultaneous equations</a></li>
                <li><a href="#Second_Sub_Point_4">2.4 The binomial expansion</a></li>
                <li><a href="#Second_Sub_Point_5">2.5 Arithmetic and geometric progression</a></li>
                <li><a href="#Second_Sub_Point_6">2.6 Partial fractions</a></li>
                <li><a href="#Second_Sub_Point_7">2.7 Exercises</a></li>
              </ul>
            </li>
            <li><a href="#Third_Point_Header">3 Curves and graphs</a>
              <ul>
                <li><a href="#Third_Sub_Point_1">3.1 Polynomials</a></li>
                <li><a href="#Third_Sub_Point_2">3.2 Straight line</a></li>
                <li><a href="#Third_Sub_Point_3">3.3  Parabolas</a></li>
                <li><a href="#Third_Sub_Point_4">3.4 Powers, roots and logarithms</a></li>
                <li><a href="#Third_Sub_Point_5">3.5 Circles</a></li>
                <li><a href="#Third_Sub_Point_6">3.6 Ellipses</a></li>
                <li><a href="#Third_Sub_Point_7">3.7 Exercises</a></li>
              </ul>
            </li>
            <li><a href="#Fourth_Point_Header">4 Appendix</a></li>
            <li><a href="#Fifth_Point_Header">5 Bibliography</a></li>
            <li><a href="#Sixth_Point_Header">6 Index</a></li>
          </ul>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-contents', MyContents);
