import React, { useEffect, useRef } from "react";

type InfiniteScrollProps = {
  fetchMore: () => void;
};

const InfiniteScroll = ({ fetchMore }: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // observer.disconnect();
        fetchMore();
      }
    }, options);

    containerRef.current && observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} />;
};

export default InfiniteScroll;
