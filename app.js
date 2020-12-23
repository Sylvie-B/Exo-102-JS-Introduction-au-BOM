let button = document.getElementById('goOne');
let shutDown = document.getElementById('shutDown');

button.addEventListener('click', function (){
    let config = 'menubar=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no';
    let newWindow = window.open('https://www.google.fr/', '', config);
    newWindow.resizeBy(100, -100);
    newWindow.moveBy(200, 200);
    shutDown.addEventListener('click', function (){
        newWindow.close();
    })
});
