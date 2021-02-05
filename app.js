let item=document.getElementById('item');
let results=document.getElementById('container-1');
let add_button= document.getElementById('add-button');

add_button.addEventListener('click',function(){
    
    var item_div=document.createElement('div');
    item_div.innerHTML="<h2>"+item.value+"</h2>";
    
    results.appendChild(item_div);

    item.value="";

    item_div.addEventListener('click',function(){
        item_div.style.textDecoration='line-through';
        item_div.addEventListener('click',function(){
            item_div.style.textDecoration='';   
        })

    })

    item_div.addEventListener('dblclick',function(){
        results.removeChild(item_div);
    })

})

