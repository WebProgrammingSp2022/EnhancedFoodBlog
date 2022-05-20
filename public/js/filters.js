//goes to homepage
function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {
                  allergies: AllergyCheckbox(),
                  diet: DietCheckbox()
                  },

            success: function(data){

              alert("working")

                    let pa = document.createElement("pa");
                    let p = document.getElementById("parag");

                  for(let i=0;i<data.val.length;i++)
                  {
                      p.innerHTML+="<br/>"
                      p.innerHTML += "<br /> Name:" + data.val[i].name + "<br />"+  "Ingredients:" + data.val[i].ingredients;
                      p.innerHTML += "<br /> Instructions:" + data.val[i].instructions;
                      p.innerHTML += "<br /> Allergies:" + data.val[i].allergies;
                      p.innerHTML += "<br /> Diets:" + data.val[i].diet;
                  }
                  p.appendChild(pa);


              } ,
            dataType: "json"
          });
  return false;
}

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
  $.get("/userInfo",function(data){
  if (data.name)
    $("#main").html("Welcome " + data.name);
  });
  //updateClicked();
  $("#updateButton").click(updateClicked);
//  $("#readButton").click(readClicked);
//  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

});
