export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  subcategory?: string;
  subsubcategory?: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

export interface Vibe {
  id: string;
  label: string;
}

// Top-level portfolio categories
export const vibes: Vibe[] = [
  { id: 'brands', label: 'Brands' },
  { id: 'events', label: 'Events' },
  { id: 'sports', label: 'Sports' },
  { id: 'portraits', label: 'Portraits' },
];

// Subcategories, keyed by parent category id. Filtering by a subcategory
// still matches on the parent `category` field plus the `subcategory` field.
export const subVibes: Record<string, Vibe[]> = {
  events: [
    { id: 'couples', label: 'Couples' },
    { id: 'weddings', label: 'Weddings' },
  ],
  brands: [
    { id: 'jungle_mate', label: 'Jungle Mate' },
    { id: 'personal_training', label: 'Personal Training' },
  ],
  sports: [
    { id: 'beach_volley', label: 'Beach Volley' },
    { id: 'fitness', label: 'Fitness' },
  ],
};

// Sub-subcategories, keyed by parent subcategory id. Filtering by a
// sub-subcategory still matches on the parent `category` and `subcategory`
// fields plus the `subsubcategory` field.
export const subSubVibes: Record<string, Vibe[]> = {
  jungle_mate: [
    { id: 'vol1', label: 'Vol 1' },
    { id: 'vol2', label: 'Vol 2' },
  ],
  couples: [
    { id: 'h_p', label: 'H&P' },
    { id: 'm_c', label: 'M&C' },
  ],
  weddings: [
    { id: 'a_k', label: 'A&K' },
  ],
};

// Curated highlight photos shown at the category-level view (a category is
// selected but no subcategory yet). Keyed by category id, ordered list of
// portfolioItem ids. Categories with no entry here just show their full
// item list in that view until a curated list is defined for them too.
export const highlights: Partial<Record<string, number[]>> = {
  brands: [
    // Vol 2
    446, 468, 464, 470, 469, 455, 486, 484, 473,
    // Vol 1
    440, 429, 424, 431,
    // Personal Training
    418, 415, 419,
  ],
  events: [
    // Weddings
    326, 325, 318,
    // Couples
    306, 327, 302, 309, 311,
  ],
  sports: [
    // Beach Volley
    150, 166, 169,152, 158, 163,
    // Fitness
    132, 131, 136, 145, 144,
  ],
};

