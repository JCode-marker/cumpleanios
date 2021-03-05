// export
    // variables
    const d = document;
    
    function countdown(id, limitDate, finalMessage) {
        
        // variables
        const $countdown = d.getElementById(id),
            countdownDate = new Date(limitDate).getTime();

        // setInterval
        let countdownTempo = setInterval(() => {
            let now = new Date().getTime(),
                limitTime = countdownDate - now,
                days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
                hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))).slice(-2),
                minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
                seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);

            $countdown.innerHTML = `
                <h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>
            `

            // condicionales
            if (limitTime < 0) {
                clearInterval(countdownTempo);
                $countdown.innerHTML = `<video src=${finalMessage} controls></video>`
            }
            
        }, 1000);

    }

    countdown(
        "countdown",
        "Mar 05, 2021 17:00:00",
        "cumpleaños-avengers.mp4"
    )
