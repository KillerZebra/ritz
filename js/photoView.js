var links = [];
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

      $(document).on('click' , '.groups' ,function()
      {
         $("#albumViewer").css({'visibility':'visible'});
      });

      $("#closeButton").click(function()
      {
         $("albumViewer").empty();
         $("#albumViewer").css({'visibility':'hidden'});

      });
      

});

function getPhotos(group)
{
   $("#allPhotos").empty();
   $.ajax(
   {
      type: "POST",
      url: "php/photos.php",
      data: {action:"coverPhotos" , groupName:group},
      dataType: "JSON",
      success: function(data)
      {
         loadCoverPhoto(data);
      }
   });
}

function loadCoverPhoto(urls)
{
   //console.log(urls);
   var keys = Object.keys(urls);
   for (var x = 0; x < Object.keys(urls).length; x++)
   {
      $("#allPhotos").append("<div class='groups'><img src=../.."+urls[keys[x]][x]+"><div class='groupTitle'>"+keys[x]+"</div></div>");

   }




   /*
   var title = "";
   for(var key in urls) 
   {
      for(var val in urls[key])
      {
         links.push(urls[key][val]);
      }
      console.log(links[1]);

      $("#allPhotos").append("<div class='groups'><img src=../.."+links[0]+"><div class='groupTitle'>"+key+"</div></div>");
      
   }
   */
}
