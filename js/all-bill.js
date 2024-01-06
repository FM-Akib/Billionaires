
function LoadData(dataLimit) {
  const url = 'https://forbes400.onrender.com/api/forbes400/getAllBillionaires';
  fetch(url)
    .then(response => response.json())
    .then(data => showData(data,dataLimit))
}

const showData = (data,dataLimit) => {
  const Billionaires = document.getElementById('main-section');
  Billionaires.innerHTML='';



const show=document.getElementById('show-all');
if(dataLimit===18){
data= data.slice(0,18);
show.classList.remove('d-none')
}
else {
    show.classList.add('d-none')

}
//  let k=0;
//  const show=document.getElementById('ShowAll');
//  function showall(){
//   show.classList.add('d-none')
//   Billionaires.innerHTML='';
//   LoadData();
//   k=1;
//  }

 
//  if(k===0){
//   data=data.slice(0, 18);
//   show.classList.remove('d-none')
// }
 
 
 







 data.forEach(billionaire => {
    const Acard = document.createElement('div');
      
    let Url = billionaire.squareImage;
    if (Url && !Url.startsWith('http')) {
      Url = `https:${Url}`;
    }

    const shares = (billionaire.financialAssets && Array.isArray(billionaire.financialAssets) && billionaire.financialAssets.length > 0) ?
      billionaire.financialAssets[0].numberOfShares : 'N/A';
    const sharePrice = (billionaire.financialAssets && Array.isArray(billionaire.financialAssets) && billionaire.financialAssets.length > 0) ?
      billionaire.financialAssets[0].sharePrice : 'N/A';

    Acard.innerHTML = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${Url||'N/A'}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${billionaire.personName}</h5>
              <h6>Citizenship: ${billionaire.countryOfCitizenship|| 'N/A'}</h6>
              <h6>City: ${billionaire.city || 'N/A'}</h6>
              <h6>Total Shares: ${shares}</h6>
              <h6>Share Price: ${sharePrice}</h6>
            </div>
          </div>
        </div>
      </div>
    `;
    Billionaires.appendChild(Acard);
  });
};
document.getElementById('show-all-btn').addEventListener('click',function(){
  LoadData(400);
})
LoadData(18);
