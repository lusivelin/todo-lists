import styles from "@/components-styles/TaskEdit.module.css";
import { useState } from "react";

const TaskEdit = ({ description, onClick }: TaskEditProp) => {
  const [text, setText] = useState(description);
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        autoFocus
      />

      <button onClick={() => onClick?.(text || "")} className={styles.saveBtn}>
        Save
      </button>
    </div>
  );
};

export default TaskEdit;
