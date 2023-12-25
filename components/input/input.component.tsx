'use client';

import React, { useState, ChangeEvent, ReactNode } from 'react';
import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

// styles
import '@/components/input/input.style.css';

interface baseProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: 'md' | 'lg';
    counter?: number;
    incorrect?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    label: string;
    hint?: string;
}

const Input: React.FC<baseProps> = ({
    style,
    type,
    placeholder,
    name,
    disabled,
    className,
    counter,
    size,
    incorrect,
    leadingIcon,
    trailingIcon,
    label,
    hint,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div style={style} className={clsx('input-container', className, size)}>
            <div className="label">
                <label htmlFor={name}>{label}</label>
                {counter && (
                    <span
                        className={counter < inputValue.length ? 'error' : ''}
                    >
                        {inputValue.length}/{counter}
                    </span>
                )}
            </div>
            <div className={clsx('input', incorrect ? 'error' : null)}>
                {leadingIcon && <div className="icon">{leadingIcon}</div>}
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={counter ? handleInputChange : onChange}
                    name={name}
                />
                {trailingIcon && (
                    <button className="icon" type="button">
                        {trailingIcon}
                    </button>
                )}
            </div>
            <span className={clsx('hint', incorrect ? 'error' : null)}>
                {incorrect && (
                    <svg
                        width="16px"
                        height="16px"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#111111"
                    >
                        <path
                            d="M12 7L12 13"
                            stroke="#111111"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M12 17.01L12.01 16.9989"
                            stroke="#111111"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#111111"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                )}
                {hint}
            </span>
        </div>
    );
};

export default Input;
