class Food {
    constructor(maMon,tenMon,loaiMon,giaMon,khuyenMai,tinhTrang){
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loaiMon = loaiMon;
        this.giaMon= giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
    }
    tinhGiaKhuyenMai(){
        return (this.giaMon*this.khuyenMai)/100;
    }
}

export default Food