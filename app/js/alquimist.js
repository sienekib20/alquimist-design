"use strict";

/**
 *  alquimit.js v1.0
 * 
 *  author: siene kelyson | e-mail: sienekib@gmail.com
 * 
 *  since March 2024
 */

(function ($) {

  const uploadContain = document.querySelector('.upload-contain');
  const uploadTriggerChildren = document.querySelectorAll('.upload-trigger *')
  const uploadBigText = document.querySelector('.upload-big-text');
  const enterContain = function (e) {
    uploadTriggerChildren.forEach(child => {
      child.classList.add('upload-item-hided');
    });
    uploadBigText.classList.remove('upload-item-hided');
  }
  uploadContain.addEventListener('dragenter', enterContain);
  uploadContain.addEventListener('dragover', enterContain);
  uploadContain.addEventListener('dragend', function() {
    alert(22);
  });

  uploadContain.addEventListener('dragleave', function (e) {
    uploadBigText.classList.add('upload-item-hided');
    uploadTriggerChildren.forEach(child => {
      child.classList.remove('upload-item-hided');
    });
  });


  // make_alert
  let alertIntervalID;
  var maxWidth;

  function make_alert(text) {
    $('#alert-text').text('');
    $('#alert-text').text(text);
    $('.mkalert').addClass('show');

    $('.alert-timing-progress').css('width', '100%');
    maxWidth = 100;
    alertIntervalID = setInterval(decrease_alert_progress, 100);

    /*setTimeout(() => {
        $('.mkalert').removeClass('show');
    }, 3000);*/
  }

  function decrease_alert_progress() {
    if (maxWidth == 0) {
      $('.mkalert').removeClass('show');
      clearInterval(alertIntervalID);
    }
    $('.alert-timing-progress').css('width', maxWidth + '%');
    maxWidth--;
  }

  // truncar linhas
  window.addEventListener('load', function () {
    var elementos = document.querySelectorAll('.seu-elemento');
    elementos.forEach(function (elemento) {
      var linhaAltura = parseFloat(window.getComputedStyle(elemento).lineHeight);
      var maxLinhas = 3; // número máximo de linhas visíveis
      var alturaMaxima = linhaAltura * maxLinhas;
      if (elemento.offsetHeight > alturaMaxima) {
        elemento.classList.add('truncado');
      }
    });
  });

})(jQuery);


