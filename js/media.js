   var token = "";
   var nextToken = "";
   var prevToken = "";
   var uploadID;


$(document).ready(function() 
{
   $.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
         part: "contentDetails",
         forUsername: "KillerZebra69",
         key: "AIzaSyBh5KoRxCU5x75HdCKqdFDmQJLp-2svcEs"
      },
      function(data){
         $.each(data.items, function(i,item)
         {
            uploadID = item.contentDetails.relatedPlaylists.uploads;
            getVideos(uploadID);
         });
      }

   )

   $("#videoPagination").on('click', 'ul li', function()
   {
      var id = $(this).attr('id');
      if(id == "scrollRight")
      {
         $("#videoPagination ul").empty();
         $(".mainVideo").empty();
         $("#thumbnail").empty();
         token = nextToken;
         getVideos(uploadID);
       }
      else if(id == "scrollLeft")
      {
         $("#videoPagination ul").empty();
         token = prevToken;
         getVideos(uploadID);
      }

   });

   $(document).on('click' ,'.thumbnails', function()
   {
      var mainId = $(".mainVideo").attr('id');
      var thumbId = $(this).attr('id');
      var thumbTitle = $(this).find('h3').html();
      console.log(thumbTitle);

      $(".mainVideo").attr('id', thumbId);
      $(".mainVideo iframe").attr('src', "http://www.youtube.com/embed/" + thumbId );
      $("#mainTitle h3").html(thumbTitle);
      window.scrollTo(0, 250);

   });
   
});

function getVideos(uploadID)
{
       $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
         part: "snippet",
         maxResults: 9,
         order: 'date',
         pageToken: token,
         playlistId: uploadID,
         key: "AIzaSyBh5KoRxCU5x75HdCKqdFDmQJLp-2svcEs"
      },
      function(data){
         //console.log(data);

         //setting up for next and previous pages
         nextToken = data.nextPageToken;
         if(data.prevPageToken != null)
         {
            prevToken = data.prevPageToken;
         }

         //loops trhough all 10 videos
         $.each(data.items, function(i,item)
         {
            //console.log(item);
            var title = item.snippet.title;
            var videoId = item.snippet.resourceId.videoId;

            if(i == 0)
            {
               $("#mainTitle h3").html(title);
               $(".mainVideo").append("<iframe height='400' width='650' allowfullscreen src='http://www.youtube.com/embed/" + videoId + "' ></iframe> ");
               $(".mainVideo").attr("id",videoId);

            }

               var picUrl = item.snippet.thumbnails.high.url;
               $("#thumbnail").append("<div id=" + videoId + " class='thumbnails'><div id='thumbTitle'><h3>" + title + "</h3></div><div id='coverPic'><img src='" + picUrl + "'></div></div>")
            

         });

         pagination();
      

      }

   )
}

function pagination ()
{
   if(nextToken != "")
   {
      $("#videoPagination ul").append("<li id='scrollRight'>-></li>");

   }
   if(prevToken != "")
   {
      $("#videoPagination ul").prepend("<li id='scrollLeft'><-</li>");

   }

   
}