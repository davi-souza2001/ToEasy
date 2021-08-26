function send() {
    let apps = document.getElementById("apps");
    let title = document.getElementById("txtTitle").value;
    let div = document.querySelector("h4");
    console.log(apps);
    apps.style.display = "flex";
     
    div.innerText = `${title}`;
}
