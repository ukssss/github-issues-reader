import { useEffect, useRef, useState } from 'react';

type InfiniteScrollCallback = () => void;

const useInfiniteScroll = (callback: InfiniteScrollCallback) => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const target = useRef<HTMLDivElement | null>(null);

  const handleObserver: IntersectionObserverCallback = entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isFetching) {
      callback();
      setPage(page + 1);
      setIsFetching(false);
    }
  }, [isFetching]);

  return target;
};

export default useInfiniteScroll;
