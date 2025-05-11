import { Component, ComputedRef, Ref } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'default'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'small' | 'default' | 'large'


export interface ButtonProps {
    /**
     * 按钮的标签或组件
     * 可以是字符串或React组件，用于自定义按钮的标签或结构
     */
    tag?: string | Component,

    /**
     * 按钮的类型
     * 用于定义按钮的外观和行为，例如：'default'、'primary'、'success'等
     */
    type?: ButtonType,

    /**
     * 按钮的大小
     * 用于定义按钮的尺寸，例如：'small'、'medium'、'large'等
     */
    size?: ButtonSize,

    /**
     * 按钮的原生类型
     * 用于定义按钮的原生HTML类型，例如：'button'、'submit'、'reset'等
     */
    nativeType?: NativeType,

    /**
     * 按钮的图标
     * 可以是字符串，用于指定按钮的图标
     */
    icon?: string,

    /**
     * 按钮是否处于加载状态
     * 当为true时，按钮会显示加载动画
     */
    loading?: boolean,

    /**
     * 按钮是否为圆形
     * 当为true时，按钮会呈现圆形外观
     */
    circle?: boolean,

    /**
     * 按钮是否为朴素样式
     * 当为true时，按钮会呈现朴素的外观，通常没有背景颜色
     */
    plain?: boolean,

    /**
     * 按钮是否为圆角
     * 当为true时，按钮会呈现圆角外观
     */
    round?: boolean,

    /**
     * 按钮是否禁用
     * 当为true时，按钮会被禁用，无法点击
     */
    disabled?: boolean,

    /**
     * 按钮是否仅显示文本
     * 当为true时，按钮仅显示文本，不显示图标或其他装饰
     */
    text?: boolean,

    /**
     * 按钮是否具有背景颜色
     * 当为true时，按钮会具有背景颜色
     */
    bg?: boolean,

    /**
     * 按钮是否自动获取焦点
     * 当为true时，按钮会在页面加载时自动获取焦点
     */
    autofocus?: boolean,

    /**
     * 加载状态下的图标
     * 可以是字符串，用于指定加载状态下的按钮图标
     */
    loadingIcon?: string,

    /**
     * 是否使用节流功能
     * 当为true时，按钮的点击事件会进行节流处理，避免频繁触发
     */
    useThrottle?: boolean,

    /**
     * 节流的持续时间
     * 用于定义节流的持续时间，单位为毫秒
     */
    throttleDuration?: number
}


export interface ButtonGroupProps { 
    size?: ButtonSize,
    type?: ButtonType,
    disabled?: boolean
}

export interface ButtonGroupContext {
    size?: ButtonSize,
    type?: ButtonType,
    disabled?: boolean
}

export interface ButtonEmits {
    (e: 'click', evt: MouseEvent): void
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>,
    disabled: ComputedRef<boolean>,
    size: ComputedRef<ButtonSize | ''>,
    type: ComputedRef<ButtonType | ''>
}