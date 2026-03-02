import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function TitleAnimation({
  text,
  duration = 3000,
  variant = "h6",
  className,
}) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!text) {
      setTypedText("");
      return;
    }

    const intervalDuration = duration / text.length;
    let currentIndex = 0;

    const intervalId = window.setInterval(() => {
      currentIndex += 1;
      setTypedText(text.slice(0, currentIndex));

      if (currentIndex >= text.length) {
        window.clearInterval(intervalId);
      }
    }, intervalDuration);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [duration, text]);

  return (
    <Typography variant={variant} className={className}>
      {typedText}
    </Typography>
  );
}
