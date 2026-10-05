/* لیست پروژه‌ها. برای اضافه کردن پروژه‌ی جدید، یک بلوک { ... } کپی کن و آخر لیست (قبل از ]) بچسبان.
   الگو:
   {
     title: "نام پروژه",
     desc: "یک یا دو جمله توضیح",
     tags: ["Python", "FastAPI"],
     visual: "RAG",                    // متن کوتاهی که روی کاشی نمایش داده می‌شود
     image: "assets/projects/x.jpg",   // اختیاری: اسکرین‌شات به‌جای visual
     github: "https://github.com/amin-bazyar/repo",   // اختیاری
     demo: "",                         // اختیاری
     download: ""                      // اختیاری
   },
   فیلدهای اختیاری را خالی بگذاری، همان دکمه نمایش داده نمی‌شود. */
const PROJECTS = [
  { title: "پیش‌بینی سری زمانی", desc: "جریان‌های کاری پیش‌بینی برای داده‌های ترتیبی، با ساختار MLOps.", tags: ["Python","Pandas","MLOps"], visual: "TS", github: "https://github.com/amin-bazyar", demo: "", download: "" },
  { title: "چت‌بات RAG اسنپ‌فود", desc: "چت‌بات مبتنی بر کامنت‌های کاربران با FastAPI و بازیابی معنایی.", tags: ["FastAPI","RAG","LLM"], visual: "RAG", github: "https://github.com/amin-bazyar", demo: "", download: "" },
  { title: "Auto Anatomy", desc: "AutoAnatomy یک محیط سه‌بعدی تعاملی است که قطعات خودرو را کالبدشکافی می‌کند: قطعه را انتخاب می‌کنی، حرکتش را شبیه‌سازی می‌کنی و از یک دستیار AI درباره همان لحظه سؤال می‌پرسی.", tags: ["NLP","Computer Vision","LLM","Python"], visual: "VISION", github: "https://github.com/amin-bazyar", demo: "", download: "" },
  { title: "mini-GPT فارسی", desc: "توکنایزر فارسی و یک مدل GPT کوچک، به‌صورت پروژه‌ی تیمی.", tags: ["NLP","Tokenizer","GPT"], visual: "GPT", github: "https://github.com/amin-bazyar", demo: "", download: "" }
];
