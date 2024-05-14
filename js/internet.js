const internets = [
  {
    id: 1,
    name: "HOMET",
    speend: "100Mbps",
    price: "250.000VNĐ/ tháng",
    discountPrice: "165.000VNĐ/ tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 165.000vnđ (Đã bao gồm VAT) - Áp dụng tại 61 Tỉnh (trừ Hà Nội, TP Hồ Chí Minh) - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 2,
    name: "SUN1T",
    speend: "150Mbps",
    price: "300.000VNĐ/ tháng",
    discountPrice: "180.000VNĐ/ tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 180.000vnđ (Đã bao gồm VAT). - Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 3,
    name: "SUN2T",
    speend: "250Mbps",
    price: "350.000VNĐ/ tháng",
    discountPrice: "229.000VNĐ/ tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 165.000vnđ (Đã bao gồm VAT) - Áp dụng tại 61 Tỉnh (trừ Hà Nội, TP Hồ Chí Minh) - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 4,
    name: "SUN3T",
    speend: "Không giới hạn",
    price: "400.000VNĐ/ tháng",
    discountPrice: "279.000VNĐ/ Tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 165.000vnđ (Đã bao gồm VAT) - Áp dụng tại 61 Tỉnh (trừ Hà Nội, TP Hồ Chí Minh) - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 5,
    name: "STAR1T",
    speend: "150Mbps",
    price: "280.000VNĐ/ tháng",
    discountPrice: "210.000VNĐ/ Tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 165.000vnđ (Đã bao gồm VAT) - Áp dụng tại 61 Tỉnh (trừ Hà Nội, TP Hồ Chí Minh) - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 6,
    name: "STAR2T",
    speend: "250Mbps",
    price: "300.000VNĐ/ tháng",
    discountPrice: "245.000VNĐ/ Tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 165.000vnđ (Đã bao gồm VAT) - Áp dụng tại 61 Tỉnh (trừ Hà Nội, TP Hồ Chí Minh) - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 7,
    name: "STAR3T",
    speend: "Không giới hạn",
    price: "400.000VNĐ/ tháng",
    discountPrice: "299.000VNĐ/ Tháng",
    desc: "Ưu điểm của dịch vụ do Viettel cung cấp: - Trang bị miễn phí Modem WiFi 2 băng tần trong suốt thời gian sử dụng. - Khuyến mại đóng cước trước: tặng 1 - 2 tháng khi đóng cước trước. - Giá cước hàng tháng: 165.000vnđ (Đã bao gồm VAT) - Áp dụng tại 61 Tỉnh (trừ Hà Nội, TP Hồ Chí Minh) - Phí lắp đặt: 300.000 đồng",
  },
  {
    id: 8,
    name: "F90BASIC",
    speend: "90Mbps + 1Mbps Quốc tế + IP Wan",
    price: "660.000VNĐ/ tháng",
    discountPrice: "660.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },
  {
    id: 9,
    name: "F90PLUS",
    speend: "90Mbps + 1Mbps Quốc tế + IP Wan",
    price: "880.000VNĐ/ tháng",
    discountPrice: "880.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },
  {
    id: 10,
    name: "F200N",
    speend: "200Mbps +2Mbps Quốc tế + IP Wan",
    price: "1.100.000VNĐ/ tháng",
    discountPrice: "1.100.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },
  {
    id: 11,
    name: "F200BASIC",
    speend: "200Mbps + 4Mbps Quốc tế + 1 IP Wan",
    price: "2.200.000VNĐ/ tháng",
    discountPrice: "2.200.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 12,
    name: "F200PLUS",
    speend: "200Mbps + 6Mbps Quốc tế + 1 IP Wan",
    price: "4.400.000VNĐ/ tháng",
    discountPrice: "4.400.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 13,
    name: "F300N",
    speend: "300Mbps + 8Mbps Quốc tế +1 IP Wan +Block 4 IP Lan",
    price: "6.050.000VNĐ/ tháng",
    discountPrice: "6.050.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 14,
    name: "F300BASIC",
    speend: "500Mbps + 20Mbps Quốc tế +1 IP Wan+Block 8 IP Lan",
    price: "7.700.000VNĐ/ Tháng",
    discountPrice: "7.700.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 15,
    name: "F300PLUS",
    speend: "300Mbps + 15Mbps Quốc tế +1 IP Wan+Block 8 IP Lan",
    price: "9.900.000VNĐ/ tháng",
    discountPrice: "9.900.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 17,
    name: "F500BASIC",
    speend: "500Mbps + 20Mbps Quốc tế +1 IP Wan+Block 8 IP Lan",
    price: "13.200.000VNĐ/ tháng",
    discountPrice: "13.200.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 18,
    name: "F500PLUS",
    speend: "500Mbps + 25Mbps Quốc tế +1 IP Wan+Block 8 IP Lan",
    price: "17.600.000VNĐ/ tháng",
    discountPrice: "17.600.000VNĐ/ Tháng",
    desc: "* Trang bị miễn phí Modem WIFI trong suốt thời gian sử dụng - Tặng 1 tháng khi đóng trước cước 6 tháng. - Tặng 3 tháng khi đóng trước cước 12 tháng. - Tặng 5 tháng khi đóng trước cước 18 tháng.",
  },

  {
    id: 19,
    name: "PRO300 ( wifi 6)",
    speend: "300Mbps",
    price: "490.000VNĐ/ tháng",
    discountPrice: "350.000VNĐ/ Tháng",
    desc: "Chính sách ưu đãi Hỗ trợ  miểnphí hòa mạng  Tặng thêm 1 tháng sử dụng khi đóng trước 6 tháng cước Tặng thêm 3 tháng sử dụng khi đóng trước 12 tháng cước Tặng thêm 4 tháng sử dụng khi đóng trước 18 tháng cước Tặng thêm 6 tháng sử dụng khi đóng trước 24 tháng cước  Trang bị modem 2 băng tầng và modem wifi 6 kết nối cùng lúc hơn 80 user",
  },

  {
    id: 20,
    name: "PRO600 (Wifi 6)",
    speend: "600Mpbs",
    price: "700.000VNĐ/ tháng",
    discountPrice: "500.000VNĐ/ tháng",
    desc: "Chính sách ưu đãi • Hỗ trợ miểnphí hòa mạng • Tặng thêm 1 tháng sử dụng khi đóng trước 6 tháng cước • Tặng thêm 3 tháng sử dụng khi đóng trước 12 tháng cước • Tặng thêm 4 tháng sử dụng khi đóng trước 18 tháng cước • Tặng thêm 6 tháng sử dụng khi đóng trước 24 tháng cước • Trang bị modem 2 băng tầng và modem wifi 6 kết nối cùng lúc hơn 80 user • Cam kết băng thông quốc tế 2Mbps",
  },

  {
    id: 21,
    name: "PRO1000 (Wifi 6)",
    speend: "1000Mpbs",
    price: "980.000VNĐ/ tháng",
    discountPrice: "700.000VNĐ/ Tháng",
    desc: "Hỗ trợ miểnphí hòa mạng Tặng thêm 1 tháng sử dụng khi đóng trước 6 tháng cước Tặng thêm 3 tháng sử dụng khi đóng trước 12 tháng cước Tặng thêm 4 tháng sử dụng khi đóng trước 18 tháng cước Tặng thêm 6 tháng sử dụng khi đóng trước 24 tháng cước Trang bị modem 2 băng tầng và modem wifi 6 kết nối cùng lúc hơn 80 user Cam kết băng thông quốc tế 10Mbps",
  },

  {
    id: 22,
    name: "MESHPRO300 ( Wifi 6)",
    speend: "300Mpbs",
    price: "630.000VNĐ/ tháng",
    discountPrice: "450.000VNĐ/ Tháng",
    desc: "Chính sách ưu đãi Hỗ trợ miển phí hòa mạng Tặng thêm 1 tháng sử dụng khi đóng trước 6 tháng cước Tặng thêm 3 tháng sử dụng khi đóng trước 12 tháng cước Tặng thêm 4 tháng sử dụng khi đóng trước 18 tháng cước Tặng thêm 6 tháng sử dụng khi đóng trước 24 tháng cước Trang bị modem 2 băng tầng và modem wifi 6 kết nối cùng lúc hơn 80 userCam kết băng thông quốc tế 1Mbps Thiết bị 01AP MESH WIFI6",
  },

  {
    id: 23,
    name: "MESHPRO600 (wifi 6)",
    speend: "600Mpbs",
    price: "910.000VNĐ/ tháng",
    discountPrice: "650.000VNĐ/ Tháng",
    desc: "Chính sách ưu đãi Hỗ trợ miển phí hòa mạng Tặng thêm 1 tháng sử dụng khi đóng trước 6 tháng cước Tặng thêm 3 tháng sử dụng khi đóng trước 12 tháng cước Tặng thêm 4 tháng sử dụng khi đóng trước 18 tháng cước Tặng thêm 6 tháng sử dụng khi đóng trước 24 tháng cước Trang bị modem 2 băng tầng và modem wifi 6 kết nối cùng lúc hơn 80 user Cam kết băng thông quốc tế 2Mbps Thêm 2 thiết bị 02AP MESH WIFI6",
  },

  {
    id: 24,
    name: "MESHPRO1000 (wifi 6)",
    speend: "1000Mbps",
    price: "1.232.000VNĐ/ tháng",
    discountPrice: "880.000VNĐ/ Tháng",
    desc: "Chính sách ưu đãi Hỗ trợ miểnphí hòa mạng Tặng thêm 1 tháng sử dụng khi đóng trước 6 tháng cước Tặng thêm 3 tháng sử dụng khi đóng trước 12 tháng cước Tặng thêm 4 tháng sử dụng khi đóng trước 18 tháng cước Tặng thêm 6 tháng sử dụng khi đóng trước 24 tháng cước Trang bị modem 2 băng tầng và modem wifi 6 kết nối cùng lúc hơn 80 user Cam kết băng thông quốc tế 10Mbps Thêm 2 thiết bị 02AP MESH WIFI6",
  },
];

let currentIndex = 0;
const itemsPerPage = 6;

function renderInternet() {
  const internetItems = document.getElementById("internet-items");

  const itemsToRender = internets.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  let initialDelay = 300; // Initial delay set to 300ms

  itemsToRender.forEach((item, index) => {
    const internetItem = document.createElement("div");
    internetItem.classList.add(
      "col-12",
      "col-md-6",
      "col-lg-6",
      "col-xl-4",
      "pt-3",
      "pt-md-4"
    );

    const delay = initialDelay + index * 100; // delay 50ms

    internetItem.innerHTML = `
    <div class="internet-item wow fadeInUp" 
        data-wow-delay="${delay}ms"
        onclick="openModalInternetDetail(${item.id} , 'internet')"
    >
    <div>
    <div class="internet-text-image">
    <div class="thumb-internet">
    <img src="/img/Wireless.png" style="height: 32px; width: 32px; object-fit: contain;" alt="">
    </div>
    <img src="/img/img-supernet.svg" width="100%" alt="">
    <span>${item.name}</span>
    </div>
    <div>
        <div class="px-3 pt-3">
            <div class="fs-6">Tốc độ ${item.speend}</div>
            <div>
                <div class="fs-3 fw-bold text-danger">${item.discountPrice}</div>
                <div class="text-decoration-line-through text-body-tertiary fst-italic">${item.price}</div>
            </div>
        </div>
        <hr />
        <div class="px-3 internet-item-desc">
        ${item.desc}
        </div>
        </div>
        </div>
        
        <div>
        <hr />
        <div class="d-flex flex-column flex-lg-row mb-3 px-3 gap-3">
        <button type="button"
        class="btn btn-outline-secondary w-full">Chi tiết gói cước</button>
        <button 
        onclick="openModalInternetRegister(${index})"
         type="button" class="btn btn-primary w-full">
         Đăng ký</button>
        </div>
        </div>
    </div>`;

    internetItems.appendChild(internetItem);
  });
}

function loadMoreInternet() {
  const loadMoreBtn = document.getElementById("load-more-btn");

  loadMoreBtn.addEventListener("click", function () {
    currentIndex += itemsPerPage;
    renderInternet();

    // Check if there are more items to load
    if (currentIndex >= internets.length) {
      loadMoreBtn.disabled = true; // Disable the button when there are no more items
    }
  });
}

function openModalInternetDetail(id, type) {
  const internet = internets.find((i) => i.id === id);

  $("#internetModal").modal("show");

  const modalBody = document.getElementById("internet-detail-modal");
  modalBody.innerHTML = `
 <div class="internet-item disable-hover h-auto">
                                    <div>
                                        <div class="internet-text-image">
                                            <div class="thumb-internet">
                                                <img src="/img/Wireless.png"
                                                    style="height: 32px; width: 32px; object-fit: contain;" alt="">
                                            </div>
                                            <img src="/img/img-supernet.svg" width="100%" alt="">
                                            <span>${internet.name}</span>
                                        </div>
                                        <div>
                                            <div class="px-3 pt-3">
                                                <div class="fs-6">Tốc độ ${internet.speend}</div>
                                                <div>
                                                    <div class="fs-3 fw-bold text-danger">${internet.discountPrice}</div>
                                                    <div
                                                        class="text-decoration-line-through text-body-tertiary fst-italic">
                                                        ${internet.price}</div>
                                                </div>
                                            </div>
                                            <hr />
                                            <p class="px-3 internet-item-desc">
                                                ${internet.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
 
 `;
}

function openModalInternetRegister(index) {
  event.stopPropagation();

  window.open("https://zalo.me/0965350404");

  //   const internet = internets[index];

  //   $("#registerInternetModal").modal("show");

  //   const modalBody = document.getElementById("register-internet-modal");
  //   modalBody.innerHTML = `
  //   <div class="register-internet-box-price">
  //   <div class="">${internet.name}</div>
  //   <div class="fs-3 fw-bold text-danger">${internet.discountPrice}</div>
  //   </div>

  //   <div
  //   class="mb-4"
  //   >
  // <div class="d-flex gap-3 mb-3">
  // <input type="text" class="form-control" placeholder="Họ và tên" aria-label="Username" aria-describedby="basic-addon1">

  // <input type="text" class="form-control" placeholder="Số điện thoại" aria-label="phone" aria-describedby="basic-addon1">

  // </div>

  // <input type="text" class="form-control" placeholder="Địa chỉ" aria-label="address" aria-describedby="basic-addon1">
  // </div>

  // <button data-bs-dismiss="modal" class="btn btn-primary w-full">Đăng ký</button>
  //   `;
}

document.addEventListener("DOMContentLoaded", loadMoreInternet);
document.addEventListener("DOMContentLoaded", renderInternet);
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("#navbarLinks .nav-link");
  const sections = document.querySelectorAll(".main-section");

  // IntersectionObserver options
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Intersection ratio threshold
  };

  const currentHash = ["internet", "tivi_360", "camera"];

  // Callback function for the IntersectionObserver
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the index of the intersecting section
        const index = [...sections].indexOf(entry.target);

        if (index !== -1) {
          // Remove "nav-actived" class from all links
          navbarLinks.forEach((link) => {
            link.classList.remove("nav-actived");
          });
          // Add "nav-actived" class to corresponding link
          navbarLinks[index].classList.add("nav-actived");

          // Update the URL hash
          const hash = `#${currentHash[index]}`;
          history.replaceState(null, null, hash);
        }
      }
    });
  }

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Add click event listener to navigation links
  navbarLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      // Remove "nav-actived" class from all links
      navbarLinks.forEach(function (link) {
        link.classList.remove("nav-actived");
      });

      // Add "nav-actived" class to the clicked link
      navLink.classList.add("nav-actived");
    });
  });
});
