import Link from 'next/link';
import { Input, Button } from '@/components/components';

export default function Page() {
    return (
        <form action="" style={{ width: '100%' }}>
            <h5 style={{ textAlign: 'center', marginBottom: '48px' }}>
                Log In
            </h5>
            <div style={{ marginBottom: '48px' }}>
                <Input
                    style={{ marginBottom: '16px' }}
                    size="md"
                    placeholder="example@mail.com"
                    label="Email"
                    name="email"
                />
                <Input
                    size="md"
                    counter={32}
                    label="Password"
                    type="password"
                    name="password"
                />
            </div>
            <div>
                <Button
                    style={{ marginBottom: '48px' }}
                    shape="rect"
                    emphasis="primary"
                    size="md"
                >
                    Next
                </Button>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        Forgot the password?{' '}
                        <Link className="link" href={'#'}>
                            Reset
                        </Link>
                    </p>
                    <p>
                        New to the Aritmetica?{' '}
                        <Link className="link" href={'#'}>
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}
