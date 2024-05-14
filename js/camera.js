const cameras = [
  {
    id: 1,
    name: "CAMERA NGOÀI TRỜI (HC3)",
    speend: "Miễn phí giao hàng nội thành Hà Nội và TP.HCM",
    price: "",
    discountPrice: "990.000 đ",
    desc: "• Độ phân giải Full HD 2Mpx (1920 x 1080) <br/> • Hỗ trợ hồng ngoại lên tới khoảng cách 30m <br/>• Tính năng giảm nhiễu số 3D DNR <br/>• Tính năng chống ngược sáng WDR <br/>...",
    img: "/img/cam1.png",
  },
  {
    id: 2,
    name: "Camera trong nhà HC23 (MỚI)",
    speend: "Miễn phí giao hàng nội thành Hà Nội và TP.HCM",
    price: "",
    discountPrice: "690.000 đ",
    desc: "• Độ phân giải Full HD 2Mpx (1920 x 1080) <br/> • Hỗ trợ hồng ngoại lên tới khoảng cách 30m <br/>• Tính năng giảm nhiễu số 3D DNR <br/>• Tính năng chống ngược sáng WDR <br/> ...",
    img: "/img/cam2.png",
  },
];

function renderCamera() {
  const cameraItems = document.getElementById("camera-items");
  let initialDelay = 300; // Initial delay set to 300ms

  cameras.forEach((item, index) => {
    const delay = initialDelay + index * 100; // delay 50ms

    const cameraItem = document.createElement("div");
    cameraItem.classList.add("col-12", "col-md-6", "col-lg-6", "col-xl-4");

    cameraItem.innerHTML = `
    <div class="bg-white internet-item  wow fadeInUp"
    
        data-wow-delay="${delay}ms"
    >
                    <div style="height: 200px; " class="pt-4">
                        <img src=${item.img} alt="" width="100%" height="100%" style="object-fit: contain;">
                    </div>

                    <div class="px-3 pt-2">
                        <div class="fs-5  pb-2" style="font-weight: 600;">
                           ${item.name}
                        </div>

                       <div>${item.desc}</div>

                        <hr />

                        <div class="d-flex flex-row align-items-end">
                            <div class="fs-3 fw-bold text-danger">${item.discountPrice}</div>
                            <div class="text-decoration-line-through mb-1 ms-2 text-body-tertiary fst-italic">${item.price}
                            </div>
                        </div>

                        <div class="d-flex flex-row mb-3 pt-3 gap-3">
                            <button type="button" class="btn btn-outline-secondary w-full">Chi tiết</button>
                            <button type="button" class="btn btn-primary w-full">Mua ngay</button>
                        </div>
                    </div>
                </div>
    `;

    cameraItems.appendChild(cameraItem);
  });
}

document.addEventListener("DOMContentLoaded", renderCamera);
