document.getElementById("checkButton").addEventListener("click", function (){
    
    const resultDiv = document.getElementById("result");
    const ageValue = parseInt(document.getElementById("age-input").value);
    
    resultDiv.innerHTML = "";
    if(isNaN(ageValue) || ageValue <=0){
        resultDiv.innerHTML = "Please enter a valid score";
        return;
    };
    
    //value from html input
    
    console.log(ageValue);
    //select where to display result
    

    //conditions
    if(ageValue === 100){
        resultDiv.innerHTML += "BRAVO!😄👍</br>You just won yourself a SCHOLARSHIP.<br>Accept my congratulations!";
    }

    if(ageValue >= 90 && ageValue <= 99){
        resultDiv.innerHTML += "BRAVO!😃👍</br>This is super excellent. Keep it up.";
    }

    if(ageValue >= 80 && ageValue <= 89){
        resultDiv.innerHTML += "EXCELLENT!😃</br>Please keep it up.";
    } 
    //else{
        //resultDiv.innerHTML += "You are not eligible to vote </br>";
    //}
    if(ageValue >= 70 && ageValue <= 79){
      resultDiv.innerHTML += "VERY GOOD!😃</br> Please work harder to improve your grade.";  
    } 
    //else{
        //resultDiv.innerHTML += "You are not eligible to drink alcohol </br>";
    //}
    //check for driving
    if(ageValue >= 50 && ageValue <= 69){
        resultDiv.innerHTML += "GOOD!😑</br> Please work harder to improve on this.";
    } 

    if(ageValue >= 40 && ageValue <= 49){
        resultDiv.innerHTML += "FAIR PERFORMANCE!😒</br> Please work harder to improve on this.";
    }

    if(ageValue >= 30 && ageValue <= 39){
        resultDiv.innerHTML += "POOR PERFORMANCE!😕</br> Please work harder to improve on this.";
    }

    if(ageValue >= 0 && ageValue <= 29){
        resultDiv.innerHTML += "VERY POOR!😖</br> Please work harder to improve on this.";
    }
    //else{
        //resultDiv.innerHTML += "You are not eligible to drive </br>";
    //};

});
