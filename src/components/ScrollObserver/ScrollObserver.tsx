import React, { forwardRef, HTMLProps } from 'react';

interface ScrollObserverProps extends HTMLProps<HTMLDivElement> {}

const ScrollObserver = forwardRef<HTMLDivElement, ScrollObserverProps>((props, ref) => {
  return <div ref={ref} style={{ height: '1px', ...props.style }} />;
});

ScrollObserver.displayName = 'ScrollObserver';

export default ScrollObserver;
