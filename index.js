const changeTab = (tab) => {
  let arrTab = document.getElementsByClassName("chose-tab");
  for (let i = 0; i < arrTab.length; i++) {
    arrTab[i].style.display = "none";
  }

  document.getElementById(tab).style.display = "flex";
};

const scrollToSection = (sectionId) => {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const openModal = () => {
  document.getElementById("body").style.position = "fixed";
  document.getElementById("modal").style.display = "block";
  document.getElementById("menu-list-nav").style.display = "flex";
};

const closeModal = (sectionId) => {
  document.getElementById("body").style.position = "relative";
  document.getElementById("modal").style.display = "none";
  document.getElementById("menu-list-nav").style.display = "none";
  scrollToSection(sectionId);
};

const clearModal = () => {
  document.getElementById("body").style.position = "relative";
  document.getElementById("modal").style.display = "none";
  document.getElementById("menu-list-nav").style.display = "none";
};

var id = 1;
const controlTetinalNext = (length) => {
  document.getElementById(`show-slide-1`).style.animation = `slide1 1.5s infinite`
  document.getElementById(`show-slide-1`).style.display = 'none'
  document.getElementById(`show-slide-2`).style.display = 'flex'
  document.getElementById(`show-slide-2`).style.animation = `slide2 1.5s infinite`


}

const controlTetinalPre = (length) => {
  document.getElementById(`show-slide-1`).style.animation = `slide1 1.5s reverse infinite`
  document.getElementById(`show-slide-1`).style.display = 'flex'
  document.getElementById(`show-slide-2`).style.display = 'none'
  document.getElementById(`show-slide-2`).style.animation = `slide2 1.5s reverse infinite`
}
var idFeature = 0
const controlFeaturesPre = () => {
  idFeature = idFeature - 1;
  if (idFeature < 0) {
    idFeature = 0
  }
  let tempSlides = document.getElementsByClassName('features-box')

  for (let i = 0; i < tempSlides.length; i++) {
    if (i < idFeature || i >= idFeature + 3) {
      tempSlides[i].style.display = 'none'
    }
    else {
      tempSlides[i].style.display = 'flex'
    }
  }
}

const controlFeaturesNext = () => {
  idFeature = idFeature + 1;
  let tempSlides = document.getElementsByClassName('features-box')
  if (idFeature >= tempSlides.length - 3) {
    idFeature = tempSlides.length - 3
  }

  for (let i = 0; i < tempSlides.length; i++) {
    if (i < idFeature || i >= idFeature + 3) {
      tempSlides[i].style.display = 'none'
    }
    else {
      tempSlides[i].style.display = 'flex'
    }
  }
}
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('header1');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});



var currentPage = 1;
var totalPages = 2; // Số lượng trang
var intervalId;

function showPage(pageNumber) {
  // Ẩn tất cả các trang
  var slides = document.querySelectorAll('.tetinal-box');
  slides.forEach(function (slide) {
    slide.classList.remove('active');
  });

  // Hiển thị trang được chọn
  var selectedSlide = document.getElementById('show-slide-' + pageNumber);
  if (selectedSlide) {
    selectedSlide.classList.add('active');
  }

  // Cập nhật trang hiện tại
  currentPage = pageNumber;
}

function autoRotate() {
  intervalId = setInterval(function () {
    nextPage(); // Sử dụng nextPage() để tự động chuyển trang
  }, 3000); // 3 giây
}

function nextPage() {
  currentPage = (currentPage % totalPages) + 1;
  showPage(currentPage);
  updateSliderTransform();
}

function prevPage() {
  currentPage = (currentPage - 2 + totalPages) % totalPages + 1;
  showPage(currentPage);
  updateSliderTransform();
}

function updateSliderTransform() {
  document.querySelector('.tetinal-container').style.transform = 'translateX(-' + (currentPage - 1) * 100 + '%)';
}

autoRotate(); // Bắt đầu tự động chuyển trang
