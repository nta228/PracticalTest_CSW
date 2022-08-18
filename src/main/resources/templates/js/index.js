function processDelete(id, e){
    e.preventDefault();
    if (confirm('Are u sure?')){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function (){
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                alert('Delete success;');
                window.location.reload()
            }
        }
        xmlHttpRequest.open('DELETE', API_URL + `/${id}`);
        xmlHttpRequest.send();
    }
}

function loadData(){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            var contentHtml = '';
            for (let i = 0; i < jsonResponse.length; i++) {
                contentHtml += `<li>
                                    ${jsonResponse[i].name}
                                    <a href="/detail.html?id=${jsonResponse[i].id}">Detail</a>
                                    <a href="/edit.html?id=${jsonResponse[i].id}">Edit</a>
                                    <a href="https://www.w3schools.com/w3css/w3css_panels.asp"
                                     data-id="${jsonResponse[i].id}"
                                     onclick="processDelete(${jsonResponse[i].id}, event)">Delete</a>
                                </li>`;
            }
            document.getElementById("data").innerHTML = contentHtml;
        }
    }
    xmlHttpRequest.open('GET', API_URL);
    xmlHttpRequest.send();
}
document.addEventListener('DOMContentLoaded', function (){
    loadData();
})