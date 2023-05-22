import styles from "@/pages-styles/Home.module.css";
import TaskProgress from "@/elements/TaskProgress";
import CustomDropDown from "@/elements/CustomDropDown";
import TaskControl from "@/elements/TaskControl";
import TaskCreate from "@/elements/TaskCreate";
import { getTodos, postTodo } from "@/core/api/source";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";

export default function Home() {
  const queryClient = useQueryClient();
  const options = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Done",
      value: "done",
    },
    {
      label: "Undone",
      value: "undone",
    },
  ];

  const { data, isLoading } = useQuery("todos", getTodos);

  const todos = data?.data;

  const tasks = todos?.length;
  const completed = todos?.filter((todo) => todo.completed).length;

  const filteredTodos = {
    done: todos?.filter((todo) => todo.completed),
    undone: todos?.filter((todo) => !todo.completed),
    all: todos,
  };

  const [filter, setFilter] = useState<keyof typeof filteredTodos>("all");

  if (isLoading) return <div className={styles.loading}>Loading....</div>;

  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.taskProgress}>
            <TaskProgress completed={completed} tasks={tasks} />
          </div>

          <div className={styles.dropDown}>
            <h1 className={styles.title}>Tasks</h1>
            <CustomDropDown
              options={options}
              onChange={(value) =>
                setFilter(value.value as keyof typeof filteredTodos)
              }
            />
          </div>

          <div className={styles.taskControl}>
            {filteredTodos[filter]?.map((todo) => (
              <TaskControl
                key={`todo-${todo.id}`}
                id={todo.id}
                description={todo.title}
                completed={todo.completed}
              />
            ))}
          </div>

          <div className={styles.taskCreate}>
            <TaskCreate
              onEnter={async (value) => {
                await postTodo({ title: value, completed: false });
                queryClient.invalidateQueries({ queryKey: ["todos"] });
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
