$(document).ready(function() {
    let ch = document.getElementsByClassName('pulsante_low');
    console.log(ch.length + ' cheboxes');

    let radio = [];

    if (ch.length > 0) {
        for (let i = 0; i < ch.length; i += 1) {

            if (ch[i].type == 'radio') {
                radio.push(ch[i]);
                continue;
            }

            ch[i].checked = true;

        }
        if (ch.length === radio.length) {
            let randomNum = getRandomInt(0, 29);

            radio[randomNum].checked = true;
            console.log(radio.length + ' radio');

            let randomTime = getRandomInt(5500, 9700)
            console.log(randomTime);

            setTimeout(complete, randomTime);
        }

        let randomNum = getRandomInt(1, 6);

        radio[randomNum].checked = true;
        console.log(radio.length + ' radio');

        let randomTime = getRandomInt(50500, 70700)
        console.log(randomTime);

        setTimeout(complete, randomTime);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function complete() {
        document.getElementsByClassName('pulsante2')[0].click();
    }
});