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
  { id: 'all', label: 'All Work' },
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
  { id: 101, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666078/DSC_2820_gn3ao7.jpg', title: 'Peak Performance', category: 'sports', size: 'large' },
  { id: 130, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397111/DSC_4300_vawo2q.jpg', title: 'Full send', category: 'sports', size: 'large' },
  { id: 102, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351220/4EB38828-E743-4807-940D-BC1CB93A9F16_1_105_c_iiibfs.jpg', title: 'Action Focus', category: 'sports', size: 'medium' },
  { id: 131, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397109/DSC_4202_ihcprl.jpg', title: 'Race pace', category: 'sports', size: 'wide' },
  { id: 132, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397108/DSC_4153_rfslfv.jpg', title: 'Drive', category: 'sports', size: 'small' },
  { id: 105, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351200/FBB9F1EA-A0C0-4DB1-B54D-15EFCDFAA84D_1_105_c_umzvex.jpg', title: 'Dynamic Movement', category: 'sports', size: 'small' },
  { id: 133, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397106/DSC_4141_pgpfsx.jpg', title: 'On edge', category: 'sports', size: 'large' },
  { id: 127, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351162/2D34C55F-ECF7-4FB0-81F9-351EB33765F4_1_105_c_i8wmty.jpg', title: 'Pure Focus', category: 'sports', size: 'small' },
  { id: 134, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397105/DSC_4104_xlango.jpg', title: 'Raw push', category: 'sports', size: 'medium' },
  { id: 104, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665842/DSC_2609_w2thwq.jpg', title: 'Technical Detail', category: 'sports', size: 'large' },
  { id: 135, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397102/DSC_4038_iyfkon.jpg', title: 'Fight mode', category: 'sports', size: 'wide' },
  { id: 107, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351197/E0448B3D-BE59-4907-9E75-D19E9363B44F_1_105_c_xmdhk4.jpg', title: 'Elite Focus', category: 'sports', size: 'large' },
  { id: 136, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397100/DSC_3958_mfnpkj.jpg', title: 'Breaking point', category: 'sports', size: 'wide' },
  { id: 110, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351195/DF02DEA6-E76B-4E86-BE17-BD39E0887687_1_105_c_gfkpnc.jpg', title: 'Technical Performance', category: 'sports', size: 'large' },
  { id: 137, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397098/DSC_3759_bpe9m6.jpg', title: 'Fast cut', category: 'sports', size: 'medium' },
  { id: 111, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666067/DSC_2761_yojzkr.jpg', title: 'Steady Grit', category: 'sports', size: 'small' },
  { id: 138, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397097/DSC_3757_za1ggb.jpg', title: 'Sprint', category: 'sports', size: 'small' },
  { id: 112, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351193/D27307F8-FD73-4308-8E93-E519AB45E5C2_1_105_c_wxqcrr.jpg', title: 'Precision Shot', category: 'sports', size: 'medium' },
  { id: 139, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397095/DSC_3754_fnzgml.jpg', title: 'Locked in', category: 'sports', size: 'large' },
  { id: 113, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665836/DSC_2512_d3b8z3.jpg', title: 'Motion Captured', category: 'sports', size: 'large' },
  { id: 140, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397093/DSC_3679_cj0hzt.jpg', title: 'Grind', category: 'sports', size: 'medium' },
  { id: 115, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665834/DSC_2508_lyq9uj.jpg', title: 'Field Focus', category: 'sports', size: 'medium' },
  { id: 141, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397091/DSC_3673_o0qnfz.jpg', title: 'Push through', category: 'sports', size: 'small' },
  { id: 116, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351190/BDFBE6FC-B733-44D7-BE16-2F5301956D8B_1_105_c_hvwbka.jpg', title: 'Momentum', category: 'sports', size: 'large' },
  { id: 142, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397090/DSC_3558_wbyulo.jpg', title: 'Game face', category: 'sports', size: 'large' },
  { id: 118, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351188/BDD200B9-74D5-40C1-AB30-34A48ACB0CC8_1_105_c_yhkhtd.jpg', title: 'Moving Narrative', category: 'sports', size: 'medium' },
  { id: 143, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397089/DSC_3523_qxftzj.jpg', title: 'In motion', category: 'sports', size: 'medium' },
  { id: 109, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665838/DSC_2524_wlibgx.jpg', title: 'Active Lines', category: 'sports', size: 'medium' },
  { id: 144, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397088/DSC_3521_ipjjhp.jpg', title: 'Never stop', category: 'sports', size: 'small' },
  { id: 122, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351174/9F1F3BA1-39DB-4576-8910-1163E44585A3_1_105_c_bre4jd.jpg', title: 'Zoom', category: 'sports', size: 'large' },
  { id: 145, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397087/DSC_3239_eegzor.jpg', title: 'Pure will', category: 'sports', size: 'large' },
  { id: 123, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351172/9D14A906-FA6E-4E7A-8F07-C003A1A95129_1_105_c_dmz0nz.jpg', title: 'Edge of Performance', category: 'sports', size: 'medium' },
  { id: 124, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351171/9BCAAD1E-EB0C-4244-82BB-8E6FEBE41AFA_1_105_c_djl21y.jpg', title: 'Step Up', category: 'sports', size: 'small' },
  { id: 103, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666077/DSC_2809_ip6hrh.jpg', title: 'Determined Pace', category: 'sports', size: 'small' },
  { id: 125, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351168/8C195C1D-4648-4BC5-92FC-C2E4FC7495AF_1_105_c_rhvyag.jpg', title: 'Athlete Soul', category: 'sports', size: 'medium' },
  { id: 126, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351167/5A3AD2F7-88AB-4762-986F-56459FE62773_1_105_c_dunmxh.jpg', title: 'Strength', category: 'sports', size: 'large' },
  { id: 128, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351158/1DF63641-82D5-4433-8869-79A6A3F78FF3_1_105_c_mle7do.jpg', title: 'Peak Intensity', category: 'sports', size: 'medium' },
  { id: 129, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351156/0F0B5CCF-AC6C-48FD-9713-16C672A2825B_1_105_c_ayxoh0.jpg', title: 'Victory Lap', category: 'sports', size: 'large' },

  // PORTRAITS SECTION
  { id: 201, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350798/DSC_3269_a6wowm.jpg', title: 'Real moments', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 215, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396656/DSC_4357_k6hiom.jpg', title: 'Still presence', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 202, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_1812_har1gg.jpg', title: 'Gaze', category: 'events', subcategory: 'portraits', size: 'medium' },
  { id: 216, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396656/DSC_3216_yyqryg.jpg', title: 'Quiet confidence', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 203, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3276_jqgvn7.jpg', title: 'Motherhood', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 217, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396654/DSC_4349_ql6yzc.jpg', title: 'Soft light', category: 'events', subcategory: 'portraits', size: 'medium' },
  { id: 214, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772667123/DSC_2339_rzrpkc.jpg', title: 'Winter motion', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 205, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3180_wsovxm.jpg', title: 'Raw beauty', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 218, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396654/DSC_3206_euuv6o.jpg', title: 'In frame', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 206, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_2503_shakbg.jpg', title: 'Twin flames', category: 'events', subcategory: 'portraits', size: 'medium' },
  { id: 210, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_1829_bgyoj0.jpg', title: 'Soft Embrace', category: 'events', subcategory: 'portraits', size: 'large' },
  { id: 208, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3183_gnmroo.jpg', title: 'The Muse', category: 'events', subcategory: 'portraits', size: 'small' },
  { id: 211, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350794/DSC_1928_fzfcr0.jpg', title: 'Authentic glow', category: 'events', subcategory: 'portraits', size: 'medium' },

  // COUPLES
  { id: 312, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396078/DSC_2903_nt9tz5.jpg', title: 'Hold still', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 308, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396093/DSC_2901_kceodx.jpg', title: 'Close to you', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 302, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351319/Facetune_25-10-2025-17-18-51_aj5b2y.jpg', title: 'Moments after', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 309, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396084/DSC_2936_ukh7f3.jpg', title: 'Tender pull', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 307, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351309/DSC_9803_lnqmdo.jpg', title: 'Simply Yes', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 310, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396080/DSC_2911_ggv56o.jpg', title: 'Undone', category: 'events', subcategory: 'couples', size: 'small' },
  { id: 304, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351315/DSC_9953_fstufl.jpg', title: 'Shared Laughter', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 311, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396079/DSC_2909_serjye.jpg', title: 'Golden hour', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 306, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351311/DSC_9806_kbmjpo.jpg', title: 'The Moment', category: 'events', subcategory: 'couples', size: 'medium' },
  { id: 300, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351323/Facetune_25-10-2025-17-49-07_hpaft2.jpg', title: 'Pure Joy', category: 'events', subcategory: 'couples', size: 'large' },
  { id: 305, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351313/DSC_9937_i8sei8.jpg', title: 'Perfect promise', category: 'events', subcategory: 'couples', size: 'small' },

  // BRANDS
  { id: 400, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351222/8F172B53-2279-46A9-8937-A7023E95A89F_pjqijd.jpg', title: 'Graphic narrative', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 413, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396539/DSC_3831_ma7ghk.jpg', title: 'Editorial eye', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 402, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351186/B2043612-A40C-4DCC-832F-7AF2127E69D6_1_105_c_wbptsj.jpg', title: 'Tied Up', category: 'brands', subcategory: 'campaigns', size: 'medium' },
  { id: 414, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396537/DSC_4088_jhqori.jpg', title: 'Product story', category: 'brands', subcategory: 'campaigns', size: 'wide' },
  { id: 403, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351185/B2187C64-93E6-47F1-B089-B0DE99E691D8_1_105_c_lxqhpl.jpg', title: 'Striped Legacy', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 415, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396530/DSC_4047_u19uer.jpg', title: 'Clean lines', category: 'brands', subcategory: 'campaigns', size: 'small' },
  { id: 405, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351179/82F6AA66-643B-49E6-8EB7-3D005B132C63_jdi4hq.jpg', title: 'BW DRAMA', category: 'brands', subcategory: 'campaigns', size: 'small' },
  { id: 416, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396528/DSC_3943_app91t.jpg', title: 'Brand identity', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 408, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351163/3A5E290A-8B9D-4C04-BE24-E011680BB326_1_105_c_nzlocm.jpg', title: 'Detail Oriented', category: 'brands', subcategory: 'campaigns', size: 'small' },
  { id: 417, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396525/DSC_4134_fri4wl.jpg', title: 'Mood driven', category: 'brands', subcategory: 'campaigns', size: 'medium' },
  { id: 409, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351161/1FDEF871-23E4-4D2F-AABD-A983334CDD15_1_105_c_s06e0t.jpg', title: 'POV', category: 'brands', subcategory: 'campaigns', size: 'medium' },
  { id: 418, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396524/DSC_4087_xq7url.jpg', title: 'Visual tone', category: 'brands', subcategory: 'campaigns', size: 'wide' },
  { id: 410, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351159/1E0A90C7-FC25-444D-A88A-23958CCC98CE_1_105_c_ppjaww.jpg', title: 'Brown Power', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 419, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396522/DSC_3826_sc5ahj.jpg', title: 'Curated frame', category: 'brands', subcategory: 'campaigns', size: 'large' },
  { id: 411, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351158/0FE44B76-7266-4EC6-8A97-A094ED34D1F7_pb7ilb.jpg', title: 'Graphic', category: 'brands', subcategory: 'campaigns', size: 'medium' },
  { id: 420, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396521/DSC_3802_pkbiix.jpg', title: 'Sharp detail', category: 'brands', subcategory: 'campaigns', size: 'medium' },
  { id: 412, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351155/0BFC37DD-C343-481E-B4FF-5DEFBDAE9B62_1_105_c_tznfng.jpg', title: 'Core Values', category: 'brands', subcategory: 'campaigns', size: 'small' },

  //ABOUT ME
  { id: 999, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771361418/Face_card_vubk5s.jpg', title: 'Kirchhoff Portrait', category: 'about', size: 'large' },
];







