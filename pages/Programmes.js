import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Parallax from './components/Parallax';

const Programmes = () => {
    const programmes = [
        { id: 1, title: 'Programme 1', date: '2022-12-01' },
        { id: 2, title: 'Programme 2', date: '2022-11-15' },
        { id: 3, title: 'Programme 3', date: '2022-10-20' },
        { id: 4, title: 'Programme 4', date: '2022-09-01' },
        { id: 5, title: 'Programme 5', date: '2022-08-15' },
        { id: 6, title: 'Programme 6', date: '2022-07-20' },
    ];

    const allProgrammes = programmes;

    const recentProgrammes = programmes.slice(0, 5);

    const pastProgrammes = programmes.slice(5);

    const router = useRouter()

    return (
        <div className="w-full justify-center flex-col flex">
        <Parallax/>
        <h1 className="text-2xl font-bold mb-5">Programmes</h1>
        <div className='flex flex-col w-full justify-center items-center'>
            <div className="flex flex-col w-full justify-center items-center">
            <h2 className="text-xl font-bold mb-5">All Programmes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {allProgrammes.map(programme => (
                    <div key={programme.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image width={600} height={600} className="w-full" src="https://via.placeholder.com/300x200" alt="Programme" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{programme.title}</div>
                            <p className="text-gray-700 text-base">{programme.date}</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link href="/programme/[id]" as={`/programme/${programme.id}`}>
                                    Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <div className="mt-10 flex flex-col w-full justify-center items-center">
            <h2 className="text-xl font-bold mb-5">Recent Programmes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {recentProgrammes.map(programme => (
                    <div key={programme.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image width={600} height={600} className="w-full" src="https://via.placeholder.com/300x200" alt="Programme" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{programme.title}</div>
                            <p className="text-gray-700 text-base">{programme.date}</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link href="/programme/[id]" as={`/programme/${programme.id}`}>
                                Read More
                            </Link>
                        </div>
                        </div>
                ))}
            </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center mt-10">
            <h2 className="text-xl font-bold mb-5">Past Programmes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {pastProgrammes.map(programme => (
                    <div key={programme.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image width={600} height={600} className="w-full" src="https://via.placeholder.com/300x200" alt="Programme" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{programme.title}</div>
                            <p className="text-gray-700 text-base">{programme.date}</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link href="/programme/[id]" as={`/programme/${programme.id}`}>
                                Read More
                            </Link>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
);};

export default Programmes;



