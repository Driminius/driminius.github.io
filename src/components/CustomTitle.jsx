import { useEffect } from "react";

const CustomTitle = (title) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    // reset title wen the component unounts..
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export default CustomTitle;
