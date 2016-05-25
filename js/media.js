   var token = "";
   var nextToken = "";
   var prevToken = "";
   var uploadID;
   var timeo;
   var apiKey;


$(document).ready(function() 
{
   $( "#searchField" ).css( "border" , "none" );
   $( "#searchField" ).val( "" );

   //gets the API key securly 
   $.ajax(
   {
      type: "POST",
      url: "php/media.php",
      data: {"action":"getKey"},
      dataType: "JSON",
      success: function( data )
      {
         apiKey = data;
         console.clear();
         getChannel();
      }
   });

   //controls the pages 
   $( "#videoPagination" ).on( 'click' , 'ul li' , function()
   {
      var id = $(this).attr( 'id' );
      if( id == "scrollRight" )
      {
         $( "#videoPagination ul" ).empty();
         $( ".mainVideo" ).empty();
         $( "#thumbnail" ).empty();
         token = nextToken;
         getVideos( uploadID );
       }
      else if( id == "scrollLeft" )
      {
         $( "#videoPagination ul" ).empty();
         $( ".mainVideo" ).empty();
         $( "#thumbnail" ).empty();
         token = prevToken;
         getVideos( uploadID );
      }

   });

   //when a thumbnail is clicked, the clicked thumbnail will replace the big video
   $(document).on( 'click' ,'.thumbnails', function()
   {
      var mainId = $( ".mainVideo" ).attr( 'id' );
      var thumbId = $(this).attr( 'id' );
      var thumbTitle = $(this).find( 'h3' ).html();

      $( ".mainVideo" ).attr( 'id' , thumbId );
      $( ".mainVideo iframe" ).attr( 'src', "http://www.youtube.com/embed/" + thumbId + "?rel=0&autoplay=1" );
      $( "#mainTitle h3" ).html( thumbTitle );
      //scrolls to big video
      window.scrollTo( 0, 250 );

   });

   //Searches for video titles
   $( '#searchField' ).on( 'input' , function()
   {
      if( $(this).val() == "" )
      {
         getVideos( uploadID );
         $( "#searchField" ).css( "border", "none" )

      }
      else if( $(this).val().length > 3 )
      {
         clearTimeout( timeo );
         timeo = setTimeout( init, 600 );
      }

   });
   
});

function getChannel()
{
   //this will get the upload Id for the channel
   $.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
         part: "contentDetails",
         forUsername: "austinstjean",
         key: apiKey
      },
      function( data ){
         $.each( data.items, function( i , item )
         {
            uploadID = item.contentDetails.relatedPlaylists.uploads;
            getVideos( uploadID );
         });
      }

   )
}

function getVideos( uploadID )
{
   /*
   this is the important part. This gets all data in the channel
   
   Part: snippet    =>  contains important info like video id, tokens, urls, etc.
   pageToken:       =>  This token will display the page. It will grab the page token for the next page but won't load it until you scroll. 
   playlistId       =>  is the uploadID from the above script. 
   */
   $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
         part: "snippet",
         maxResults: 9,
         order: 'date',
         pageToken: token,
         playlistId: uploadID,
         key: apiKey
      },
      function( data ){
         //console.log(data);

         //setting up for next and previous pages
         nextToken = data.nextPageToken;
         if( data.prevPageToken != null )
         {
            prevToken = data.prevPageToken;
         }

         //loops trhough all 9 videos
         $.each( data.items, function( i,item )
         {
            //console.log(item);
            var otitle = item.snippet.title;
            var title = otitle.substring( 0, 30 );
            var videoId = item.snippet.resourceId.videoId;
            var picUrl = item.snippet.thumbnails.high.url;

            if( i == 0 )
            {
               $( "#mainTitle h3" ).html( title );
               $( ".mainVideo" ).append( "<iframe height='400' width='650' allowfullscreen src='http://www.youtube.com/embed/" + videoId + "' ></iframe> " );
               $( ".mainVideo" ).attr( "id" , videoId );

            }

               $( "#thumbnail" ).append( "<div id=" + videoId + " class='thumbnails'><div id='thumbTitle'><h3>" + title + "</h3></div><div id='coverPic'><img src='" + picUrl + "'></div></div>" )
            

         });

         pagination();
      

      }

   )
}

function pagination ()
{
   if( nextToken != "" )
   {
      $( "#videoPagination ul" ).append( "<li id='scrollRight'>Next</li>" );

   }
   if(prevToken != "")
   {
      $( "#videoPagination ul" ).prepend( "<li id='scrollLeft'>Prev</li>" );

   }

   
}

//this is a sepeate function that logs into the YT api with my api key
function init()
{
    gapi.client.setApiKey( apiKey );
    gapi.client.load( 'youtube' , 'v3', function()
    {
         searchVideos();
    });
}

//only runs once the INIT function succeeds. this controlls the search feature for my specific channel
function searchVideos()
{
   var searchKey = $( "#searchField" ).val().trim(); 

   //this request gets the value of the search box, and searches through the channel titles for that key
   var request = gapi.client.youtube.search.list(
   {
      channelId: "UCGgb9k0H2BKu3Sc8KWmVMlQ",
      part: 'snippet',
      q: searchKey,
      order: 'date'
   });

   //if it executed with no errors, it will return all videos that match that key
   request.execute(function( response ) 
   {
      var data = response.result;
      if( data.pageInfo.totalResults == 0 )
      {
         $( "#searchField" ).css( "border", "2px solid #FF0000" )
      }
      else
      {
         $( "#thumbnail" ).empty();
         $( "#searchField" ).css( "border", "none" )
         //loop through each returned video
         $.each( data.items , function( i , item )
         {
            var videoId = item.id.videoId;
            var title = item.snippet.title;
            var picUrl = item.snippet.thumbnails.high.url;

            $( "#thumbnail" ).append( "<div id=" + videoId + " class='thumbnails'><div id='thumbTitle'><h3>" + title + "</h3></div><div id='coverPic'><img src='" + picUrl + "'></div></div>" );

         });
  
      }

   });



}












