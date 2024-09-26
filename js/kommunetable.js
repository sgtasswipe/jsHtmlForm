import {fetchAnyUrl, postObjectAsJson, restDelete} from "./moduljson.js"


console.log("er i kommunetable")


const urlKommune = "http://localhost:8080/getownkommuner"
const pbCreateKommuneTable = document.getElementById("pbGetKommuner")
const tblKommuner = document.getElementById("tblKommuner")

let kommuner = []

function createTable(kommune) {
    let cellcount = 0;
    let rowCount = tblKommuner.rows.length;

    let row = tblKommuner.insertRow(rowCount);
    let cell = row.insertCell(cellcount++);

    cell.innerHTML = kommune.kode;
    cell.style.width = "10%"
    cell = row.insertCell(cellcount++);
    cell.innerHTML = kommune.navn;
    cell.style.width = "20%"
    cell = row.insertCell(cellcount++);
    cell.innerHTML = kommune.href;
    cell.style.width = "30%"
    cell = row.insertCell(cellcount++);
    cell.innerHTML = kommune.region.kode;
    cell.style.width = "10%"
    cell = row.insertCell(cellcount++);
    cell.innerHTML = kommune.region.name;
    cell.style.width = "20%"
    cell = row.insertCell(cellcount++);

    const pbDelete = document.createElement("input");
    pbDelete.type = "button";
    pbDelete.setAttribute("value", "Slet kommune");
    cell.style.width = "10%"
    cell.appendChild(pbDelete);
    row.id = kommune.navn;
    pbDelete.onclick = function() {
        document.getElementById(row.id).remove();
        deleteKommune(kommune)
    }
}


async function deleteKommune(kommune) {
    try {
        const url = "http://localhost:8080/deleteKommune" + "/" + kommune.kode
        const response = await restDelete(url)
        console.log(response)
    } catch (error) {
        console.log(error)
    }


}



async function fetchKommuner () {
    kommuner = await fetchAnyUrl(urlKommune)
    console.log(kommuner)
    kommuner.forEach(createTable)

}
function actionGetKommuner () {
    fetchKommuner()
}
pbCreateKommuneTable.addEventListener("click", actionGetKommuner)

