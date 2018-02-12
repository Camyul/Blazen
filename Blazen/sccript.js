$(document).ready(function() {
    let ch = document.getElementsByClassName('pulsante_low');

    let radio = [];
    if (ch.length > 0) {
        for (let i = 0; i < ch.length; i += 1) {

            if (ch[i].type == 'radio') {
                radio.push(ch[i]);
                continue;
            }

            ch[i].checked = true;

        }

        let randomNum = getRandomInt(1, 6);

        radio[randomNum].checked = true;

        setTimeout(complete, 50500);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function complete() {
        document.getElementsByClassName('pulsante2')[0].click();
    }
});