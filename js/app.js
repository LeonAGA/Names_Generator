

     const loadNames = (e) => {
     e.preventDefault();

     // Leer las variables

     const origin = document.getElementById('origin');
     const selectedOrigin = origin.options[origin.selectedIndex].value;

     const gender = document.getElementById('gender');
     const selectedGender = gender.options[gender.selectedIndex].value;

     const quantity = document.getElementById('number').value;

     let url = '';
     url += 'http://uinames.com/api/?';
     
     if(selectedOrigin !== '') {
          url += `region=${selectedOrigin}&`;
     
     
     if(selectedGender!== '') {
          url += `gender=${selectedGender}&`;
     }
     
     if(quantity !== '') {
          url += `amount=${quantity}&`;
     }
     }else{
          alert('Please select an \'Origin\' ');
     }

     fetch(url)
     .then(res=> res.json()).then(data =>{
         
          let html = `<h2>Just Pick One:</h2>`;

          html += `<ul class="list">`;

          data.forEach(name => html+= `<li>${name.name}</li>`);

          html += `</ul>`;

          document.querySelector('#result').innerHTML = html;
     }).catch(error => console.log(error));
}

document.querySelector('#generate-name').addEventListener('submit', loadNames);
