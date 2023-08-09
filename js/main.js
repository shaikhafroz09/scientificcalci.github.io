function number(value){
    document.calculator.result.value+=value;

}

function rmv(){
    document.calculator.result.value = "";
}
function delet(){
    let v = document.calculator.result.value;
    document.calculator.result.value = v.substring(0,v.length-1)

}
function equal(){
    document.calculator.result.value = eval(document.calculator.result.value)

    if(document.calculator.result.value == "Infinity"){
        document.calculator.result.value = "can't divide by 0"
    }
        
    

      
        
    }

function sin(){
    document.calculator.result.value = Math.sin( document.calculator.result.value*(Math.PI/180))
    if(document.calculator.result.value == "NaN"){
        document.calculator.result.value = "Error"
    }

}
function cos(){
    document.calculator.result.value = Math.cos( document.calculator.result.value)
    if(document.calculator.result.value == "NaN"){
        document.calculator.result.value = "Error"
    }

}
function tan(){
    document.calculator.result.value = Math.tan( document.calculator.result.value)
    if(document.calculator.result.value == "NaN"){
        document.calculator.result.value = "Error"
    }

}
function log(){
    document.calculator.result.value = Math.log( document.calculator.result.value)
    if(document.calculator.result.value == "NaN"){
        document.calculator.result.value = "Error"
    }

}
function sqrt(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,2)
}
function cubbed(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,3)

}
function sqrt2(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/2)

    if(document.calculator.result.value == "NaN"){
        document.calculator.result.value = "Error"
    }

}
function sqrt3(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/3)

    if(document.calculator.result.value == "NaN"){
        document.calculator.result.value = "Error"
    }

}
