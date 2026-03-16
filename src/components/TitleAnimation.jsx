import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function TitleAnimation({
  text,
  duration = 3000,
  variant = "h6",
  className,
  showCursor = false,
}) {
  const [typedText, setTypedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTypedText("");
    setDone(false);
    if (!text) return;

    const intervalDuration = duration / text.length;
    let currentIndex = 0;

    const intervalId = window.setInterval(() => {
      currentIndex += 1;
      setTypedText(text.slice(0, currentIndex));

      if (currentIndex >= text.length) {
        window.clearInterval(intervalId);
        setDone(true);
      }
    }, intervalDuration);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [duration, text]);

  return (
    <Typography variant={variant} className={className}>
      {typedText}
      {showCursor && !done && (
        <span className="typing-cursor-char" aria-hidden="true">
          |
        </span>
      )}
    </Typography>
  );
}
