export interface PortfolioItem {
  title: string;
  description: string;
  route: string;
  category: string;
  screenshot: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Website Dental Clinic',
    description: 'Bangun kepercayaan pelanggan dengan website yang profesional dan elegan.',
    route: 'https://klinikgigi-three.vercel.app/',
    category: 'Company Profile',
    screenshot: '/portfolio/klinik_gigi.webp',
  },
  {
    title: 'Website Portfolio Arsitektur',
    description: 'Tunjukkan profesionalisme bisnis Anda dengan website company profile yang elegan dan mudah diakses. Cocok untuk membangun kepercayaan klien baru!',
    route: 'https://arsiteku.vercel.app/',
    category: 'Company Profile',
    screenshot: '/portfolio/Arsiteku.webp',
  },
  {
    title: 'Website Villa Management',
    description: 'Bangun website management villa anda yang mempermudah pelanggan anda memilih dan booking villa anda!!',
    route: 'https://villa-lime.vercel.app/',
    category: 'Villa Management',
    screenshot: '/portfolio/Serasi.webp',
  }
];
