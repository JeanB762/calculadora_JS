function insert(num){
    document.form.textview.value += num.value;
}

function apagar(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);

}

function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }    
}

function limpar(){
    var exp = null;
    document.form.textview.value = eval(exp);   
}

var entrada = document.getElementById("textview");

entrada.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        console.log("funfou");
        document.getElementById("igual").click();
    }
})