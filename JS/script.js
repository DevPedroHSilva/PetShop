$$ = (id) => {return document.getElementById(id);}

showActiveElement = (id) => { $$(id).classList.add('active');}
showActiveElementToggle = (id) => { $$(id).classList.toggle('active');}
removeActiveElement = (id) => { $$(id).classList.remove('active'); }


closeAllShow = () =>
{
    removeActiveElement("formLogin");
    removeActiveElement("navBarMenu");
}

window.onscroll = () =>
{
    closeAllShow();
    if(window.scrollY > 0) showActiveElement("header");
    else  removeActiveElement("header");
}


window.onload = () =>
{
    closeAllShow();
    if(window.scrollY > 0) showActiveElement("header");
    else  removeActiveElement("header");
}