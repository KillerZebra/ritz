$(document).ready(function()
{
   $.ajax(
      {
         type: "GET",
         url: "../php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
            
            $("#loginTrigger").html('Welcome ' + data.info['fName']);
            showPage(data);

         },

      });

});


function showPage(data)
{
   document.getElementById("content").style.visibility = "visible";

   $.ajax(
   {
      type: "GET",
      url: "../php/removeBlog.php",
      data: "",
      dataType: "JSON",
      success: function(data)
      {

      },
   });
}