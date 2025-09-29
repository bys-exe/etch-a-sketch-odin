const container = document.getElementById('container');
for(let i=1;i <= 16*16;i++){
    const div = document.createElement('div');
    div.classList.add('divs');
    container.append(div);
    div.addEventListener('mouseover',()=>{
        div.style.backgroundColor = 'red';
    });
}



