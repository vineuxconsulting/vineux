var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/13lSgjEafte8NVcqGLzv-A9WCDptnM_exS601Ky3lnlQ/edit?usp=sharing';

  function init() {
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true 
    } )
  }

  function showInfo(data, tabletop) {
    data.forEach(function(data) {
    header.innerHTML = data.header;
    header2.innerHTML = data.header2;
    body.innerHTML = data.body;
    body2.innerHTML = data.body2;
    body3.innerHTML = data.body3;
    
 });
}
  window.addEventListener('DOMContentLoaded', init)
