export interface PortfolioItem {
  title: string;
  description: string;
  route: string;
  category: string;
  screenshot: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Website Company Profile',
    description: 'Tunjukkan profesionalisme bisnis Anda dengan website company profile yang elegan dan mudah diakses. Cocok untuk membangun kepercayaan klien baru!',
    route: 'https://arsiteku.vercel.app/',
    category: 'Company Profile',
    screenshot: '/portfolio/Arsiteku.png',
  },
  {
    title: 'Website Villa Management',
    description: 'Bangun website management villa anda yang mempermudah pelanggan anda memilih dan booking villa anda!!',
    route: 'https://villa-lime.vercel.app/',
    category: 'Villa Management',
    screenshot: '/portfolio/Serasi.png',
  },
  {
    title: 'Website Tour & Travel',
    description: 'Berikan pengalaman dan penawaran yang menarik untuk pelanggan mu!!',
    route: 'djalandjalanjogja.my.id',
    category: 'Tour & Travel',
    screenshot: '',
  }
  
];
