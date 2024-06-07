let mang = [1, 2, 3, 4, 5];
function thayDoiGiaTri() {
    //input
    let giaTriGoc = +(document.getElementById('giaTriGoc').value);
    let giaTriMoi = +(document.getElementById('giaTriMoi').value);
    //process
    // Kiểm tra xem giá trị gốc có trong mảng không
    let index = mang.indexOf(giaTriGoc);
    if (index === -1) {
        document.getElementById('thongBao').innerText = "Không tìm thấy giá trị gốc trong mảng.";
        return;
    }
    // Thay đổi giá trị và hiển thị thông báo thành công
    mang[index] = giaTriMoi;
    document.getElementById('thongBao').innerText = "Đã thay đổi giá trị thành công.";
}