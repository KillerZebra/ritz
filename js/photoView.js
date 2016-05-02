$(document).ready(function() 
{

   loadPage()

      $.ajax(
      {
         type: "GET",
         url: "php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
            
            $("#loginTrigger").html('Welcome ' + data.info['fName']);
            memberAccess();


         },

      });

      $("#pagination").on('click', 'li' , function()
      {
         var number = $(this).html();
         loadPage(number);
      });
});