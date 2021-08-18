var app = {
  player:{
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },

  targetCe:{
    positionX: 5,
    positionY: 3
  },

  drawBoard:()=>{
    var board = document.getElementById('board');


    for (let indexRow = 0; indexRow < 4; indexRow++) {
      var row = document.createElement('div');
      row.classList.add('row');

      for (let indexCell = 0; indexCell < 6; indexCell++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        
        row.appendChild(cell);
      }
  
      board.appendChild(row);
    }
  },

  init: function () {
    console.log('init !');

    app.drawBoard();
  }
};

document.addEventListener('DOMContentLoaded', app.init);