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
    // console.log(template);
  } else if (datum.type === 'select') {
    template = templateSelect;
  } else if (datum.type === 'textarea') {
    template = templateTextArea;
  }
  // console.log(template);
  var html = template(datum);
  $form.append( html );
});


// var dataTypeToTemplate = {
//   'input': text,
//   'input': email,
//   'input': tel,
//   'select': select,
//   'textarea': textarea,
// }

// data.forEach(function(datum) {
//   var templateInput = dataTypeToTemplate[data[0].type];
//   var html = templateInput(data);
//   $form.append( html );
// });











