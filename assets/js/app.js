$(document).ready(function() {

  $('#bolo').click(function(){
    console.log('boloclicker');

    $.ajax({
      url: "traitement.php"
    }).done(function() {
      // on verra apres
      console.log("retour de la suppression OK");
      $("#bolo").parent().hide();
      $("#resultat_requete").html('Le plat a été supprimé');
      $("#resultat_requete").addClass('done');
      $("#resultat_requete").show().delay(3000).fadeOut(500);
    });
  });

/* Chercher en base la biographie */
  $('#vaChercher').click(function(){
    var nom = $('#mon_id').val();
    console.log(nom);
    $.ajax({
      method: "POST",
      url: "traitement.php",
      data: { name: nom, actionAEffectuer: 'chercher' }
    }).done(function(msg) {
        console.log(msg);
        $("#resultat_requete").html(msg);
        $("#resultat_requete").addClass('done');
        $("#resultat_requete").show().delay(3000).fadeOut(500);
    });
  });

  /* Chercher en base la biographie */
    $('#eliminer').click(function(){
      var nom = $('#mon_id').val();
      console.log(nom);
      $.ajax({
        method: "POST",
        url: "traitement.php",
        data: { name: nom, actionAEffectuer: 'eliminer' }
      }).done(function(msg) {
          console.log(msg);
          $("#resultat_requete").html(msg);
          $("#resultat_requete").addClass('done');
          $("#resultat_requete").show().delay(3000).fadeOut(500);
      });
    });

})
