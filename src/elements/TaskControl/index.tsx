import styles from "@/components-styles/TaskControl.module.css";
import { useEffect, useState } from "react";
import { ThreeDotIcon } from "../Icons";
import CustomDropDown from "../CustomDropDown";
import TaskEdit from "../TaskEdit";
import { deleteTodo, patchTodo } from "@/core/api/source";
import { useQueryClient } from "react-query";

const TaskControl = ({
  id = "id-101",
  description,
  completed,
}: TaskControlProp) => {
  const queryClient = useQueryClient();
  const [checked, setChecked] = useState(completed || false);
  const [mode, setMode] = useState<TaskMode | string>("normal");
  const options = [
    {
      label: "Edit",
      value: "edit",
    },
    {
      label: <span>Delete</span>,
      value: "delete",
    },
  ];

  const handleOnUpdate = async (value: string) => {
    try {
      await patchTodo({ id, title: value, completed: checked });
    } catch (err) {
      console.log({ err });
    }
    setMode("normal");
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  };

  useEffect(() => {
    if (mode === "delete") {
      (async () => {
        await deleteTodo({ id });
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      })();
      setMode("normal");
    }
  }, [id, mode, queryClient]);

  return (
    <>
      {mode === "edit" && (
        <TaskEdit onClick={handleOnUpdate} description={description} />
      )}
      {mode === "normal" && (
        <div className={styles.wrapper}>
          <input
            type="checkbox"
            id={id}
            className="myCheckbox"
            checked={checked}
            onChange={async () => {
              setChecked(!checked);
              await patchTodo({ id, title: description, completed: !checked });
              queryClient.invalidateQueries({ queryKey: ["todos"] });
            }}
          />
          <label htmlFor={id} className="custom-checkbox"></label>

          <h3
            className={`${styles.description} ${
              checked ? styles.lineThrough : ""
            }`}
          >
            {description}
          </h3>

          <CustomDropDown
            options={options}
            onChange={(value) => setMode(value?.value)}
            defaultOption={{
              label: "Normal",
              value: "normal",
            }}
            cover={<ThreeDotIcon className={styles.dotIcon} />}
          />
        </div>
      )}
    </>
  );
};

export default TaskControl;
