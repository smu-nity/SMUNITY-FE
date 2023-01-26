function validation2() {
    const p1 = document.getElementById("pw").value;
    const p2 = document.getElementById("pw2").value;

    if (!document.getElementById("major_status").value || !document.getElementById("engineering_certf").value ||
        !p1 || !p2) {
        alert("빈칸을 모두 채워주세요.")
        return false
    }
    else {
        if (p1.length < 6) {
            alert("비밀번호는 6자리 이상이어야 합니다.")
            return false
        } else {
            if (p1 != p2) {
                alert("비밀번호가 일치하지 않습니다.")
                return false
            }
        }
    }

}
