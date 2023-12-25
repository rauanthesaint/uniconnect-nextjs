import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

// styles
import '@/components/button/button.style.css';

interface baseProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    size: 'sm' | 'md' | 'lg';
    emphasis: 'primary' | 'secondary' | 'tertiary';
    loading?: boolean;
    destructive?: boolean;
    shape: 'rect' | 'square' | 'circle' | 'pill';
}

const Button: React.FC<baseProps> = ({
    style,
    children,
    className,
    type,
    disabled,
    // custom
    size,
    emphasis,
    loading,
    destructive,
    shape,
}) => {
    return (
        <button
            style={style}
            type={type}
            disabled={disabled}
            className={clsx(
                className,
                size,
                emphasis,
                loading ? 'rotate' : null,
                destructive ? 'destructive' : null,
                shape
            )}
        >
            {loading ? (
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
                        d="M12 2V6"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M12 18V22"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M22 12H18"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M6 12H2"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M4.92896 4.92896L7.75738 7.75738"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M16.2427 16.2427L19.0711 19.0711"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M19.071 4.92896L16.2426 7.75738"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M7.75732 16.2427L4.9289 19.0711"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
