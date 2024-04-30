function kopiowanie(id) {
    var element = document.getElementById(id);
    var value = element.getAttribute("value");
    
    var textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(textarea);
    
    alert("Skopiowano wartość: " + value);
}