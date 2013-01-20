 function sendData(sendInfo)
 {

 $.ajax({
 	     type: "POST",
      url: "receive.php",
      dataType: "json",
      success: function (msg) {
         if (msg) {
            alert("was added in list !");
            console.log("aaa");
            //location.reload(true);
         }
         else {
            alert("Cannot add to list !");
         }
      },

      data: sendInfo
   });

 //console.log("aaa");
}