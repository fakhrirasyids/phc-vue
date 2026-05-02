import dev1 from '@/assets/pet/dev1.png'
import dev2 from '@/assets/pet/dev2.png'
import dev3 from '@/assets/pet/dev3.png'
import dev4 from '@/assets/pet/xraydevicelist.jpeg'
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
export type ProductKey = 'pcr' | 'lateralFlow' | 'miniCube' | 'xray' | 'petHealthKiosk' | 'cro' | 'booking' | 'croBooking'

export const productSummaries: Array<{
  key: ProductKey
  categoryKey: string
  image: string
  bg: string
  page: ProductPageName
}> = [
  {
    key: 'pcr',
    categoryKey: 'products.categories.diagnostics',
    image: dev1,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    page: 'product-pcr',
  },
  {
    key: 'lateralFlow',
    categoryKey: 'products.categories.diagnostics',
    image: dev2,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    page: 'product-lateral-flow',
  },
  {
    key: 'miniCube',
    categoryKey: 'products.categories.diagnostics',
    image: dev3,
    bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
    page: 'product-mini-cube',
  },
  {
    key: 'xray',
    categoryKey: 'products.categories.imaging',
    image: dev4,
    bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
    page: 'product-xray',
  },
  {
    key: 'petHealthKiosk',
    categoryKey: 'products.categories.smartSystems',
    image: dev5,
    bg: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
    page: 'product-pet-health-kiosk',
  },
  {
    key: 'croBooking',
    categoryKey: 'products.categories.platform',
    image: dev6,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
    page: 'product-cro-booking',
  },
]

export const productNavItems = [
  { key: 'pcr', page: 'product-pcr' },
  { key: 'lateralFlow', page: 'product-lateral-flow' },
  { key: 'miniCube', page: 'product-mini-cube' },
  { key: 'xray', page: 'product-xray' },
  { key: 'petHealthKiosk', page: 'product-pet-health-kiosk' },
  { key: 'cro', page: 'product-cro' },
  { key: 'booking', page: 'product-booking' },
] satisfies Array<{ key: ProductKey; page: ProductPageName }>

export const comingSoonProducts: Record<ProductPageName, ProductKey> = {
  'product-pcr': 'pcr',
  'product-lateral-flow': 'lateralFlow',
  'product-xray': 'xray',
  'product-mini-cube': 'miniCube',
  'product-pet-health-kiosk': 'petHealthKiosk',
  'product-cro': 'cro',
  'product-booking': 'booking',
  'product-cro-booking': 'croBooking',
}

export const productDetails = {
  'product-pcr': {
    key: 'pcr',
    heroImage: pcrHero,
    productImage: pcrProduct,
    heroStats: [
      { key: 'rapidAmplification', icon: 'timer' },
      { key: 'singleDoseBeads', icon: 'pipette' },
      { key: 'roomTemperature', icon: 'thermometer' },
    ],
    features: [
      { key: 'beadTechnology', icon: 'cube' },
      { key: 'amplificationEngine', icon: 'zap' },
      { key: 'integratedEcosystem', icon: 'leaf' },
    ],
    specs: [
      'aspect',
      'reagentLogistics',
      'setup',
      'timeToResult',
      'workflowFormat',
    ],
    softwareImage: veterinarySoftware,
    finalImage: animalDisease,
    finalBullets: [
      'oralHealth',
      'respiratory',
      'gastrointestinal',
      'vectorBorne',
      'specialty',
    ],
  },
  'product-lateral-flow': {
    key: 'lateralFlow',
    heroImage: lateralHero,
    productImage: lateralProduct,
    heroStats: [
      { key: 'fastResults', icon: 'timer' },
      { key: 'digitalReports', icon: 'report' },
      { key: 'roomTemperature', icon: 'thermometer' },
    ],
    features: [
      { key: 'objectiveReading', icon: 'eye' },
      { key: 'stabilizedReagents', icon: 'zap' },
      { key: 'rapidTurnaround', icon: 'leaf' },
    ],
    specs: [
      'targetMarker',
      'applicableSpecies',
      'sampleType',
      'testPrinciple',
      'analyzerReadout',
      'turnaroundTime',
      'storageTransport',
      'testingLocation',
    ],
    softwareImage: veterinarySoftware,
    finalImage: scalableCompanion,
    finalBullets: [
      'dental',
      'infectious',
      'inflammation',
      'markers',
    ],
  },
  'product-xray': {
    key: 'xray',
    heroImage: xrayHero,
    productImage: xrayProduct,
    heroStats: [],
    features: [
      { key: 'nonMydriatic', icon: 'eye' },
      { key: 'autofocus', icon: 'zap' },
      { key: 'lightweight', icon: 'leaf' },
    ],
    specs: [
      'detectorType',
      'aiAnalysis',
      'dynamicRange',
      'pixelPitch',
      'heatCapacity',
      'systemType',
      'connectivity',
    ],
    softwareImage: xraySoftware,
    finalImage: '',
    finalBullets: [],
  },
} satisfies Record<ProductDetailPageName, ProductDetail>

export type ProductDetail = {
  key: ProductKey
  heroImage: string
  productImage: string
  heroStats: Array<{ key: string; icon: 'timer' | 'pipette' | 'thermometer' | 'report' }>
  features: Array<{ key: string; icon: 'cube' | 'eye' | 'leaf' | 'zap' }>
  specs: string[]
  softwareImage: string
  finalImage: string
  finalBullets: string[]
}

export const healthApplications = [
  {
    key: 'efficiency',
    image: health1,
  },
  {
    key: 'screening',
    image: health2,
  },
  {
    key: 'workflow',
    image: health3,
  },
]

export const marketApplications = [
  { key: 'hospitals', image: market1 },
  { key: 'dentalSpecialists', image: market2 },
  { key: 'diagnosticLabs', image: market3 },
]
