let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


/* Chuyển danh sách đối tượng thành HTML
input: danh sách sản phẩm
output: HTML  */

function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham){
  var HTMLDanhSachSanPham = '<div class="products-preview">Hello proaa </div>';

  return HTMLDanhSachSanPham;
}