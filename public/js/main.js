//lists

function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){

                  //  let ar = [];

                    let pa = document.createElement("pa");

                    let p = document.getElementById("parag");

                    let div = document.createElement("brick");



                  //  imgloop();
                    for(let i=0;i<data.recipe.length;i++)
                    {
                            let div = document.createElement("brick");


                            let author = document.createElement("author");
                            let name = document.createElement("name");
                            let ingredients = document.createElement("ingredients");
                            let instructions = document.createElement("instructions");
                            let allergies = document.createElement("allergies");
                            let diet = document.createElement("diet");

                            pa.style.cssText = 'word-wrap:break-word;';

                            div.classList.add("file-row")
                            div.classList.add("recipeFormat")


                            console.log(i)
                            if(data.recipe[i]==null)
                            {
                              console.log("error")
                            }
                            else{



                            //image.src = "/images/"+ data.val[i].filename2;


                            //////////

                            var img = new Image;
                            img.src = "/images/" + data.recipe[i].filename2;
                            img.style.cssText = 'width:100%';

                            div.appendChild(img);


                            name.innerHTML += "<br />" + data.recipe[i].name
                            name.style.cssText = 'font-size:25px;color:rgb(242,235,216);word-wrap:break-word;';
                            author.innerHTML += "<br/> Recipe by:" + data.recipe[i].uname
                            ingredients.innerHTML += "<br />"+  "Ingredients:" + data.recipe[i].ingredients;
                            instructions.innerHTML += "<br /> Instructions:" + data.recipe[i].instructions;
                            allergies.innerHTML += "<br /> Allergies:" + data.recipe[i].allergies;
                            for(let j = 0; j < data.recipe[i].allergies.length; j++){
                              $(div).addClass(data.recipe[i].allergies[j]);
                            }
                            diet.innerHTML += "<br /> Diets:" + data.recipe[i].diet;

                            for(let j = 0; j < data.recipe[i].diet.length; j++){
                              $(div).addClass(data.recipe[i].diet[j]);
                            }
                            div.appendChild(name);
                            div.appendChild(author);
                            div.appendChild(ingredients);
                            div.appendChild(instructions);
                            div.appendChild(allergies);
                            div.appendChild(diet);

                    }
                    div.appendChild(pa);
                    p.appendChild(div);
                    //p.classList.add("file-row")
                  }

              } ,
            dataType: "json"
          });
  return false;
}
function imgloop()
  {
    var ar = [];
    ar.push("http://www.google.com/intl/en_com/images/logo_plain.png");
    ar.push("https://static.pexels.com/photos/28773/pexels-photo-28773.jpg");
    ar.push("https://static.pexels.com/photos/1984/black-and-white-city-man-people.jpg");

    for (i = 0; ar.length > i; i++)
    {
      var img = new Image(200, 200);
      img.src = ar[i];

      var src = document.getElementById("images");
      src.appendChild(img);
    }

}
$(document).ready(function(){
 readClicked();


 function filterFilesList() {
    	var rows = $('.file-row');

    	var checkedAllergies = $("#filterControlsAllergies :checkbox:checked");
      var checkedDiet = $("#filterControlsDiet :checkbox:checked");


      if(checkedAllergies.length && checkedDiet.length){
        rows.hide(0);
        var type1 = []
           checkedAllergies.map(function(){
           type1.push("." + $(this).val())

        }).get();

        //let's create set of allergies recipes, that we need to exclude
        let allergiesSet = new Set();
        for(let i=0;i<type1.length;i++){
          allergiesSet.add(type1[i]);
        }

        var type2 = []
        var arr = checkedDiet.map(function(){
           type2.push("." + $(this).val());
        }).get();

        //Filter through database and show/hide recipes depending on both checkboxes

        for (let i = 0; i < type2.length; i++){
          if(!allergiesSet.has(type2[i])) {$(type2[i]).show(0);};
          }

        } else if(checkedAllergies.length){
      		rows.show(0);
          var type1 = []
      		var arr = checkedAllergies.map(function(){
      			 type1.push("." + $(this).val())

      		}).get();

          for (let i = 0; i < type1.length; i++){
            $(type1[i]).hide(0);
          }



      	} else if(checkedDiet.length){
          rows.hide(0);
          var type2 = []
          var arr = checkedDiet.map(function(){
             type2.push("." + $(this).val())

          }).get();

          for (let i = 0; i < type2.length; i++){
            $(type2[i]).show(0);
          }



          } else {
            rows.show();
          }
  }



  $("#filterControlsAllergies :checkbox").click(filterFilesList);
  filterFilesList();

  $("#filterControlsDiet :checkbox").click(filterFilesList);
  filterFilesList();
});
