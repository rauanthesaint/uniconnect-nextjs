// styles
import '@/app/(authentification)/layout.style.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="layout">
            <div className="form-container">{children}</div>
            <div className="banner-container">Lkjkejrfk</div>
        </section>
    );
}
