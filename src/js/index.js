// Javascript Entry Point

import $ from 'jquery';

import data from './form_data';
import {templateInput} from './template_input';
import {templateSelect} from './template_select';
import {templateTextArea} from './template_textarea';

var $form = $('.dynamic-form');

console.log(templateInput);
data.forEach(function(datum) {
  var template;
  if (datum.type === 'text' || datum.type === 'email' || datum.type === 'tel') {
    template = templateInput;
  
  } else if (datum.type === 'select') {
    template = templateSelect;
  } else if (datum.type === 'textarea') {
    template = templateTextArea;
  }
 
  var html = template(datum);
  $form.append( html );
});













