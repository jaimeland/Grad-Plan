window.addEventListener("DOMContentLoaded", function() {
	// let textarea = document.getElementById("textarea")

	// let submit = document.getElementById("submit").addEventListener('click', click)
	// document.getElementById("adddata").addEventListener('click', myFunction)
	// document.getElementById("submit").addEventListener('click',showText);
	document.getElementById("show").addEventListener('click', myFunction);
	var showGrid = document.getElementById('submit');
	console.log("showGrid")
	console.dir(showGrid)
	showGrid.addEventListener('click', function () {
	    var text = document.getElementById('textarea').value;
	    var courses = text.split('\n');
	    var data = []


	    for (let i = 0; i < courses.length; i++) {
	        var everything = courses[i].split(',');

	        var code = everything[0];
	        var name = everything[1];
	        var year = everything[2];



	        if(year.includes("Fall")){
	        	var fall = document.getElementById("year1").append(code, name)

	          // console.log(fall)
	        }
	       if(year.includes("Winter")){
	          var winter = document.getElementById("year2").append(code, name)

	          // console.log(winter)
	        }
	        if(year.includes("Spring")){
	          var spring = document.getElementById("year3").append(code, name)
	          // console.log(spring)
	        }
	        if(year.includes("Summer")){
	          var summer = document.getElementById("year4").append(code, name)
	          // console.log(summer)
	        }

	        for (let i = 0; i < year.length; i++) {
	        	const s = document.getElementById("cool").innerHTML = "2022"

	        }

	        

	        // const y = document.getElementById("cool").innerHTML = "2023"



	        

	        // const s = document.getElementById("cool").innerHTML = year
	        // const x = document.createElement("div").innerHTML = text
	        // // const y = document.createElement("li").innerHTML = code + name + year

	        // // console.log(s)
	        // // console.log(x)

	        // x.appendChild(s)
	        // console.log(s)

	        




	        
	        
	        

	        
	       	





	        
	        console.log(code, name, year);
	    }
	  });
		
})









function myFunction() {
  var x = document.getElementById("textarea");


  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}


// // One unsuccessful attempt at displaying the text onto the grid
// function showText() {
	
// 	var text = document.getElementById("textarea")

	
	

// 	var show = document.getElementById("cool")

// 	var display = document.getElementById("terms")

	







// 	show.innerHTML = text.value
// 	console.log(show)
// }





// i = 0;


















        
//         console.log(code, name, year);
//     }
//   });

 // console.log(res)







// Attempt at displaying content in grid
/*function show() {
	var stuff = document.getElementsByClassName("terms")
	var show = document.getElementById("adddata")
	show.innerHTML = stuff.value

	var newText = document.getElementById("textarea".value)
	document.getElementById("move").innerHTML = newText;
	*/





// class_date.innerHTML = text.value

        // var class_season = class_date.split(' ')[0]
        // var class_year = class_date.split(' ')[1]




