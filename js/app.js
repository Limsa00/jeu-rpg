var app = {
  gamer:{
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },

  targetCell:{
    positionX: 5,
    positionY: 3
  },

  drawBoard:()=>{
    app.board = document.getElementById('board');

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

        if (indexRow === app.gamer.positionY && indexCell === app.gamer.positionX) {
          app.player = document.createElement('div');
          app.player.classList.add('player');
          app.player.classList.add(app.gamer.direction);
          cell.appendChild(app.player);
        };        
      }
  
      app.board.appendChild(row);
    }
  },

  clearBoard:()=>{
    app.board.textContent = '';
  },

  redrawBoard:()=>{
    app.clearBoard();
    app.drawBoard();
  },

  turnLeft:()=>{
    if(app.gamer.direction === 'right') {app.gamer.direction = 'up';}
    else if(app.gamer.direction === 'up') {app.gamer.direction = 'left';}
    else if(app.gamer.direction === 'left') {app.gamer.direction = 'down';}
    else if(app.gamer.direction === 'down') {app.gamer.direction = 'right';};

    app.redrawBoard();
  },

  turnRight:()=>{
    if(app.gamer.direction === 'right') {app.gamer.direction = 'down';}
    else if(app.gamer.direction === 'down') {app.gamer.direction = 'left';}
    else if(app.gamer.direction === 'left') {app.gamer.direction = 'up';}
    else if(app.gamer.direction === 'up') {app.gamer.direction = 'right';};

    app.redrawBoard();
  },

  moveForward: () => {
    if (app.gamer.direction === 'right' && app.gamer.positionX<5) {app.gamer.positionX++;}
    if (app.gamer.direction === 'left' && app.gamer.positionX>0) {app.gamer.positionX--;}
    if (app.gamer.direction === 'up' && app.gamer.positionY>0) {app.gamer.positionY--;}
    if (app.gamer.direction === 'down' && app.gamer.positionY<3) {app.gamer.positionY++;}

    app.redrawBoard();
  },

  init: function () {
    console.log('init !');

    app.drawBoard();

    document.body.addEventListener('keyup', (event)=>{
      console.log(event);
      if(event.keyCode === 37) {
          app.turnLeft();
      };

      if(event.keyCode === 39) {
        app.turnRight();
      };

      if(event.keyCode === 38) {
        app.moveForward();
      };

    })
  }
};

document.addEventListener('DOMContentLoaded', app.init);