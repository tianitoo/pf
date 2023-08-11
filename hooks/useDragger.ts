"use client"

import React, { useEffect, useRef } from "react";

function useDragger(id: string, draggerId: string) {

  
  const isClicked = useRef<boolean>(false);
  
  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })
  
  useEffect(() => {

    // get screen height and width
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
    
      
      const target = document.getElementById(id);
      if (!target) throw new Error("Element with given id doesn't exist");
      
      const dragger = document.getElementById(draggerId);
      if (!dragger) throw new Error("Drager element not found");
      
      const container = target.parentElement;
      if (!container) throw new Error("target element must have a parent");
      
      // get element height and width
      const elementHeight = target.offsetHeight;
      const elementWidth = target.offsetWidth;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;
      
      if (e.clientX - coords.current.startX + coords.current.lastX > 0 && e.clientX - coords.current.startX + coords.current.lastX < screenWidth - elementWidth) {
        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        target.style.left = `${nextX}px`;
      }
      if (e.clientY - coords.current.startY + coords.current.lastY > 0 && e.clientY - coords.current.startY + coords.current.lastY < screenHeight - elementHeight - 81) {
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      target.style.top = `${nextY}px`;
    }
    }

    dragger.addEventListener('mousedown', onMouseDown);
    dragger.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      dragger.removeEventListener('mousedown', onMouseDown);
      dragger.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, [id])

}

export default useDragger;
