/*
  Credit: adapted from LG 2025 web
  This is a custom React hook that detects whether an element is visible in the viewport using the Intersection Observer API.                      
                                                                                                                                                 
  How it works:                                                                                                                                    
                                                                                                                                                   
  1. Takes a ref — a React ref attached to a DOM element you want to watch                                                                         
  2. Creates an IntersectionObserver that fires a callback whenever the element enters or leaves the viewport                                      
  3. Updates isIntersecting state — true when the element is visible, false when it's not                                                        
  4. Cleans up by disconnecting the observer when the component unmounts

  How it's used in PeopleContent.tsx:

  CATEGORIES.forEach((category) => {
    const isVisible = useIsVisible(refs[category]);
    useEffect(() => {
      if (isVisible) setActiveTab(category);
    }, [isVisible, category]);
  });

  Each category section has a ref. As the user scrolls, whichever section enters the viewport triggers isVisible = true, which updates the active
  nav tab to highlight the current section. This is what makes the nav bar track your scroll position.
*/

import {useState, useEffect} from 'react'

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { rootMargin: "-50% 0px -50% 0px" }
      );
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }