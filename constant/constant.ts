export const navLinks = [
    {
        id: 1,
        url: '/index',
        label: 'Home',
    },
    {
        id: 2,
        url: '/#',
        label: 'About Us',
        dropdown: [
            { id: '2-1', url: '/about', label: 'Our Principles', icon: 'FaBalanceScale' },
            { id: '2-2', url: '/about/staff', label: 'Our Staff', icon: 'FiUsers' },
            { id: '2-3', url: '/about/history', label: 'Gym History', icon: 'FiBookOpen' },
            { id: '2-4', url: '/about/testimonials', label: 'Testimonials', icon: 'FiAward' },
        ],
    },
    {
        id: 3,
        url: '/services',
        label: 'More!',
        dropdown: [
            { id: '3-1', url: '/services/birthdays', label: 'Birthday Parties', icon: 'FaBirthdayCake' },
            { id: '3-2', url: '/services/opengym', label: 'Open Gym', icon: 'GiGymBag' },
            { id: '3-3', url: '/services/parentsnightout', label: "Parents' Night Out", icon: 'MdFamilyRestroom' },
        ],
    },
    {
        id: 4,
        url: '/competitions',
        label: 'Competitions',
        dropdown: [
            { id: '4-1', url: '/competitions/dq1', label: 'Designated Qualifier #1', icon: 'Bs1CircleFill' },
            { id: '4-2', url: '/competitions/unitedChallenge25', label: "'24-'25 United Challenge", icon: 'Bs2CircleFill' },
            { id: '4-3', url: '/competitions/winterfest25', label: '2025 Winterfest Invitational', icon: 'Bs3CircleFill' },
        ]
    },
    {
        id: 5,
        url: '/classes',
        label: 'Classes',
    },
    {
        id: 6,
        url: '#',
        label: 'Contact',
    },
];