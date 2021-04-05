import DanhSachMonAn from "../../models/v3/FoodList3.js";
import Food from "../../models/v3/Food3.js";


document.getElementById("btnThemMon").addEventListener("click", themMon);
document.getElementById("tbodyFood").addEventListener("click", delagation);
document.getElementById("btnCapNhat").addEventListener("click", capNhanMon);
document.getElementById("selLoai").addEventListener("change",showMon);

let danhSachMonAn = new DanhSachMonAn();

function themMon() {
    let maMon = document.getElementById("foodID").value;
    let tenMon = document.getElementById("tenMon").value;
    let loaiMon = document.getElementById("loai").value;
    let giaMon = +document.getElementById("giaMon").value;
    let khuyenMai = +document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;

    let food = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);

    danhSachMonAn.themMonAn(food);

    hienThiMon(danhSachMonAn.dsma);

    resetForm();
}


function hienThiMon(dsma) {
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
            <td>
            <button class="btn btn-success" data-action="update" 
            data-target="#myModal" data-toggle="modal" data-maMon="${food.maMon}">Cập Nhật</button>
            <button class="btn btn-success" data-action="delete" data-maMon="${food.maMon}">Xóa</button>
            </td>
        </tr>
        `
    }
    tbody.innerHTML = html;
}


function delagation(event) {
    let target = event.target;
    let action = target.getAttribute("data-action");
    let maMon = target.getAttribute("data-maMon");

    if (action === "delete") {
        danhSachMonAn.xoaMonAn(maMon);
    } else {
        let food = danhSachMonAn.layThongTinMonAn(maMon);

        document.getElementById("foodID").value = food.maMon;
        document.getElementById("tenMon").value = food.tenMon;
        document.getElementById("loai").value = food.loaiMon;
        document.getElementById("giaMon").value = food.giaMon;
        document.getElementById("khuyenMai").value = food.khuyenMai;
        document.getElementById("tinhTrang").value = food.tinhTrang;

        document.getElementById("foodID").setAttribute("disabled", true);
        $("#exampleModal").modal("show");
    }
    hienThiMon(danhSachMonAn.dsma);
}


function capNhanMon(food) {
    let maMon = document.getElementById("foodID").value;
    let tenMon = document.getElementById("tenMon").value;
    let loaiMon = document.getElementById("loai").value;
    let giaMon = +document.getElementById("giaMon").value;
    let khuyenMai = +document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;

    let newFood = new Food(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);

    danhSachMonAn.capNhat(newFood);

    hienThiMon(danhSachMonAn.dsma);
    resetForm();
}


function resetForm() {
    document.getElementById("foodID").value = "";
    document.getElementById("tenMon").value = "";
    document.getElementById("loai").value = "";
    document.getElementById("giaMon").value = "";
    document.getElementById("khuyenMai").value = "";
    document.getElementById("tinhTrang").value = "";

    document.getElementById("foodID").removeAttribute("disabled");
}

function showMon(e) {
    let search = e.target.value;
    let dsma = danhSachMonAn.showMon(search);
    hienThiMon(dsma);
}
