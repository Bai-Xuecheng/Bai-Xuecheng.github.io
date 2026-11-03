// Edit this file to update the content across the website.
// Replace all YOUR_* placeholders before publishing the site.

export const profile = {
  name: 'Xuecheng Bai (白雪城）',
  initials: 'X.Bai',
  title: 'Algorithm Engineer',
  affiliation: 'Aviation Traffic Control Technology (SHENZHEN) Co., Ltd.',
  location: 'Shenzhen, China',
  email: 'bai_xuecheng@163.com',
  bio: 'I received my master’s degree from Shenyang Ligong University in March 2026 and joined Aviation Traffic Control Technology (SHENZHEN) Co., Ltd. as an Algorithm Engineer in April 2026. My work focuses on developing computer vision algorithms for practical applications.',
  links: {
    email: 'mailto:bai_xuecheng@163.com',
    googleScholar: 'https://scholar.google.com/citations?user=BF-sfdkAAAAJ&hl=en',
    github: 'https://github.com/Bai-Xuecheng',
    orcid: 'https://orcid.org/0009-0009-1922-3574',
  },
};

export const researchInterests = [
  'Computer Vision',
  'UAV Small Object Detection',
  'Vision-Language Models (VLMs)',
  'On-device Vision-Language Models',
];

export const researchAreas = [
  {
    number: '01',
    title: 'Multi-scale Feature Representation',
    question: 'How can spatial details and semantic information across scales be effectively integrated?',
    description: 'I study feature-fusion architectures that preserve weak local evidence while incorporating broader contextual information, with the goal of improving the representation of small objects in aerial imagery.',
    work: 'MGDFIS',
  },
  {
    number: '02',
    title: 'Collaborative Feature Learning',
    question: 'How can complementary feature extraction pathways be coordinated to improve detection and localization?',
    description: 'I explore multi-path and multi-backbone architectures that explicitly align heterogeneous feature streams before fusion, improving structural consistency and localization-oriented representation.',
    work: 'CollabOD',
  },
];

export const news = [
  {
    date: 'Aug 2026',
    text: 'An updated version of MGDFIS is available on arXiv.',
    href: 'https://arxiv.org/abs/2506.12697',
  },
  {
    date: 'Jun 2026',
    text: 'The CollabOD preprint was updated on arXiv.',
    href: 'https://arxiv.org/abs/2603.05905',
  },
  {
    date: 'Mar 2026',
    text: 'DRWKV was presented at WACV 2026.',
    href: 'https://openaccess.thecvf.com/content/WACV2026/html/Bai_DRWKV_Focusing_on_Object_Edges_for_Low-Light_Image_Enhancement_WACV_2026_paper.html',
  },
];

