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

                    let div = document.createElement("div");


                  //  imgloop();
                    for(let i=0;i<data.val.length;i++)
                    {
                            let div = document.createElement("div");
                            let pa = document.createElement("pa");
                            div.classList.add("file-row")
                            console.log(i)
                            if(data.val[i]==null)
                            {
                              console.log("error")
                            }
                            else{


                            var img = new Image(200, 200);
                            img.src = "/images/" + data.val[i].filename2;


                            var src = document.getElementById("images");
                            src.appendChild(img);
                            //image.src = "/images/"+ data.val[i].filename2;

                            pa.innerHTML += "<br/>"
                            pa.innerHTML += "<br /> Name:" + data.val[i].name + "<br />"+  "Ingredients:" + data.val[i].ingredients;
                            pa.innerHTML += "<br /> Instructions:" + data.val[i].instructions;
                            pa.innerHTML += "<br /> Allergies:" + data.val[i].allergies;
                            for(let j = 0; j < data.val[i].allergies.length; j++){
                              $(div).addClass(data.val[i].allergies[j]);
                            }
                            pa.innerHTML += "<br /> Diets:" + data.val[i].diet;

                            for(let j = 0; j < data.val[i].diet.length; j++){
                              $(div).addClass(data.val[i].diet[j]);
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

    	var checked = $("#filterControls :checkbox:checked");

    	if(checked.length){
    		rows.show(200);
        var type = []
    		var arr = checked.map(function(){
    			 type.push("." + $(this).val())

    		}).get();
        //var selector = arr.join('')
        //console.log(selector)
        for (let i = 0; i < type.length; i++){
          $(type[i]).hide(200);
        }



    	} else {
    		rows.show();
    	}
    }

    $("#filterControls :checkbox").click(filterFilesList);
    filterFilesList();
});
