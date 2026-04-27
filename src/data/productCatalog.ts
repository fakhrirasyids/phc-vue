import dev1 from '@/assets/pet/dev1.png'
import dev2 from '@/assets/pet/dev2.png'
import dev3 from '@/assets/pet/dev3.png'
import dev4 from '@/assets/pet/dev4.png'
import dev5 from '@/assets/pet/dev5.png'
import dev6 from '@/assets/pet/dev6.png'
import pcrHero from '@/assets/pet/pcr-product-hero.png'
import lateralHero from '@/assets/pet/lateralproducthero.png'
import xrayHero from '@/assets/pet/xrayproducthero.png'
import pcrProduct from '@/assets/pet/pcr-product.png'
import lateralProduct from '@/assets/pet/lateralproduct.png'
import xrayProduct from '@/assets/pet/xrayproduct.png'
import veterinarySoftware from '@/assets/pet/veterinarysoftware.png'
import xraySoftware from '@/assets/pet/xrayapp.png'
import market1 from '@/assets/pet/market1.jpg'
import market2 from '@/assets/pet/market2.jpg'
import market3 from '@/assets/pet/market3.jpg'
import health1 from '@/assets/pet/health1.png'
import health2 from '@/assets/pet/health2.png'
import health3 from '@/assets/pet/health3.png'
import animalDisease from '@/assets/pet/animaldisease.jpg'
import scalableCompanion from '@/assets/pet/scalablecompanion.png'

export const productDetailPages = ['product-pcr', 'product-lateral-flow', 'product-xray'] as const
export const comingSoonProductPages = [
  'product-mini-cube',
  'product-pet-health-kiosk',
  'product-cro',
  'product-booking',
  'product-cro-booking',
] as const

export const productPageNames = [...productDetailPages, ...comingSoonProductPages] as const

export type ProductDetailPageName = typeof productDetailPages[number]
export type ProductPageName = typeof productPageNames[number]

export const productSummaries: Array<{
  title: string
  category: string
  desc: string
  image: string
  bg: string
  page: ProductPageName
}> = [
  {
    title: 'PCR Molecular Diagnostics',
    category: 'Diagnostics',
    desc: 'Advanced PCR testing capabilities offering rapid detection of infectious diseases with unprecedented accuracy.',
    image: dev1,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    page: 'product-pcr',
  },
  {
    title: 'Lateral Flow Rapid Test',
    category: 'Diagnostics',
    desc: 'Compact and reliable rapid tests for immediate screening of common veterinary conditions.',
    image: dev2,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    page: 'product-lateral-flow',
  },
  {
    title: 'Mini Cube Analyzer',
    category: 'Diagnostics',
    desc: 'A revolutionary hematology and biochemistry analyzer for the modern, space-conscious clinic.',
    image: dev3,
    bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
    page: 'product-mini-cube',
  },
  {
    title: 'X-Ray Device for Pets',
    category: 'Imaging',
    desc: 'Next-generation digital radiography tailored specifically for veterinary anatomy with lower radiation exposure.',
    image: dev4,
    bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
    page: 'product-xray',
  },
  {
    title: 'Pet Health Kiosk',
    category: 'Smart Systems',
    desc: 'An automated intake and triage system that captures vital signs, weight, and owner questionnaires before the doctor enters the room.',
    image: dev5,
    bg: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
    page: 'product-pet-health-kiosk',
  },
  {
    title: 'Pet CRO & Booking System',
    category: 'Platform',
    desc: 'Integrated software that connects every device, schedule, and patient record into a single clinical view.',
    image: dev6,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    page: 'product-cro-booking',
  },
]

export const productNavItems = [
  { label: 'PCR Molecular Diagnostics', page: 'product-pcr' },
  { label: 'Lateral Flow Rapid Test', page: 'product-lateral-flow' },
  { label: 'Mini Cube Analyzer', page: 'product-mini-cube' },
  { label: 'X-Ray Device for Pets', page: 'product-xray' },
  { label: 'Pet Health Kiosk', page: 'product-pet-health-kiosk' },
  { label: 'CRO for Pets', page: 'product-cro' },
  { label: 'Veterinary Booking System', page: 'product-booking' },
] satisfies Array<{ label: string; page: ProductPageName }>

