//  render array product từ api
function renderProduct(productArr){
    var contentHTML = "";
    productArr.forEach(function(item){
            var kqHienThi = `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.img}</td>
            <td>${item.desc}</td>
            <td><button class="btn btn-danger" onclick="xoaItem('${item.id}')">Xóa</button></td>
            <td><button "
            "  class="btn btn-danger" onclick="suaItem('${item.id}')">Sửa</button></td>
            </tr>`;
            contentHTML += kqHienThi;
        
        
    })
    
    document.getElementById("tblDanhSachSP").innerHTML= contentHTML;
    
    
}

function turnOnLoading(){
    document.getElementById("loading").style.display ="block";

}
function turnOffLoading(){
    document.getElementById("loading").style.display ="none";
    
}
