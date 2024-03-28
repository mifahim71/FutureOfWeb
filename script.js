const handleMenu = () => {
    const menu = document.querySelector('.menu');
    document.getElementById('barBtn').addEventListener('click', ()=>{
        menu.classList.add('backtoPostion')
    })

    document.getElementById('crsBtn').addEventListener('click',()=>{
        menu.classList.remove('backtoPostion');
    })
}

handleMenu();