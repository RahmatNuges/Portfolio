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
  }
];
