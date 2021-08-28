export type User = {
  name: string;
  // ここではhobbiesが必ずしも存在しないことを考慮
  hobbies?: Array<string>;
};
