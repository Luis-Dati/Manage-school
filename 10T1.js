let mon10T1,tue10T1,wed10T1,thu10T1,fri10T1,sat10T1;

//nhập vi phạm từ máy vào tệp js
let ten, slg;

const danhsach=[
	"Đi trễ sau tiếng trống thứ nhất",
	"Nghỉ học CP",
	"Không sinh hoạt chào cờ",
	"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
	"Không đeo phù hiệu",
	"Không đeo huy hiệu đoàn",
	"Không học bài, không làm bài tập",
	"Không mang dụng cụ học tập",
	"Nghỉ học KP",
	"Không đúng đồng phục",
	"Giày dép không đúng quy định",
	"Trang điểm",
	"Ồn ào, mất trật tự, không tập trung trong giờ học",
	"Nói chuyện riêng, làm việc riêng khi dự lễ",
   "Không có khăn trải bàn GV, khăn trải bàn dơ",
	"Không có bình bông bàn GV",
	"Sàn dơ",
	"Bảng dơ",
	"Bàn ghế dơ",
	"Xả rác",
	"Mang đồ ăn thức uống vào lớp",
	"Không nghiêm túc trong giờ kiểm tra, quay cóp",
	"Sử dụng điện thoại di động trong giờ học, kiểm tra",
	"Đánh nhau",
	"Bè nhóm gây mất đoàn kết",
	"Xúc phạm nhân phẩm người khác",
	"Nói tục, chửi thề",
];

function addVipham() {
	ten = document.getElementById('vipham').value;
	//kiểm tra nếu nhập đúng cách
	if (danhsach.includes(ten)===false) {
		alert("Bạn phải nhập vi phạm giống gợi ý đã cho");
		return;
	};
	slg = document.getElementById('sohsinh').value;

	switch (new Date().getDay()) {
	case 0:
		Inkq();
	case 1:
		Thu2();
		break;
	case 2:
		Thu3();
		break;
	case 3:
		Thu4();
		break;
	case 4:
		Thu5();
		break;
	case 5:
		Thu6();
		break;
	case 6:
		Thu7();
	};
};

//khởi tạo bộ nhớ cho các biến từ mon10t1 đến sat10t1
	//thứ 2
//tạo biến save data
const savedmon10T1 = JSON.parse(localStorage.getItem('mon-10T1'));

if (Array.isArray(savedmon10T1)) {
	mon10T1=savedmon10T1;
} else {
	mon10T1 = [{
		name_vp:"none",
		quantity:"0",
	}];
};

//Step: save data
function save_mon10T1() {
	localStorage.setItem('mon-10T1',JSON.stringify(mon10T1));
};

function render2() {
	document.getElementById("time1").innerHTML = '';
	const time=new Date();
	const day=time.getDate();
	const month=time.getMonth()+1;
	const year=time.getFullYear();
	
	//in thời gian hiện tại
	const thgian = document.createElement('div');
	thgian.innerText = "\u25BA"+day+"/"+month+"/"+year;
	const Listime = document.getElementById('time1');
	Listime.appendChild(thgian);

	document.getElementById('mon').innerHTML = '';

	mon10T1.forEach(function (vipham) {
		//ỉn ra các giá trị//
		const ele = document.createElement('div');
		ele.innerText ="- "+vipham.name_vp+": "+vipham.quantity+" học sinh";
		
		const List_mon_10T1 = document.getElementById('mon');
		List_mon_10T1.appendChild(ele);
	});
};

	//thứ 3
//tạo biến save data
const savedtue10T1 = JSON.parse(localStorage.getItem('tue-10T1'));

if (Array.isArray(savedtue10T1)) {
	tue10T1=savedtue10T1;
} else {
	tue10T1 = [{
		name_vp:"none",
		quantity:"0",
	}];
};

//Step: save data
function save_tue10T1() {
	localStorage.setItem('tue-10T1',JSON.stringify(tue10T1));
};

function render3() {
	document.getElementById("time2").innerHTML = '';
	const time=new Date();
	const day=time.getDate();
	const month=time.getMonth()+1;
	const year=time.getFullYear();
	
	//in thời gian hiện tại
	const thgian = document.createElement('div');
	thgian.innerText = "\u25BA"+day+"/"+month+"/"+year;
	const Listime = document.getElementById('time2');
	Listime.appendChild(thgian);

	document.getElementById('tue').innerHTML = '';

	tue10T1.forEach(function (vipham) {
		//ỉn ra các giá trị//
		const ele = document.createElement('div');
		ele.innerText ="- "+vipham.name_vp+": "+vipham.quantity+" học sinh";
		
		const List_tue_10T1 = document.getElementById('tue');
		List_tue_10T1.appendChild(ele);
	});
};

	//thứ 4
