const datalist = document.getElementById('titre');
const descript = document.getElementById('description');
const dinput = document.getElementById('search');
const form = document.querySelector("form");

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
    });
   }
    
});

//faire une function qui s'affiche

