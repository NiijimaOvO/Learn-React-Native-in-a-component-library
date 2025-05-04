import React, { PropsWithChildren } from "react";
import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ActivityIndicatorProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { StringOmit } from "@/utils";

//TouchableNativeFeedback 是一个专门为 Android 平台设计的可触摸组件，它能利用 Android 系统的原生触摸反馈效果
export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /** 按钮标题 */
  title?: string | React.ReactElement<{}>;

  /** 标题文本样式 */
  titleStyle?: StyleProp<TextStyle>;

  /** 标题文本组件属性 */
  // titleProps?: TextProps;
  titleProps?: any;

  /** 按钮容器样式 */
  buttonStyle?: StyleProp<ViewStyle>;

  /** 按钮类型 */
  type?: "solid" | "clear" | "outline";

  /** 是否显示加载状态 */
  loading?: boolean;

  /** 加载指示器样式 */
  loadingStyle?: StyleProp<ViewStyle>;

  /** 加载指示器属性 */
  loadingProps?: ActivityIndicatorProps;

  /** 外层容器样式 */
  containerStyle?: StyleProp<ViewStyle>;

  /** 显示图标（无标题时居中，有标题时默认在左侧，可与 iconRight 配合使用） */
  //   icon?: IconNode;

  /** 图标容器样式 */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /** 图标显示在标题右侧（需要配合 icon 属性使用） */
  iconRight?: boolean;

  /** 线性渐变属性（参考用法文档） */
  // 暂时不考虑实现
  // linearGradientProps?: object;

  /** 自定义触控组件 */
  TouchableComponent?: typeof React.Component;

  /** 自定义容器组件 */
  ViewComponent?: typeof React.Component;

  /** 是否禁用 */
  disabled?: boolean;

  /** 禁用状态按钮样式 */
  disabledStyle?: StyleProp<ViewStyle>;

  /** 禁用状态标题样式 */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /** 是否显示浮雕效果（对 clear 类型无效） */
  raised?: boolean;

  /** 图标位置（需要配合 icon 属性使用） */
  iconPosition?: "left" | "right" | "top" | "bottom";

  /** 标题是否大写 */
  uppercase?: boolean;

  /** 圆角尺寸
   * @类型 number | sm | md | lg
   */
  radius?: number;
  // radius?: number | StringOmit<keyof ThemeSpacing>;

  /** 按钮尺寸 */
  size?: "sm" | "md" | "lg";

  /** 按钮颜色
   * @类型 string | primary | secondary | success | warning | error
   */
  color?: StringOmit<"primary" | "secondary" | "success" | "error" | "warning">;

  //自定义边框颜色
  borderColor?: StringOmit<
    "primary" | "secondary" | "success" | "error" | "warning"
  >;
}

export type ButtonType = PropsWithChildren<ButtonProps>;
