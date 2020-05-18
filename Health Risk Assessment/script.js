
var score = 0;

document.getElementById("surveyForm").onsubmit=function() {
       sex = parseInt(document.querySelector('input[name = "sex"]:checked').value);
	   age = parseInt(document.querySelector('age option:checked').value);
	   smokerChoice = parseInt(document.querySelector('input[name = "smokerChoice"]:checked').value);
       diabetesChoice = parseInt(document.querySelector('input[name = "diabetesChoice"]:checked').value);
       cholesterol = parseInt(document.querySelector('cholesterol option:checked').value);
       hdl = parseInt(document.querySelector('hdl option:checked').value);
       bloodpressure = parseInt(document.querySelector('bloodpressure option:checked').value);

       result = sex + age + smokerChoice + diabetesChoice + cholesterol + hdl +  bloodpressure;
       
       
document.getElementById("score").innerHTML = result;       
       

    if (sex == "male" && age >= 30 && age<= 34 ) {
        score +=1;
        console.log(" it works")
    }
    if (sex == "male" && age >= 35 && age<= 39 ) {
        score +=2;
        console.log("coool")
    }
    document.getElementById("score-digits").innerHTML = score-digits; 

    return false; // required to not refresh the page; 
    } //this end





    


    
