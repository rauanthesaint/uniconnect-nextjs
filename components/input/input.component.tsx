import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

// styles
import '@/components/input/input.style.css';

interface baseProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: 'sm' | 'md' | 'lg';
    label?: string;
    hint?: string;
    icon?: React.ReactNode;
}

const Input: React.FC<baseProps> = ({
    type,
    placeholder,
    name,
    disabled,
    className,
    children,
    // Custom properties
    label,
    size,
    hint,
    icon,
}) => {
    return (
        <div className={clsx('input-container', className)}>
            {label && (
                <label className="label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className={clsx(hint ? 'input-error' : null, 'input-wrap')}>
                <input
                    disabled={disabled}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={clsx('input', size)}
                />
                {icon && (
                    <button className="input-button" type="button">
                        {icon}
                    </button>
                )}
            </div>
            {hint && <span className="error">{hint}</span>}
            {children}
        </div>
    );
};

export default Input;
