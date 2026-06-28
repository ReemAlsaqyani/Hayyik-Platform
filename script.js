document.addEventListener("DOMContentLoaded", () => {
  // 1. التحكم في القائمة المتجاوبة للهواتف (Navbar Mobile Toggle)
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.querySelector(".nav-links");
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      const expanded = mobileMenuToggle.getAttribute("aria-expanded") === "true" || false;
      mobileMenuToggle.setAttribute("aria-expanded", !expanded);
      navLinks.classList.toggle("active");
    });
  }

  // 2. منطق صفحة المقارنة التفاعلية والربط بالداتا
  const select1 = document.getElementById("firstNeighborhood");
  const select2 = document.getElementById("secondNeighborhood");

  if (select1 && select2) {
    const updateComparison = () => {
      const id1 = select1.value;
      const id2 = select2.value;

      const data1 = neighborhoodsData[id1];
      const data2 = neighborhoodsData[id2];

      // تحديث عناوين الجداول بأشماء الأحياء المختارة
      const n1Title = data1 ? data1.name : "الحي الأول";
      const n2Title = data2 ? data2.name : "الحي الثاني";

      document.getElementById("firstNeighborhoodHeader").innerText = n1Title;
      document.getElementById("secondNeighborhoodHeader").innerText = n2Title;
      document.getElementById("facilitiesFirstHeader").innerText = n1Title;
      document.getElementById("facilitiesSecondHeader").innerText = n2Title;
      document.getElementById("metricsFirstHeader").innerText = n1Title;
      document.getElementById("metricsSecondHeader").innerText = n2Title;
      document.getElementById("servicesFirstHeader").innerText = n1Title;
      document.getElementById("servicesSecondHeader").innerText = n2Title;

      // 1. بناء جدول المعلومات العامة
      const generalBody = document.getElementById("generalInfoBody");
      generalBody.innerHTML = "";
      if (data1 || data2) {
        const labels = ["عدد السكان", "المساحة", "سنة التأسيس", "التقييم العام", "تصنيف النجوم"];
        labels.forEach((label, index) => {
          const val1 = data1 ? data1.general[index].value : "-";
          const val2 = data2 ? data2.general[index].value : "-";
          generalBody.innerHTML += `<tr><td>${label}</td><td>${val1}</td><td>${val2}</td></tr>`;
        });
      }

      // 2. بناء جدول المرافق
      const facilitiesBody = document.getElementById("facilitiesBody");
      facilitiesBody.innerHTML = "";
      if (data1 || data2) {
        
        const types = ["المطاعم", "المساجد", "المدارس", "المستشفيات", "الحدائق", "المجمعات", "النوادي", "الصيدليات", "محطات القطار"];
        types.forEach((type, index) => {
          const count1 = data1 ? data1.facilities[index].count : "-";
          const count2 = data2 ? data2.facilities[index].count : "-";
          facilitiesBody.innerHTML += `<tr><td>${type}</td><td>${count1}</td><td>${count2}</td></tr>`;
        });
      }

      
      const metricsBody = document.getElementById("metricsBody");
      metricsBody.innerHTML = "";
      if (data1 || data2) {
        const metricsNames = ["السلامة", "التعليم", "الصحة", "المرافق", "المواصلات", "النظافة"];
        metricsNames.forEach((name, index) => {
          const p1 = data1 ? data1.metrics[index].percentage : null;
          const p2 = data2 ? data2.metrics[index].percentage : null;

          const cell1 = p1 ? `<div class="progress-cell"><span class="progress-value">${p1}%</span><div class="progress-bar"><div class="progress" style="width: ${p1}%"></div></div></div>` : "-";
          const cell2 = p2 ? `<div class="progress-cell"><span class="progress-value">${p2}%</span><div class="progress-bar"><div class="progress" style="width: ${p2}%"></div></div></div>` : "-";

          metricsBody.innerHTML += `<tr><td>${name}</td><td>${cell1}</td><td>${cell2}</td></tr>`;
        });
      }

      // 4. بناء جدول الخدمات المتاحة
      const servicesBody = document.getElementById("servicesBody");
      servicesBody.innerHTML = "";
      if (data1 || data2) {
        const s1 = data1 && data1.services[0] ? `<div class="service-card"><h3>${data1.services[0].title}</h3><p><i class="fas fa-clock"></i> ${data1.services[0].time}</p><p><i class="fas fa-phone"></i> ${data1.services[0].phone}</p><span class="stat-value">الجودة: ${data1.services[0].quality}%</span></div>` : "-";
        const s2 = data2 && data2.services[0] ? `<div class="service-card"><h3>${data2.services[0].title}</h3><p><i class="fas fa-clock"></i> ${data2.services[0].time}</p><p><i class="fas fa-phone"></i> ${data2.services[0].phone}</p><span class="stat-value">الجودة: ${data2.services[0].quality}%</span></div>` : "-";
        servicesBody.innerHTML += `<tr><td>البطاقات الخدمية</td><td>${s1}</td><td>${s2}</td></tr>`;
      }
    };

    select1.addEventListener("change", updateComparison);
    select2.addEventListener("change", updateComparison);
  }
});