<?php

include 'bdd.php';

{
  $bdd = getBdd();
  $sql= 'SELECT * FROM game WHERE titre LIKE ?';
  $query = $bdd->prepare($sql);
  $search = "%".$_POST["search"]."%";
  $query->execute(array($search));
  $result = $query->fetchAll();

  echo (json_encode($result));
}