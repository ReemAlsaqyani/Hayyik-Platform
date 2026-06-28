// بيانات الأحياء الموحدة لمنصة حيّك
const neighborhoodsData = {
  "1": {
    name: "حي الشفا",
    url: "shifa.html",
    general: [
      { label: "عدد السكان", value: "24,500 نسمة" },
      { label: "المساحة", value: "8.5 كم²" },
      { label: "سنة التأسيس", value: "2005" },
      { label: "التقييم العام", value: "92%" },
      { label: "تصنيف النجوم", value: "4.8 من 5" }
    ],
    facilities: [
      { type: "المطاعم", count: 34 },
      { type: "المساجد", count: 18 },
      { type: "المدارس", count: 12 },
      { type: "المستشفيات", count: 4 },
      { type: "الحدائق", count: 7 },
      { type: "المجمعات", count: 3 },
      { type: "النوادي", count: 9 },
      { type: "الصيدليات", count: 15 }, 
      { type: "محطات القطار", count: 1 }
    ],
    metrics: [
      { name: "السلامة", percentage: 94 },
      { name: "التعليم", percentage: 89 },
      { name: "الصحة", percentage: 93 },
      { name: "المرافق", percentage: 88 },
      { name: "المواصلات", percentage: 85 },
      { name: "النظافة", percentage: 91 }
    ],
    services: [
      { title: "الدعم الأسري", time: "يومي 8ص-8م", phone: "0112345001", quality: 95 }
    ]
  },
  "2": {
    name: "حي الرمال",
    url: "rimal.html",
    general: [
      { label: "عدد السكان", value: "31,800 نسمة" },
      { label: "المساحة", value: "12.2 كم²" },
      { label: "سنة التأسيس", value: "2010" },
      { label: "التقييم العام", value: "88%" },
      { label: "تصنيف النجوم", value: "4.5 من 5" }
    ],
    facilities: [
      { type: "المطاعم", count: 42 },
      { type: "المساجد", count: 22 },
      { type: "المدارس", count: 15 },
      { type: "المستشفيات", count: 3 },
      { type: "الحدائق", count: 5 },
      { type: "المجمعات", count: 5 },
      { type: "النوادي", count: 12 },
      { type: "الصيدليات", count: 20 },
      { type: "محطات القطار", count: 1 } 
    ],
    metrics: [
      { name: "السلامة", percentage: 91 },
      { name: "التعليم", percentage: 85 },
      { name: "الصحة", percentage: 87 },
      { name: "المرافق", percentage: 92 },
      { name: "المواصلات", percentage: 89 },
      { name: "النظافة", percentage: 88 }
    ],
    services: [
      { title: "الأنشطة الشبابية", time: "يومي 4م-10م", phone: "0112345100", quality: 85 }
    ]
  },
  "3": {
    name: "حي الياسمين",
    url: "yasmin.html",
    general: [
      { label: "عدد السكان", value: "18,500 نسمة" },
      { label: "المساحة", value: "6.8 كم²" },
      { label: "سنة التأسيس", value: "2008" },
      { label: "التقييم العام", value: "90%" },
      { label: "تصنيف النجوم", value: "4.7 من 5" }
    ],
    facilities: [
      { type: "المطاعم", count: 28 },
      { type: "المساجد", count: 15 },
      { type: "المدارس", count: 8 },
      { type: "المستشفيات", count: 2 },
      { type: "الحدائق", count: 4 },
      { type: "المجمعات", count: 2 },
      { type: "النوادي", count: 6 },
      { type: "الصيدليات", count: 12 },
      { type: "محطات القطار", count: 2 }  
    ],
    metrics: [
      { name: "السلامة", percentage: 93 },
      { name: "التعليم", percentage: 90 },
      { name: "الصحة", percentage: 91 },
      { name: "المرافق", percentage: 89 },
      { name: "المواصلات", percentage: 84 },
      { name: "النظافة", percentage: 92 }
    ],
    services: [
      { title: "مركز المسنين", time: "يومي 8ص-4م", phone: "0112345200", quality: 93 }
    ]
  },
  "4": {
    name: "حي النرجس",
    url: "narjs.html",
    general: [
      { label: "عدد السكان", value: "27,400 نسمة" },
      { label: "المساحة", value: "9.3 كم²" },
      { label: "سنة التأسيس", value: "2012" },
      { label: "التقييم العام", value: "85%" },
      { label: "تصنيف النجوم", value: "4.3 من 5" }
    ],
    facilities: [
      { type: "المطاعم", count: 38 },
      { type: "المساجد", count: 20 },
      { type: "المدارس", count: 11 },
      { type: "المستشفيات", count: 3 },
      { type: "الحدائق", count: 6 },
      { type: "المجمعات", count: 4 },
      { type: "النوادي", count: 8 },
      { type: "الصيدليات", count: 18 },
      { type: "محطات القطار", count: 1 } 
    ],
    metrics: [
      { name: "السلامة", percentage: 89 },
      { name: "التعليم", percentage: 84 },
      { name: "الصحة", percentage: 86 },
      { name: "المرافق", percentage: 91 },
      { name: "المواصلات", percentage: 82 },
      { name: "النظافة", percentage: 85 }
    ],
    services: [
      { title: "برامج الشباب", time: "الخميس-الجمعة 5م-10م", phone: "0112345300", quality: 87 }
    ]
  }
};