export const publications = [
  {
    year: '2026',
    title: 'DRWKV: Focusing on Object Edges for Low-Light Image Enhancement',
    image: '/publications/drwkv.png',
    authors: [
      'Xuecheng Bai',
      'Yuxiang Wang',
      'Boyu Hu',
      'Qinyuan Jie',
      'Chuanzhi Xu',
      'Kechen Li',
      'Hongru Xiao',
      'Vera Chung',
    ],
    equalContribution: true,
    equalContributors: ['Xuecheng Bai', 'Yuxiang Wang'],
    venue: 'WACV 2026 (Oral), pp. 1554–1564',
    type: 'Conference Paper',
    links: [
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/WACV2026/html/Bai_DRWKV_Focusing_on_Object_Edges_for_Low-Light_Image_Enhancement_WACV_2026_paper.html' },
      { label: 'PDF', href: 'https://openaccess.thecvf.com/content/WACV2026/papers/Bai_DRWKV_Focusing_on_Object_Edges_for_Low-Light_Image_Enhancement_WACV_2026_paper.pdf' },
      { label: 'Code', href: 'https://github.com/Bai-Xuecheng/DRWKV' },
      { label: 'DOI', href: 'https://doi.org/10.1109/WACV61042.2026.00157' },
    ],
    abstract: 'Low-Light Image Enhancement (LLIE) remains a challenging task, particularly in preserving object edge continuity and fine structural details under extreme illumination degradation. In this paper, we propose a novel model, DRWKV (Detailed Receptance Weighted Key Value), which integrates our proposed Global Edge Retinex (GER) theory, enabling effective decoupling of illumination and edge structures for enhanced edge fidelity. Secondly, we introduce Evolving WKV Attention, a spiral-scanning mechanism that captures spatial edge continuity and models irregular structures more effectively. Thirdly, we design the Bilateral Spectrum Aligner Block (Bi-SAB) and a tailored MS2-Loss to jointly align luminance and chrominance features, improving visual naturalness and mitigating artifacts. Extensive experiments on five LLIE benchmarks demonstrate that DRWKV achieves leading performance in PSNR, SSIM, and NIQE while maintaining low computational complexity. Furthermore, DRWKV enhances downstream performance in low-light multi-object tracking tasks, validating its generalization capabilities.',
  },
  {
    year: '2025',
    title: 'MGDFIS: Multi-scale Global-detail Feature Integration Strategy for Small Object Detection',
    image: '/publications/mgdfis.png',
    authors: [
      'Yuxiang Wang',
      'Xuecheng Bai',
      'Chuanzhi Xu',
      'Ying Zhou',
      'Weidong Cai',
    ],
    equalContribution: true,
    equalContributors: ['Yuxiang Wang', 'Xuecheng Bai'],
    venue: 'arXiv preprint, arXiv:2506.12697 (updated Aug 2026)',
    type: 'Preprint',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2506.12697' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2506.12697' },
      { label: 'Code', href: 'https://github.com/Bai-Xuecheng/MGDFIS' },
    ],
    abstract: 'Small-object detection in Unmanned Aerial Vehicle (UAV) imagery requires preserving weak local evidence while using broader context to separate tiny foreground targets from cluttered backgrounds. Existing multi-scale fusion methods improve feature aggregation, but they often add computation or blur fine details during repeated cross-scale fusion. The central challenge is to balance low-SNR target preservation, clutter suppression, and efficient cross-scale context exchange. To address this challenge, we propose the Multi-scale Global-detail Feature Integration Strategy (MGDFIS), a neck-level feature-fusion strategy that couples global context exchange, local-detail recovery, and pixellevel foreground-background recalibration. MGDFIS integrates three coordinated modules: FusionLock-TSS Attention for stabilizing spectral-spatial responses, Globaldetail Integration for combining long-range mixing with local detail capture, and Dynamic Pixel Attention for reweighting compact foreground regions. On the controlled VisDrone setting, YOLO26m + MGDFIS improves AP50:95from 25.7 to 30.2 and AP50 from 37.2 to 44.2 over the YOLO26m baseline, with 96.1 GFLOPs. Additional datasetspecific evaluations report 38.9 AP50 and 21.9 AP50:95 on UAVDT and 97.4 AP50 on CARPK.',
  },
  {
    year: '2026',
    title: 'CollabOD: Collaborative Multi-Backbone with Cross-scale Vision for UAV Small Object Detection',
    image: '/publications/collabod.png',
    authors: [
      'Xuecheng Bai',
      'Yuxiang Wang',
      'Chuanzhi Xu',
      'Kang Han',
      'Jun Guo',
      'Pengfei Ye',
    ],
    equalContribution: true,
    equalContributors: ['Xuecheng Bai', 'Yuxiang Wang'],
    venue: 'arXiv preprint, arXiv:2603.05905 (2026)',
    type: 'Preprint',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2603.05905' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2603.05905' },
      { label: 'Code', href: 'https://github.com/Bai-Xuecheng/CollabOD' },
    ],
    abstract: 'Small object detection in unmanned aerial vehicle (UAV) imagery is challenging because high-altitude viewpoints produce severe scale variation, weak structural cues, and tight computational budgets. Existing lightweight detectors usually fuse multi-scale features after downsampling, where boundary and texture details have already been attenuated and heterogeneous feature streams may be spatially misaligned. To address these issues, we propose CollabOD, a collaborative detection framework that preserves structural details, aligns cross-path features before fusion, and keeps the detection head lightweight at inference time. CollabOD combines a Dual-Path Fusion Stem, a Dense Aggregation Block, a Bilateral Reweighting Module, and a Unified Detail-Aware Head to strengthen localization-oriented representation while limiting extra computation. On VisDrone, CollabOD obtains 52.4 AP50, 30.8 AP75, and 29.9 AP50:95 with 65.5 GFLOPs; on UAVDT it reaches 31.2 AP50 and 17.4 AP50:95; and on AI-TOD it reaches 45.4 AP50 and 20.0 AP50:95 at 137 FPS. ',
  },
  {
    year: '2026',
    title: '基于Zero-DCE的视觉弱光增强SLAM技术研究',
    image: '/publications/基于Zero-DCE的视觉弱光增强SLAM技术研究.png',
    authors: ['温承超', '白雪城'],
    venue: '通信与信息技术, 2026(2): 59–64, 81',
    type: 'Journal Article',
    links: [
      { label: 'CNKI', href: 'https://kns.cnki.net/kcms2/article/abstract?v=gURMMg4C657H6BDH_ZjoY3uv0tS5DGMplgJ0a-GtNDPWcmMqGt0zBM1BiTDPBXIIPNU9e049ll4Au8sQzuyzj2BI_IEy313u5JGfNetK3i3fCTy6yJJFwfwqWLCLD2IyfKoGmoBPqAbMBAbNHkQ7NXbThvsX8XrgM4GRBZh9skXIeklXu9el-Q==' },
    ],
    abstract: '视觉SLAM技术在地下车库等低光照环境中面临特征提取困难、定位精度下降等严峻挑战。针对此问题，提出了一种基于改进Zero-DCE的视觉弱光增强SLAM融合框架。该框架在继承Zero-DCE无需配对数据训练优势的基础上，设计了轻量级多尺度特征提取模块（LM-FEM）和双向交互融合模块（BIFM）。LM-FEM通过深度可分离卷积和自适应权重分配策略，有效提升多尺度特征提取能力；BIFM实现了高低频特征的双向交互，在增强图像亮度的同时保留关键纹理信息。实验表明，方法在LOL数据集上PSNR达29.62,SSIM达0.878；在ETH3D-SLAM数据集上，相比原始ZeroDCE，绝对位姿误差降低约30%。地下车库场景实测显示，特征点提取数量和分布质量显著改善，验证了所提方法在低光环境下的有效性和实用性。',
  },
  {
    year: '2025',
    title: 'Based on an improved Zero-DCE++ low-light enhanced object detection algorithm',
    image: '/publications/Zero-DCE++.png',
    authors: ['Xuecheng Bai', 'Hongwei Gao', 'Zhanpeng Zhao', 'Zhiwen Yan'],
    venue: 'Proceedings of SPIE, Vol. 13555 (MEAI 2024), pp. 940–945, 2025',
    type: 'Conference Paper',
    links: [
      { label: 'PDF', href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13555/1355540/Based-on-an-improved-Zero-DCE-low-light-enhanced-object/10.1117/12.3064933.short' },
      { label: 'DOI', href: 'https://doi.org/10.1117/12.3064933' },
    ],
    abstract: 'Low-light image quality often suffers from noise, color distortion, and reduced contrast, challenging accurate object detection. Traditional enhancement methods can lead to over-processing and semantic information loss. This study presents an enhanced low-light image detection model based on an improved Zero-DCE++ algorithm, integrated with YOLOv8 for high-speed, accurate detection. Key improvements include the CBAM attention mechanism to enhance feature extraction in low-light areas, DCNv2 for capturing complex object details, and a Local Region Brightness Curve Enhancement Module to prevent overexposure in well-lit areas. The proposed model was tested on the Night Drone dataset, where it achieved superior performance in image quality and detection accuracy compared to state-of-the-art methods. This approach demonstrates significant potential for applications requiring reliable object detection in challenging low-light conditions.',
  },
];

export const academicService = [
  { role: 'Program Committee Member', organization: 'The International Conference on Intelligent Computing (ICIC)', period: ' 2025' },
  { role: 'Program Committee Member', organization: 'The International Conference on Intelligent Computing (ICIC)', period: ' 2026' },
  { role: 'Program Committee Member', organization: 'The Pacific Rim International Conference on Artificial Intelligence (PRICAI)', period: ' 2025' },
  { role: 'Program Committee Member', organization: 'The Pacific Rim International Conference on Artificial Intelligence (PRICAI)', period: ' 2026' },
  { role: 'Reviewer', organization: 'The IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)', period: ' 2025' },
];

export const education = [
  {
    degree: 'Master’s Degree',
    institution: 'Shenyang Ligong University',
    period: 'Graduated March 2026',
  },
];
