document.getElementById("calculateGPA").addEventListener("click", calculateGPA, false);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 13) { // Runs the calculate function if enter key pressed
    calculateGPA();
  }
});

function calculateGPA() {
    //console.log("Calculating GPA");
    var inputtype = "uw";
    var numgrades = 0;
    var calculatedWGPA = 0;
    var calculatedUWGPA = 0;

    for (var i = 0; i<2; i++) {
        for (var j = 1; j<6; j++) {
            inputtoaccess = inputtype + "gradeinput" + j;
            //console.log("inputtoaccess " + inputtoaccess);
            inputvalue = parseInt(document.getElementById(inputtoaccess).value) || 0;
            //console.log("value "+ inputvalue);
            numgrades += inputvalue;
            //console.log("numgrades "+ numgrades);

            // Weighted GPA
            if (inputtype=="w" && j==1) {
                calculatedWGPA += inputvalue*5;
            } else if ((inputtype=="uw" && j==1) || (inputtype=="w" && j==2)) {
                calculatedWGPA += inputvalue*4;
            } else if ((inputtype=="uw" && j==2) || (inputtype=="w" && j==3)) {
                calculatedWGPA += inputvalue*3;
            } else if (inputtype=="uw" && j==3) {
                calculatedWGPA += inputvalue*2;
            } else if (j==4) {
                calculatedWGPA += inputvalue*1;
            } else if (j==5) {
                calculatedWGPA += inputvalue*0;
            }

            // Unweighted GPA
            for (var k=1; k<6; k++) {
                if (j==k) {
                    calculatedUWGPA += (5-j)*inputvalue;
                }
            }
        }
        inputtype = "w";
    }
    //console.log(calculatedWGPA);
    calculatedWGPA /= numgrades;
    calculatedUWGPA /= numgrades;
    alert("Weighted GPA: " + calculatedWGPA + "\nUnweighted GPA: " + calculatedUWGPA);
}
