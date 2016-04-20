$(document).ready(function()
{
   var numberOfBlogs = 0;
   var json = {};
   $.ajax(
      {
         type: "GET",
         url: "../php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
            $("#loginTrigger").html('Welcome ' + data.info['fName']);
            showPage(data);

         },

      });

   $("#deleteBlog").click(function()
   {
      removeBlogs();

   });

});


function showPage(data)
{
   document.getElementById("content").style.visibility = "visible";

   $.ajax(
   {
      type: "GET",
      url: "../php/blogs.php",
      data: {action:"allBlogs"},
      dataType: "JSON",
      success: function(data)
      {
                     json = data;
         listBlogs(data);
      },
   });
}

function listBlogs(list)
{
   for(var key in list)
   {
      if(list.hasOwnProperty(key))
      {
         for(var x = 0; x < list[key].length; x++)
         {
            var cell1 = list[key][x]['title'];
            var cell2 = list[key][x]['author'];
            var cell3 = list[key][x]['date'];
            var cell4 = "<input type=checkbox id=box" +x+">&nbsp;"
            $("#list tr:last").after("<tr id=row"+x+"><td>" + cell1 + "</td><td>" + cell2 + "</td><td>" + cell3 + "</td><td>" + cell4 + "</td></tr>");

         }
      }
   }

   numberOfBlogs = list[key].length;

}

function removeBlogs()
{  
   var check;
   console.log(json);
   for(var x = 0; x <= numberOfBlogs; x++)
   {

      if( $("#box"+x).is(":checked") )
      {
         
         $("#row" + x).remove();
               
      }
   }

}