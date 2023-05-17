import { useEffect, useState } from "react";

const useTaskProgress = ({ completed, tasks }: TaskProgress) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedPercentage =
      completed <= tasks ? (completed / tasks) * 100 : 0;
    setProgress(completedPercentage);
  }, [completed, tasks]);

  return { progress, setProgress };
};

export default useTaskProgress;
