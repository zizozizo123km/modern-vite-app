const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="
      bg-white 
      dark:bg-gray-800 
      p-6 
      rounded-2xl 
      shadow-xl 
      hover:shadow-2xl 
      transition-all 
      duration-300 
      transform 
      hover:-translate-y-1 
      border 
      border-gray-100 
      dark:border-gray-700
      flex 
      flex-col 
      items-start
      h-full
    ">
      {/* Icon Container */}
      <div className="
        mb-4 
        p-4 
        rounded-full 
        bg-indigo-50 
        text-indigo-600 
        dark:bg-indigo-900 
        dark:text-indigo-300
        shadow-md
      ">
        {/* Icon component passed via props */}
        {Icon && <Icon className="w-7 h-7" aria-hidden="true" />}
      </div>

      {/* Title */}
      <h3 className="
        text-xl 
        font-extrabold 
        text-gray-900 
        dark:text-white 
        mb-3
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        text-gray-600 
        dark:text-gray-400 
        text-base 
        leading-relaxed
      ">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;