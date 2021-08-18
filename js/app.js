var app = {
  player:{
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },

  targetCell:{
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

        if (indexRow === app.targetCell.positionY && indexCell === app.targetCell.positionX) {
          cell.classList.add('targetCell');
        };

        if (indexRow === app.player.positionY && indexCell === app.player.positionX) {
          var player = document.createElement('div');
          player.classList.add('player');
          cell.appendChild(player);
        };        
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