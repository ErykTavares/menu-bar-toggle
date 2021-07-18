function menu_hidden(){
    let menu = document.getElementById("menu-list");
    if(menu.style.display != "flex"){
        menu.style.display = "flex";
        menu.setAttribute("class", "menu-toggle")
    }
    else{
       menu.style.display = ""
       menu.setAttribute("class"," navbar-list")
    }
}