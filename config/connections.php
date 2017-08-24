<?php

require_once("parameters.php");

try{
  $bdd = new PDO("mysql:host=$serverName;dbname=$databaseName",$user,$password, array(
           PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
  // Activation des erreurs pour les requetes en base
  $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch( PDOException $e){
  echo "La connexion a echouée ".$e->getMessage();
}

 ?>
