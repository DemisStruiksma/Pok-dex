import Head from 'next/Head';

export default function Home({ children, title }) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto max-w-2xl pt-12 min-h-screen">
                {children}
            </main>
        </div>
    );
}