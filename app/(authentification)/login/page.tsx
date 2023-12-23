import { Fragment } from 'react';
import { Input, Button } from '@/components/components';

export default function Page() {
    return (
        <Fragment>
            <h1>Log In</h1>

            <form
                action=""
                style={{ minWidth: '280px', maxWidth: '480px', width: '100%' }}
            >
                <Input size="md" />
                <Input size="md" />

                <Button size="md"></Button>
            </form>
        </Fragment>
    );
}
