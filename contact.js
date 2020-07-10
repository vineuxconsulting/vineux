var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1pAiA27LBJKeHJ-Ufl-04y1fMea2BtYuzrjQ4B6lz5k4/edit?usp=sharing';

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
    body4.innerHTML = data.body4;
    body5.innerHTML = data.body5;
    body6.innerHTML = data.body6;
    body7.innerHTML = data.body7;
    body8.innerHTML = data.body8;
    body9.innerHTML = data.body9;
    body10.innerHTML = data.body10;
    body11.innerHTML = data.body11;
    
 });
}

  window.addEventListener('DOMContentLoaded', init)
