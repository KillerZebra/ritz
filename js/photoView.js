$(document).ready(function() 
{
   $( "#all" ).focus();
    //checks if someone is logged in
      $.ajax(
      {
         type: "GET",
         url: "php/checkSession.php",
         data: "",
         dataType: "JSON",
         success: function( data )
         {
            $( "#loginTrigger" ).html( 'Welcome ' + data.info[ 'fName' ]);
            $( "#navigation ul li:last" ).after( "<li><a href='portal.html'>Portal</a></li>" );
         },

      });

      loadCoverPhoto( "all" );

      $( ".photoFilter" ).click(function()
      {
         loadCoverPhoto($(this).attr( 'id' ));
      });

      $(document).on( 'click' , '.groups img' ,function()
      { 
         $( "#albumViewer" ).css({ 'visibility':'visible' });
         var title = $(this).next( "div" ).html();
         $( "#mainImage" ).attr( 'class' , title )
         loadSelectedPhoto( title );


      });

      $( "#closeButton" ).click(function()
      {
         $( "#thumbnails" ).empty();
         $( "mainImage" ).empty();
         $( "#albumViewer" ).css({ 'visibility':'hidden' });
         $( ".arrows" ).css({ 'visibility':'hidden' });
         $( "#albumViewer" ).attr( 'class' , 1 );

      });


      //closes album popup when you click outside of it
      $(document).mouseup(function(e)
      {
         var container = $( "#page" );
         if ( container.has( e.target ).length === 0 )
         {
            $( "#thumbnails").empty();
            $( "#albumViewer" ).css({ 'visibility':'hidden' });
            $( "#leftArrow" ).css({ 'visibility':'hidden' });
            $( ".arrows" ).css({ 'visibility':'hidden' });
            $( "#albumViewer" ).attr( 'class' , 1 );

         }

      });

     $(document).on( 'click' , '.thumbnail' , function()
      {
         var action = "photoPopup";
         var urlPath = $(this).attr( 'src' );
         var dimmenson = ratioCheck( action, urlPath );
         $( "#mainImage" ).attr( 'src' , urlPath );
         $( "#mainImage" ).css({ height:dimmenson[0] , width:dimmenson[1] });

      });
     
      $(document).on( 'click' , '.arrows' , function()
      {
         var page = parseInt($( "#albumViewer" ).attr( 'class' ));
         $(this).data( 'clicked' , true );
         $( "#thumbnails" ).empty();


         if($( "#leftArrow" ).data( 'clicked' ))
         {
            page = page - 1;
            if( page == 1 )
            {
               $( "#leftArrow" ).css({ 'visibility':'hidden' });
            }


         }
         else if($( "#rightArrow" ).data( 'clicked' ))
         {
            page = page + 1;
            $( "#leftArrow" ).css({ 'visibility':'visible' });

         }
         $(this).data( 'clicked' , false );       

         $( "#albumViewer" ).attr( 'class',page);
         title =  $( "#mainImage" ).attr( 'class' );
         loadSelectedPhoto(title);


      });

            

});

function loadCoverPhoto(group)
{
   var links = [];
   var action = "coverPhotos";
   $( "#allPhotos" ).empty();

   $.ajax(
   {
      type: "POST",
      url: "php/photos.php",
      data: {action:action , groupName:group},
      dataType: "JSON",
      success: function( data )
      {
         var key = Object.keys( data );
         for ( var x = 0; x < Object.keys( data ).length; x++ )
         {
            var ratio = ratioCheck( action , data[key[x]][x] );
            links.push( [data[key[x]][x] , ratio[0] , ratio[1] ] );
            $( "#allPhotos" ).append( "<div class='groups'><img id='photo" + x + "' src=../.." + links[x][0] + "><div class='groupTitle'>" + key[x] + "</div></div>" );
            $( "#photo" + x ).css({ height:links[x][1] , width:links[x][2] });
         }
      }
   });
}

function loadSelectedPhoto( name )
{
   var links = [];
   var page = parseInt($( "#albumViewer" ).attr( 'class' ));
   var action = "photoPopup";
   
   //controls the photos that appear in the popup
   $.ajax(
   {
      type: "POST",
      url: "php/photos.php",
      data: {action:action , albumName:name , page:page},
      dataType: "JSON",
      success: function( data )
      {
         accessData( action , data );
      }
   });


   function accessData( action , data )
   {
      var key = Object.keys( data );
      length = data[key[0]].length;
      if(length < 6)
      {
         $( "#rightArrow" ).css({ 'visibility':'hidden' });
      }
      else
      {
         $( "#rightArrow" ).css({ 'visibility':'visible' });

      }
      
      for( var y = 0; y < length; y++ )
      {
         var ratio = ratioCheck( action , data[key[0]][y] );
         links.push( [data[key[0]][y] , ratio[0] , ratio[1]] );
      }

      $( "#mainImage" ).attr( 'src', links[0][0] );
      //$("#mainViewer").append("<img src=" +links[0][0]+ " id='mainImage' />");
      $( "#mainImage" ).css({ height:links[0][1] , width:links[0][2] });

      for( var x = 0; x < length; x++ )
      {
         $( "#thumbnails" ).append( "<img src=" + links[x][0] + " class='thumbnail' />") ;
      }
      

   
   }

   
}

function ratioCheck( action , data )
{
   var i = new Image();
   i.src = data;
   var height = i.height;
   var width = i.width;
   var dimmensions = []

   if(action == "photoPopup")
   {
      var maxHeight = 480;
      var maxWidth = 890;
   }
   else if(action == "coverPhotos")
   {
      var maxHeight = 250;
      var maxWidth = 225; 
   }


   if( height > maxHeight )
   {
      while( height > maxHeight )
      {
         ratio = maxHeight / height;
         height = ratio * height;
         width = ratio * width;
      }
   }

   if( width > maxWidth )
   {
      while( height > maxWidth )
      {
         ratio = maxWidth / width;
         height = ratio * height;
         width = ratio * width;
      }
   }

   dimmensions[0] = height;
   dimmensions[1] = width;
   return dimmensions;
}
