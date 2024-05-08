function renderProducts(proArr){
    var contentHTML = "";
    proArr.forEach(key => {
        var hienThiKQ = `<tr>
           <td>${key.id}</td>
           <td>${key.name}</td>
           <td>${key.price}</td>
           <td>${key.img}</td>
           <td>${key.desc}</td>
           <td><button class="btn-danger" onclick="suaSP(${key.id})">Sửa</button></td>
           <td><button class="btn-danger" onclick="xoaSP(${key.id})">Xóa</button></td>
           </tr>
        `;
        contentHTML += hienThiKQ;
    });
    document.getElementById("tblDanhSachSP").innerHTML= contentHTML;
}

function turnOnLoading(){
    document.getElementById("loading").style.display ="block";

}
function turnOffLoading(){
    document.getElementById("loading").style.display ="none";
    
}
