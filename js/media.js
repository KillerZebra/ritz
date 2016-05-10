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
         maxResults: 20,
         playlistId: uploadID,
         key: "AIzaSyBh5KoRxCU5x75HdCKqdFDmQJLp-2svcEs"
      },
      function(data){
         var output;
         $.each(data.items, function(i,item)
         {
            console.log(i);
            console.log(item);
         });
      }

   )
}