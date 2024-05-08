const BASE_URL = "https://66337e2bf7d50bbd9b498fd5.mockapi.io/products";


function fetchProducts(){
   
    axios({
        url:BASE_URL,
        method:"GET",
    }).then(function(response){
        turnOffLoading();
        renderProducts(response.data);
    }).catch(function(error){
        turnOffLoading();
        console.log("error",error);
    });
    
}

fetchProducts();
function xoaSP(id){
    turnOnLoading();
    axios({
        url:`${BASE_URL}/${id}`,
        method:"DELETE",
    }).then(function(response){
        fetchProducts();
    }).catch(function(){
        turnOffLoading();
        console.log("error",error);
       
    })
}

function createProducts(){
    var nameSP = document.getElementById("TenSP").value;
    var priceSP = document.getElementById("GiaSP").value;
    var imgSP = document.getElementById("HinhSP").value;
    var descSP = document.getElementById("moTaSP").value;
    axios({
        url:BASE_URL,
        method:"POST",
        data:{
            name:nameSP,
            price:priceSP,
            img:imgSP,
            desc:descSP,
        },
    }).then(function(response){
        $("#myModal").modal("hide");
        fetchProducts();
    }).catch(function(){
        turnOffLoading();
        console.log("error",error);
       
    })
}
/*
*********

*GET : Lấy tất cả / lấy chi tiết

*POST : Tạo mới

*PUT : Cập nhật

*DELETE: Xóa

****
*/

//  Nâng cao promise
// promise tuần tự (trước sau) : promise A chạy xong rồi mới tới promise B chạy tiếp  
// promise all (song song) : cả A và B chạy cùng nhau cùng 1 thời điểm và đợi response từ cả 2 về đủ mới thực hiện công việc tiếp theo

// api list khu vực / api lấy nhiệt độ theo khu vực => (tuần tự)

//  api cập nhật thông tin cá nhân / api cập nhật thông tin công việc => chỉ thông báo thành công khi cả 2 api đều trả kết quả thành công

// micro task , macro task (độ ưu tiên)

// callback hell

