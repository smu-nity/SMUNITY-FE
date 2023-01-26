function validation(){
    let id;
    let password;
    if (!document.getElementById("id").value || !document.getElementById("pw").value) {
        alert("학번 혹은 비밀번호를 입력해주세요.")
        return false
    } else {
        return true
    }    
}