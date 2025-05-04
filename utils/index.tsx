import isUndefined from "lodash/isUndefined";

// 定义一个类型 StringOmit，它可以是 K 类型的字符串，也可以是排除了 K 类型字符串的其他字符串类型
export type StringOmit<K extends string> = K | Omit<string, K>;

//获取默认值
export const getDefaultValue = <T,>(value: T, defaultValue: T): T => {
  return isUndefined(value) ? value : defaultValue;
};
