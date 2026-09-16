type NavItem = {
  id: number;
  title: string;
  url: string;
};

const generateId = (): number => {
  return Math.floor(Math.random() * 1000000) + Date.now();
};

const nav: NavItem[] = [
  {
    id: generateId(),
    title: "Haqqımızda",
    url: "/about",
  },
  {
    id: generateId(),
    title: "Manheim",
    url: "/manheim",
  },
  {
    id: generateId(),
    title: "Əməkdaşlıq",
    url: "/cooperation",
  },
  {
    id: generateId(),
    title: "Əlaqə",
    url: "/contact",
  },
];

const services = [
  {
    id: generateId(),
    title: "Avtomobil çatdırılması",
    url: "/car-delivery",
  },
  {
    id: generateId(),
    title: "Elektromobillər",
    url: "/electric-cars",
  },
  {
    id: generateId(),
    title: "Gömrük rəsmiləşdirilməsi",
    url: "/customs-clearance",
  },
  {
    id: generateId(),
    title: "Rüsum kakulyatoru",
    url: "/duty-calculator",
  },
];

const sidebarNav: NavItem[] = [
  {
    id: generateId(),
    title: "Haqqımızda",
    url: "/about",
  },
  {
    id: generateId(),
    title: "Manheim",
    url: "/manheim",
  },
  {
    id: generateId(),
    title: "Əlaqə",
    url: "/contact",
  },
  {
    id: generateId(),
    title: "Tracking",
    url: "/tracking",
  },
  {
    id: generateId(),
    title: "Üstünlüklərimiz",
    url: "/advantages",
  },
  {
    id: generateId(),
    title: "Konsultasiya",
    url: "/consultation",
  },
];

export { nav, services, sidebarNav, type NavItem };
