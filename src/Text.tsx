// FC = Functional Component
// VFCは暗黙的にFCがchildrenを受取れることに対して、 childrenを含まないことを明示的にする場合に使用する
// react ver.18からはFCでもchildrenが内包されない様に変更される予定
import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// component名: FC(VFC)<型名>とすることでコンポーネント自体に型定義できる
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  // 変数名と値が同じ場合は省略できる
  return <p style={{ color, fontSize }}>テキストです。</p>;
};
