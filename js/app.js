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
          cell.appendChild(app.player);
        };        
      }
  
      app.board.appendChild(row);
    }
  },

  turnLeft:()=>{
    if(app.gamer.direction === 'right') {
      app.player.style.transform = 'rotate(-0.25turn)';
      app.gamer.direction = 'up';
    } else if(app.gamer.direction === 'up') {
        app.player.style.transform = 'rotate(-0.5turn)';
        app.gamer.direction = 'left';
    }else if(app.gamer.direction === 'left') {
        app.player.style.transform = 'rotate(-0.75turn)';
        app.gamer.direction = 'bottom';
    }else if(app.gamer.direction === 'bottom') {
        app.player.style.transform = 'rotate(0)';
        app.gamer.direction = 'right';
    };
  },

  turnRight:()=>{
    if(app.gamer.direction === 'right') {
      app.player.style.transform = 'rotate(0.25turn)';
      app.gamer.direction = 'bottom';
    } else if(app.gamer.direction === 'bottom') {
        app.player.style.transform = 'rotate(0.5turn)';
        app.gamer.direction = 'left';
    } else if(app.gamer.direction === 'left') {
      app.player.style.transform = 'rotate(0.75turn)';
      app.gamer.direction = 'up';
    } else if(app.gamer.direction === 'up') {
      app.player.style.transform = 'rotate(0turn)';
      app.gamer.direction = 'right';
    };
  },

  clearBoard:()=>{
    app.board.textContent = '';
  },

  redrawBoard:()=>{
    app.clearBoard();
    app.drawBoard();
  },

  init: function () {
    console.log('init !');

    app.drawBoard();

    document.body.addEventListener('keyup', (event)=>{
      // console.log(event);
      if(event.keyCode === 37) {
          app.turnLeft();
      };

      if(event.keyCode === 39) {
        app.turnRight();
      };
    })
  }
};

document.addEventListener('DOMContentLoaded', app.init);