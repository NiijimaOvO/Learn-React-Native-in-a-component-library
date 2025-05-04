import React, { useCallback, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Platform,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ActivityIndicatorProps,
} from "react-native";
import Color from "color";
import { ButtonProps } from "./type";
import renderNode from "@/utils/renderNode";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    titleStyle: passedTitleStyle,
    uppercase,
    titleProps,
    buttonStyle,
    loading,
    size = "md",
    radius = "sm",
    onPress = () => {},
    type = "solid",
    containerStyle,
    color: buttonColor = "primary",
    borderColor = "primary",
    ViewComponent = View,
    raised,
    disabled = false,
    disabledStyle,
    disabledTitleStyle,
    loadingStyle,
    loadingProps: passedLoadingProps,
    children = title,
    TouchableComponent,
  } = props;

  // 根据平台动态选择 Touchable 组件
  const Touchable =
    TouchableComponent || Platform.OS === "android"
      ? TouchableNativeFeedback
      : TouchableOpacity;

  //计算按钮样式
  const paddingSpacing = { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 };

  //计算borderRadius
  const borderRadius = useMemo(
    () =>
      Number(
        paddingSpacing[radius as keyof typeof paddingSpacing] ??
          ((radius as number) || "0")
      ) || 0,
    [radius]
  );

  //处理点击事件
  const handleOnPress = useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled && !loading) onPress(e);
    },
    [disabled, loading, onPress]
  );

  //计算屏幕阅读器识别的内容
  const accessibilityState = useMemo(
    () => ({
      disabled: !!disabled,
      busy: !!loading,
    }),
    [disabled, loading]
  );

  //因为Omit类型不允许作为对象的键名，所以这里采用辅助函数得方式，不用对象调用的形式
  const colorType = {
    primary: "#007aff",
    secondary: "#5856d6",
    grey: "#7d7d7d",
    searchBg: "#dcdce1",
    success: "#4cd964",
    error: "#ff3b30",
    warning: "#ffcc00",
    disabled: "#e3e6e8",
  };
  const getColor = (color: string) => {
    if (Object.keys(colorType).includes(color)) {
      //类型断言，确保color是backgroundColor对象的键名
      return colorType[color as keyof typeof colorType];
    }
    return color;
  };

  //计算标题样式
  const titleStyle: StyleProp<TextStyle> = useMemo(
    () =>
      StyleSheet.flatten([
        {
          color: type === "solid" ? "white" : colorType.primary,
        },
        uppercase && { textTransform: "uppercase" },
        styles.title,
        passedTitleStyle,
        disabled && {
          color: Color(getColor("grey")).darken(0.3).toString(),
        }, // 禁用状态下的样式覆盖传入的样式，优先级高于传入的样式
        disabled && disabledTitleStyle,
      ]),
    [disabled, disabledTitleStyle, passedTitleStyle, type, uppercase]
  );
  //计算loadingProps
  const defaultLoadingProps = (type: string) => ({
    color: type === "solid" ? "white" : getColor("primary"),
    size: "small",
  });
  const loadingProps: any = useMemo(
    () => ({
      ...defaultLoadingProps(type),
      ...passedLoadingProps,
    }),
    [passedLoadingProps, type]
  );

  return (
    <View
      style={[
        styles.container,
        { borderRadius },
        raised && !disabled && type !== "clear" && styles.raised,
        containerStyle,
      ]}
    >
      <Touchable
        onPress={handleOnPress}
        delayPressIn={0}
        activeOpacity={0.3}
        //支持屏幕阅读器使用的
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled}
      >
        <ViewComponent
          style={StyleSheet.flatten([
            //基础样式
            styles.button,
            //需要计算的样式
            {
              padding: paddingSpacing[size],
              paddingHorizontal: paddingSpacing[size] + 2,
              borderRadius,
              //icon 暂留
              backgroundColor:
                type === "solid"
                  ? getColor(buttonColor as string) ||
                    buttonColor ||
                    colorType.primary
                  : "transparent",
              borderColor:
                type === "outline"
                  ? getColor(borderColor as string) || borderColor
                  : colorType.primary,

              borderWidth: type === "outline" ? StyleSheet.hairlineWidth : 0,
            },
            //传入的自定义样式以及禁用样式，优先级最高，放最后面
            buttonStyle,
            disabled &&
              type === "solid" && {
                backgroundColor: getColor("disabled"),
              },
            disabled &&
              type === "outline" && {
                borderColor: Color(getColor("disabled")).darken(0.3).toString(),
              },
            disabled && disabledStyle,
          ])}
        >
          {/* 加载 */}
          {loading && (
            <ActivityIndicator
              style={StyleSheet.flatten([styles.loading, loadingStyle])}
              color={loadingProps?.color}
              size={loadingProps?.size}
              {...loadingProps}
            />
          )}
          {/* 带图标，暂留 */}
          {/* 内容 */}
          {!loading &&
            React.Children.toArray(children).map((child, index) => (
              <React.Fragment key={index}>
                {typeof child === "string"
                  ? renderNode(Text, child, {
                      style: {
                        ...titleStyle,
                      },
                      ...titleProps,
                    })
                  : child}
              </React.Fragment>
            ))}
        </ViewComponent>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 12,
  },
  container: {
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 1,
    ...Platform.select({
      android: {
        fontFamily: "sans-serif-medium",
      },
      default: {
        fontSize: 18,
      },
    }),
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: {
    backgroundColor: "#fff",
    overflow: "visible",
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: "rgba(0,0,0, .4)",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  loading: {
    marginVertical: 2,
  },
});

Button.displayName = "Button";
