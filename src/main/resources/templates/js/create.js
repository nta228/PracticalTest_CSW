document.addEventListener('DOMContentLoaded', function (){
    var btnSubmit = document.forms['employee-form']['submit'];
    var productForm = document.forms['employee-form']
    var txtName = productForm['name'];
    var txtSalary = productForm['salary'];
    if (btnSubmit !== null && btnSubmit !== undefined){
        btnSubmit.onclick = handleSubmit;
    }
})
function postData(objData){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            document.getElementById("content").innerHTML = xmlHttpRequest.responseText;
        }
    }
function handleSubmit(event){
    event.preventDefault();

    var objData = {
        name: txtName.value,
        price: txtSalary.value
    }
    postData(objData);
}
}