import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

// styles
import '@/components/button/button.style.css';

interface baseProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    size: 'sm' | 'md' | 'lg';
}

const Button: React.FC<baseProps> = ({ children, className, size, type }) => {
    return (
        <button type={type} className={clsx(className, size, 'button')}>
            {children}
        </button>
    );
};

export default Button;
