var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

var id = "cat"

window.onload = function(){

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
}

function procLogin(){
    content.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}

function login(){

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "cat" && local_pw == "1234"){
        alert("로그인 성공");
        procLogin();
    }else{
        alert("로그인 실패");
    }
}