export const comingSoonProducts: Record<ProductPageName, string> = {
  'product-pcr': 'PCR Molecular Diagnostics',
  'product-lateral-flow': 'Lateral Flow Rapid Test',
  'product-xray': 'X-Ray Device for Pets',
  'product-mini-cube': 'Mini Cube Analyzer',
  'product-pet-health-kiosk': 'Pet Health Kiosk',
  'product-cro': 'CRO for Pets',
  'product-booking': 'Veterinary Booking System',
  'product-cro-booking': 'Pet CRO & Booking System',
}

export const productDetails = {
  'product-pcr': {
    heroTitle: 'Rapid Veterinary Molecular',
    heroSubtitle: 'Diagnostics Canine & Feline Periodontal qPCR',
    heroImage: pcrHero,
    productImage: pcrProduct,
    introTitle: 'qPCR-DX 1 for Veterinary Clinics',
    introBody: 'An expanding companion-animal qPCR menu covering oral health, respiratory disease, gastrointestinal infection, vector-borne disease, and specialty molecular testing.',
    heroStats: [
      { label: '40-Min Rapid Amplification', icon: 'timer' },
      { label: 'Single-Dose Lyophilized Beads', icon: 'pipette' },
      { label: 'Room Temperature Storage & Transport', icon: 'thermometer' },
    ],
    features: [
      { title: 'Single-Dose Lyophilized Bead Technology', copy: 'Simplifies workflow and supports room-temperature logistics.', icon: 'cube' },
      { title: 'Rapid Amplification Engine', copy: 'The rapid qPCR workflow shortens time to result to approximately 40 minutes.', icon: 'zap' },
      { title: 'Integrated Instrument and Reagent Ecosystem', copy: 'Hardware, reagent, and workflow designed together for stable and reproducible testing.', icon: 'leaf' },
    ],
    healthTitle: 'Oral Pathogen Screening for Veterinary Dental Workflows',
    technicalLabel: 'Technical Comparison',
    technicalTitle: 'Designed for Veterinary Molecular Workflows.',
    specs: [
      ['Aspect', 'Lyophilized POCT System'],
      ['Reagent Logistics', 'Room-temperature storage and transport'],
      ['Setup', 'Ready-to-use single-dose lyophilized beads'],
      ['Time to Result', '~40 minutes'],
      ['Workflow Format', 'Integrated instrument-and-assay workflow'],
    ],
    softwareTitle: 'User-Friendly Veterinary qPCR Software',
    softwareImage: veterinarySoftware,
    finalTitle: 'Supports 100+ Animal Disease',
    finalImage: animalDisease,
    finalBullets: [
      'Oral health and veterinary dental workflows',
      'Respiratory infectious disease testing',
      'Gastrointestinal pathogen testing',
      'Vector-borne and zoonotic disease testing',
      'Specialty and regional molecular assays',
    ],
  },
  'product-lateral-flow': {
    heroTitle: 'Redefining Pet Oral Health Screening',
    heroSubtitle: 'Diagnostics Canine & Feline Periodontal qPCR',
    heroImage: lateralHero,
    productImage: lateralProduct,
    introTitle: '8IVD Lateral Flow (Rapid Screening)',
    introBody: 'Our portable immunofluorescence analyzer automatically times, reads, and prints test results, reducing subjectivity from visual interpretation.',
    heroStats: [
      { label: 'Results in 10-15 Mins', icon: 'timer' },
      { label: 'Objective Digital Reports', icon: 'report' },
      { label: 'Room-Temperature Storage', icon: 'thermometer' },
    ],
    features: [
      { title: 'Smart & Objective Reading', copy: 'Analyzer automatically times, reads, and prints test results, reducing subjectivity.', icon: 'eye' },
      { title: 'Stabilized Lyophilized Reagents', copy: 'Our reagents use a stabilized lyophilized formulation for convenient room-temperature handling.', icon: 'zap' },
      { title: 'Rapid Turnaround', copy: 'From oral swab to printed report in 10-15 minutes.', icon: 'leaf' },
    ],
    healthTitle: 'The Ultimate Tool for Screening & Communication',
    technicalLabel: 'Technical Specification',
    technicalTitle: 'Foolproof Operation. Empowering Every Vet.',
    specs: [
      ['Target Marker', 'Porphyromonas gulae (P. gulae) antigen'],
      ['Applicable Species', 'Canine & Feline'],
      ['Sample Type', 'Oral swab'],
      ['Test Principle', 'Immunofluorescence lateral flow assay'],
      ['Analyzer Readout', 'Instrument-read digital result with printable report'],
      ['Turnaround Time (TAT)', '10-15 minutes'],
      ['Storage & Transport', '2C-30C'],
      ['Testing Location', 'Veterinary clinic / point of care'],
    ],
    softwareTitle: 'User-Friendly Veterinary Software',
    softwareImage: veterinarySoftware,
    finalTitle: 'Scalable Companion Animal Point-of-Care Testing',
    finalImage: scalableCompanion,
    finalBullets: [
      'Dental & oral health: pet oral-health screening and preventive care applications.',
      'Infectious diseases: antigen and antibody tests for common canine and feline infectious diseases.',
      'Inflammation & digestive health: cCRP, fSAA, cPL, and fPL.',
      'Cardiac, endocrine, and renal health markers.',
    ],
  },
  'product-xray': {
    heroTitle: 'Diagnostics Without Delay',
    heroSubtitle: 'Capture. Analyze. Prevent.',
    heroImage: xrayHero,
    productImage: xrayProduct,
    introTitle: 'DX-1 Digital X-Ray',
    introBody: 'Our portable digital x-ray automatically times, reads, and prints test results, reducing subjectivity from visual interpretation.',
    heroStats: [],
    features: [
      { title: 'Non-MyDriatic Imaging', copy: 'Seamless integration with DR / CR x-ray systems.', icon: 'eye' },
      { title: 'Autofocus + Auto-Exposure', copy: 'Point + Align + Capture. The system handles everything else.', icon: 'zap' },
      { title: 'Lightweight Field Design', copy: 'Weighs under 2 kg, ideal for mobile screening and outreach programs.', icon: 'leaf' },
    ],
    healthTitle: '',
    technicalLabel: 'Technical Specification',
    technicalTitle: 'Foolproof Operation. Empowering Every Vet.',
    specs: [
      ['Detector Type', 'Flat Panel Detector (a-Si / CsI)'],
      ['AI Analysis', 'Yes'],
      ['Dynamic Range', '16-bit'],
      ['Pixel Pitch', '140 - 160 µm'],
      ['Heat Capacity', '300 - 400 kHU'],
      ['System Type', 'Mobile / Portable Digital X-Ray'],
      ['Connectivity', 'Wi-Fi / Ethernet / Optional 4G-5G'],
    ],
    softwareTitle: 'User-Friendly Veterinary X-Ray Software',
    softwareImage: xraySoftware,
    finalTitle: '',
    finalImage: '',
    finalBullets: [],
  },
} satisfies Record<ProductDetailPageName, ProductDetail>

