function tableNhanVien(arrNhanVien){
    var htmlstring ='';
    for(i=0;i<arrNhanVien.length;i++){
        var nv =arrNhanVien[i];
        htmlstring+=`
        <tr>
            <td>${nv.tknv}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.datepicker}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNhanVien}</td>

            <td>
                 <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tknv}')">Xoá</button>
             </td>
             <td>
                 <button class="btn btn-primary" data-toggle="modal"
                 data-target="#myModal" onclick="chinhSuaNV('${nv.tknv}')">Sửa</button>
             </td>
        </tr>    
        `}
        document.querySelector('#tableDanhSach').innerHTML = htmlstring;
        return htmlstring;
    }
 
function xoaNhanVien(taiKhoanNVClick){
    var indexDel = -1;
    for(i=0;i<mangNhanVien.length;i++){
        if(mangNhanVien[i].tknv === taiKhoanNVClick){
            indexDel = mangNhanVien[i];
            break;
        }
    }
     mangNhanVien.splice(indexDel,1);
     tableNhanVien(mangNhanVien);
}
function chinhSuaNV(taiKhoanNVClick){
    document.querySelector('#tknv').disabled = true;
    document.querySelector('#btnThemNV').disabled = true;
    for(i=0;i<mangNhanVien.length;i++){
        if(mangNhanVien[i].tknv===taiKhoanNVClick){
            document.querySelector('#tknv').value = mangNhanVien[i].tknv;
            document.querySelector('#name').value = mangNhanVien[i].name;
            document.querySelector('#email').value = mangNhanVien[i].email;
            document.querySelector('#datepicker').value = mangNhanVien[i].datepicker;
            document.querySelector('#luongCB').value = mangNhanVien[i].luongCB;
            document.querySelector('#luongCB').value = mangNhanVien[i].luongCB;
            document.querySelector('#gioLam').value = mangNhanVien[i].gioLam;
            break;
        }

    }

}
function xepLoaiNhanVien(gioLam){
    var string ='';
    if(gioLam >=192){
        string ='Xuất Sắc';
    }
    else if (gioLam >=176){
        string = 'Giỏi';
    }
    else if(gioLam >=160){
        string = 'Khá';
    }
    else {
        string = 'Trung Bình';
    }
    return string;
}
