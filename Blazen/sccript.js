(function() {
    let ch = document.getElementsByClassName('pulsante_low');

    let radio = [];

    for (let i = 0; i < ch.length; i += 1) {

        if (ch[i].type == 'radio') {
            radio.push(ch[i]);
            continue;
        }

        ch[i].checked = true;

    }

    let randomNum = getRandomInt(1, 6);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    radio[randomNum].checked = true;

    setTimeout(complete, 50500);

    function complete() {
        document.getElementsByClassName('pulsante2')[0].click();
    }
})();