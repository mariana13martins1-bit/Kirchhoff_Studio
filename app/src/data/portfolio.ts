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
  { id: 'street', label: 'Street' },
  { id: 'couples', label: 'Couples' },
  { id: 'brands', label: 'Brands' },
  { id: 'nature', label: 'Nature' },
  { id: 'architecture', label: 'Architecture' },
];

export const portfolioItems = [
  // ARCHITECTURE
  { id: 600, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351365/DSC_6752_dfvfeg.jpg', title: 'Modern Perspectives', category: 'architecture', size: 'large' },
  { id: 601, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772664932/DSC_2431_epsiwx.jpg', title: 'Urban Form', category: 'architecture', size: 'medium' }, 
  { id: 607, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772664222/DSC_2302_phxmxa.jpg', title: 'Geometric Shadows', category: 'architecture', size: 'medium' }, 
  { id: 602, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351361/DSC_6813_op9ku9.jpg', title: 'Urban Symmetry', category: 'architecture', size: 'small' },
  { id: 603, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772664931/DSC_2382_xviw9c.jpg', title: 'Architectural Rhythm', category: 'architecture', size: 'large' }, 
  { id: 604, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351357/DSC_6743_qhxkbx.jpg', title: 'Minimalist Lines', category: 'architecture', size: 'medium' },
  { id: 605, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772664931/DSC_2386_ejq9qv.jpg', title: 'Symmetry', category: 'architecture', size: 'small' },
  { id: 606, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772664939/DSC_2441_xxylzi.jpg', title: 'Glass & Steel', category: 'architecture', size: 'large' },
  { id: 608, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351354/DSC_6734_hzeqyj.jpg', title: 'Shades of Blue', category: 'architecture', size: 'large' },
  { id: 609, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772664935/DSC_2442_izzcz3.jpg', title: 'Linear Horizon', category: 'architecture', size: 'small' },
  { id: 610, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351352/DSC_6724_pkbopc.jpg', title: 'Structural Detail', category: 'architecture', size: 'large' },
  { id: 611, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351351/DSC_6720_askfop.jpg', title: 'City Geometry', category: 'architecture', size: 'small' },

  //STREET
  { id: 700, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665669/DSC_2427_z7jbzv.jpg', title: 'Urban Rhythm', category: 'street', size: 'large' },
  { id: 701, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665627/DSC_2425_kzr4tg.jpg', title: 'City Motion', category: 'street', size: 'medium' },
  { id: 702, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665567/DSC_2416_i2kccx.jpg', title: 'Modern Texture', category: 'street', size: 'small' },
  { id: 703, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665566/DSC_2405_uplwi6.jpg', title: 'Structural Flow', category: 'street', size: 'large' },
  { id: 704, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665565/DSC_2402_tqqz0c.jpg', title: 'Street Perspective', category: 'street', size: 'medium' },

  // SPORTS
  { id: 101, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666078/DSC_2820_gn3ao7.jpg', title: 'Peak Performance', category: 'sports', size: 'large' }, // New
  { id: 102, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351220/4EB38828-E743-4807-940D-BC1CB93A9F16_1_105_c_iiibfs.jpg', title: 'Action Focus', category: 'sports', size: 'medium' },
  { id: 106, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666072/DSC_2787_rxt4up.jpg', title: 'Elite Hustle', category: 'sports', size: 'medium' }, // New
  { id: 105, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351200/FBB9F1EA-A0C0-4DB1-B54D-15EFCDFAA84D_1_105_c_umzvex.jpg', title: 'Dynamic Movement', category: 'sports', size: 'small' },
  { id: 127, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351162/2D34C55F-ECF7-4FB0-81F9-351EB33765F4_1_105_c_i8wmty.jpg', title: 'Pure Focus', category: 'sports', size: 'small' },
  { id: 104, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665842/DSC_2609_w2thwq.jpg', title: 'Technical Detail', category: 'sports', size: 'large' }, // New
  { id: 107, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351197/E0448B3D-BE59-4907-9E75-D19E9363B44F_1_105_c_xmdhk4.jpg', title: 'Elite Focus', category: 'sports', size: 'large' },
  { id: 110, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351195/DF02DEA6-E76B-4E86-BE17-BD39E0887687_1_105_c_gfkpnc.jpg', title: 'Technical Performance', category: 'sports', size: 'large' },
  { id: 111, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666067/DSC_2761_yojzkr.jpg', title: 'Steady Grit', category: 'sports', size: 'small' }, // New
  { id: 112, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351193/D27307F8-FD73-4308-8E93-E519AB45E5C2_1_105_c_wxqcrr.jpg', title: 'Precision Shot', category: 'sports', size: 'medium' },
  { id: 113, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665836/DSC_2512_d3b8z3.jpg', title: 'Motion Captured', category: 'sports', size: 'large' }, // New
  { id: 114, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351191/CD3E3159-8AE6-499A-B8F8-700BB9BC1AA3_1_105_c_qyixi6.jpg', title: 'The Hustle', category: 'sports', size: 'small' },
  { id: 115, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665834/DSC_2508_lyq9uj.jpg', title: 'Field Focus', category: 'sports', size: 'medium' }, // New
  { id: 116, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351190/BDFBE6FC-B733-44D7-BE16-2F5301956D8B_1_105_c_hvwbka.jpg', title: 'Momentum', category: 'sports', size: 'large' },
  { id: 117, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665833/DSC_2496_ji0q5c.jpg', title: 'Endurance Path', category: 'sports', size: 'small' }, // New
  { id: 118, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351188/BDD200B9-74D5-40C1-AB30-34A48ACB0CC8_1_105_c_yhkhtd.jpg', title: 'Moving Narrative', category: 'sports', size: 'medium' },
  { id: 119, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351183/153855E3-EEE0-47C6-A410-513C149F723F_1_105_c_rkpwab.jpg', title: 'Endurance', category: 'sports', size: 'large' },
  { id: 120, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351181/88F29C49-B659-4C57-9203-A977553DF2BE_1_105_c_oxytjk.jpg', title: 'Steady Motion', category: 'sports', size: 'medium' },
  { id: 121, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351177/54AB8DEC-5023-4A08-97D8-4BDA9F1E8A5C_1_105_c_llgfu0.jpg', title: 'The Court', category: 'sports', size: 'small' },
  { id: 109, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772665838/DSC_2524_wlibgx.jpg', title: 'Active Lines', category: 'sports', size: 'medium' }, // New
  { id: 122, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351174/9F1F3BA1-39DB-4576-8910-1163E44585A3_1_105_c_bre4jd.jpg', title: 'Zoom', category: 'sports', size: 'large' },
  { id: 123, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351172/9D14A906-FA6E-4E7A-8F07-C003A1A95129_1_105_c_dmz0nz.jpg', title: 'Edge of Performance', category: 'sports', size: 'medium' },
  { id: 108, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666070/DSC_2781_afjcom.jpg', title: 'Urban Athlete', category: 'sports', size: 'small' }, // New
  { id: 124, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351171/9BCAAD1E-EB0C-4244-82BB-8E6FEBE41AFA_1_105_c_djl21y.jpg', title: 'Step Up', category: 'sports', size: 'small' },
  { id: 103, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666077/DSC_2809_ip6hrh.jpg', title: 'Determined Pace', category: 'sports', size: 'small' }, // New
  { id: 125, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351168/8C195C1D-4648-4BC5-92FC-C2E4FC7495AF_1_105_c_rhvyag.jpg', title: 'Athlete Soul', category: 'sports', size: 'medium' },
  { id: 126, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351167/5A3AD2F7-88AB-4762-986F-56459FE62773_1_105_c_dunmxh.jpg', title: 'Strength', category: 'sports', size: 'large' },
  { id: 128, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351158/1DF63641-82D5-4433-8869-79A6A3F78FF3_1_105_c_mle7do.jpg', title: 'Peak Intensity', category: 'sports', size: 'medium' },
  { id: 129, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351156/0F0B5CCF-AC6C-48FD-9713-16C672A2825B_1_105_c_ayxoh0.jpg', title: 'Victory Lap', category: 'sports', size: 'large' },

  // PORTRAITS SECTION
  { id: 201, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350798/DSC_3269_a6wowm.jpg', title: 'Real moments', category: 'portraits', size: 'small' },
  { id: 202, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_1812_har1gg.jpg', title: 'Gaze', category: 'portraits', size: 'medium' },
  { id: 203, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3276_jqgvn7.jpg', title: 'Motherhood', category: 'portraits', size: 'large' },
  { id: 204, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3264_zsepyf.jpg', title: 'Gentle focus', category: 'portraits', size: 'medium' },
  { id: 214, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772667123/DSC_2339_rzrpkc.jpg', title: 'Winter motion', category: 'portraits', size: 'large' },
  { id: 205, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3180_wsovxm.jpg', title: 'Raw beauty', category: 'portraits', size: 'small' },
  { id: 206, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_2503_shakbg.jpg', title: 'Twin flames', category: 'portraits', size: 'medium' },
  { id: 207, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_1829_bgyoj0.jpg', title: 'Curated style', category: 'portraits', size: 'large' },
  { id: 213, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772667127/DSC_2350_vuxkgb.jpg', title: 'Winter motion', category: 'portraits', size: 'medium' },
  { id: 208, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3183_gnmroo.jpg', title: 'The Muse', category: 'portraits', size: 'small' },
  { id: 210, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350795/DSC_2493_v0l7uh.jpg', title: 'Soft Embrace', category: 'portraits', size: 'large' },
  { id: 211, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350794/DSC_1928_fzfcr0.jpg', title: 'Authentic glow', category: 'portraits', size: 'medium' },
  { id: 212, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350793/DSC_1821_nu0foq.jpg', title: 'Winter motion', category: 'portraits', size: 'small' },

  // COUPLES
  { id: 300, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351323/Facetune_25-10-2025-17-49-07_hpaft2.jpg', title: 'Pure Joy', category: 'couples', size: 'large' },
  { id: 301, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351321/Facetune_25-10-2025-17-48-03_aiihql.jpg', title: 'Bridal Energy', category: 'couples', size: 'small' },
  { id: 302, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351319/Facetune_25-10-2025-17-18-51_aj5b2y.jpg', title: 'Moments after', category: 'couples', size: 'medium' },
  { id: 307, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351309/DSC_9803_lnqmdo.jpg', title: 'Simply Yes', category: 'couples', size: 'large' },
  { id: 304, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351315/DSC_9953_fstufl.jpg', title: 'Shared Laughter', category: 'couples', size: 'medium' },
  { id: 306, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351311/DSC_9806_kbmjpo.jpg', title: 'The Moment', category: 'couples', size: 'medium' },
  { id: 305, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351313/DSC_9937_i8sei8.jpg', title: 'Perfect promise', category: 'couples', size: 'small' },
  
  // NATURE
  { id: 500, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666968/DSC_2376_gbs6as.jpg', title: 'Golden Canopy', category: 'nature', size: 'large' }, // New
  { id: 501, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351261/DSC_5852_ouogrl.jpg', title: 'Untamed light', category: 'nature', size: 'medium' },
  { id: 502, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666966/DSC_2325_vrj4zs.jpg', title: 'Verdant Path', category: 'nature', size: 'small' }, // New
  { id: 503, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666966/DSC_2320_rwfawg.jpg', title: 'Wild Bloom', category: 'nature', size: 'large' }, // New
  { id: 504, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351260/DSC_5801_gs3zrh.jpg', title: 'Mountain Silence', category: 'nature', size: 'medium' },
  { id: 505, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666960/DSC_2218_fzijvu.jpg', title: 'Deep Woods', category: 'nature', size: 'small' }, // New
  { id: 506, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351258/DSC_5698_frfbad.jpg', title: 'Morning Glimpse', category: 'nature', size: 'large' },
  { id: 507, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666958/DSC_2216_saj5mf.jpg', title: 'Sunlit Fern', category: 'nature', size: 'medium' }, // New
  { id: 508, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351258/DSC_5731_h59eo4.jpg', title: 'Green perspective', category: 'nature', size: 'large' },
  { id: 509, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666959/DSC_2186_omxu7i.jpg', title: 'Forest Solitude', category: 'nature', size: 'small' }, // New
  { id: 510, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666957/DSC_2163_ftbmzg.jpg', title: 'Natural Contrast', category: 'nature', size: 'medium' }, // New
  { id: 511, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351255/DSC_5696_lcl6tf.jpg', title: 'Misty Peaks', category: 'nature', size: 'large' },
  { id: 512, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666956/DSC_2158_vvfbfi.jpg', title: 'Earth Tones', category: 'nature', size: 'small' }, // New
  { id: 513, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351253/DSC_5691_p0yesa.jpg', title: 'Nature Unfiltered', category: 'nature', size: 'medium' },
  { id: 514, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666955/DSC_2074_nosq7m.jpg', title: 'Hidden Creek', category: 'nature', size: 'large' }, // New
  { id: 515, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351251/DSC_5579_t80arw.jpg', title: 'Serene Escape', category: 'nature', size: 'medium' },
  { id: 516, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666952/DSC_2073_wrmyjz.jpg', title: 'Organic Detail', category: 'nature', size: 'small' }, // New
  { id: 517, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351249/DSC_5509_dmmt1e.jpg', title: 'Drops of gold', category: 'nature', size: 'large' },
  { id: 518, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666947/DSC_2038_tbh51w.jpg', title: 'Shadow Play', category: 'nature', size: 'medium' }, // New
  { id: 519, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351248/DSC_5492_oevv6i.jpg', title: 'Creative souls', category: 'nature', size: 'small' },
  { id: 520, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1772666660/DSC_2366_wlfi0t.jpg', title: 'Lush Horizon', category: 'nature', size: 'large' }, // New
  { id: 521, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351247/DSC_5440_mxbpzi.jpg', title: 'Solitary resonance', category: 'nature', size: 'medium' },
  { id: 522, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351245/DSC_5392_jsx4i9.jpg', title: 'Quiet Horizon', category: 'nature', size: 'large' },
  
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
  { id: 414, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351056/DSC_6035_q9ealy.jpg', title: 'Hands ON', category: 'brands', size: 'large' },
  { id: 415, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351055/DSC_6021_gffvbr.jpg', title: 'Horse POwer', category: 'brands', size: 'small' },
  { id: 416, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351053/DSC_2743_lpidcw.jpg', title: 'Light & Shadow', category: 'brands', size: 'medium' },
  { id: 417, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351052/DSC_2734_ba3nwm.jpg', title: 'Equine focus', category: 'brands', size: 'large' },
  { id: 418, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351051/DSC_1710_g283uc.jpg', title: 'Authentic Vision', category: 'brands', size: 'small' },
  { id: 419, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351050/DSC_1582_x96k4f.jpg', title: 'Innocent play', category: 'brands', size: 'medium' },
  { id: 420, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351048/9EFA01F3-7329-4210-840A-3C915380DC02_1_105_c_lfd0yc.jpg', title: 'Healthcare Focus', category: 'brands', size: 'large' },
  { id: 421, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351047/5DA91B15-1A66-4A5B-B9D1-909C77F30544_1_105_c_gsjxw2.jpg', title: 'Alignment', category: 'brands', size: 'small' },
  { id: 422, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351289/DSC_1150_mgi4zd.jpg', title: 'Brand Celebration', category: 'brands', size: 'large' },
  { id: 213, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350792/DSC_1769_cu8iw7.jpg', title: 'Winter edge', category: 'brands', size: 'large' },
  { id: 215, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350792/DSC_1776_ysl4lb.jpg', title: 'Urban layers', category: 'brands', size: 'small' },
  { id: 423, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351288/DSC_1143_eunbqu.jpg', title: 'Craftsmanship', category: 'brands', size: 'small' },
  { id: 425, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351284/DSC_1112_ko2xs9.jpg', title: 'The Artist', category: 'brands', size: 'large' },
  { id: 426, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351283/DSC_1077_ajk577.jpg', title: 'Ceramic Life', category: 'brands', size: 'small' },

  //ABOUT ME
  { id: 999, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771361418/Face_card_vubk5s.jpg', title: 'Kirchhoff Portrait', category: 'about', size: 'large' },
];