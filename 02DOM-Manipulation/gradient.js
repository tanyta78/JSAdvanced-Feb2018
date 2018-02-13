function attachGradientEvents() {
    let gradient = document.getElementById('gradient'); gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let x = event.offsetX;
        let result = Math.trunc((x /(event.target.clientWidth-1)) * 100);
        document.getElementById('result').textContent = result + '%';

    }

    function gradientOut(event){
        document.getElementById('result').textContent='';
    }
}