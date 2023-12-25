'use client';

import Link from 'next/link';
import { Input, Button } from '@/components/components';
export default function Page() {
    return (
        <form action="">
            <h5 style={{ textAlign: 'center', marginBottom: '48px' }}>
                Sign Up
            </h5>
            <div style={{ marginBottom: '48px' }}>
                <Input
                    style={{ marginBottom: '16px' }}
                    size="md"
                    placeholder="Qairat"
                    label="Firstname"
                    name="firstname"
                />
                <Input
                    style={{ marginBottom: '16px' }}
                    size="md"
                    placeholder="Nurtas"
                    label="Lastname"
                    name="lastname"
                />
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
                <p style={{ marginBottom: '16px', color: 'var(--tertiary)' }}>
                    By continuing, I accept the terms of the User Agreement and
                    consent to the processing if my personal in accordance with
                    the Privacy Policy
                </p>
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
                        I have an account.{' '}
                        <Link className="link" href={'#'}>
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}
