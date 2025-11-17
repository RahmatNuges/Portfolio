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
    screenshot: '/portfolio/Arsiteku.webp',
  },
  {
    title: 'Website Villa Management',
    description: 'Bangun website management villa anda yang mempermudah pelanggan anda memilih dan booking villa anda!!',
    route: 'https://villa-lime.vercel.app/',
    category: 'Villa Management',
    screenshot: '/portfolio/Serasi.webp',
  },
  {
    title: 'Website Catalog Brand Clothing',
    description: 'Tampilkan koleksi fashion streetwear dengan katalog interaktif untuk brand clothing modern.',
    route: 'https://doudletfasy.id/',
    category: 'Fashion Catalog',
    screenshot: '/portfolio/Clothing.webp',
  },
  {
    title: 'Website Rental Mobil',
    description: 'Permudah pelanggan menemukan dan memesan layanan rental mobil secara online dengan informasi armada lengkap.',
    route: 'https://gibranrentcar.com/',
    category: 'Rental Transportasi',
    screenshot: '/portfolio/Rental.webp',
  },
  {
    title: 'Website Jasa Ahli Kunci',
    description: 'Solusi ahli kunci profesional 24/7 untuk kebutuhan mobil dan rumah dengan layanan darurat cepat.',
    route: 'https://ahlikunciakkhay.com/',
    category: 'Jasa Layanan',
    screenshot: '/portfolio/ahliKunci.webp',
  }
  
];
