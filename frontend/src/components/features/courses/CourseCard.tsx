import { Star, Clock, User } from "@phosphor-icons/react";

interface CourseCardProps {
  title: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  imageUrl: string;
  className?: string;
}

export const CourseCard = ({ 
  title, 
  duration, 
  level, 
  rating, 
  students, 
  imageUrl,
  className = "" 
}: CourseCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div 
        className="w-full h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-4">
            <Star size={16} weight="fill" className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-700">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-500">{students.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {level}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            {duration}
          </div>
        </div>
      </div>
    </div>
  );
};