
function insert(num){
    if (document.getElementById("resultado").innerHTML == "0" && num != "."){
    document.getElementById("resultado").innerHTML = ""
    }
    document.getElementById("resultado").innerHTML += num
}

function clean(){
    document.getElementById("resultado").innerHTML = '0'
}

function back(){
    var back =  document.getElementById("resultado").innerHTML.substring(0,  document.getElementById("resultado").innerHTML.length - 1);
    document.getElementById("resultado").innerHTML = back
    if (document.getElementById("resultado").innerHTML == ""){
        document.getElementById("resultado").innerHTML = "0"
    }
}

function equal(){
    if (document.getElementById("resultado").innerHTML != ""){
        document.getElementById("resultado").innerHTML = eval(document.getElementById('resultado').innerHTML)
    }
}

while (document.getElementById("resultado").innerHTML == "") {
    document.getElementById("resultado").innerHTML = 0
}