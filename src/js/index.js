// Javascript Entry Point

import $ from 'jquery';

import users from './form_data';

var $app = $('.app');


users.forEach(function(user) {
  var template;
  if (user.type === 'text' || user.type === 'email' || user.type === 'tel') {
    template = text;
  } else if (user.type === 'select') {
    template = select;
  } else if (user.type === 'textarea') {
    template = textarea;
  }
  
  var html = template(user);
  $app.append( html );
});











