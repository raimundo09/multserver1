
import { useState, useEffect, useRef } from 'react';

export const useLazyImage = (src: string) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImageRef(imgRef.current);
  }, []);

  useEffect(() => {
    if (!imageRef || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imageRef);

    return () => observer.disconnect();
  }, [imageRef, src]);

  useEffect(() => {
    if (!isInView || !src) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  }, [isInView, src]);

  return { imgRef, imageSrc, isLoaded };
};
