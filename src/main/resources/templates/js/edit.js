function loadDetail(id){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status = 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            document.getElementById('content').innerHTML = xmlHttpRequest.responseText;
            fillDataToForm(jsonResponse);
        }
    }
    xmlHttpRequest.open('GET',API_URL + `/${id}`);
    xmlHttpRequest.send();
    // lay thong tin chi tiet
}
function fillDataToForm(product){
    var txtName = document.forms['form-edit']['name'];
    var btnSubmit = document.forms['form-edit']['submit'];
    txtName.value = product.name;
    btnSubmit.onclick = function (){
        //lay du lieu tu form
        var obj = {
            name: txtName.value,
        }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange() = function (){
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
                // thong bao thanh cong va redirect
            }
        }
        xmlHttpRequest.open('POST', API_URL);
        xmlHttpRequest.send(JSON.stringify(obj));
    }
}
document.addEventListener('DOMContentLoaded', function (){
    var id = getParameterFromUrl('id');
    loadDetail(id);
})