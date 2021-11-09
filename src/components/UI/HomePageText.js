import React from 'react';
import classes from "./HomePageText.module.css";

const HomePageText = () => {
    return (
        <React.Fragment>
            <div className={classes['text-holder']}>
                <h1 className={classes.title}>LUGLIO TEMPESTOSO CON FREQUENTI FENOMENI INTENSI ACCOMPAGNATI DA GRANDINE</h1>
                <p className={classes.paragraph}>
                Il mese si apre con una giornata stabile accompagnata da caldo senza eccessi. A partire dal giorno 3 luglio una depressione in approfondimento sull'Europa occidentale favorisce una modesta accentuazione dell'instabilità con il passaggio di un fronte perturbato poco attivo sulla nostra provincia.  A partire dal giorno 7 luglio si apre nuovamente una fase caratterizzata da condizioni meteorologiche molto instabili. La dinamica in essere trova la nostra regione al confine tra due masse d'aria con caratteristiche diverse: fresca atlantica e calda di matrice africana. Tale sinottica favorisce lo sviluppo di sistemi convettivi a base elevata, con fenomeni temporaleschi molto forti e grandinate di medio-grandi dimensioni. Uno di questi episodi avviene nella giornata del 7 luglio ed interessa i quartieri centro orientali del capoluogo, Chivassese le colline del Po ed il Vercellese. Tra gli accumuli degni di nota segnaliamo le stazioni di To centro con circa 30 mm e Verolengo (Arpa Piemonte) con 40 mm.
                </p>
            </div>
        </React.Fragment>
    );
}

export default HomePageText;