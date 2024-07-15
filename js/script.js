document.getElementById('burguer').addEventListener('click', () => {
    const menu = document.getElementById('menu-list');
  
    if(menu.style.display == 'none'){
        menu.style.display = 'flex'
    }else{
        menu.style.display ='none'
    }
  });
  