export const portfolioItems = [
  // BRANDS
  // Jungle Mate
  // Vol 1
  { id: 421, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230166/DSC_6254_enyxzp.jpg', title: 'DSC 6254 Enyxzp', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 424, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230173/DSC_6253_nati4u.jpg', title: 'DSC 6253 Nati4u', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 423, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230172/DSC_6213_ftqxzg.jpg', title: 'DSC 6213 Ftqxzg', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'small' },
  { id: 422, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230172/DSC_6225_rmlxrr.jpg', title: 'DSC 6225 Rmlxrr', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 425, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230173/DSC_6255_ud5c0m.jpg', title: 'DSC 6255 Ud5c0m', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 427, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230174/DSC_6234_g8pzx8.jpg', title: 'DSC 6234 G8pzx8', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 428, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230178/DSC_6274_c0hxsj.jpg', title: 'DSC 6274 C0hxsj', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 429, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230178/DSC_6360_ykur0w.jpg', title: 'DSC 6360 Ykur0w', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'small' },
  { id: 430, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230179/DSC_6280_dmgawm.jpg', title: 'DSC 6280 Dmgawm', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 431, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230181/DSC_6288_erpdlo.jpg', title: 'DSC 6288 Erpdlo', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 432, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230182/DSC_6365_t95uoz.jpg', title: 'DSC 6365 T95uoz', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 433, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230183/DSC_6346_ivt6zl.jpg', title: 'DSC 6346 Ivt6zl', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'small' },
  { id: 434, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230184/DSC_6431_ansiey.jpg', title: 'DSC 6431 Ansiey', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 435, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230185/DSC_6418_aioqrf.jpg', title: 'DSC 6418 Aioqrf', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 436, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230188/DSC_6439_u5lw2t.jpg', title: 'DSC 6439 U5lw2t', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 437, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230189/DSC_6547_o9ggyh.jpg', title: 'DSC 6547 O9ggyh', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 440, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230192/DSC_6446_c8thrc.jpg', title: 'DSC 6446 C8thrc', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 439, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230190/DSC_6437_a40vox.jpg', title: 'DSC 6437 A40vox', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'small' },
  { id: 441, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230195/DSC_6550_vxqeae.jpg', title: 'DSC 6550 Vxqeae', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 442, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230196/DSC_6560_vn0mmy.jpg', title: 'DSC 6560 Vn0mmy', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'small' },
  { id: 438, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230190/DSC_6424_ti9vt1.jpg', title: 'DSC 6424 Ti9vt1', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },
  { id: 443, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230196/DSC_6555_ma1fdx.jpg', title: 'DSC 6555 Ma1fdx', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'medium' },
  { id: 444, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787230199/DSC_6563_dwqeon.jpg', title: 'DSC 6563 Dwqeon', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol1', size: 'large' },

  // Vol 2
  { id: 446, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231059/DSC_8694_nkeuy2.jpg', title: 'DSC 8694 Nkeuy2', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 445, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231057/DSC_8668_vaxhb9.jpg', title: 'DSC 8668 Vaxhb9', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 447, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231062/DSC_8797_jp3g8z.jpg', title: 'DSC 8797 Jp3g8z', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 448, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231065/DSC_8839_xacvos.jpg', title: 'DSC 8839 Xacvos', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 449, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231068/DSC_8673_oilqjq.jpg', title: 'DSC 8673 Oilqjq', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 451, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231072/DSC_8915_ziriid.jpg', title: 'DSC 8915 Ziriid', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 452, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231073/DSC_8823_pn7tcv.jpg', title: 'DSC 8823 Pn7tcv', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 453, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231076/DSC_8803_aldjou.jpg', title: 'DSC 8803 Aldjou', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 454, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231078/DSC_8920_sncax4.jpg', title: 'DSC 8920 Sncax4', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 455, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231081/DSC_8762_icelwr.jpg', title: 'DSC 8762 Icelwr', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 456, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231081/DSC_8944_q5fbtz.jpg', title: 'DSC 8944 Q5fbtz', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 457, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231086/DSC_8950_su3w4c.jpg', title: 'DSC 8950 Su3w4c', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 458, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231087/DSC_8958_xw29o3.jpg', title: 'DSC 8958 Xw29o3', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 459, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231087/DSC_8999_auuoqz.jpg', title: 'DSC 8999 Auuoqz', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 450, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231070/DSC_8887_mclwqp.jpg', title: 'DSC 8887 Mclwqp', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 460, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231088/DSC_9008_qhgwbl.jpg', title: 'DSC 9008 Qhgwbl', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 461, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231088/DSC_8945_ddc6zy.jpg', title: 'DSC 8945 Ddc6zy', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 462, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231094/DSC_9170_bdznak.jpg', title: 'DSC 9170 Bdznak', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 463, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231095/DSC_9010_qkppq9.jpg', title: 'DSC 9010 Qkppq9', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 464, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231096/DSC_9061_jbfkap.jpg', title: 'DSC 9061 Jbfkap', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 465, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231098/DSC_9098_pfne2i.jpg', title: 'DSC 9098 Pfne2i', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 466, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231099/DSC_9016_ek8i51.jpg', title: 'DSC 9016 Ek8i51', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 467, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231100/DSC_9091_fpfszx.jpg', title: 'DSC 9091 Fpfszx', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 468, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231102/DSC_9191_azotjo.jpg', title: 'DSC 9191 Azotjo', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 469, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231106/DSC_9248_eopyp2.jpg', title: 'DSC 9248 Eopyp2', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 470, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231107/DSC_9263_or5ijm.jpg', title: 'DSC 9263 Or5ijm', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 471, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231107/DSC_9290_fvucuv.jpg', title: 'DSC 9290 Fvucuv', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 472, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231109/DSC_9315_fks8i9.jpg', title: 'DSC 9315 Fks8i9', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 473, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231110/DSC_9311_xycfyr.jpg', title: 'DSC 9311 Xycfyr', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 474, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231111/DSC_9298_cmr2nd.jpg', title: 'DSC 9298 Cmr2nd', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 475, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231112/DSC_9358_fdhjkt.jpg', title: 'DSC 9358 Fdhjkt', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 476, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231115/DSC_9331_zclh7p.jpg', title: 'DSC 9331 Zclh7p', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 477, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231116/DSC_9396_zaqllh.jpg', title: 'DSC 9396 Zaqllh', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 478, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231121/DSC_9417_xlepg2.jpg', title: 'DSC 9417 Xlepg2', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 479, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231122/DSC_9337_rmezrg.jpg', title: 'DSC 9337 Rmezrg', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 480, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231123/DSC_9386_fbcarx.jpg', title: 'DSC 9386 Fbcarx', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 481, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231123/DSC_9361_gq2mbv.jpg', title: 'DSC 9361 Gq2mbv', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'wide' },
  { id: 482, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231126/DSC_9422_uwyupw.jpg', title: 'DSC 9422 Uwyupw', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 483, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231126/DSC_9389_odrdxx.jpg', title: 'DSC 9389 Odrdxx', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 484, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231129/DSC_9404_xkmlrs.jpg', title: 'DSC 9404 Xkmlrs', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 485, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231133/DSC_9493_mevxll.jpg', title: 'DSC 9493 Mevxll', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 486, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231133/DSC_9431_q552rd.jpg', title: 'DSC 9431 Q552rd', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 487, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231133/DSC_9502_nvfdmj.jpg', title: 'DSC 9502 Nvfdmj', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 488, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231137/DSC_9440_pez3jp.jpg', title: 'DSC 9440 Pez3jp', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },
  { id: 489, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231137/DSC_9427_qgiy9n.jpg', title: 'DSC 9427 Qgiy9n', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'large' },
  { id: 490, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231138/DSC_9520_oowuay.jpg', title: 'DSC 9520 Oowuay', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'medium' },
  { id: 491, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787231152/DSC_9272_qji8xx.jpg', title: 'DSC 9272 Qji8xx', category: 'brands', subcategory: 'jungle_mate', subsubcategory: 'vol2', size: 'small' },

  // Personal Training
  { id: 413, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396539/DSC_3831_ma7ghk.jpg', title: 'Editorial eye', category: 'brands', subcategory: 'personal_training', size: 'large' },
  { id: 414, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396537/DSC_4088_jhqori.jpg', title: 'Product story', category: 'brands', subcategory: 'personal_training', size: 'wide' },
  { id: 415, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396530/DSC_4047_u19uer.jpg', title: 'Clean lines', category: 'brands', subcategory: 'personal_training', size: 'small' },
  { id: 416, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396528/DSC_3943_app91t.jpg', title: 'Brand identity', category: 'brands', subcategory: 'personal_training', size: 'large' },
  { id: 417, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396525/DSC_4134_fri4wl.jpg', title: 'Mood driven', category: 'brands', subcategory: 'personal_training', size: 'medium' },
  { id: 418, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396524/DSC_4087_xq7url.jpg', title: 'Visual tone', category: 'brands', subcategory: 'personal_training', size: 'wide' },
  { id: 419, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396522/DSC_3826_sc5ahj.jpg', title: 'Curated frame', category: 'brands', subcategory: 'personal_training', size: 'large' },
  { id: 420, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396521/DSC_3802_pkbiix.jpg', title: 'Sharp detail', category: 'brands', subcategory: 'personal_training', size: 'medium' },

  // EVENTS
  // Couples
  { id: 307, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351309/DSC_9803_lnqmdo.jpg', title: 'Simply Yes', category: 'events', subcategory: 'couples', subsubcategory: 'm_c', size: 'large' },
  { id: 308, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396093/DSC_2901_kceodx.jpg', title: 'Close to you', category: 'events', subcategory: 'couples', subsubcategory: 'h_p', size: 'small' },
  { id: 302, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351319/Facetune_25-10-2025-17-18-51_aj5b2y.jpg', title: 'Moments after', category: 'events', subcategory: 'couples', subsubcategory: 'm_c', size: 'large' },
  { id: 309, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396084/DSC_2936_ukh7f3.jpg', title: 'Tender pull', category: 'events', subcategory: 'couples', subsubcategory: 'h_p', size: 'medium' },
  { id: 312, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396078/DSC_2903_nt9tz5.jpg', title: 'Hold still', category: 'events', subcategory: 'couples', subsubcategory: 'h_p', size: 'small' },
  { id: 310, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396080/DSC_2911_ggv56o.jpg', title: 'Undone', category: 'events', subcategory: 'couples', subsubcategory: 'h_p', size: 'small' },
  { id: 311, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396079/DSC_2909_serjye.jpg', title: 'Golden hour', category: 'events', subcategory: 'couples', subsubcategory: 'h_p', size: 'large' },
  { id: 306, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351311/DSC_9806_kbmjpo.jpg', title: 'The Moment', category: 'events', subcategory: 'couples', subsubcategory: 'm_c', size: 'medium' },
  { id: 327, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351317/Facetune_25-10-2025-17-14-49_lsiov7.jpg', title: 'Facetune 17 14 49', category: 'events', subcategory: 'couples', subsubcategory: 'm_c', size: 'medium' },

  // Weddings
  { id: 313, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254680/DSC_5443_cm9p4m.jpg', title: 'DSC 5443 Cm9p4m', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'large' },
  { id: 314, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254683/DSC_5450_ziweei.jpg', title: 'DSC 5450 Ziweei', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'medium' },
  { id: 315, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254695/DSC_5500_kvrlik.jpg', title: 'DSC 5500 Kvrlik', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'small' },
  { id: 316, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254698/DSC_5511_xsm4yu.jpg', title: 'DSC 5511 Xsm4yu', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'large' },
  { id: 317, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254700/DSC_5537_ps0kfz.jpg', title: 'DSC 5537 Ps0kfz', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'medium' },
  { id: 318, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254700/DSC_5531_du6c4g.jpg', title: 'DSC 5531 Du6c4g', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'small' },
  { id: 319, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254705/DSC_5543_na3mdy.jpg', title: 'DSC 5543 Na3mdy', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'medium' },
  { id: 320, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254706/DSC_5568_yqum1s.jpg', title: 'DSC 5568 Yqum1s', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'small' },
  { id: 321, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254709/DSC_5612_v2vkkt.jpg', title: 'DSC 5612 V2vkkt', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'large' },
  { id: 322, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254710/DSC_5615_hjt3ti.jpg', title: 'DSC 5615 Hjt3ti', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'medium' },
  { id: 323, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254714/DSC_5635_lhqeag.jpg', title: 'DSC 5635 Lhqeag', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'small' },
  { id: 324, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254715/DSC_5640_etzo7s.jpg', title: 'DSC 5640 Etzo7s', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'medium' },
  { id: 325, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254717/DSC_5642_y3gvxh.jpg', title: 'DSC 5642 Y3gvxh', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'large' },
  { id: 326, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254720/DSC_5664_nsfygd.jpg', title: 'DSC 5664 Nsfygd', category: 'events', subcategory: 'weddings', subsubcategory: 'a_k', size: 'small' },

  // PORTRAITS
  { id: 201, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350798/DSC_3269_a6wowm.jpg', title: 'Real moments', category: 'portraits', size: 'small' },
  { id: 215, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396656/DSC_4357_k6hiom.jpg', title: 'Still presence', category: 'portraits', size: 'large' },
  { id: 216, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396656/DSC_3216_yyqryg.jpg', title: 'Quiet confidence', category: 'portraits', size: 'small' },
  { id: 203, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3276_jqgvn7.jpg', title: 'Motherhood', category: 'portraits', size: 'large' },
  { id: 217, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396654/DSC_4349_ql6yzc.jpg', title: 'Soft light', category: 'portraits', size: 'medium' },
  { id: 205, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3180_wsovxm.jpg', title: 'Raw beauty', category: 'portraits', size: 'small' },
  { id: 218, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777396654/DSC_3206_euuv6o.jpg', title: 'In frame', category: 'portraits', size: 'large' },
  { id: 208, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3183_gnmroo.jpg', title: 'The Muse', category: 'portraits', size: 'small' },

  // SPORTS
  // Beach Volley
  { id: 152, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254385/DSC_7189-2_nr3ldc.jpg', title: 'DSC 7189 2 Nr3ldc', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 147, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254375/DSC_6587_bu4m7j.jpg', title: 'DSC 6587 Bu4m7j', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 148, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254378/DSC_6808_qrdfrt.jpg', title: 'DSC 6808 Qrdfrt', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 149, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254379/DSC_6987_xslnkx.jpg', title: 'DSC 6987 Xslnkx', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 150, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254383/DSC_7189_xxtraa.jpg', title: 'DSC 7189 Xxtraa', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 151, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254384/DSC_7157_cee1qt.jpg', title: 'DSC 7157 Cee1qt', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 146, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254375/DSC_6760_qq4byq.jpg', title: 'DSC 6760 Qq4byq', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 153, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254390/DSC_7364_rmpjvf.jpg', title: 'DSC 7364 Rmpjvf', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 154, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254391/DSC_7382_sbxepv.jpg', title: 'DSC 7382 Sbxepv', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 155, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254394/DSC_7393_mfma3r.jpg', title: 'DSC 7393 Mfma3r', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 156, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254395/DSC_6994_igsx8q.jpg', title: 'DSC 6994 Igsx8q', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 157, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254399/DSC_7780_tzuygd.jpg', title: 'DSC 7780 Tzuygd', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 158, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254400/DSC_7248_jk1gh5.jpg', title: 'DSC 7248 Jk1gh5', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 159, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254401/DSC_7798_ybs0xn.jpg', title: 'DSC 7798 Ybs0xn', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 160, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254402/DSC_7655_ixhqwi.jpg', title: 'DSC 7655 Ixhqwi', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 161, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254403/DSC_7944_vwhsne.jpg', title: 'DSC 7944 Vwhsne', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 162, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254405/DSC_8199_ehjm4l.jpg', title: 'DSC 8199 Ehjm4l', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 163, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254407/DSC_7889_jpzjyh.jpg', title: 'DSC 7889 Jpzjyh', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 164, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254409/DSC_8526_hudbjg.jpg', title: 'DSC 8526 Hudbjg', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 165, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254411/DSC_8472_sfceb6.jpg', title: 'DSC 8472 Sfceb6', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 166, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254411/DSC_8589_s6frqw.jpg', title: 'DSC 8589 S6frqw', category: 'sports', subcategory: 'beach_volley', size: 'large' },
  { id: 167, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254412/DSC_8505_wsjok1.jpg', title: 'DSC 8505 Wsjok1', category: 'sports', subcategory: 'beach_volley', size: 'medium' },
  { id: 168, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254413/DSC_8578_nrfzhh.jpg', title: 'DSC 8578 Nrfzhh', category: 'sports', subcategory: 'beach_volley', size: 'small' },
  { id: 169, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1787254414/DSC_8609_hwhvxi.jpg', title: 'DSC 8609 Hwhvxi', category: 'sports', subcategory: 'beach_volley', size: 'medium' },

  // Fitness
  { id: 130, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397111/DSC_4300_vawo2q.jpg', title: 'Full send', category: 'sports', subcategory: 'fitness', size: 'large' },
  { id: 131, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397109/DSC_4202_ihcprl.jpg', title: 'Race pace', category: 'sports', subcategory: 'fitness', size: 'wide' },
  { id: 132, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397108/DSC_4153_rfslfv.jpg', title: 'Drive', category: 'sports', subcategory: 'fitness', size: 'small' },
  { id: 133, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397106/DSC_4141_pgpfsx.jpg', title: 'On edge', category: 'sports', subcategory: 'fitness', size: 'large' },
  { id: 134, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397105/DSC_4104_xlango.jpg', title: 'Raw push', category: 'sports', subcategory: 'fitness', size: 'medium' },
  { id: 135, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397102/DSC_4038_iyfkon.jpg', title: 'Fight mode', category: 'sports', subcategory: 'fitness', size: 'wide' },
  { id: 136, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397100/DSC_3958_mfnpkj.jpg', title: 'Breaking point', category: 'sports', subcategory: 'fitness', size: 'wide' },
  { id: 138, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397097/DSC_3757_za1ggb.jpg', title: 'Sprint', category: 'sports', subcategory: 'fitness', size: 'small' },
  { id: 139, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397095/DSC_3754_fnzgml.jpg', title: 'Locked in', category: 'sports', subcategory: 'fitness', size: 'large' },
  { id: 140, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397093/DSC_3679_cj0hzt.jpg', title: 'Grind', category: 'sports', subcategory: 'fitness', size: 'medium' },
  { id: 144, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397088/DSC_3521_ipjjhp.jpg', title: 'Never stop', category: 'sports', subcategory: 'fitness', size: 'small' },
  { id: 145, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1777397087/DSC_3239_eegzor.jpg', title: 'Pure will', category: 'sports', subcategory: 'fitness', size: 'large' },

  // ABOUT ME
  { id: 999, image: 'https://res.cloudinary.com/djaacn6yd/image/upload/v1771361418/Face_card_vubk5s.jpg', title: 'Kirchhoff Portrait', category: 'about', size: 'large' },
];
