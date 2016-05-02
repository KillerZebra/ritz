$(document).ready(function() 
{
   $("#all").focus();
      $.ajax(
      {
         type: "GET",
         url: "php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
            
            $("#loginTrigger").html('Welcome ' + data.info['fName']);
            $("#navigation ul li:last").after("<li><a href='portal.html'>Portal</a></li>");


         },

      });

      getPhotos("all");

      $(".photoFilter").click(function()
      {
         getPhotos($(this).attr('id'));
      });

      

});

function getPhotos(group)
{
   $.ajax(
   {
      type: "POST",
      url: "php/photos.php",
      data: {action:"showPhotos" , groupName:group},
      dataType: "JSON",
      success: function(data)
      {
         console.log(data);
      }
   });
}
