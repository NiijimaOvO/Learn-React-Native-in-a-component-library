import React from "react";

/**
 * 通用组件渲染工具，支持多种内容类型处理
 * @param Component - 目标渲染组件类型 (如 Icon/Text)
 * @param content - 内容输入，支持以下类型：
 *   - null/undefined/false : 不渲染
 *   - React元素 : 直接返回
 *   - 函数 : 执行后返回结果
 *   - true : 渲染带默认属性的组件
 *   - 字符串 : 作为子节点渲染
 *   - 数字 : 转换为字符串渲染
 *   - 对象 : 作为组件属性合并
 * @param defaultProps - 默认属性，会与内容属性合并
 * @returns 处理后的 React 元素
 */
const renderNode = (Component: any, content: any, defaultProps: any = {}) => {
  // 空值处理
  if (content == null || content === false) {
    return null;
  }

  // 已经是 React 元素直接返回
  if (React.isValidElement(content)) {
    return content;
  }

  // 函数类型执行获取返回值
  if (typeof content === "function") {
    return content();
  }

  // 布尔值 true 渲染带默认属性的组件
  if (content === true) {
    return <Component {...defaultProps} />;
  }

  // 字符串处理
  if (typeof content === "string") {
    return content.length === 0 ? null : (
      <Component {...defaultProps}>{content}</Component>
    );
  }

  // 数字转换为字符串处理
  if (typeof content === "number") {
    return <Component {...defaultProps}>{content}</Component>;
  }

  // 对象类型合并属性
  return <Component {...defaultProps} {...content} />;
};

export default renderNode;
