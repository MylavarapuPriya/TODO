function formSubmit(){
    let input=document.getElementById('add-item').value;
    
    let itemdiv=document.createElement('div');    
    itemdiv.innerHTML="<h2>"+input+"</h2>";
   
    let results_div=document.getElementById('flex-result');
    results_div.appendChild(itemdiv);

    document.getElementById('add-item').value="";
    
    document.querySelector('#flex-result').addEventListener('click',function(){
       itemdiv.style.textDecoration='line-through';
    })

    document.querySelector('#flex-result').addEventListener('dblclick',function(){
        results_div.replaceChild(itemdiv);
     })

}

