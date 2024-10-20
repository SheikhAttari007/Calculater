function calc (){
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var opt = prompt("Enter opt" + "+,-,*,/");

    if(opt == "+"){
        alert(num1 + num2)
    }else if (opt == "-"){
        alert(num1 - num2)
    }else if (opt == "*"){
        alert(num1 * num2)
    }else if (opt == "%"){
        alert(num1 % num2)
    }
}
