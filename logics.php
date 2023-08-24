<?php
header("Access-Control-Allow-Origin: *");

$string = file_get_contents('database/song.json');

$songs = json_encode($string, true);

foreach ($songs as $i => $song) {
   $song['nome'] = 'nome';
}

header('Content-Type: application/json');

 var_dump($song);