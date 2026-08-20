export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  subcategory?: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

export interface Vibe {
  id: string;
  label: string;
}

// Top-level portfolio categories
export const vibes: Vibe[] = [
  { id: 'events', label: 'Events' },
  { id: 'sports', label: 'Sports' },
  { id: 'brands', label: 'Brands' },
];

// Subcategories, keyed by parent category id. Filtering by a subcategory
// still matches on the parent `category` field plus the `subcategory` field.
export const subVibes: Record<string, Vibe[]> = {
  events: [
    { id: 'weddings', label: 'Weddings' },
    { id: 'couples', label: 'Couples' },
    { id: 'portraits', label: 'Portraits' },
  ],
  brands: [
    { id: 'campaigns', label: 'Brand Campaigns' },
    { id: 'fitness', label: 'Fitness' },
  ],
};

export const portfolioItems = [
  // SPORTS
  { id: 130, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397111/DSC_4300_vawo2q.jpg', title: 'Full send', category: 'sports', size: 'large' },
  { id: 131, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397109/DSC_4202_ihcprl.jpg', title: 'Race pace', category: 'sports', size: 'wide' },
  { id: 132, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397108/DSC_4153_rfslfv.jpg', title: 'Drive', category: 'sports', size: 'small' },
  { id: 133, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397106/DSC_4141_pgpfsx.jpg', title: 'On edge', category: 'sports', size: 'large' },
  { id: 134, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397105/DSC_4104_xlango.jpg', title: 'Raw push', category: 'sports', size: 'medium' },
  { id: 135, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397102/DSC_4038_iyfkon.jpg', title: 'Fight mode', category: 'sports', size: 'wide' },
  { id: 136, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397100/DSC_3958_mfnpkj.jpg', title: 'Breaking point', category: 'sports', size: 'wide' },
  { id: 137, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397098/DSC_3759_bpe9m6.jpg', title: 'Fast cut', category: 'sports', size: 'medium' },
  { id: 138, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397097/DSC_3757_za1ggb.jpg', title: 'Sprint', category: 'sports', size: 'small' },
  { id: 139, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397095/DSC_3754_fnzgml.jpg', title: 'Locked in', category: 'sports', size: 'large' },
  { id: 140, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397093/DSC_3679_cj0hzt.jpg', title: 'Grind', category: 'sports', size: 'medium' },
  { id: 141, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397091/DSC_3673_o0qnfz.jpg', title: 'Push through', category: 'sports', size: 'small' },
  { id: 142, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397090/DSC_3558_wbyulo.jpg', title: 'Game face', category: 'sports', size: 'large' },
  { id: 143, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397089/DSC_3523_qxftzj.jpg', title: 'In motion', category: 'sports', size: 'medium' },
  { id: 144, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397088/DSC_3521_ipjjhp.jpg', title: 'Never stop', category: 'sports', size: 'small' },
  { id: 145, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397087/DSC_3239_eegzor.jpg', title: 'Pure will', category: 'sports', size: 'large' },

  // PORTRAITS SECTION
  { id: 201, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350798/DSC_3269_a6wowm.jpg', title: 'Real moments', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 215, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396656/DSC_4357_k6hiom.jpg', title: 'Still presence', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 216, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396656/DSC_3216_yyqryg.jpg', title: 'Quiet confidence', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 203, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3276_jqgvn7.jpg', title: 'Motherhood', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 217, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396654/DSC_4349_ql6yzc.jpg', title: 'Soft light', category: 'events', subcategory: 'portraits', size: 'medium' },
  { id: 205, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3180_wsovxm.jpg', title: 'Raw beauty', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 218, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396654/DSC_3206_euuv6o.jpg', title: 'In frame', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 208, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3183_gnmroo.jpg', title: 'The Muse', category: 'events', subcategory: 'portraits', size: 'small' },

  // COUPLES
  { id: 312, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396078/DSC_2903_nt9tz5.jpg', title: 'Hold still', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 308, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396093/DSC_2901_kceodx.jpg', title: 'Close to you', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 302, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351319/Facetune_25-10-2025-17-18-51_aj5b2y.jpg', title: 'Moments after', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 309, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396084/DSC_2936_ukh7f3.jpg', title: 'Tender pull', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 307, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351309/DSC_9803_lnqmdo.jpg', title: 'Simply Yes', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 310, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396080/DSC_2911_ggv56o.jpg', title: 'Undone', category: 'events', subcategory: 'couples', size: 'small' },
  { id: 311, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396079/DSC_2909_serjye.jpg', title: 'Golden hour', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 306, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351311/DSC_9806_kbmjpo.jpg', title: 'The Moment', category: 'events', subcategory: 'couples', size: 'medium' },

  // BRANDS
  { id: 413, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396539/DSC_3831_ma7ghk.jpg', title: 'Editorial eye', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 414, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396537/DSC_4088_jhqori.jpg', title: 'Product story', category: 'brands', subcategory: 'campaigns', size: 'wide' },
  { id: 415, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396530/DSC_4047_u19uer.jpg', title: 'Clean lines', category: 'brands', subcategory: 'campaigns', size: 'small' },
  { id: 416, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396528/DSC_3943_app91t.jpg', title: 'Brand identity', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 417, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396525/DSC_4134_fri4wl.jpg', title: 'Mood driven', category: 'brands', subcategory: 'campaigns', size: 'medium' },
  { id: 418, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396524/DSC_4087_xq7url.jpg', title: 'Visual tone', category: 'brands', subcategory: 'campaigns', size: 'wide' },
  { id: 419, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396522/DSC_3826_sc5ahj.jpg', title: 'Curated frame', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 420, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396521/DSC_3802_pkbiix.jpg', title: 'Sharp detail', category: 'brands', subcategory: 'campaigns', size: 'medium' },

  //ABOUT ME
  { id: 999, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771361418/Face_card_vubk5s.jpg', title: 'Kirchhoff Portrait', category: 'about', size: 'large' },
];







