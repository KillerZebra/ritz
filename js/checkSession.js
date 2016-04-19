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