//tạo biến save data
const savedwed10T1 = JSON.parse(localStorage.getItem('wed-10T1'));

if (Array.isArray(savedwed10T1)) {
	wed10T1=savedwed10T1;
} else {
	wed10T1 = [{
		name_vp:"none",
		quantity:"0",
	}];
};

//Step: save data
function save_wed10T1() {
	localStorage.setItem('wed-10T1',JSON.stringify(wed10T1));
};

function render4() {
	document.getElementById("time3").innerHTML = '';
	const time=new Date();
	const day=time.getDate();
	const month=time.getMonth()+1;
	const year=time.getFullYear();
	
	//in thời gian hiện tại
	const thgian = document.createElement('div');
	thgian.innerText = "\u25BA"+day+"/"+month+"/"+year;
	const Listime = document.getElementById('time3');
	Listime.appendChild(thgian);

	document.getElementById('wed').innerHTML = '';

	wed10T1.forEach(function (vipham) {
		//ỉn ra các giá trị//
		const ele = document.createElement('div');
		ele.innerText ="- "+vipham.name_vp+": "+vipham.quantity+" học sinh";
		
		const List_wed_10T1 = document.getElementById('wed');
		List_wed_10T1.appendChild(ele);
	});
};

	//thứ 5
//tạo biến save data
const savedthu10T1 = JSON.parse(localStorage.getItem('thu-10T1'));

if (Array.isArray(savedthu10T1)) {
	thu10T1=savedthu10T1;
} else {
	thu10T1 = [{
		name_vp:"none",
		quantity:"0",
	}];
};

//Step: save data
function save_thu10T1() {
	localStorage.setItem('thu-10T1',JSON.stringify(thu10T1));
};

function render5() {
	document.getElementById("time4").innerHTML = '';
	const time=new Date();
	const day=time.getDate();
	const month=time.getMonth()+1;
	const year=time.getFullYear();
	
	//in thời gian hiện tại
	const thgian = document.createElement('div');
	thgian.innerText = "\u25BA"+day+"/"+month+"/"+year;
	const Listime = document.getElementById('time4');
	Listime.appendChild(thgian);

	document.getElementById('thu').innerHTML = '';

	thu10T1.forEach(function (vipham) {
		//ỉn ra các giá trị//
		const ele = document.createElement('div');
		ele.innerText ="- "+vipham.name_vp+": "+vipham.quantity+" học sinh";
		
		const List_thu_10T1 = document.getElementById('thu');
		List_thu_10T1.appendChild(ele);
	});
};

	//thứ 6
//tạo biến save data
const savedfri10T1 = JSON.parse(localStorage.getItem('fri-10T1'));

if (Array.isArray(savedfri10T1)) {
	fri10T1=savedfri10T1;
} else {
	fri10T1 = [{
		name_vp:"none",
		quantity:"0",
	}];
};

//Step: save data
function save_fri10T1() {
	localStorage.setItem('fri-10T1',JSON.stringify(fri10T1));
};

function render6() {
	document.getElementById("time5").innerHTML = '';
	const time=new Date();
	const day=time.getDate();
	const month=time.getMonth()+1;
	const year=time.getFullYear();
	
	//in thời gian hiện tại
	const thgian = document.createElement('div');
	thgian.innerText = "\u25BA"+day+"/"+month+"/"+year;
	const Listime = document.getElementById('time5');
	Listime.appendChild(thgian);

	document.getElementById('fri').innerHTML = '';

	fri10T1.forEach(function (vipham) {
		//ỉn ra các giá trị//
		const ele = document.createElement('div');
		ele.innerText ="- "+vipham.name_vp+": "+vipham.quantity+" học sinh";
		
		const List_fri_10T1 = document.getElementById('fri');
		List_fri_10T1.appendChild(ele);
	});
};

	//thứ 7
//tạo biến save data
const savedsat10T1 = JSON.parse(localStorage.getItem('sat-10T1'));

if (Array.isArray(savedsat10T1)) {
	sat10T1=savedsat10T1;
} else {
	sat10T1 = [];
};

