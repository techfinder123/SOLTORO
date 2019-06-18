
function changeTbl() {
// 회사 연혁 보여지는 테이블 js
	
	var target = $("#selTbl").val(),
		windowWidth = $( window ).width();
	if (windowWidth > 767) {	
		if (target == 1) {
			$(".getTbl_1").show();
			$(".getTbl_2").hide();
			$(".getTbl_3").hide();			
		} else if (target == 2) {
			$(".getTbl_2").show();
			$(".getTbl_1").hide();
			$(".getTbl_3").hide();			
		} else if (target == 3) {
			$(".getTbl_3").show();
			$(".getTbl_1").hide();
			$(".getTbl_2").hide();			
		}

		$(".getTbl_4").hide();			
		$(".getTbl_5").hide();			
		$(".getTbl_6").hide();			
	} else {
		if (target == 1) {
			$(".getTbl_4").show();
			$(".getTbl_5").hide();
			$(".getTbl_6").hide();			
		} else if (target == 2) {
			$(".getTbl_5").show();
			$(".getTbl_4").hide();
			$(".getTbl_6").hide();			
		} else if (target == 3) {
			$(".getTbl_6").show();
			$(".getTbl_4").hide();
			$(".getTbl_5").hide();			
		}

		$(".getTbl_1").hide();			
		$(".getTbl_2").hide();			
		$(".getTbl_3").hide();			
	}
}

function changeBbs() {
	var target = $("#selTbl").val(),
		url = "";
	
	if (target == 1) {
		url = "B_tech.php?pageNo=1&bbs=tech";
	} else if (target == 2) {
		url = "B_ip.php?pageNo=1&bbs=ip";
	} else if (target == 3) {
		url = "B_rnd.php?pageNo=1&bbs=rd";
	} else if (target == 0) {
		url = "B_noti.php?bbs=noti&pageNo=1";
	}
	
	top.location.href = url;
}

function go_pageNo(pageNo){
// 게시판 페이지 submit
	$("#bbsPage").val(pageNo);
	$("#frm_page").submit();
}

function moveBbs(target) {
// 게시판 탭 클릭시 게시판 내용 보여주는것 변경

	if (target == 1) {
		$("#bbsTitle").val("tech");
		$("#frm_page").attr("action","B_tech.php");
	} else if (target == 2) {
		$("#bbsTitle").val("ip");
		$("#frm_page").attr("action","B_ip.php");
	} else if (target == 3) {
		$("#bbsTitle").val("rd");
		$("#frm_page").attr("action","B_rnd.php");
	}	

	$("#bbsPage").val("1");
	$("#frm_page").submit();
}

function cntSql(pageNo) {
// 새로고침 방지 조회수 업데이트
	$("#frm_page").attr("action","/site/inc/inc_cnt.php");
	$("#frm_page").attr("method","post");
	$("#no").val(pageNo);	
	$("#frm_page").submit();
}
