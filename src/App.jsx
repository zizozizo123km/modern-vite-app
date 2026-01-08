import React from 'react';

// Header Component
const Header = () => (
  <header className="bg-indigo-800 text-white shadow-xl sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-extrabold tracking-wide">
        <span className="text-indigo-300">Arch</span>itech
      </h1>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 rtl:space-x-reverse font-medium">
        <a href="#home" className="hover:text-indigo-300 transition duration-300">الرئيسية</a>
        <a href="#features" className="hover:text-indigo-300 transition duration-300">المميزات</a>
        <a href="#services" className="hover:text-indigo-300 transition duration-300">الخدمات</a>
        <a href="#contact" className="hover:text-indigo-300 transition duration-300">اتصل بنا</a>
      </nav>
      
      {/* Mobile Menu Button (Placeholder) */}
      <button className="md:hidden text-2xl p-2 rounded hover:bg-indigo-700 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>
);

// Hero Section Component
const Hero = () => (
  <section id="home" className="bg-slate-50 py-24 md:py-40 text-center border-b border-slate-200">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
        بناء المستقبل الرقمي <span className="text-indigo-600">بأناقة</span>
      </h2>
      <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
        نحن نقدم حلول الواجهات الأمامية المتقدمة باستخدام Vite و React و Tailwind CSS، لضمان سرعة فائقة وتصميم لا يُنسى.
      </p>
      <div className="flex justify-center space-x-4 rtl:space-x-reverse">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ring-4 ring-indigo-300 ring-opacity-50">
          ابدأ مشروعك الآن
        </button>
        <button className="bg-white border border-indigo-600 text-indigo-600 font-semibold py-3 px-10 rounded-full hover:bg-indigo-50 transition duration-300 shadow-md">
          استكشف أعمالنا
        </button>
      </div>
    </div>
  </section>
);

// Features Section Component
const Features = () => {
  const featuresData = [
    { icon: '⚡', title: 'سرعة فائقة', description: 'استخدام Vite يضمن أسرع تجربة تطوير وأداء تحميل لا مثيل له.' },
    { icon: '📱', title: 'تجاوب كامل', description: 'تصميمات متجاوبة (Responsive) تعمل بكفاءة على جميع الأجهزة.' },
    { icon: '🎨', title: 'تصميم عصري', description: 'جمالية Tailwind CSS تضمن واجهات جذابة وعصرية.' },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-slate-800 mb-16">المميزات التي نقدمها</h3>
        
        <div className="grid md:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-indigo-500">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-slate-900 text-white py-10 mt-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-4 space-x-6 rtl:space-x-reverse text-sm">
        <a href="#" className="hover:text-indigo-400 transition duration-300">سياسة الخصوصية</a>
        <a href="#" className="hover:text-indigo-400 transition duration-300">شروط الاستخدام</a>
        <a href="#" className="hover:text-indigo-400 transition duration-300">الأسئلة الشائعة</a>
      </div>
      <p className="text-sm text-slate-400 mt-4">
        &copy; 2024 Architech. جميع الحقوق محفوظة. تم البناء باستخدام React و Tailwind CSS.
      </p>
    </div>
  </footer>
);

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;