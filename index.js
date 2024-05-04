/*
javascript ~ single thread (chỉ thực hiện được 1 request)

code đồng bộ ~ chạy từ trên xuống dưới

code bất đồng bộ ~ chạy theo quy tắc event loop ~ sẽ được chạy sau khi code đồng bộ chạy hết

code bất đồng bộ : setTimeOut (miror task) , axios (api)(macro task)

setTimeOut ~ delay

C = GET

R = POST

U = PUT

D = DELETE
event loop : 
*/ 

console.log(1);

setTimeout(function(){
    console.log(2);
},3000)

console.log(3);

// promise : pending (đợi) , resolve (sucess) , reject(fail)
// axios.then(function(có param hoặc k){}).catch(function(có param hoặc k){})
// /todos : endpoint co the thay doi
// https://dummyjson.com : ko co thay doi 
axios({
    url:"https://dummyjson.com/todos",
    method:"GET",
}).then(function(response){
    console.log("response",response);
}).catch(function(error){
    console.log("error",error)
}).finally(function(){
    console.log("end");
});

// async await



