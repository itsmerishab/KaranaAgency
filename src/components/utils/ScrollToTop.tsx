import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Immediately reset standard window scroll
    window.scrollTo(0, 0);

    // 2. Fallback reset for document bodies (sometimes overflow or smooth scrolling intercepts window level scroll)
    try {
      document.documentElement.scrollTo({ top: 0, behavior: 'instant' as any });
      document.body.scrollTo({ top: 0, behavior: 'instant' as any });
    } catch (e) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
