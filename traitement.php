<?php
if($_POST['actionAEffectuer'] == "chercher"){
  echo "Biographie ".$_POST['name'];
  echo "Le 20 février 1754, Henri Bernadotte, procureur palois (Béarn), épouse Jeanne de Saint-Jean, originaire de Boeil (Boeil-Bezing) et nièce de l'abbé laïc de Sireix. Le 26 janvier 1763, naît à Pau leur cinquième enfant, Jean-Baptiste1. Celui-ci doit suivre la voie ouverte par son père, et donc étudier le droit. Cependant, il trouve ces études ennuyeuses";
}
else if($_POST['actionAEffectuer'] == "eliminer"){
  echo "Elimination de l'user .$_POST['name']".$_POST['name'];
}
else{
  echo "Le plat va être supprimé";
}

?>
