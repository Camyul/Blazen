$(document).ready(function() {

    let startMining = getAnchor('Start Mining');
    console.log(startMining + ' Start Mining');

    let resumeWork = getAnchor('Resume work');
    console.log(resumeWork + ' resumeWork');

    if (startMining) {

        console.log('Start Mining');
        let randomTime = getRandomInt(5500, 9700)
        console.log(randomTime);
        setTimeout(startMiningWithTimeout, randomTime);
        return;
    } else if (resumeWork) {

        console.log('Resume Work');
        let randomTime = getRandomInt(5500, 9700)
        console.log(randomTime);
        setTimeout(resumeWorkWithTimeout, randomTime);
        return;
    } else {

        let ch = document.getElementsByClassName('pulsante_low');

        console.log(ch.length + ' cheboxes');

        let startWork = getAnchor('Click');
        console.log(startWork + 'Click');

        if (startWork && ch.length === 0) {
            console.log('Click');

            let anchorAds = getAnchorAds();
            if (anchorAds.length === 5) {

                let randomTime = getRandomInt(5500, 9700);
                console.log('Choise Ad');
                console.log(randomTime);

                setTimeout(choiseRandomAd, randomTime);
            } else {
                let randomTime = getRandomInt(5500, 9700);
                console.log('Click');
                console.log(randomTime);

                setTimeout(startWorkWithTimeout, randomTime);
            }
            return;
        }

        let radio = [];

        if (ch.length > 0) {
            for (let i = 0; i < ch.length; i += 1) {

                if (ch[i].type == 'radio') {
                    radio.push(ch[i]);
                    continue;
                }

                ch[i].checked = true;

            }

            if (radio.length === 30) {
                let randomNum = getRandomInt(0, 29);

                console.log(radio.length + ' radio');
                radio[randomNum].checked = true;

                let randomTime = getRandomInt(5500, 9700)
                console.log(randomTime);

                setTimeout(complete, randomTime);
            } else {
                let randomNum = getRandomInt(0, 5);

                radio[randomNum].checked = true;
                console.log(radio.length + ' radio');

                let randomTime = getRandomInt(51500, 70700)
                console.log(randomTime);

                setTimeout(complete, randomTime);
            }
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function complete() {
        document.getElementsByClassName('pulsante2')[0].click();
    }

    function getAnchorAds() {
        let aTags = document.getElementsByTagName("a");
        let result = [];

        for (var i = 0; i < aTags.length; i++) {
            let url = aTags[i].href;

            if (url.includes('PanelShop_new.php?Scelta')) {
                result.push(aTags[i]);
            }
        }

        return result;
    }

    function getAnchor(searchText) {
        let aTags = document.getElementsByTagName("a");
        let found;

        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].textContent == searchText) {
                found = aTags[i];
                break;
            }
        }

        return found;
    }

    function startMiningWithTimeout() {
        let startMining = getAnchor('Start Mining');

        startMining.click();
    }

    function resumeWorkWithTimeout() {
        let resumeWork = getAnchor('Resume work');

        resumeWork.click();
    }

    function startWorkWithTimeout() {
        let startWork = getAnchor('Click');

        startWork.click();
    }

    function choiseRandomAd() {
        let anchorAds = getAnchorAds();
        let choiseAds = getRandomInt(0, 4);
        console.log('randomAdNumber ' + choiseAds);

        anchorAds[choiseAds].click();
    }
});