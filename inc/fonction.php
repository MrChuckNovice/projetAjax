<?php

include 'bdd.php';

function getAll()
{
    $bdd = getBdd();
    $result = $bdd->query("SELECT * FROM game");
    $games = $result->fetchall();
    return $games;
}

