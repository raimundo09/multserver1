
import { useLazyImage } from '@/hooks/useLazyImage';
import LoadingSpinner from './LoadingSpinner';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const OptimizedImage = ({ src, alt, className = '', placeholder }: OptimizedImageProps) => {
  const { imgRef, imageSrc, isLoaded } = useLazyImage(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc || placeholder}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
