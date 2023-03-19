var mangNhanVien= [];
var check = new Validation();
var myForm = document.getElementById("myForm");
document.getElementById('btnThemNV').onclick = function (){
    var nv  = new  NhanVien();
    nv.tknv = document.querySelector('#tknv').value;
    nv.name= document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.password = document.querySelector('#password').value;
    nv.datepicker = document.querySelector('#datepicker').value;
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.heSoLuong = document.querySelector('#chucVu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    var tagSelect = document.querySelector('#chucVu');
    var viTri =tagSelect.selectedIndex;
    var chucVu =tagSelect.options[viTri].innerHTML;
    nv.chucVu = chucVu;
    nv.tongLuong = new Intl.NumberFormat().format(nv.heSoLuong * nv.luongCB);
    
    nv.loaiNhanVien=xepLoaiNhanVien(nv.gioLam);




    var valid = true;
    
    valid = check.checkEmty(nv.tknv,'error-required-tknv','Tài Khoản')&check.checkEmty(nv.name,'error-required-name','Tên Nhân Viên')&check.checkEmty(nv.email,'error-required-email','Email')&check.checkEmty(nv.password,'error-required-password','Mật Khẩu')&check.checkEmty(nv.datepicker,'error-required-datepicker','Ngày Làm')&check.checkEmty(nv.luongCB,'error-required-luongCB','Lương Cơ Bản')&check.checkEmty(nv.gioLam,'error-required-gioLam','Giờ Làm');
    valid = valid & check.checkLetter(nv.name,'error-AllLetter-name','Tên Nhân Viên');
    valid = valid & check.checkemail(nv.email,'error-email','Email');
    valid = valid & check.checkLength(nv.tknv,'error-tknv','Tài Khoản',4,6);
    valid = valid & check.checkPassword(nv.password,'error-password','Mật Khẩu',6,10);
    valid = valid & check.checkNumber(nv.luongCB,'error-luongCB','Lương Cơ Bản',1000000,20000000);
    valid = valid & check.checkRole(nv.heSoLuong,'error-chucVu');
    valid = valid & check.checkNumber(nv.gioLam,'error-gioLam','Giờ Làm',80,200);



    if(!valid){
        return ;
    }

    mangNhanVien.push(nv);
    tableNhanVien(mangNhanVien);
    luulocalStorage();
}  
document.getElementById('btnCapNhat').onclick = function (){
    var capNhatNV = new NhanVien();
    capNhatNV.tknv = document.querySelector('#tknv').value;
    capNhatNV.name = document.querySelector('#name').value;
    capNhatNV.email = document.querySelector('#email').value;
    capNhatNV.password = document.querySelector('#password').value;
    capNhatNV.datepicker = document.querySelector('#datepicker').value;
    capNhatNV.heSoLuong= document.querySelector('#chucVu').value;

    capNhatNV.luongCB = document.querySelector('#luongCB').value;
    var tagSelect = document.querySelector('#chucVu');
    var viTri =tagSelect.selectedIndex;
    var chucVu =tagSelect.options[viTri].innerHTML;
    capNhatNV.chucVu = chucVu;
    capNhatNV.gioLam = document.querySelector('#gioLam').value;
    console.log(capNhatNV);
    capNhatNV.tongLuong = new Intl.NumberFormat().format(capNhatNV.heSoLuong * capNhatNV.luongCB);
    capNhatNV.loaiNhanVien = xepLoaiNhanVien(capNhatNV.gioLam);


    var valid = true;
    
    valid = check.checkEmty(capNhatNV.tknv,'error-required-tknv','Tài Khoản')&check.checkEmty(capNhatNV.name,'error-required-name','Tên Nhân Viên')&check.checkEmty(capNhatNV.email,'error-required-email','Email')&check.checkEmty(capNhatNV.password,'error-required-password','Mật Khẩu')&check.checkEmty(capNhatNV.luongCB,'error-required-luongCB','Lương Cơ Bản')&check.checkEmty(capNhatNV.gioLam,'error-required-gioLam','Giờ Làm');
    valid = valid & check.checkLetter(capNhatNV.name,'error-AllLetter-name','Tên Nhân Viên');
    valid = valid & check.checkemail(capNhatNV.email,'error-email','Email');
    valid = valid & check.checkLength(capNhatNV.tknv,'error-tknv','Tài Khoản',4,6);
    valid = valid & check.checkPassword(capNhatNV.password,'error-password','Mật Khẩu',6,10);
    valid = valid & check.checkNumber(capNhatNV.luongCB,'error-luongCB','Lương Cơ Bản',1000000,20000000);
    valid = valid & check.checkRole(capNhatNV.heSoLuong,'error-chucVu');
    valid = valid & check.checkNumber(capNhatNV.gioLam,'error-gioLam','Giờ Làm',80,200);
    if(!valid){
        return ;
    }


    for(i=0;i<mangNhanVien.length;i++){
        if(mangNhanVien[i].tknv===capNhatNV.tknv){
            mangNhanVien[i].name = capNhatNV.name;
            mangNhanVien[i].email = capNhatNV.email;
            mangNhanVien[i].password = capNhatNV.password;
            mangNhanVien[i].datepicker = capNhatNV.datepicker;
            mangNhanVien[i].luongCB = capNhatNV.luongCB;
            mangNhanVien[i].chucVu = capNhatNV.chucVu;
            mangNhanVien[i].gioLam = capNhatNV.gioLam;
            mangNhanVien[i].tongLuong = capNhatNV.tongLuong;
            mangNhanVien[i].loaiNhanVien = capNhatNV.loaiNhanVien;

            break;
        }
    }

    tableNhanVien(mangNhanVien);

    luulocalStorage();

    document.querySelector('#tknv').disabled = false;
    document.querySelector('#btnThemNV').disabled = false;
}

document.getElementById('searchName').oninput = function(){
    var keyword = document.getElementById('searchName').value;
    var  mangXepLoai = [];
    keyword = stringToSlug(keyword);
    for(i=0;i<mangNhanVien.length;i++){
        xepLoai = stringToSlug(mangNhanVien[i].loaiNhanVien);
        if(xepLoai.search(keyword) !== -1 ){
            mangXepLoai.push(mangNhanVien[i]);
        }
    }
    tableNhanVien( mangXepLoai);

}
function stringToSlug(title) { 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase().trim();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
}



function luulocalStorage(){
    var stringMangNhanVien = JSON.stringify(mangNhanVien);
    localStorage.setItem('mangNhanVien',stringMangNhanVien);
}
function layStorage(){
    if(localStorage.getItem('mangNhanVien')){
        stringMangNhanVien = localStorage.getItem('mangNhanVien');
        mangNhanVien = JSON.parse(stringMangNhanVien);
        tableNhanVien(mangNhanVien);
    }


}
layStorage();