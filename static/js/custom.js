var infobtn = document.getElementById("custom_info")

infobtn.addEventListener("mouseenter",info_in)
infobtn.addEventListener("mouseout",info_out)

function info_in(){
    var con = document.getElementById("custom_use").style.display = 'block';
}

function info_out(){
    document.getElementById("custom_use").style.display = 'none';
    
}