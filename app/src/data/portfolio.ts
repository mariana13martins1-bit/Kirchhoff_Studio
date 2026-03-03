export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  size: 'small' | 'medium' | 'large';
}

export const vibes = [
  { id: 'all', label: 'All Work' },
  { id: 'sports', label: 'Sports' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'couples', label: 'Couples' },
  { id: 'brands', label: 'Brands' },
  { id: 'nature', label: 'Nature' },
  { id: 'architecture', label: 'Architecture' },
];

export const portfolioItems = [
  // ARCHITECTURE
  { id: 600, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351365/DSC_6752_dfvfeg.jpg', title: 'Modern Perspectives', category: 'architecture', size: 'large' },
  { id: 601, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351361/DSC_6813_op9ku9.jpg', title: 'Urban Symmetry', category: 'architecture', size: 'small' },
  { id: 602, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351357/DSC_6743_qhxkbx.jpg', title: 'Minimalist Lines', category: 'architecture', size: 'medium' },
  { id: 603, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351354/DSC_6734_hzeqyj.jpg', title: 'Shades of Blue', category: 'architecture', size: 'large' },
  { id: 604, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351352/DSC_6724_pkbopc.jpg', title: 'Structural Detail', category: 'architecture', size: 'medium' },
  { id: 605, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351351/DSC_6720_askfop.jpg', title: 'City Geometry', category: 'architecture', size: 'small' },
  
  // SPORTS
  { id: 101, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351220/4EB38828-E743-4807-940D-BC1CB93A9F16_1_105_c_iiibfs.jpg', title: 'Action Focus', category: 'sports', size: 'large' },
  { id: 102, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351200/FBB9F1EA-A0C0-4DB1-B54D-15EFCDFAA84D_1_105_c_umzvex.jpg', title: 'Dynamic Movement', category: 'sports', size: 'small' },
  { id: 103, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351197/E0448B3D-BE59-4907-9E75-D19E9363B44F_1_105_c_xmdhk4.jpg', title: 'Edge of Performance', category: 'sports', size: 'medium' },
  { id: 104, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351195/DF02DEA6-E76B-4E86-BE17-BD39E0887687_1_105_c_gfkpnc.jpg', title: 'Branding Athletics', category: 'sports', size: 'large' },
  { id: 105, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351193/D27307F8-FD73-4308-8E93-E519AB45E5C2_1_105_c_wxqcrr.jpg', title: 'Precision Shot', category: 'sports', size: 'small' },
  { id: 106, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351191/CD3E3159-8AE6-499A-B8F8-700BB9BC1AA3_1_105_c_qyixi6.jpg', title: 'The Hustle', category: 'sports', size: 'medium' },
  { id: 107, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351190/BDFBE6FC-B733-44D7-BE16-2F5301956D8B_1_105_c_hvwbka.jpg', title: 'Peak Intensity', category: 'sports', size: 'large' },
  { id: 108, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351188/BDD200B9-74D5-40C1-AB30-34A48ACB0CC8_1_105_c_yhkhtd.jpg', title: 'Moving narrative', category: 'sports', size: 'small' },
  { id: 109, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351183/153855E3-EEE0-47C6-A410-513C149F723F_1_105_c_rkpwab.jpg', title: 'Endurance', category: 'sports', size: 'medium' },
  { id: 110, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351181/88F29C49-B659-4C57-9203-A977553DF2BE_1_105_c_oxytjk.jpg', title: 'Pure Focus', category: 'sports', size: 'large' },
  { id: 111, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351177/54AB8DEC-5023-4A08-97D8-4BDA9F1E8A5C_1_105_c_llgfu0.jpg', title: 'The Court', category: 'sports', size: 'small' },
  { id: 112, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351174/9F1F3BA1-39DB-4576-8910-1163E44585A3_1_105_c_bre4jd.jpg', title: 'Team Spirits', category: 'sports', size: 'medium' },
  { id: 113, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351172/9D14A906-FA6E-4E7A-8F07-C003A1A95129_1_105_c_dmz0nz.jpg', title: 'Velocity', category: 'sports', size: 'large' },
  { id: 114, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351171/9BCAAD1E-EB0C-4244-82BB-8E6FEBE41AFA_1_105_c_djl21y.jpg', title: 'The Match', category: 'sports', size: 'small' },
  { id: 115, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351168/8C195C1D-4648-4BC5-92FC-C2E4FC7495AF_1_105_c_rhvyag.jpg', title: 'Athlete Soul', category: 'sports', size: 'medium' },
  { id: 116, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351167/5A3AD2F7-88AB-4762-986F-56459FE62773_1_105_c_dunmxh.jpg', title: 'Final Seconds', category: 'sports', size: 'large' },
  { id: 117, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351162/2D34C55F-ECF7-4FB0-81F9-351EB33765F4_1_105_c_i8wmty.jpg', title: 'Golden Hour Sport', category: 'sports', size: 'small' },
  { id: 118, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351158/1DF63641-82D5-4433-8869-79A6A3F78FF3_1_105_c_mle7do.jpg', title: 'The Prep', category: 'sports', size: 'medium' },
  { id: 119, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351156/0F0B5CCF-AC6C-48FD-9713-16C672A2825B_1_105_c_ayxoh0.jpg', title: 'Victory Lap', category: 'sports', size: 'large' },
  
  // PORTRAITS SECTION
  { id: 200, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350798/Facetune_25-12-2025-18-41-54_robtcd.jpg', title: 'Serene Expression', category: 'portraits', size: 'large' },
  { id: 201, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350798/DSC_3269_a6wowm.jpg', title: 'Natural Light', category: 'portraits', size: 'small' },
  { id: 202, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_1812_har1gg.jpg', title: 'Gaze', category: 'portraits', size: 'medium' },
  { id: 203, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3276_jqgvn7.jpg', title: 'Soft Focus', category: 'portraits', size: 'large' },
  { id: 204, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3264_zsepyf.jpg', title: 'Portrait Study', category: 'portraits', size: 'medium' },
  { id: 205, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3180_wsovxm.jpg', title: 'Shadow Play', category: 'portraits', size: 'small' },
  { id: 206, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_2503_shakbg.jpg', title: 'Profile View', category: 'portraits', size: 'medium' },
  { id: 207, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_1829_bgyoj0.jpg', title: 'Introspection', category: 'portraits', size: 'large' },
  { id: 208, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3183_gnmroo.jpg', title: 'The Muse', category: 'portraits', size: 'small' },
  { id: 209, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350795/DSC_2494_a73e39.jpg', title: 'Urban Portrait', category: 'portraits', size: 'medium' },
  { id: 210, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350795/DSC_2493_v0l7uh.jpg', title: 'Street Soul', category: 'portraits', size: 'large' },
  { id: 211, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350794/DSC_1928_fzfcr0.jpg', title: 'Depth of Character', category: 'portraits', size: 'medium' },
  { id: 212, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350793/DSC_1821_nu0foq.jpg', title: 'Contemplation', category: 'portraits', size: 'small' },
  { id: 213, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350792/DSC_1769_cu8iw7.jpg', title: 'Classic Light', category: 'portraits', size: 'large' },
  { id: 214, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350792/DSC_1754_j38bak.jpg', title: 'Connection', category: 'portraits', size: 'medium' },
  { id: 215, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350792/DSC_1776_ysl4lb.jpg', title: 'Studio Mood', category: 'portraits', size: 'small' },

  // COUPLES
  { id: 300, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351323/Facetune_25-10-2025-17-49-07_hpaft2.jpg', title: 'Pure Joy', category: 'couples', size: 'large' },
  { id: 301, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351321/Facetune_25-10-2025-17-48-03_aiihql.jpg', title: 'Sunset Connection', category: 'couples', size: 'small' },
  { id: 302, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351319/Facetune_25-10-2025-17-18-51_aj5b2y.jpg', title: 'Urban Romance', category: 'couples', size: 'medium' },
  { id: 303, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351317/Facetune_25-10-2025-17-14-49_lsiov7.jpg', title: 'The Proposal', category: 'couples', size: 'large' },
  { id: 304, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351315/DSC_9953_fstufl.jpg', title: 'Shared Laughter', category: 'couples', size: 'medium' },
  { id: 305, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351313/DSC_9937_i8sei8.jpg', title: 'Quiet Moments', category: 'couples', size: 'small' },
  { id: 306, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351311/DSC_9806_kbmjpo.jpg', title: 'Park Walk', category: 'couples', size: 'medium' },
  { id: 307, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351309/DSC_9803_lnqmdo.jpg', title: 'Ethereal Bond', category: 'couples', size: 'large' },
  { id: 308, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351307/DSC_9799_pzqeqy.jpg', title: 'Together', category: 'couples', size: 'small' },
  
  // NATURE
  { id: 500, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351261/DSC_5852_ouogrl.jpg', title: 'Untamed light', category: 'nature', size: 'large' },
  { id: 501, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351260/DSC_5801_gs3zrh.jpg', title: 'Mountain Silence', category: 'nature', size: 'small' },
  { id: 502, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351258/DSC_5698_frfbad.jpg', title: 'Morning Glimpse', category: 'nature', size: 'medium' },
  { id: 503, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351258/DSC_5731_h59eo4.jpg', title: 'Green perspective', category: 'nature', size: 'large' },
  { id: 504, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351255/DSC_5696_lcl6tf.jpg', title: 'Misty Peaks', category: 'nature', size: 'medium' },
  { id: 505, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351253/DSC_5691_p0yesa.jpg', title: 'Nature Unfiltered', category: 'nature', size: 'small' },
  { id: 506, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351251/DSC_5579_t80arw.jpg', title: 'Serene Escape', category: 'nature', size: 'medium' },
  { id: 507, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351249/DSC_5509_dmmt1e.jpg', title: 'Drops of gold', category: 'nature', size: 'large' },
  { id: 508, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351248/DSC_5492_oevv6i.jpg', title: 'Creative souls', category: 'nature', size: 'small' },
  { id: 509, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351247/DSC_5440_mxbpzi.jpg', title: 'Solitary resonance', category: 'nature', size: 'medium' },
  { id: 510, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351245/DSC_5392_jsx4i9.jpg', title: 'Quiet Horizon', category: 'nature', size: 'large' },
  
  // BRANDS
  { id: 400, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351222/8F172B53-2279-46A9-8937-A7023E95A89F_pjqijd.jpg', title: 'Graphic narrative', category: 'brands', size: 'large' },
  { id: 401, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351200/F41E50C7-A8CC-448F-9422-3627435666FE_ykghry.jpg', title: 'Minimalist Detail', category: 'brands', size: 'small' },
  { id: 402, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351186/B2043612-A40C-4DCC-832F-7AF2127E69D6_1_105_c_wbptsj.jpg', title: 'Tied Up', category: 'brands', size: 'medium' },
  { id: 403, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351185/B2187C64-93E6-47F1-B089-B0DE99E691D8_1_105_c_lxqhpl.jpg', title: 'Striped Legacy', category: 'brands', size: 'large' },
  { id: 404, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351182/0248A6A9-C1B6-4AC5-A907-4CE67705059F_ghtsel.jpg', title: 'Original Wind', category: 'brands', size: 'medium' },
  { id: 405, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351179/82F6AA66-643B-49E6-8EB7-3D005B132C63_jdi4hq.jpg', title: 'BW DRAMA', category: 'brands', size: 'small' },
  { id: 406, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351175/40AA9C64-FB5D-4396-AA93-BA9377CBCD37_1_105_c_fdqshc.jpg', title: 'Urban Sport', category: 'brands', size: 'medium' },
  { id: 407, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351167/4E660F27-6DDD-4BC4-BB9B-A9B5136ED6E1_mlkben.jpg', title: 'Brand Vision', category: 'brands', size: 'large' },
  { id: 408, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351163/3A5E290A-8B9D-4C04-BE24-E011680BB326_1_105_c_nzlocm.jpg', title: 'Detail Oriented', category: 'brands', size: 'small' },
  { id: 409, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351161/1FDEF871-23E4-4D2F-AABD-A983334CDD15_1_105_c_s06e0t.jpg', title: 'POV', category: 'brands', size: 'medium' },
  { id: 410, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351159/1E0A90C7-FC25-444D-A88A-23958CCC98CE_1_105_c_ppjaww.jpg', title: 'Brown Power', category: 'brands', size: 'large' },
  { id: 411, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351158/0FE44B76-7266-4EC6-8A97-A094ED34D1F7_pb7ilb.jpg', title: 'Graphic', category: 'brands', size: 'medium' },
  { id: 412, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351155/0BFC37DD-C343-481E-B4FF-5DEFBDAE9B62_1_105_c_tznfng.jpg', title: 'Core Values', category: 'brands', size: 'small' },
  { id: 413, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351135/DSC_1695_z3ugkr.jpg', title: 'Before Life', category: 'brands', size: 'medium' },
  { id: 414, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351056/DSC_6035_q9ealy.jpg', title: 'Hands ON', category: 'brands', size: 'large' },
  { id: 415, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351055/DSC_6021_gffvbr.jpg', title: 'Horse POwer', category: 'brands', size: 'small' },
  { id: 416, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351053/DSC_2743_lpidcw.jpg', title: 'Light & Shadow', category: 'brands', size: 'medium' },
  { id: 417, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351052/DSC_2734_ba3nwm.jpg', title: 'Equine focus', category: 'brands', size: 'large' },
  { id: 418, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351051/DSC_1710_g283uc.jpg', title: 'Authentic Vision', category: 'brands', size: 'small' },
  { id: 419, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351050/DSC_1582_x96k4f.jpg', title: 'Innocent play', category: 'brands', size: 'medium' },
  { id: 420, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351048/9EFA01F3-7329-4210-840A-3C915380DC02_1_105_c_lfd0yc.jpg', title: 'Healthcare Focus', category: 'brands', size: 'large' },
  { id: 421, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351047/5DA91B15-1A66-4A5B-B9D1-909C77F30544_1_105_c_gsjxw2.jpg', title: 'Alignment', category: 'brands', size: 'small' },
  { id: 422, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351289/DSC_1150_mgi4zd.jpg', title: 'Brand Celebration', category: 'brands', size: 'large' },
  { id: 423, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351288/DSC_1143_eunbqu.jpg', title: 'Craftsmanship', category: 'brands', size: 'small' },
  { id: 425, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351284/DSC_1112_ko2xs9.jpg', title: 'The Artist', category: 'brands', size: 'large' },
  { id: 426, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351283/DSC_1077_ajk577.jpg', title: 'Ceramic Life', category: 'brands', size: 'small' },

  //ABOUT ME
  { id: 999, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771361418/Face_card_vubk5s.jpg', title: 'Kirchhoff Portrait', category: 'about', size: 'large' },
];