// - chiedere all'utente i km che deve percorrere
    // - inizializzare una variabile
    const passengerKm = prompt('Quanti km vuoi percorrere?')
    console.log(passengerKm)

// - chiedere all'utente la sua età
    // - inizializzare una variabile
    const passengerAge = prompt('Quanti anni hai?')
    console.log(passengerAge)

// - dichiarare prezzo base del biglietto
    const priceForKm = 0.21 

// - applicare sconto del 20% se il passegero è minorenne
    let priceDiscount
        // - sconto minorenni
        if(passengerAge < 18) {
        console.log('20% di sconto')
        }
// - applicare sconto del 40% se il passegero ha un età superiore a 65 anni
        // sconto anziani
        else if(passengerAge > 65) {
        console.log('40% di sconto')    
        }         

// - non applicare sconto se il passegero non rispetta le regole delle sconto
    

// - calcolare il prezzo del biglietto seguendo le regole di sconto appropriate