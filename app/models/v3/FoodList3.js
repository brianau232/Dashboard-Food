 function DanhSachMonAn() {
    this.dsma=[];
    this.themMonAn = function(food){
        this.dsma.push(food);
    };
}

DanhSachMonAn.prototype.xoaMonAn = function(maMon) {
    let index = -1;
    for(let i =0;i<this.dsma.length;i++){
        if(this.dsma[i].maMon===maMon){
            index = i;
            break;
        }
    }
    if(index!== -1){
        this.dsma.splice(index,1);
}
}

DanhSachMonAn.prototype.layThongTinMonAn = function(maMon){
    let result = null;
    for(let i =0;i<this.dsma.length;i++){
        if(this.dsma[i].maMon===maMon){
            result = this.dsma[i];
            break;
        }
    }
    return result;
}

DanhSachMonAn.prototype.capNhat = function(food){
    let index = -1;
    for(let i = 0; i<this.dsma.length;i++){
        if(this.dsma[i].maMon===food.maMon){
            index = i;
            break;
        }
    }
    if(index!==-1){
        this.dsma[index]=food;
    }
}

DanhSachMonAn.prototype.showMon = function(search){
    let result = [];
    if(search !== "all"){
        for(let i =0; i<this.dsma.length; i++){
            let food = this.dsma[i];
            if(food.loaiMon===search){
                result.push(food);
            }
        }
        return result;
    }
    return this.dsma;
}
export default DanhSachMonAn