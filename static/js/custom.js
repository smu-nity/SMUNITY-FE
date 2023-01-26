var infobtn = document.getElementById("custom_info")

infobtn.addEventListener("mouseenter",custom_info_in)
infobtn.addEventListener("mouseout",custom_info_out)

//사용방법 열기
function custom_info_in(){
    var con = document.getElementById("custom_use").style.display = 'block';
}

//사용방법 닫기
function custom_info_out(){
    document.getElementById("custom_use").style.display = 'none';
}

function modal_open(e){
    console.log(document.getElementById(e.getAttribute('open')));
    var target = document.getElementById(e.getAttribute('open')).getAttribute('id');
    document.getElementById(target).style.display = "block";
}

function modal_close(e){
    var target = document.getElementById(e.getAttribute('close')).getAttribute('id');
    document.getElementById(target).style.display = "none";
}


function custom_add() {
    // 만약 선택영역 선택안했으면 빠꾸
    // var ts_box = document.getElementById('classification');
    // var ts_ind = document.getElementById("classification").options.selectedIndex;
    // if (ts_box.options[ts_ind].value === "x") {
    //     return alert('자신에게 맞는 이수구분을 선택해주세요');
    // }
  
    // 0. 우선 검색결과 테이블에서 값을 다 긁어온다.
    // var year = document.getElementById('year').value;
    // var semester = document.getElementById('semester').value;
    // var subject_num = document.getElementById('subject_num').value;
    // var subject_name = document.getElementById('subject_name').value;
    // var classification = document.getElementById('classification').value;
    // var selection = document.getElementById('selection').value;
    // var grade = document.getElementById('grade').value;
    //  만약 기이수과목표에 있는 학수번호를 추가하려 한다면?
    // var now_s_num_list = []
    // $('#mytable tr').each(
    //     function(){
    //         var inner_s_num = $(this).find('td').eq(2).text();
    //         if(inner_s_num === ""){
    //             inner_s_num = $(this).find('td').eq(2).find('*').val();
    //         }
    //         now_s_num_list.push(inner_s_num)
    //     }
    // );
    // if(now_s_num_list.includes(subject_num)){
        // 전체 리스트에 들어있으면
    //     return alert('이미 추가된 과목입니다.');
    // }
    // 1. 행생성
    var table = document.getElementById('mytable');
    var newRow = table.insertRow(1);
    // 2. 행에 각각 셀 생성
    var newCell0 = newRow.insertCell(0);  // 년도
    var newCell1 = newRow.insertCell(1);  // 학기
    var newCell2 = newRow.insertCell(2);  // 학수번호
    var newCell3 = newRow.insertCell(3);  // 과목명
    var newCell4 = newRow.insertCell(4);  // 이수구분
    var newCell5 = newRow.insertCell(5);  // 선택영역
    var newCell6 = newRow.insertCell(6);  // 학점
    var newCell7 = newRow.insertCell(7);  // 삭제버튼
    // 3. 각각의 셀에 클래스지정
    newCell0.className = 'new_td';
    newCell1.className = 'new_td';
    newCell2.className = 'new_td';
    newCell3.className = 'new_td';
    newCell4.className = 'new_td';
    newCell5.className = 'new_td';
    newCell6.className = 'new_td';
    newCell7.className = 'new_td';
    // 4. 셀에 값 추가
    // newCell0.innerHTML = "<input class='new_td_input' type='text' name='year' value='" + year + "' readonly>";
    // newCell1.innerHTML = "<input class='new_td_input' type='text' name='semester' value='" + semester + "' readonly>";
    // newCell2.innerHTML = "<input class='new_td_input' type='text' name='subject_num' value='" + subject_num + "' readonly>";
    // newCell3.innerHTML = "<input class='new_td_input' type='text' name='subject_name' value='" + subject_name + "' readonly>";
    // newCell4.innerHTML = "<input class='new_td_input' type='text' name='classification' value='" + classification + "' readonly>";
    // newCell5.innerHTML = "<input class='new_td_input' type='text' name='selection' value='" + selection + "' readonly>";
    // newCell6.innerHTML = "<input class='new_td_input' type='text' name='grade' value='" + grade + "' readonly>";
    // newCell7.innerHTML = "<button class='del_btn' onclick='del_row_new(this)'>삭제</button>";
    // 모달 창 끄기
    document.querySelector('#custom_modal').style.display = 'none';
  }