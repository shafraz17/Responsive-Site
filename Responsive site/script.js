function openMenu(evt, meal) {
    
    var i, tabcontent,col;

    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        
    }


    col = document.getElementsByClassName("col");
    for (i = 0; i < col.length; i++) {
        col[i].className = col[i].className.replace(" active", "");
    }

    document.getElementById(meal).style.display = "block";
    evt.currentTarget.className += " active";
    
}   