//Step: save data
function save_sat10T1() {
	localStorage.setItem('sat-10T1',JSON.stringify(sat10T1));
};

function render7() {
	document.getElementById("time6").innerHTML = '';
	const time=new Date();
	const day=time.getDate();
	const month=time.getMonth()+1;
	const year=time.getFullYear();
	
	//in thời gian hiện tại
	const thgian = document.createElement('div');
	thgian.innerText = "\u25BA"+day+"/"+month+"/"+year;
	const Listime = document.getElementById('time6');
	Listime.appendChild(thgian);

	document.getElementById('sat').innerHTML = '';

	sat10T1.forEach(function (vipham) {
		//ỉn ra các giá trị//
		const ele = document.createElement('div');
		ele.innerText ="- "+vipham.name_vp+": "+vipham.quantity+" học sinh";
		
		const List_sat_10T1 = document.getElementById('sat');
		List_sat_10T1.appendChild(ele);
	});
};

//hiển thị lại các dữ liệu vi phạm đã nhập từ trước
switch (new Date().getDay()) {
case 1:
	render2();
	break;
case 2:
	render3();
	break;
case 3:
	render4();
	break;
case 4:
	render5();
	break;
case 5:
	render6();
	break;
case 6:
	render7();
};

//body
function Thu2() {
//Monday
	//đẩy vào list
	mon10T1.push({
		name_vp: ten,
		quantity: slg,
	});

	save_mon10T1();
	render2();	

	//tạo func tính điểm		
	function sub_score_mon () {
		let score=0;

		mon10T1.forEach(function (vipham) {
			switch (vipham.name_vp) {
			case [
				"Đi trễ sau tiếng trống thứ nhất",
				"Nghỉ học CP",
				"Không sinh hoạt chào cờ",
				"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
				"Không đeo phù hiệu",
				"Không đeo huy hiệu đoàn",
				"Không học bài, không làm bài tập",
				"Không mang dụng cụ học tập",
				]:
				score=score+10*parseInt(vipham.quantity);
				break;
			case [
				"Nghỉ học KP",
				"Không đúng đồng phục",
				"Giày dép không đúng quy định",
				"Trang điểm",
				"Ồn ào, mất trật tự, không tập trung trong giờ học",
				"Nói chuyện riêng, làm việc riêng khi dự lễ",
			   "Không có khăn trải bàn GV, khăn trải bàn dơ",
				"Không có bình bông bàn GV",
				"Sàn dơ",
				"Bảng dơ",
				"Bàn ghế dơ",
				"Xả rác",
				"Mang đồ ăn thức uống vào lớp",
				]:
				score=score+20*parseInt(vipham.quantity);
				break;
			case [
				"Không nghiêm túc trong giờ kiểm tra, quay cóp",
				"Sử dụng điện thoại di động trong giờ học, kiểm tra",
				"Đánh nhau",
				"Bè nhóm gây mất đoàn kết",
				"Xúc phạm nhân phẩm người khác",
				"Nói tục, chửi thề",
				]:
				score=score+50*parseInt(vipham.quantity);
			}; 

			return score;
		});
	};

	//trả về giá trị điểm trừ cho hàm
	return sub_score_mon();
};

function Thu3() {
//Tuesday
	//đẩy vào list
	tue10T1.push({
		name_vp: ten,
		quantity: slg,
	});

	save_tue10T1();
	render3();	

	//tạo func tính điểm		
	function sub_score_tue() {
		let score=0;

		tue10T1.forEach(function (vipham) {
			switch (vipham.name_vp) {
			case [
				"Đi trễ sau tiếng trống thứ nhất",
				"Nghỉ học CP",
				"Không sinh hoạt chào cờ",
				"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
				"Không đeo phù hiệu",
				"Không đeo huy hiệu đoàn",
				"Không học bài, không làm bài tập",
				"Không mang dụng cụ học tập",
				]:
				score=score+10*parseInt(vipham.quantity);
				break;
			case [
				"Nghỉ học KP",
				"Không đúng đồng phục",
				"Giày dép không đúng quy định",
				"Trang điểm",
				"Ồn ào, mất trật tự, không tập trung trong giờ học",
				"Nói chuyện riêng, làm việc riêng khi dự lễ",
			   "Không có khăn trải bàn GV, khăn trải bàn dơ",
				"Không có bình bông bàn GV",
				"Sàn dơ",
				"Bảng dơ",
				"Bàn ghế dơ",
				"Xả rác",
				"Mang đồ ăn thức uống vào lớp",
				]:
				score=score+20*parseInt(vipham.quantity);
				break;
			case [
				"Không nghiêm túc trong giờ kiểm tra, quay cóp",
				"Sử dụng điện thoại di động trong giờ học, kiểm tra",
				"Đánh nhau",
				"Bè nhóm gây mất đoàn kết",
				"Xúc phạm nhân phẩm người khác",
				"Nói tục, chửi thề",
				]:
				score=score+50*parseInt(vipham.quantity);
			}; 

			return score;
		});
	};

	//trả về giá trị điểm trừ cho hàm
	return sub_score_tue();
};

