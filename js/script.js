/* ARRAY */

const items = [
    {
        name : 'Arya Stark',
        image : 'images/arya.jpeg'

    },
    {
        name : 'Bran Stark',
        image : 'images/bran.webp'
    },
                                                /* OGGETTI DELL'ARRAY */
                                                /* OGNI OGGETTI HA LE SUE CHIAVI */
                                                /* OGNI CHIAVE HA UN SUO VALORE */
    {
        name : 'Daenarys Targaryen',
        image : 'images/daenarys.webp'
    },
    {
        name : 'Sansa Stark',
        image : 'images/sansa.webp'
    },
    {
        name : 'John Snow',
        image : 'images/john.webp'
    }
    
];

/* SELEZIONO L'ELEMENTO HTML IN CUI VOGLIO METTERE I MIEI ITEMS */

const container = document.querySelector('.items-container');
const previewContainer = document.querySelector('.preview-container');

/* FACCIO UNA VARIABILE PER AVERE UN INIZIO PER FARE IL CICLO O PER POTER CONFRONTARE [i] */

let currentlyActive = 0;

/* FACCIO UN CICLO PER AVERE I DETTAGLI DI OGNI OGGETTO DEL MIO AARAY */


/* CREARE UNA VARIABILE (CONTATORE) E FARE UNA CONDIZIONE IN MODO TALE
 CHE IL SUO VALORE CORRISPONDA  ALLA LUNGHEZZA DELL'ARRAY */

/* i = 0               PARTENZA DEL CICLO               */
/* i < items.length    VALORE DI [i]                    */
/*  i++                OGNI CICLO [i] INCREMENTA DI 1   */

for (let i = 0; i < items.length; i++) {
    const item = items [i]; 
    console.log (item);

    

/* CREARE UNA CONDIZIONE CHE SE L'INDICE DELL'ARRAY CORRISPONDA A [0]
 SI AGGIUNGE UNA CLASSE ACTIVE CIOE' TOGLIE IL DISPLAY: NONE AL ITEM */

 /* ALTRIMENTI ITEM NON RICEVE LA CLASSE ACTIVE E RIMANE CON DISPLAY: NONE */


 /*CREARE UN TEMPLATE LITERAL PER OGNI CONDIZIONE PER STAMPARE L'ELEMENTO IN DOM */



    if (i == 0) {
        container.innerHTML += `<div class="item active">
                                    <img src="${item.image}" alt="">
                                    <h2>
                                        ${item.name}
                                    </h2>
                                </div>`
                               
    }

    else {
        container.innerHTML += `<div class="item">
                                    <img src="${item.image}" alt="">
                                    <h2>
                                        ${item.name}
                                    </h2>
                                </div>`
    }


    previewContainer.innerHTML += `
                                    <div class="small-preview-container">
                                        <img src="${item.image}" alt="">
                                    </div>`

    
};

/* SELEZIONO TUTTI GLI ELEMENTI CON LA CLASSE ITEMS */

const objects = document.querySelectorAll ('.item');

/* SELEZIONO L'ELEMENTO HTML CIOE' BUTTON PER DARE UNA FUNZIONE */

const nextButton = document.querySelector ('.next');

/* AGGIUNGO AL BUTTONE addEventListener CIOE' DARE UNA FUNZIONE O AZIONE
OGNI VOLTA CHE FACCIO CLICK */

nextButton.addEventListener ('click',
    function () {




        if (currentlyActive == objects.length - 1) {

            objects[currentlyActive].classList.remove('active');

/* RIPRISTINARE currentlyActive A 0 */

            currentlyActive = 0;

            objects[currentlyActive].classList.add('active');
        }

        else {
            objects[currentlyActive].classList.remove('active');

            currentlyActive ++;

            objects[currentlyActive].classList.add('active');
        }
    }
     
    
);

const prevButton = document.querySelector ('.previous');

prevButton.addEventListener ('click',
    function () {

        if (currentlyActive == 0) {

            objects[currentlyActive].classList.remove('active');

            currentlyActive = objects.length - 1;

            objects[currentlyActive].classList.add('active');
        }

        else {
            objects[currentlyActive].classList.remove('active');

            currentlyActive --;

            objects[currentlyActive].classList.add('active');
        }
    }
     
    
)

const smallImages = document.querySelectorAll ('.small-preview-container');

8
smallImages.forEach(function(myclick)) 

.addEventListener ('click',
     function () {
        objects[currentlyActive].classList.remove('active');
        objects[0].classList.add('active');
    }

)









