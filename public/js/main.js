//lists

function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){

                  //  let ar = [];
                    //let ca = document.createElement("ca");
                    //let card = document.getElementById("card");
                    //let im = document.createElement("im");
                    //let images = document.getElementById("images");
                    let pa = document.createElement("pa");

                    let p = document.getElementById("parag");

                    let div = document.createElement("div");

                  //  imgloop();
                    for(let i=0;i<data.recipe.length;i++)
                    {
                            let div = document.createElement("div");
                            let pa = document.createElement("pa");
                            div.classList.add("file-row")
                            console.log(i)
                            if(data.recipe[i]==null)
                            {
                              console.log("error")
                            }
                            else{



                            //image.src = "/images/"+ data.val[i].filename2;


                            //////////

                            var img = new Image(200, 200);
                            img.src = "/images/" + data.recipe[i].filename2;

                            var src = document.getElementById("images");
                            src.appendChild(img);



                            pa.innerHTML += "<br/>"
                            pa.innerHTML += "<br /> Name:" + data.recipe[i].name + "<br />"+  "Ingredients:" + data.recipe[i].ingredients;
                            pa.innerHTML += "<br /> Instructions:" + data.recipe[i].instructions;
                            pa.innerHTML += "<br /> Allergies:" + data.recipe[i].allergies;
                            for(let j = 0; j < data.recipe[i].allergies.length; j++){
                              $(div).addClass(data.recipe[i].allergies[j]);
                            }
                            pa.innerHTML += "<br /> Diets:" + data.recipe[i].diet;

                            for(let j = 0; j < data.recipe[i].diet.length; j++){
                              $(div).addClass(data.recipe[i].diet[j]);
                            }

                            div.appendChild(pa);

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

    	if(checkedAllergies.length){
    		rows.show(200);
        var type1 = []
    		var arr = checkedAllergies.map(function(){
    			 type1.push("." + $(this).val())

    		}).get();
        //var selector = arr.join('')
        //console.log(selector)
        for (let i = 0; i < type1.length; i++){
          $(type1[i]).hide(200);
        }



    	} else {
    		rows.show();
    	}
    }

    $("#filterControlsDiet :checkbox").click(filterFilesList);
    filterFilesList();

    var checkedDiet = $("#filterControlsDiet :checkbox:checked");

    if(checkedDiet.length){
      rows.hide(200);
      var type2 = []
      var arr = checkedDiet.map(function(){
         type2.push("." + $(this).val())

      }).get();
      //var selector = arr.join('')
      //console.log(selector)
      for (let i = 0; i < type2.length; i++){
        $(type2[i]).show(200);
      }



    } else {
      rows.show();
    }


  $("#filterControlsAllergies :checkbox").click(filterFilesList);
  filterFilesList();
});
