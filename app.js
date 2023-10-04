// - chiedere all'utente i km che deve percorrere
    // - inizializzare una variabile
    const passengerKm = prompt('Quanti km vuoi percorrere?');
    console.log(passengerKm)

// - chiedere all'utente la sua età
    // - inizializzare una variabile
    const passengerAge = prompt('Quanti anni hai?');
    console.log(passengerAge)

// - dichiarare prezzo al km
    const priceForKm = 0.21 

// - dichiarare prezzo base del biglietto
    let basePrice = priceForKm * passengerKm;
    console.log(basePrice)

// - applicare sconto del 20% se il passegero è minorenne
    let priceDiscount
        // - sconto minorenni
        if(passengerAge < 18) {
        console.log('20% di sconto')
        alert('Grande, hai diritto al 20% dello sconto')
        priceDiscount = ((priceForKm * passengerKm * 20) / 100); 
        console.log(priceDiscount)
        }

// - applicare sconto del 40% se il passegero ha un età superiore a 65 anni
        // sconto anziani
        else if(passengerAge > 65) {
        console.log('40% di sconto') 
        alert('Grande, hai diritto al 40% dello sconto')
        priceDiscount = ((priceForKm * passengerKm * 40) / 100);    
        }         

// - non applicare sconto se il passegero non rispetta le regole delle sconto
        else {
            priceDiscount = 0;
            alert('La tariffa non è soggetta a nessuno sconto')
        }

// - calcolare il prezzo del biglietto seguendo le regole di sconto appropriate
    let totalPrice = basePrice - priceDiscount;
    totalPrice = Number(totalPrice.toFixed(2));
    console.log(totalPrice)

// - Scrivere sulla pagina il prezzo del biglietto
//     - inserire nell'html un tag con id="ticket"
//     - recuperare con js l'elemento del dom con id ="ticket"
        let ticketDomElement = document.getElementById('ticket');

//     - modificare l'innerHTML del h1 con il valore
    ticketDomElement.innerHTML = totalPrice;