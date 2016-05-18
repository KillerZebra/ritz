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
            $("#register a").html("Logout");
            $("#register a").attr("href", "php/logout.php");
            $("#navigation ul li:last").after("<li><a href='../portal.html'>Portal</a></li>");
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
      type: "POST",
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
            var cell4 = "<input type=checkbox id=box" +list[key][x]['blogID']+">&nbsp;"
            $("#list tr:last").after("<tr id=row"+list[key][x]['blogID']+"><td>" + cell1 + "</td><td>" + cell2 + "</td><td>" + cell3 + "</td><td>" + cell4 + "</td></tr>");

         }
      }
   }

   numberOfBlogs = list[key].length;

}

function removeBlogs()
{  
   $("#list tr").each(function(i , row)
   {

      var row = $(row),
      checkedBoxes = row.find('input:checked');
      checkedBoxes.each(function (i, checkbox) 
      {
         var id = $(this).attr('id').replace("box","");
         row.remove();
         $.ajax(
         {
            type: "POST",
            url: "../php/blogs.php",
            data: {action:"removeBlog",blogId:id},
            dataType: "JSON",
         });

      });
   });

}