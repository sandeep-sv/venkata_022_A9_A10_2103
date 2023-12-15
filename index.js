document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('main');
    var context = canvas.getContext('2d');
  
    var currentColor = 'black';
    var currentSize = 2;
  
    function changeColor(color) {
      currentColor = color;
    }
  
    function changeSize(size) {
      currentSize = size;
      document.getElementById('brushSize').textContent = size;
    }
  
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      context.lineWidth = currentSize;
      context.lineCap = 'round';
      context.strokeStyle = currentColor;
  
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    function stopDrawing() {
      isDrawing = false;
      context.beginPath();
    }
  
    document.getElementById('black').addEventListener('click', function () {
      changeColor('black');
    });
    document.getElementById('pink').addEventListener('click', function () {
      changeColor('pink');
    });
    document.getElementById('blue').addEventListener('click', function () {
      changeColor('blue');
    });
    document.getElementById('yellow').addEventListener('click', function () {
      changeColor('yellow');
    });
  
    document.getElementById('erase').addEventListener('click', function () {
      changeColor('#FFFFFF'); 
    });
  
    document.getElementById('new').addEventListener('click', function () {
      clearCanvas();
    });
  
    document.getElementById('slider').addEventListener('input', function () {
      changeSize(this.value);
    });
  
    var isDrawing = false;
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  });
  