function Thu4() {
//Wednesday
	//đẩy vào list
	wed10T1.push({
		name_vp: ten,
		quantity: slg,
	});

	save_wed10T1();
	render4();	

	//tạo func tính điểm		
	function sub_score_wed() {
		let score=0;

		wed10T1.forEach(function (vipham) {
			switch (vipham.name_vp) {
			case [
				"Đi trễ sau tiếng trống thứ nhất",
				"Nghỉ học CP",
				"Không sinh hoạt chào cờ",
				"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
				"Không đeo phù hiệu",
				"Không đeo huy hiệu đoàn",
				"Không học bài, không làm bài tập",
				"Không mang dụng cụ học tập",
				]:
				score=score+10*parseInt(vipham.quantity);
				break;
			case [
				"Nghỉ học KP",
				"Không đúng đồng phục",
				"Giày dép không đúng quy định",
				"Trang điểm",
				"Ồn ào, mất trật tự, không tập trung trong giờ học",
				"Nói chuyện riêng, làm việc riêng khi dự lễ",
			   "Không có khăn trải bàn GV, khăn trải bàn dơ",
				"Không có bình bông bàn GV",
				"Sàn dơ",
				"Bảng dơ",
				"Bàn ghế dơ",
				"Xả rác",
				"Mang đồ ăn thức uống vào lớp",
				]:
				score=score+20*parseInt(vipham.quantity);
				break;
			case [
				"Không nghiêm túc trong giờ kiểm tra, quay cóp",
				"Sử dụng điện thoại di động trong giờ học, kiểm tra",
				"Đánh nhau",
				"Bè nhóm gây mất đoàn kết",
				"Xúc phạm nhân phẩm người khác",
				"Nói tục, chửi thề",
				]:
				score=score+50*parseInt(vipham.quantity);
			}; 

			return score;
		});
	};

	//trả về giá trị điểm trừ cho hàm
	return sub_score_wed();
};

function Thu5() {
//Thursday
	//đẩy vào list
	thu10T1.push({
		name_vp: ten,
		quantity: slg,
	});

	save_thu10T1();
	render5();	

	//tạo func tính điểm		
	function sub_score_thu () {
		let score=0;

		thu10T1.forEach(function (vipham) {
			switch (vipham.name_vp) {
			case [
				"Đi trễ sau tiếng trống thứ nhất",
				"Nghỉ học CP",
				"Không sinh hoạt chào cờ",
				"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
				"Không đeo phù hiệu",
				"Không đeo huy hiệu đoàn",
				"Không học bài, không làm bài tập",
				"Không mang dụng cụ học tập",
				]:
				score=score+10*parseInt(vipham.quantity);
				break;
			case [
				"Nghỉ học KP",
				"Không đúng đồng phục",
				"Giày dép không đúng quy định",
				"Trang điểm",
				"Ồn ào, mất trật tự, không tập trung trong giờ học",
				"Nói chuyện riêng, làm việc riêng khi dự lễ",
			   "Không có khăn trải bàn GV, khăn trải bàn dơ",
				"Không có bình bông bàn GV",
				"Sàn dơ",
				"Bảng dơ",
				"Bàn ghế dơ",
				"Xả rác",
				"Mang đồ ăn thức uống vào lớp",
				]:
				score=score+20*parseInt(vipham.quantity);
				break;
			case [
				"Không nghiêm túc trong giờ kiểm tra, quay cóp",
				"Sử dụng điện thoại di động trong giờ học, kiểm tra",
				"Đánh nhau",
				"Bè nhóm gây mất đoàn kết",
				"Xúc phạm nhân phẩm người khác",
				"Nói tục, chửi thề",
				]:
				score=score+50*parseInt(vipham.quantity);
			}; 

			return score;
		});
	};

	//trả về giá trị điểm trừ cho hàm
	return sub_score_thu();
};

