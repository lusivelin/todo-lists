import styles from "@/components-styles/TaskCreate.module.css";
import { useRef, useState } from "react";

const TaskCreate = ({ description, onEnter }: TaskCreateProp) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(description);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      onEnter?.(text || "");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        className={styles.input}
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add your todo..."
      />
    </div>
  );
};

export default TaskCreate;
