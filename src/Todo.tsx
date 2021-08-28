import { VFC } from "react";
import { TodoType } from "./types/todo";

// PickやOmitを用いた場合も以下の様に書ける
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
