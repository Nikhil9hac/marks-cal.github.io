// let maths=document.getElementById('math').value;
// let wp=document.getElementById('web').value;
// let physics=document.getElementById('phy').value;
// let chemistry=document.getElementById('che').value;
// totalgrade=maths+wp+physics+chemistry;
// alert(totalgrade)
let button=document.getElementById('mybutton');
button.addEventListener('click',function(){
    let maths=document.getElementById('math').value;
    let wp=document.getElementById('web').value;
    let physics=document.getElementById('phy').value;
    let chemistry=document.getElementById('che').value;
    if (maths>=100 || maths=="") {
        alert('your write your maths marks correctly');
    } 
    else if(wp>=100|| wp==""){
        alert('your write your wep programming marks correctly');
    }

    else if(physics>=100 || physics==""){
        alert('your write your physics marks correctly');
    }
    else if(chemistry>=100||chemistry==""){
        alert('your write your chemistry marks correctly');
    }
    else {
       totalgrade=parseFloat(maths)+parseFloat(wp)+parseFloat(physics)+parseFloat(chemistry);
    }
    totalpercentage=totalgrade/400*100;
    if (totalgrade>=350) {
        grade='A';
    } 
    else if(totalgrade>=250){
        grade='B';
    }
    else if(totalgrade>=190){
        grade='C';
    }
    else {
        grade='D';
    }
    if(totalgrade>190){
        result='Pass';
    }
    else{
        result="Fail";
    }
    let output=document.createElement('div');
    output.setAttribute('class','myoutput')
    output.setAttribute('id','output1')
    output.innerHTML=`Out of 400 your total is ${totalgrade} and percentage is ${totalpercentage}% your grade is
    ${grade}. You are ${result}
    `
    let container=document.querySelector('.container');
    container.appendChild(output)
})