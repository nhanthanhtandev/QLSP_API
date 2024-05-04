const BASE_URL = "https://66337e2bf7d50bbd9b498fd5.mockapi.io/products"



//  gọi API lấy danh sách sản phẩm

function fetchProducts(){
    turnOnLoading();
    axios({
        url: BASE_URL,
        method:"GET",
    }).then(function(response){
        turnOffLoading();
        renderProduct(response.data);
        
    }).catch(function(error){
        console.log("error",error)
        turnOffLoading();
    });
    
}
// fetch khi load trang
fetchProducts();
//  xóa sp
function xoaItem(id){
    turnOnLoading();
    axios({
        url: `${BASE_URL}/${id}`,
        method:"DELETE",
    }).then(function(response){
        // xóa thành công từ server sẽ nhảy vào then để chạy tiếp
        // window.location.reload() không được tối ưu
        // gọi lại api lấy danh sách sản phẩm mới nhất từ server
        // fetch khi xóa thành công
       fetchProducts();
        
    }).catch(function(error){
        turnOffLoading();
        console.log("error",error)
    });
}

// thêm sp
function createProducts(){
    var nameSP = document.getElementById("TenSP").value;
    var giaSP = document.getElementById("GiaSP").value;
    var hinhSP = document.getElementById("HinhSP").value;
    var motaSP = document.getElementById("moTaSP").value;
    var product ={
        name:nameSP,
        price:giaSP,
        img:hinhSP,
        desc:motaSP,
    }
    axios({
        url: BASE_URL,
        method:"POST",
        data:product,
    }).then(function(response){
        // tắt modal sau khi thêm thành công
        $("#myModal").modal("hide");
        fetchProducts();
    
    }).catch(function(error){
        console.log("error",error)
        turnOffLoading();
    });
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