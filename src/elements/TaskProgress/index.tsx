import styles from "@/components-styles/TaskProgress.module.css";
import useTaskProgress from "./hook";

const TaskProgress = ({
  completed = 12,
  tasks = 50,
}: Partial<TaskProgress>) => {
  const { progress } = useTaskProgress({
    completed,
    tasks,
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress</h1>

      <div className={styles.progress}>
        <div
          className={styles.completedProgress}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <p className={styles.description}>
        {completed} / {tasks} completed
      </p>
    </div>
  );
};

export default TaskProgress;
