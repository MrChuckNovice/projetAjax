<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/main.css" rel="stylesheet">
    <title>Jeux d'Arcade</title>
    
</head>
<body>
<header>
   <h1>The ARCADE</h1>
<form>
    <div>
        <label for="search">le titre du jeu :</label>
        <input type="search" list="titre" autocomplete="off" name="search" id="search">
        <datalist id="titre"></datalist>
         <button id ="btn">Cliquez !</button>   
    </div>
    
</form>
</header>

<div class="wrapper">
<div  class="photo1"  id="photo1"></div>
<div  class="photo2"  id="photo2"></div>
<div  class="video"  id="video">
    <video controls width="250">
        
    </video>
</div>
<div class="description" id="description"></div>
</div>
<script src="js/search.js" defer ></script>
</body>
</html>