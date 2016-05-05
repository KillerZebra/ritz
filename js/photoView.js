var links = [[]];
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

      loadCoverPhoto("all");

      $(".photoFilter").click(function()
      {
         loadCoverPhoto($(this).attr('id'));
      });

      $(document).on('click' , '.groups img' ,function()
      {
         $("#albumViewer").css({'visibility':'visible'});
         var title = $(".groups").children("div").html();
         console.log(title);
         loadSelectedPhoto(title);


      });

      $("#closeButton").click(function()
      {
         $("albumViewer").empty();
         $("#albumViewer").css({'visibility':'hidden'});

      });
      

});

function loadCoverPhoto(group)
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
         var keys = Object.keys(data);
         for (var x = 0; x < Object.keys(data).length; x++)
         {
            $("#allPhotos").append("<div class='groups'><img src=../.."+data[keys[x]][x]+"><div class='groupTitle'>"+keys[x]+"</div></div>");

         }
      }
   });
}

function loadSelectedPhoto(name)
{
   $.ajax(
   {
      type: "POST",
      url: "php/photos.php",
      data: {action:"photoPopup", albumName:name},
      dataType: "JSON",
      success: function(data)
      {
         accessData(data);
      }
   });
   function accessData(data)
   {
      var key = Object.keys(data);
      for(var y = 0; y < data[key[0]].length; y++)
      {
         var i = new Image();
         i.src = data[key[0]][y];
         var height = i.height;
         var width = i.width;
         links.push([data[key[0]][y],height,width]);
      }

   console.log(links);

   
   }
   
}
