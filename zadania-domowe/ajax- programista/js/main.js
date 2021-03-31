let btnGetData = document.getElementById('get-data');

const getData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {

            let divToData = document.getElementById('dane-programisty');
            /*         let  pId = document.createElement('p'); */

            if (divToData.hasChildNodes()) {
                let msg = document.getElementById('msg');
                msg.innerText = 'Użytkownik został już pobrany! ';
            } else {
                let pUserName = document.createElement('p');
                let pUserLastname = document.createElement('p');
                let pUserOccupation = document.createElement('p');
                let pCompany = document.createElement('p');

                pUserName.innerText = `Imię: ${data.imie}`;
                pUserLastname.innerText = `Nazwisko: ${data.nazwisko}`;
                pUserOccupation.innerText = `Zawód: ${data.zawod}`;
                pCompany.innerText = `Firma: ${data.firma}`;

                //to do zmienić na budowanie w divie 
                divToData.appendChild(pUserName);
                divToData.appendChild(pUserLastname);
                divToData.appendChild(pUserOccupation);
                divToData.appendChild(pCompany);

            }

        })
        .catch(error => {
            console.log(error);
        });
}

btnGetData.addEventListener('click', getData);

