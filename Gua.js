(function () {
  'use strict';
  window.gua = {
    ajax: function ({url, method = 'GET', data, async = true}) {
      if (typeof XMLHttpRequest !== 'undefined') {
        let xhr = new XMLHttpRequest();
        switch (method.toUpperCase()) {
          case 'GET':
            break;
          case 'POST':
            break;
          case 'DELETE':
            break;
          case 'PUT':
            break;
        }
        if (async) {
          xhr.onreadystatechange = function (res) {
            return new Promise(function (res) {
              if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(res);
              } else {
                reject(res);
              }
            })
          }
        }
        xhr.open(method, url, async);
      }
    }
  }
})();