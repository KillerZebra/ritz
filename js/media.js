   var nextToken = "";
   var prevToken = "";
   var totalVideos;

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
            var uploadID = item.contentDetails.relatedPlaylists.uploads;
            getVideos(uploadID);
         });
      }

   )
   
});

function getVideos(uploadID)
{

      $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
         part: "snippet",
         maxResults: 10,
         order: 'date',
         pageToken: nextToken,
         playlistId: uploadID,
         key: "AIzaSyBh5KoRxCU5x75HdCKqdFDmQJLp-2svcEs"
      },
      function(data){
         //console.log(data);

         //setting up for next and previous pages
         nextToken = data.nextPageToken;
         totalVideos = data.pageInfo.totalResults;
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
               $(".mainVideo").append("<iframe height='400' width='650' src='http://www.youtube.com/embed/" + videoId + "' ></iframe> ");
               $(".mainVideo").attr("id",videoId);

            }
            else
            {
               var picUrl = item.snippet.thumbnails.high.url;
               $("#thumbnail").append("<div id=" + videoId + " class='thumbnails'><div id='thumbTitle'><h3>" + title + "</h3></div><div id='coverPic'><img src='" + picUrl + "'></div></div>")
            }

         });

         pagination(totalVideos);
      

      }

   )
}

function pagination (totalVideos)
{
   var pages = Math.round(totalVideos / 10);
   if(pages > 0)
      {
         for(var x = 1; x <= 5; x++)
         {
            if(x <= pages)
            {
               $("#videoPagination ul").append("<li>" + x + "</li>");

            }
         }
      }
}