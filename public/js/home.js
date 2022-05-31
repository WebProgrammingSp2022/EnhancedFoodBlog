//upload
let action = "Create";
function setAction(actionParam) {
  action = actionParam;
}
let filename2;
function createClicked(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {name:$("#name").val(),
                  ingredients:$("#ingredients").val(),
                  instructions:$("#instructions").val(),
                  allergies: AllergyCheckbox(),
                  diet: DietCheckbox(),
                  filename2: filename2
                  },

            success: function(data){
            if(data==null)
            {
               alert("Your recipe did not upload. Please log in")
            }

              } ,
            dataType: "json"
          });
  return false;
}
/*function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {name:$("#name").val()},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  $("#name").val(data.name);
                }
              } ,
            dataType: "json"
          });
  return false;
}

function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {name:$("#name").val(),
                  ingredients:$("#ingredients").val(),
                  instructions:$("#instructions").val(),
                  allergies:$("#allergies").prop("checked"),
                  diet:$("#diet").prop("checked")
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,
            dataType: "json"
          });
  return false;
}
/*function deleteClicked(){

    let trimIdentifier = $("#identifier").val().trim();
    if (trimIdentifier == "") {
      alert("bad");
      return false;
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) {
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,
      dataType: "json"
    });
    return false;
}
*/
function DietCheckbox(){
  let dietChecked;
  var passDiet = [];
                  $.each($("input[name='diets']:checked"), function(){
                    passDiet.push($(this).val());
                  });
  dietChecked= passDiet.join(", ");
  console.log(passDiet);
  return(passDiet);
}

function AllergyCheckbox(){
  var passAllergy = [];
                  $.each($("input[name='allergies']:checked"), function(){
                    passAllergy.push($(this).val());
                  });
  console.log(passAllergy);
  return(passAllergy);
}


$(document).ready(function(){

  $("#createButton").click(createClicked);
  $("form").submit(function(event) {
    let data = new FormData($(this)[0]);
    $.ajax({
    url: '/fileupload',
    type: 'POST',
    data: data,
    processData: false, // These two are needed to prevent JQuery from processing the form data
    contentType: false,
    mimeType: 'multipart/form-data',
    dataType: 'json', // Without this, the server's response will be a string instead of a JSON object
    success: function(data){
    filename2= data.filename2;
    }

});
return false;
});
//  $("#readButton").click(readClicked);
//  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

});
