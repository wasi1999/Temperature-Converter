
function cel(){
    var cel=document.getElementById('inp1').value;
    document.getElementById('inp2').value=(cel*9/5)+32;
    
}
function far(){
    var far=document.getElementById('inp2').value;
    document.getElementById('inp1').value=(far-32)*5/9;
}


