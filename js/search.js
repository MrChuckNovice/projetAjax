const datalist = document.getElementById('titre');
const descript = document.getElementById('description');
const dinput = document.getElementById('search');
const form = document.querySelector("form");
const btn = document.getElementById('btn');

dinput.addEventListener("input", (e) => {

    e.preventDefault();

    if (search.value !== ""){

    const formData = new FormData(form);

    fetch("inc/ajax.php",{

        method: "POST",
        body: formData,
    })

    .then(res => res.json())
    .then(datas => {
       
        datalist.innerHTML = ""

        datas.forEach((data) => {
            //faire une boucle qui va creer des div 
            let option = document.createElement("option");

            option.value = data["titre"];

            option.innerText = data["titre"];

            datalist.appendChild(option);
        });
            if(search.value == option.innerText){
                 
                datalist.innerHTML = "";
               // bug EXPloite wtf c'est comme un  addEventListener mais pas vraiment 
                btn.click(); 
            }
    });
   }
    
});

//faire une function qui valide le submit

form.addEventListener("submit", (e) => { 
  
  e.preventDefault();
  
  const formData = new FormData(form);

    fetch("inc/ajax.php",{

        method: "POST",
        body: formData,
    }
    )
    .then(res => res.json())
    .then(datas => {

        descript.innerHTML = "";

        datas.forEach((data) => {

           descript.innerHTML += `<p> le jeu se nomme ${data.titre} développer par ${data.editeur}  <p>`;
            
         }) 
 
    })

//remets le formulaire à 0
form.reset();
});
