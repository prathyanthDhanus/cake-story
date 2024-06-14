function useFollowPointer(ref) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    useEffect(() => {
      if (!ref.current) return;
  
      const handlePointerMove = (event) => {
        const element = ref.current;
        const elementRect = element.getBoundingClientRect();
  
        setX(event.clientX - elementRect.left - elementRect.width / 2);
        setY(event.clientY - elementRect.top - elementRect.height / 2);
      };
  
      window.addEventListener("pointermove", handlePointerMove);
  
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref]);
  
    return { x, y };
  }
  