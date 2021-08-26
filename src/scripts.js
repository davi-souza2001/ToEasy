function send() {
    var title = document.getElementById("txtTitle").value;
    var div = document.querySelector("h4");
     
    div.innerText = `${title}`;
}