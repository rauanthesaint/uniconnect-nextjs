import { Input, Button } from '@/components/components';

export default function Page() {
    return (
        <div>
            <form action="#">
                <Input
                    size="md"
                    type="text"
                    label="Email"
                    name="email"
                    placeholder="Hello"
                />
                <Button size="md" type="submit">
                    <span>Next</span>
                    <svg
                        width="20px"
                        height="20px"
                        stroke-width="1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#111111"
                    >
                        <path
                            d="M9 6L15 12L9 18"
                            stroke="#111111"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Button>
            </form>
        </div>
    );
}