function Thu6() {
//Friday
	//đẩy vào list
	fri10T1.push({
		name_vp: ten,
		quantity: slg,
	});

	save_fri10T1();
	render6();	

	//tạo func tính điểm		
	function sub_score_fri () {
		let score=0;

		fri10T1.forEach(function (vipham) {
			switch (vipham.name_vp) {
			case [
				"Đi trễ sau tiếng trống thứ nhất",
				"Nghỉ học CP",
				"Không sinh hoạt chào cờ",
				"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
				"Không đeo phù hiệu",
				"Không đeo huy hiệu đoàn",
				"Không học bài, không làm bài tập",
				"Không mang dụng cụ học tập",
				]:
				score=score+10*parseInt(vipham.quantity);
				break;
			case [
				"Nghỉ học KP",
				"Không đúng đồng phục",
				"Giày dép không đúng quy định",
				"Trang điểm",
				"Ồn ào, mất trật tự, không tập trung trong giờ học",
				"Nói chuyện riêng, làm việc riêng khi dự lễ",
			   "Không có khăn trải bàn GV, khăn trải bàn dơ",
				"Không có bình bông bàn GV",
				"Sàn dơ",
				"Bảng dơ",
				"Bàn ghế dơ",
				"Xả rác",
				"Mang đồ ăn thức uống vào lớp",
				]:
				score=score+20*parseInt(vipham.quantity);
				break;
			case [
				"Không nghiêm túc trong giờ kiểm tra, quay cóp",
				"Sử dụng điện thoại di động trong giờ học, kiểm tra",
				"Đánh nhau",
				"Bè nhóm gây mất đoàn kết",
				"Xúc phạm nhân phẩm người khác",
				"Nói tục, chửi thề",
				]:
				score=score+50*parseInt(vipham.quantity);
			}; 

			return score;
		});
	};

	//trả về giá trị điểm trừ cho hàm
	return sub_score_fri();		
};

function Thu7() {
//Saturday
	//đẩy vào list
	sat10T1.push({
		name_vp: ten,
		quantity: slg,
	});

	save_sat10T1();
	render7();	

	//tạo func tính điểm		
	function sub_score_sat () {
		let score=0;

		sat10T1.forEach(function (vipham) {
			switch (vipham.name_vp) {
			case [
				"Đi trễ sau tiếng trống thứ nhất",
				"Nghỉ học CP",
				"Không sinh hoạt chào cờ",
				"Không tham dự các buổi lễ, buổi triệu tập của nhà trường",
				"Không đeo phù hiệu",
				"Không đeo huy hiệu đoàn",
				"Không học bài, không làm bài tập",
				"Không mang dụng cụ học tập",
				]:
				score=score+10*parseInt(vipham.quantity);
				break;
			case [
				"Nghỉ học KP",
				"Không đúng đồng phục",
				"Giày dép không đúng quy định",
				"Trang điểm",
				"Ồn ào, mất trật tự, không tập trung trong giờ học",
				"Nói chuyện riêng, làm việc riêng khi dự lễ",
			   "Không có khăn trải bàn GV, khăn trải bàn dơ",
				"Không có bình bông bàn GV",
				"Sàn dơ",
				"Bảng dơ",
				"Bàn ghế dơ",
				"Xả rác",
				"Mang đồ ăn thức uống vào lớp",
				]:
				score=score+20*parseInt(vipham.quantity);
				break;
			case [
				"Không nghiêm túc trong giờ kiểm tra, quay cóp",
				"Sử dụng điện thoại di động trong giờ học, kiểm tra",
				"Đánh nhau",
				"Bè nhóm gây mất đoàn kết",
				"Xúc phạm nhân phẩm người khác",
				"Nói tục, chửi thề",
				]:
				score=score+50*parseInt(vipham.quantity);
			}; 

			return score;
		});
	};

	//trả về giá trị điểm trừ cho hàm
	return sub_score_sat();
};

function Inkq() {
	function score() {
		let total=Thu2()+Thu3()+Thu4()+Thu5()+Thu6()+Thu7();
		return 500-total
	};

	const ele = document.createElement('div');
	ele.innerText = "Tổng điểm hiện tại: "+ score();
	const score10T1 = document.getElementById('score');
	score10T1.appendChild(ele);
};