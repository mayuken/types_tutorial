import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* もしもhobbiesの値がなかった場合、そのままだとjoinの部分でエラーが出てしまう為、
      無い可能性があるキー名の後ろに?をつけることでエラーを回避できる。 => オプショナルチェイニング*/}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
