document.addEventListener("DOMContentLoaded", function () {
  // Loading Screen
  const loadingScreen = document.getElementById("loading-screen");

  // Simulate loading (in real case, this would wait for all assets to load)
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 1500);

  // Notification System
  const notification = document.getElementById("notification");
  const notificationMessage = document.getElementById("notification-message");
  const notificationClose = document.getElementById("notification-close");

  function showNotification(message, duration = 5000) {
    notificationMessage.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, duration);
  }

  notificationClose.addEventListener("click", () => {
    notification.classList.remove("show");
  });

  // Dynamic Services Generation
  const servicesContainer = document.getElementById("services-container");
  const servicesData = [
    {
      icon: "fas fa-file-contract",
      title: "Akta Jual Beli",
      description:
        "Penyusunan dan pengesahan akta jual beli properti dengan prosedur yang transparan.",
    },
    {
      icon: "fas fa-house-damage",
      title: "Balik Nama Sertifikat",
      description:
        "Proses balik nama sertifikat tanah dan bangunan secara cepat dan akurat.",
    },
    {
      icon: "fas fa-handshake",
      title: "Perjanjian Sewa-Menyewa",
      description:
        "Pembuatan perjanjian sewa-menyewa yang mengikat dan melindungi kedua belah pihak.",
    },
    {
      icon: "fas fa-building",
      title: "Pendirian Badan Usaha",
      description:
        "Bantuan dalam pendirian PT, CV, Yayasan, dan badan usaha lainnya.",
    },
    {
      icon: "fas fa-gavel",
      title: "Waris & Hibah",
      description:
        "Pengurusan akta waris dan hibah dengan layanan profesional.",
    },
    {
      icon: "fas fa-search-dollar",
      title: "Perjanjian Lainnya",
      description:
        "Berbagai jenis perjanjian dan dokumen hukum sesuai kebutuhan Anda.",
    },
    {
      icon: "fas fa-key",
      title: "Layanan Proses KPR",
      description:
        "Pendampingan lengkap dalam proses pengajuan dan pengurusan KPR, sehingga lebih mudah dan aman.",
    },
    {
      icon: "fas fa-ruler-combined",
      title: "Layanan Pengukuran",
      description:
        "Bantuan pengukuran tanah atau bangunan secara detail dan akurat untuk keperluan legalitas.",
    },
  ];

  function generateServices() {
    servicesContainer.innerHTML = servicesData
      .map(
        (service) => `
      <div class="service-item">
        <i class="${service.icon}"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `
      )
      .join("");
  }

  // Dynamic Testimonials Generation
  const testimonialsContainer = document.getElementById(
    "testimonials-container"
  );
  const testimonialsData = [
    {
      image: "img/romaditest1.jpg",
      alt: "Penyerahan Sertipikat Tanah",
      title: "Penyerahan Sertipikat Tanah",
      description:
        "Proses serah terima sertipikat tanah yang resmi dan dijamin keabsahan hukumnya.",
      link: "https://www.instagram.com/p/DKM4KyGSxkg/?igsh=MTF5OHBrNzN0ZW1qZw==",
    },
    {
      image: "img/romaditest2.jpg",
      alt: "Proses Roya dan Peralihan Hak Jual Beli",
      title: "Proses Roya dan Peralihan Hak Jual Beli",
      description:
        "Layanan lengkap untuk proses roya dan pengalihan hak tanah melalui jual beli yang aman.",
      link: "https://www.instagram.com/p/DFuxj6DBRg4/?igsh=eXM0azIybDdvd3Bx",
    },
    {
      image: "img/romaditest3.jpg",
      alt: "Proses Penandatanganan Perjanjian Pembagian Hasil Koperasi",
      title: "Proses Penandatanganan Perjanjian Pembagian Hasil Koperasi",
      description:
        "Pendampingan legal dalam pembuatan perjanjian pembagian hasil koperasi yang adil dan transparan.",
      link: "https://www.instagram.com/p/DBWf4s0hR25/?igsh=MTU1bnJ2NXF4MjZjag==",
    },
    {
      image: "img/romaditest4.jpg",
      alt: "Proses Penanda Tanganan Akta Pendirian Perusahaan di Bidang Klinik",
      title:
        "Proses Penanda Tanganan Akta Pendirian Perusahaan di Bidang Klinik",
      description:
        "Proses legal pendirian perusahaan klinik dengan akta yang sah dan sesuai regulasi kesehatan.",
      link: "https://www.instagram.com/p/DBWc_qSB3EW/?igsh=MTFlempxcHU5dTIxOA==",
    },
    {
      image: "img/romaditest5.jpg",
      alt: "Pembuatan Akta Kuasa Pengambilan Sertipikat di BTN Harmoni",
      title: "Pembuatan Akta Kuasa Pengambilan Sertipikat di BTN Harmoni",
      description:
        "Fasilitas pembuatan akta kuasa khusus untuk pengambilan sertipikat di BTN Harmoni.",
      link: "https://www.instagram.com/p/DBfxJ6uhEd-/?igsh=cmhhbGxwNmw5cWVu",
    },
    {
      image: "img/romaditest6.jpg",
      alt: "Penyerahan Sertipikat Elektronik Bagian Hibah",
      title: "Penyerahan Sertipikat Elektronik Bagian Hibah",
      description:
        "Layanan penyerahan sertipikat elektronik untuk proses hibah yang praktis dan terjamin keabsahannya.",
      link: "https://www.instagram.com/p/DC1M52ABUeZ/?igsh=MTF1dnV1bXhwaGI5aQ==",
    },
  ];

  function generateTestimonials() {
    testimonialsContainer.innerHTML = testimonialsData
      .map(
        (testimonial) => `
      <div class="testimonial-card">
        <img class="lazy" data-src="${testimonial.image}" alt="${testimonial.alt}" loading="lazy">
        <h3>${testimonial.title}</h3>
        <p>${testimonial.description}</p>
        <div class="footer-card-decoration"></div>
        <a href="${testimonial.link}" class="read-more" target="_blank">Baca Selengkapnya</a>
      </div>
    `
      )
      .join("");
  }

  // Lazy Loading for Images
  function lazyLoadImages() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("lazy-loaded");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // Form Submission with Notification
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would normally send the data to a server
      // For demo, we'll just show a notification
      showNotification(
        `Terima kasih ${name}, pesan Anda telah terkirim! Kami akan segera menghubungi Anda.`
      );

      // Reset form
      contactForm.reset();
    });
  }

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navList.classList.toggle("active");

    if (navList.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navList.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Typing effect
  function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = "";
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }

  // Apply typing effects
  const nameElement = document.getElementById("typing-name");
  const descriptionElement = document.getElementById("typing-description");

  if (nameElement && descriptionElement) {
    typeWriter(nameElement, "Romadi Fadillah", 50, function () {
      typeWriter(
        descriptionElement,
        "Melayani pengurusan surat surat pertanahan dan legalitas.",
        30
      );
    });
  }

  // Initialize dynamic content
  generateServices();
  generateTestimonials();

  // Initialize lazy loading after content is generated
  setTimeout(lazyLoadImages, 1000);

  // Intersection Observer for sections
  const sections = document.querySelectorAll("section");

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    sectionObserver.observe(section);
  });
});

// Load this after window is fully loaded
window.addEventListener("load", function () {
  // Force hide loading screen if it's still visible
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }

  // Lazy load any remaining images
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("lazy-loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.add("lazy-loaded");
    });
  }

  function setupCounters() {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue("stat1", 0, 500, 2000);
            animateValue("stat2", 0, 350, 2000);
            animateValue("stat3", 0, 15, 2000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsSection);
  }

  // Smooth scroll untuk semua link anchor
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }
});