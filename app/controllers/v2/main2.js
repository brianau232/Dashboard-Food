import Food from "../../models/v2/Food2.js"
import DanhSachMonAn from "../../models/v2/Foodlist2.js";

document.getElementById("btnThemMon").addEventListener("click", addFood);

let danhSachMonAn = new DanhSachMonAn();

function addFood() {
    const maMon = document.getElementById("foodID").value;
    const tenMon = document.getElementById("tenMon").value;
    const loaiMon = document.getElementById("loai").value;
    const giaMon = +document.getElementById("giaMon").value;
    const khuyenMai = +document.getElementById("khuyenMai").value;
    const tinhTrang = document.getElementById("tinhTrang").value;

    const food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);



    danhSachMonAn.themMonAn(food);

    hienThiMonAn(danhSachMonAn.dsma);

    reset();
}



function hienThiMonAn(dsma) {
    let tbody = document.getElementById("tbodyFood");
    let html = "";
    for (let i = 0; i < dsma.length; i++) {
        let food = dsma[i];
        html += `
        <tr>
            <td>${food.maMon}</td>
            <td>${food.tenMon}</td>
            <td>${food.loaiMon}</td>
            <td>${food.giaMon}</td>
            <td>${food.khuyenMai}</td>
            <td>${food.tinhGiaKhuyenMai()}</td>
            <td>${food.tinhTrang}</td>
        </tr>
        `
    }
    tbody.innerHTML = html;
}


function reset() {
    document.getElementById("foodID").value="";
    document.getElementById("tenMon").value="";
    document.getElementById("loai").value="";
    document.getElementById("giaMon").value="";
    document.getElementById("khuyenMai").value="";
    document.getElementById("tinhTrang").value="";
}