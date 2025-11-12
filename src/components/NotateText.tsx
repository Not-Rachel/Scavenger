import { useState, type ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";
interface NotateTextProps {
  children: ReactNode;
}

function NotateText({ children }: NotateTextProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="rotate-5"
    >
      <div className="-rotate-5">
        <RoughNotation
          type="underline"
          show={isHovering}
          strokeWidth={2}
          iterations={3}
          padding={0}
        >
          {children}
        </RoughNotation>
      </div>
    </div>
  );
}
export default NotateText;
