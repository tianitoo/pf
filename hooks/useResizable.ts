import { useEffect, RefObject } from "react";

function useResizable(id: string) {
  useEffect(() => {
    const resizableElement = document.getElementById(id);
    if (!resizableElement) return;

    const styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width || "0", 10);
    let height = parseInt(styles.height || "0", 10);
    let x = 0;
    let y = 0;

    const onMouseMoveTopResize = (event: MouseEvent) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpTopResize = () => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event: MouseEvent) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.bottom = styles.bottom;
      resizableElement.style.top = "";
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    const onMouseMoveBottomResize = (event: MouseEvent) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = () => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event: MouseEvent) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.top = styles.top;
      resizableElement.style.bottom = "";
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    const onMouseMoveRightResize = (event: MouseEvent) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpRightResize = () => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event: MouseEvent) => {
      x = event.clientX;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.left = styles.left;
      resizableElement.style.right = "";
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    const onMouseMoveLeftResize = (event: MouseEvent) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = () => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event: MouseEvent) => {
      x = event.clientX;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.right = styles.right;
      resizableElement.style.left = "";
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    const resizerRight = resizableElement.querySelector<HTMLElement>(".resizer-r");
    const resizerTop = resizableElement.querySelector<HTMLElement>(".resizer-t");
    const resizerBottom = resizableElement.querySelector<HTMLElement>(".resizer-b");
    const resizerLeft = resizableElement.querySelector<HTMLElement>(".resizer-l");

    if (resizerRight) {
      resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    }
    if (resizerTop) {
      resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    }
    if (resizerBottom) {
      resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    }
    if (resizerLeft) {
      resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);
    }

    return () => {
      if (resizerRight) {
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      }
      if (resizerTop) {
        resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      }
      if (resizerBottom) {
        resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      }
      if (resizerLeft) {
        resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      }
    };
  }, [id]);
}

export default useResizable;
