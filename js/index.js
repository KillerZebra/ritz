$(document).ready(function() 
{

   loadPage()

      $.ajax(
      {
         type: "GET",
         url: "php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
            
            $("#loginTrigger").html('Welcome ' + data.info['fName']);


         },

      });

      $("#pagination").on('click', 'li' , function()
      {
         var number = $(this).html();
         loadPage(number);
      });
});

function pagination(pages)
{

   pages = pages/3;
   var rounded = Math.ceil(pages);
   if($("#pagination li").length == 0)
   {
      for(var x = 1; x <= rounded; x++)
      {
         $("#pagination ul").append("<li>" + x + "</li>");
      }
   }
}

function loadPage(pageNumber)
{

   if(pageNumber == null)
   {
      pageNumber = 1;
   }

   $.ajax(
   {
         type: "GET",
         url: "php/blogs.php",
         data: {action:"getBlog" , pages:pageNumber},
         dataType: "json",
         success: function(data)
         {
            //data.blogs.length-1
            y = 1;
            for(var x = 1; x <= 3; x++)
            {  
               if(data.blogs[y] == null)
               {
                  $("#title" + x ).html(""); 
                  $("#author" + x).html("");
                  $("#date" + x).html(""); 
                  $("#entry" + x).html("");
                  $("#post" + x).hide();
               }
               else
               {
                  if($("#post" + x).is(":hidden"))
                  {
                     $("#post" + x).show();

                  }
                  $("#title" + x ).html(data.blogs[y]['title']); 
                  $("#author" + x).html(data.blogs[y]['author']);
                  $("#date" + x).html(data.blogs[y]['date']); 
                  $("#entry" + x).html(data.blogs[y]['content']); 
               } 
                  y++;
               
            }
            

               pagination(data.blogs[0]['count']);
            
           

            //$("#title1").html(title);
         },
         error: function(response)
         {
            window.location.href = "index.html";
         }

   });
}


