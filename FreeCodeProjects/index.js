
$(document).ready(function () {
    let number = "";
    let newNumber="";
    let operator = "+";
    let totaldiv = $("#total");
    let history=$('#history');
    let result='';
    let historyText='';
    
    let testNumLength = function(number,selector) {
        if (number.length > 9) {
            selector.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                selector.text("Err");
            }
        } 
    };

    function calculate(num1,num2){
        let currentResult;
		if (operator === "+"){
			currentResult = (Number(num1) + Number(num2)).toString(10);
		} else if (operator === "-"){
			currentResult = (Number(num1) - Number(num2)).toString(10);
		} else if (operator === "/"){
			currentResult = (Number(num1) / Number(num2)).toString(10);
		} else if (operator === "*"){
			currentResult = (Number(num1) * Number(num2)).toString(10);
		}
	
		return currentResult;
    }
  
  
    $(".digit ").click(function(){
        if($(this).val()==='.' && number.includes('.')){
            $(this).val('');
        }
        number += $(this).val();
        totaldiv.text(number);
        historyText=history.text();
        history.text(historyText+$(this).val());
       // history.text(number);
       
		testNumLength(number,totaldiv);
    });

    $(".operand ").click(function(){
        result=calculate(newNumber,number);
        operator = $(this).val();
        newNumber = result===''?number:result;	
		number = "";
        totaldiv.text(operator);
        historyText=history.text()+operator;
        history.text(historyText);
    });
    $("#clear,#clearall").click(function(){
		number = "";
        totaldiv.text("0");
        historyText=history.text().slice(0,-1);
        history.text(historyText);
		if ($(this).attr("id") === "clearall") {
            result = "";
            newNumber='';
            history.text('');
		}
    });
    $("#equals").click(function(){
        result=calculate(newNumber,number);
        totaldiv.text(result);
        history.text(result);
        testNumLength(result,totaldiv);
        testNumLength(result,history);
        newNumber = result===''?number:result;	
		number = "";
		
    });
});

