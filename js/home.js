function LoadData(){
    const url='https://forbes400.onrender.com/api/forbes400?limit=10';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showdata(data));
}

const showdata=(data) =>{


// console.log(data.length);
    const Table=document.getElementById('Table-Row');
    for(let i=0; i<data.length; i++){
    const row=document.createElement('tr');
    row.innerHTML=` 
            <td>${data[i].personName}</td>
            <td>${data[i].countryOfCitizenship}</td>
            <td>${data[i].industries[0]}</td>
            <td>${data[i].rank}</td>
            <td>${data[i].archivedWorth}</td>
    `
    Table.appendChild(row);
    }
}
LoadData();