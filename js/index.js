
$(document).ready(function() 
{
   var timer;

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
            $("#register a").html("Logout");
            $("#register a").attr("href", "php/logout.php");
            memberAccess();


         },

      });

      $("#pagination").on('click', 'li' , function()
      {
         var number = $(this).html();
         if($("#searchBlogs").val() != "")
         {
            var title = $("#searchBlogs").val()
         }
         else
         {
            var title = "";
         }
         loadPage(number,title);
      });

      $("#searchBlogs").keyup(function()
      {
         if($(this).val().length > 3)
         {
            var page = 1;
            var title = $(this).val();
            loadPage(page,title);
         }
         if($(this).val().length == 0)
         {
            var page = 1;
            var title = "";
            loadPage(page,title);
         }

      });
});

function pagination(pages)
{
   $("#pagination ul").empty();
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

function loadPage(pageNumber, title)
{

   if(pageNumber == null)
   {
      pageNumber = 1;
   }

   $.ajax(
   {
         type: "POST",
         url: "php/blogs.php",
         data: {action:"getBlog" , pages:pageNumber, title:title},
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
            
         },
         error: function(response)
         {
            console.log(response);
         }

   });
}

function memberAccess()
{
   $("#navigation ul li:last").after("<li><a href='portal.html'>Portal</a></li>");
   $("#LoginFormPopup").empty();
   $("#LoginFormPopup").append("<div id='LFPUAccount'><div id='LFPUTitle'>Account</div><ul><li>Change Email</li><li>Change Password</li></ul></div>")
}




