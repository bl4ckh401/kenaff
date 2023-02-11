import React from 'react';
import Parallax from './components/Parallax'
const partnerships = [
    {
        logo: '/Partners/gok.png',
        name: 'Government of Kenya',
        website: 'https://mygov.go.ke/',
    },
    {
        logo: '/Partners/MinAgric.png',
        name: 'Ministry of Livestock, Fisheries,and Cooperatives',
        website: 'https://kilimo.go.ke/',
    },
    {
        logo: '/Partners/MinEnv.png',
        name: 'Ministry of Environment and Forestry',
        website: 'https://environment.go.ke/',
    },
    {
        logo: '/Partners/ConcilofGovernors.png',
        name: 'Council of Governors',
        website: 'https://cog.go.ke/',
    },
    {
        logo: '/Partners/Andreas.jpg',
        name: 'Andreas Hermes Akademie',
        website: 'https://www.andreas-hermes-akademie.de/en/',
    },
    {
        logo: '/Partners/IFAD.jpeg',
        name: 'International Fund for Agricultural Development',
        website: 'https://ifad.org',
    },
    {
        logo: '/Partners/giz.png',
        name: 'Deutsche Gesellschaft fur Internationale Zusammenarbeit(GIZ) GmbH',
        website: 'https://giz.de/en/',
    },
    {
        logo: '/Partners/FMEGerman.png',
        name: 'Federal Ministry for Environment Nature Conservation and Nuclear safety',
        website: 'https://bmuv.de/en/',
    },
    {
        logo: '/Partners/Agricord.jpeg',
        name: 'AGRICORD',
        website: 'https://agricord.org/',
    },
    {
        logo: '/Partners/Agriterra.png',
        name: 'AGRITERRA',
        website: 'https://agriterra.org/',
    },
    {
        logo: '/Partners/EU.jpg',
        name: 'European Union',
        website: 'https://european-union.europa.eu/index_en',
    },
    {
        logo: '/Partners/FAO.png',
        name: 'Food and Agriculture Organization',
        website: 'https://fao.org/home/en/',
    },
    {
        logo: '/Partners/FMECD.jpg',
        name: 'Federal Ministry for Economic Development',
        website: 'https://bmz.de/en/',
    },
    {
        logo: '/Partners/IKI.png',
        name: 'International Climate Initiative',
        website: 'https://iki-small-grants.de/',
    },
    {
        logo: '/Partners/ILC.png',
        name: 'International Land Coalition',
        website: 'https://www.landcoalition.org/',
    },
    {
        logo: '/Partners/slovakaid.png',
        name: 'SlovakAid',
        website: 'https://slovakaid.sk/en/',
    },
    {
        logo: '/Partners/Welthunger.png',
        name: 'WeltHungerHilfe',
        website: 'https://www.welthungerhilfe.org/',
    },
    {
        logo: '/Partners/WFO.png',
        name: 'World Farmers Organization',
        website: 'https://www.wfo-oma.org/',
    },
    {
        logo: '/Partners/AAA.png',
        name: 'Africa Agribusiness Academy',
        website: 'https://aa-academy.org/who-we-are/about-us',
    },
    {
        logo: '/Partners/cabi.png',
        name: 'Centre for Agriculture and Bioscience International',
        website: 'https://cabi.org/',
    },
    {
        logo: '/Partners/cargill.png',
        name: 'Cargill',
        website: 'https://cargill.com/',
    },
    {
        logo: '/Partners/egerton.png',
        name: 'Egerton University',
        website: 'https://egerton.ac.ke/',
    },
    {
        logo: '/Partners/ElgonKenya.png',
        name: 'Elgon Kenya',
        website: 'https://www.elgonkenya.com/',
    },
    {
        logo: '/Partners/icipe.png',
        name: 'International Centre of Insect Physiology and Ecology ',
        website: 'http://www.icipe.org/',
    },
    {
        logo: '/Partners/iied.png',
        name: 'International Institute for Environment and Development',
        website: 'https://www.iied.org/',
    },
    {
        logo: '/Partners/Kgr.png',
        name: 'Kilimo Grand Resort',
        website: 'https://www.kilimograndresort.co.ke/',
    },
    {
        logo: '/Partners/KilimoTalii.jpg',
        name: 'Kilimo Talii Limited',
        website: 'https://www.kilimotalii.co.ke/',
    },
    {
        logo: '/Partners/PAF.png',
        name: 'PanAfrican Farmers Organization',
        website: 'http://www.pafo-africa.org/en',
    },
    {
        logo: '/Partners/PxD.png',
        name: 'Precision Development',
        website: 'https://precisiondev.org/',
    },
    {
        logo: '/Partners/SEI.png',
        name: 'Stockholm Environment Institute',
        website: 'https://www.sei.org/',
    },
    {
        logo: '/Partners/SilaAfrica.png',
        name: 'SilAfrica',
        website: 'https://silafrica.com/',
    },
    {
        logo: '/Partners/Sistemabio.jpg',
        name: 'Sistema.Bio',
        website: 'https://sistema.bio/',
    },
    {
        logo: '/Partners/solidaridad.png',
        name: 'Solidaridad',
        website: 'https://www.solidaridadnetwork.org/',
    },
];

const Partnerships = () => (
    <div className="w-full">
        <Parallax/>
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">Partnerships</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full px-6 py-10 ">
            {partnerships.map((partner, index) => (
                <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded shadow-lg p-6"
                    key={index}
                >
                    <img src={partner.logo} alt={partner.name} className="w-full mb-4" />
                    <h2 className="text-lg font-bold text-indigo-700 mb-2">{partner.name}</h2>
                </a>
            ))}
        </div>
    </div>
);

export default Partnerships;
