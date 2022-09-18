window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    /*
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    context.strokeRect(50, 50, 200, 200);

    context.strokeStyle = 'blue';
    context.lineWidth = 3;
    context.strokeRect(300, 50, 200, 200);

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 100);
    context.lineTo(200, 200);
    context.closePath();
    context.stroke();
    */

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        context.beginPath();
    }

    function draw(e) {
        if(!painting) return;
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    // event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
});