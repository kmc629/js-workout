var id;
var pw;
var pw_re;
var user_name;
var email;
var birth_d;
var birth_y;
var birth_m;
var tel_1;
var tel_2;
var tel_3;
var pwpwre

var ipid;
var ippw;
var ippw_re;
var ipuser_name;
var ipemail;
var ipbirth_d;
var ipbirth_y;
var ipbirth_m;
var iptel_1;
var iptel_2;
var iptel_3;

window,onload = function(){
    ipid=this.document.getElementById("id");
    ippw=this.document.getElementById("pw");
    ippw_re=this.document.getElementById("pw_re");
    ipuser_name=this.document.getElementById("user_name");
    ipemail=this.document.getElementById("email");
    ipbirth_d=this.document.getElementById("birth_d");
    ipbirth_m=this.document.getElementById("birth_m");
    ipbirth_y=this.document.getElementById("birth_y");
    iptel_1=this.document.getElementById("tel_1");
    iptel_2=this.document.getElementById("tel_2");
    iptel_3=this.document.getElementById("tel_3");
    ipsex=this.document.getElementsByName("sex");
    ippwpwre=this.document.getElementsById("pwpwre");
}

function check(){
    id=ipid.value;
    pw=ippw.value;
    pw_re=ippw_re.value;
    // user_name=ipuser_name.value;
    // email=ipemail.value;
    // birth_d=ipbirth_d.value;
    // birth_m=ipbirth_m.value;
    // birth_y=ipbirth_y.value;
    // tel_1=iptel_1.value;
    // tel_2=iptel_2.value;
    // tel_3=iptel_3.value;
    
    
    if(checkid() && checkpw() && checkpw_re() && checkpwpwre()){
        // && checkEmail() && checkbirth_d() && checkbirth_m() && checkbirth_y()
        // && checktel_1() && checktel_2() &&checktel_3()){
            
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패")
    }
}

function checkpwpwre(){
    if(pw==pw_re){
        console.log("same");
        return true;
    } else {
        console.log("not same");
        alert("비밀번호 불일치")
        return false;    
    }
}

function checkid(){
    if(id.length>=4 && id.length<=10){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}

function checkpw(){
    if(pw.length>=6 && pw.length<=12){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}

function checkpw_re(){
    if(id.length>=6 && id.length<=12){
        console.log("ok pw_re");
        return true;
    } else {
        console.log("no pw_re");
        return false;
    }
}
for(var i=0;i<ipSexes.length;i++){						
	// ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻					
	if(ipsex[i].checked == true){					
	sex = ipsex[i].value; // 해당 라디오 버튼의 값을 변수에 저장					
	}					
}						