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
                  //  imgloop();
                    for(let i=0;i<data.val.length;i++)
                    {
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
                            p.innerHTML += "<br/>"
                            p.innerHTML += "<br /> Name:" + data.val[i].name + "<br />"+  "Ingredients:" + data.val[i].ingredients;
                            p.innerHTML += "<br /> Instructions:" + data.val[i].instructions;
                            p.innerHTML += "<br /> Allergies:" + data.val[i].allergies;
                            p.innerHTML += "<br /> Diets:" + data.val[i].diet;
                    }
                    p.appendChild(pa);
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
 
});
