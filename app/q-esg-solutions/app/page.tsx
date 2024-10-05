import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Q-ESG Solutions</h1>
      </header>
      <main className="flex flex-col items-center">
        <Link href="/dashboard">
          <button className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200">
            Go to Dashboard
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
