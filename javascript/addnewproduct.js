
var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
if(danhSachSanPham  == null)
    danhSachSanPham= new Array();

console.log(danhSachSanPham);


function onClickTaoSanPham() {
    console.log('gọi hàm onClickTaoSanPham()');
/* 1. Truy cập các node để lấy được dữ liệu */
    var nodeHinhAnh = document.getElementById('hinhAnh');
    var hinhAnh = nodeHinhAnh.value;
    console.log('Hình ảnh là: ' + hinhAnh); 
    nodeHinhAnh.value = '';

    var nodeTen = document.getElementById('ten'); 
    ten = nodeTen.value;
    console.log('Tên là: ' + ten);
    nodeTen.value = '';

    var nodeGiaGoc = document.getElementById('giaGoc'); 
    var giaGoc = parseInt(nodeGiaGoc.value); 
    console.log('Giá gốc sản phẩm là: ' + giaGoc); 
    nodeGiaGoc.value = '';

    var nodechiTiet = document.getElementById('chiTiet');
    var chiTiet = nodechiTiet.value;
    console.log('Chi tiết là: ' + chiTiet);
    nodechiTiet.value = '';
    


    /* 2. Tạo ra đối tượng từ các dữ liệu người dùng nhập vào */
    function TaoDoiTuongSanPham (hinhAnh, ten, giaGoc, chiTiet) {
        var sanPham = new Object();
   /* bước 1: gắn các thuộc tính cho đối tượng */
       sanPham.hinhAnh = hinhAnh;
       sanPham.ten = ten;
       sanPham.giaGoc = giaGoc;
       sanPham.chiTiet = chiTiet;
     
       /* Bước 2: viết phương thức cho đối tượng */
       sanPham.tojson = function () {
        var json = JSON.stringify(this);
        return json;
       }
       /* Từ json chuyển thành một đối tượng đầy đủ các phương thức
        input: json
        output: đối tượng đầy đủ
       */
    
       sanPham.fromJSON =function (json) {
        var doiTuongDayDu = new Object();
        /* Bước 1: Chuyển từ json thành đối tượng */
        var doiTuong = JSON.parse(json);
        /* Bước 2: Chuyển đối tượng thành đối tượng đầy đủ phương thức */
       var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhanh, doiTuong.ten, 
        doiTuong.giaGoc, doiTuong.chiTiet); 
       return doiTuongDayDu;
       }
    return sanPham;
    }    

    var sanPham = TaoDoiTuongSanPham(hinhAnh, ten, giaGoc, chiTiet); 
    console.log(sanPham);
    console.log('Tên của sản phẩm nhập vào là: ' + sanPham.ten
    + 'giá bán của sản phẩm là: '+ sanPham.giaGoc);

    /* 3. Đưa sản phẩm vào danh sách */ 
    danhSachSanPham.push(sanPham);
    console.log('Danh sách các sản phẩm là: ');
    console.log(danhSachSanPham);

    /* 4. Lưu trũ danh sách sp xuống local storage */ 
    var jsonDanhSachSanPham = JSON.stringify(danhSachSanPham);
    localStorage.setItem('danhSachSanPham', jsonDanhSachSanPham);
}

 /* Bước 1: lấy danh sách sản phẩm dưới localstorage */
var jsonDanhSachSanPham = localstorage.getItem('danhSachSanPham'); 
var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
console.log(danhSachSanPham);
/* Bước 2: Chuyển danh sách đối tượng sản phẩm sang đoạn HTML */ 
var HTML = chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham);
/* Bước 3: Gắn đoạn HTML đó vào section products */
var nodeProducts = document.getElementById('products'); 
nodeProducts.innerHTML = nodeProducts;
