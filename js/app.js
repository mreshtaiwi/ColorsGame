'use strict';
/* eslint-disable strict */
//var colors = ['rgb(255, 0, 0)','rgb(255, 255, 0)','rgb(0, 255, 0)','rgb(0, 255, 255)','rgb(0, 0, 255)','rgb(255, 0, 255)'];
var mode = 6;
var colors = generateRandomColor(mode);
var squares = document.querySelectorAll('.square');
var pickedcolor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
colorDisplay.textContent = pickedcolor;
var h1 = document.querySelector('h1');
var restButton = document.querySelector('#reset');
restButton.addEventListener('click', function(){
  colors = generateRandomColor(mode);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  startGame();
  h1.style.backgroundColor = 'steelblue';
  restButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
});

function restTheGame(mode){
  colors = generateRandomColor(mode);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  startGame();
  h1.style.backgroundColor = 'steelblue';
  restButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
}

startGame();
function startGame() {
  //console.log(colors);
  for (var i = 0; i < squares.length; i++) {
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to  squares
    squares[i].addEventListener('click', function () {
      //grab the color 
      var clickedColor = this.style.backgroundColor;
      //console.log(clickedColor,pickedcolor);
      if (clickedColor === pickedcolor) {
        messageDisplay.textContent = 'CORRECT';
        changeColors(pickedcolor);
        h1.style.backgroundColor = pickedcolor;
        restButton.textContent = 'Play Again!';
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
      }
    });
  }
}
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColor(number) {
  // add number of colors 
  var arr = [];
  for (let i = 0; i < number; i++) {
    //get random color and then push it into the arr
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  //pick from 0-255 red color persentage
  var R = Math.floor(Math.random() * 256);
  //pick from 0-255 green color persentage
  var G = Math.floor(Math.random() * 256);
  //pick from 0-255 blue color persentage
  var B = Math.floor(Math.random() * 256);
  return 'rgb(' + R + ', ' + G + ', ' + B + ')';
}

var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');

easyButton.addEventListener('click', function(){
  mode = 3;
  colors = generateRandomColor(mode);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      restTheGame(mode);
    }else{
      squares[i].style.display = 'none';
    }
  }
});

hardButton.addEventListener('click',function(){
  mode = 6;
  colors = generateRandomColor(mode);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;
  easyButton.classList.remove('selected');
  hardButton.classList.add('selected');
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
      restTheGame(mode);
    }//else{
    //   squares[i].style.display = 'none';
    // }
  }
});