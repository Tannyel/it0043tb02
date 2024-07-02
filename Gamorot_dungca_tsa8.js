document.getElementById('reset-flexbox').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.flexDirection = 'row';
    document.querySelector('.fb-sim-display').style.justifyContent = 'space-around';
    document.querySelector('.fb-sim-display').style.alignItems = 'center';
    document.querySelector('.fb-sim-display').style.gap = '20px'; // Reset gap
    document.querySelectorAll('.grow-input').forEach(input => {
        input.value = '0';
    });
});

document.getElementById('flex-direction-row').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.flexDirection = 'row';
});

document.getElementById('flex-direction-column').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.flexDirection = 'column';
});

document.getElementById('justify-start').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.justifyContent = 'flex-start';
});

document.getElementById('justify-center').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.justifyContent = 'center';
});

document.getElementById('justify-end').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.justifyContent = 'flex-end';
});

document.getElementById('justify-space-between').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.justifyContent = 'space-between';
});

document.getElementById('align-start').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.alignItems = 'flex-start';
});

document.getElementById('align-center').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.alignItems = 'center';
});

document.getElementById('align-end').addEventListener('click', function () {
    document.querySelector('.fb-sim-display').style.alignItems = 'flex-end';
});

document.getElementById('box-gap-input').addEventListener('input', function () {
    const gapValue = this.value + 'px';
    document.querySelector('.fb-sim-display').style.gap = gapValue;
});

document.getElementById('grow-box-1').addEventListener('click', function () {
    const box = document.getElementById('box-1');
    box.style.flexGrow = parseInt(box.style.flexGrow || 0) + 1;
    document.getElementById('grow-box-1-input').value = box.style.flexGrow;
});

document.getElementById('grow-box-2').addEventListener('click', function () {
    const box = document.getElementById('box-2');
    box.style.flexGrow = parseInt(box.style.flexGrow || 0) + 1;
    document.getElementById('grow-box-2-input').value = box.style.flexGrow;
});

document.getElementById('grow-box-3').addEventListener('click', function () {
    const box = document.getElementById('box-3');
    box.style.flexGrow = parseInt(box.style.flexGrow || 0) + 1;
    document.getElementById('grow-box-3-input').value = box.style.flexGrow;
});

document.getElementById('reset-grow').addEventListener('click', function () {
    document.querySelectorAll('.fb-sim-display .box').forEach(box => {
        box.style.flexGrow = '0';
    });
    document.querySelectorAll('.grow-input').forEach(input => {
        input.value = '0';
    });
});

document.getElementById('grow-all').addEventListener('click', function () {
    document.querySelectorAll('.fb-sim-display .box').forEach(box => {
        box.style.flexGrow = '1';
    });
    document.querySelectorAll('.grow-input').forEach(input => {
        input.value = '1';
    });
});
