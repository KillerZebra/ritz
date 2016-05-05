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
         var title = $(this).next("div").html();
         loadSelectedPhoto(title);


      });

      $("#closeButton").click(function()
      {
         $("#thumbnails").empty();
         $("#albumViewer").css({'visibility':'hidden'});

      });

      $(document).on('click' , '.thumbnail' , function()
      {
         console.log($(this).attr('src'));
         $("#mainImage").attr('src',$(this).attr('src'));
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
   var links = [];
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
      length = data[key[0]].length;
      
      for(var y = 0; y < length; y++)
      {
         var i = new Image();
         i.src = data[key[0]][y];
         var height = i.height;
         var width = i.width;
         var ratio = ratioCheck(height,width);
         links.push([data[key[0]][y],ratio[0],ratio[1]]);
      }

      $("#mainImage").attr('src', links[0][0]);
      //$("#mainViewer").append("<img src=" +links[0][0]+ " id='mainImage' />");
      $("#mainImage").css({height:links[0][1], width:links[0][2]});

      for(var x = 0; x < length; x++)
      {
         $("#thumbnails").append("<img src=" +links[x][0]+" class='thumbnail' />");
      }
      

   
   }

   
}

function ratioCheck(height, width)
{
   var dimmensions = []
   if(height > 480)
   {
      while(height > 480)
      {
         ratio = 480 / height;
         height = ratio * height;
         width = ratio * width;
      }
   }

   if(width > 890)
   {
      while(height > 890)
      {
         ratio = 890 / width;
         height = ratio * height;
         width = ratio * width;
      }
   }

   dimmensions[0] = height;
   dimmensions[1] = width;
   return dimmensions;
}