export type ProductDetail = {
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  productImage: string
  introTitle: string
  introBody: string
  heroStats: Array<{ label: string; icon: 'timer' | 'pipette' | 'thermometer' | 'report' }>
  features: Array<{ title: string; copy: string; icon: 'cube' | 'eye' | 'leaf' | 'zap' }>
  healthTitle: string
  technicalLabel: string
  technicalTitle: string
  specs: string[][]
  softwareTitle: string
  softwareImage: string
  finalTitle: string
  finalImage: string
  finalBullets: string[]
}

export const healthApplications = [
  {
    title: 'Efficiency-focused',
    copy: 'Detects key periodontal pathogens from a single oral swab in approximately 40 minutes.',
    image: health1,
  },
  {
    title: 'Oral Screening Support',
    copy: 'Provides structured pathogen-detection results to support dental screening, case triage, and follow-up discussions.',
    image: health2,
  },
  {
    title: 'Veterinary Dental Workflow',
    copy: 'Suitable for use before dental procedures, during periodontal workups, and for follow-up monitoring where clinically indicated.',
    image: health3,
  },
]

export const marketApplications = [
  { title: 'Veterinary Hospitals', image: market1 },
  { title: 'Veterinary Dental Specialists', image: market2 },
  { title: 'Animal Diagnostic Laboratories', image: market3 },
]
