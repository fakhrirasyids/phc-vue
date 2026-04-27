<template>
  <div class="min-h-screen bg-white">
    <Header :current-page="currentPage" @navigate="navigateTo" />

    <main>
      <HomePage v-if="currentPage === 'home'" @navigate="navigateTo" />
      <AboutPage v-else-if="currentPage === 'about'" @navigate="navigateTo" />
      <ProductsPage v-else-if="currentPage === 'products'" @navigate="navigateTo" />
      <ContactPage v-else-if="currentPage === 'contact'" @navigate="navigateTo" />
      <ProductDetailPage v-else-if="activeProductDetailPage" :page="activeProductDetailPage" @navigate="navigateTo" />
      <ComingSoonPage
        v-else-if="activeProductTitle"
        :title="activeProductTitle"
        @navigate="navigateTo"
      />
      <ProductsPage v-else @navigate="navigateTo" />
    </main>

    <Footer @navigate="navigateTo" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import ComingSoonPage from '@/pages/ComingSoonPage.vue'
import {
  comingSoonProducts,
  productDetailPages,
  productPageNames,
  type ProductDetailPageName,
  type ProductPageName,
} from '@/data/productCatalog'

type BasePageName = 'home' | 'about' | 'products' | 'contact'
export type PageName = BasePageName | ProductPageName

const pages: PageName[] = ['home', 'about', 'products', 'contact', ...productPageNames]

const productAliases: Record<string, ProductPageName> = {
  pcr: 'product-pcr',
  'pcr-product': 'product-pcr',
  'pcr-molecular-diagnostics': 'product-pcr',
  'product-pcr-molecular-diagnostics': 'product-pcr',
  lateral: 'product-lateral-flow',
  'lateral-flow': 'product-lateral-flow',
  'lateral-flow-rapid-test': 'product-lateral-flow',
  'product-lateral-flow-rapid-test': 'product-lateral-flow',
  xray: 'product-xray',
  'x-ray': 'product-xray',
  'x-ray-device-for-pets': 'product-xray',
  'product-x-ray-device-for-pets': 'product-xray',
  'mini-cube': 'product-mini-cube',
  'mini-cube-analyzer': 'product-mini-cube',
  kiosk: 'product-pet-health-kiosk',
  'pet-health-kiosk': 'product-pet-health-kiosk',
  cro: 'product-cro',
  booking: 'product-booking',
  'veterinary-booking-system': 'product-booking',
}

function normalizeProductPage(value: string): ProductPageName | undefined {
  if ((productPageNames as readonly string[]).includes(value)) return value as ProductPageName
  return productAliases[value]
}

function normalizePage(value: string): PageName {
  const productPage = normalizeProductPage(value)
  if (productPage) return productPage
  if (value === 'use-cases') return 'contact'
  return pages.includes(value as PageName) ? (value as PageName) : 'home'
}

function pageFromHash(): PageName {
  return normalizePage(window.location.hash.replace('#', ''))
}

const currentPage = ref<PageName>(pageFromHash())

function navigateTo(page: PageName) {
  currentPage.value = page
  window.history.pushState(null, '', `#${page}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(currentPage, () => {
  window.scrollTo({ top: 0 })
})

function onHashChange() {
  currentPage.value = pageFromHash()
}

const activeProductPage = computed<ProductPageName | undefined>(() => {
  return normalizeProductPage(currentPage.value)
})

const activeProductDetailPage = computed<ProductDetailPageName | undefined>(() => {
  const page = activeProductPage.value
  return page && (productDetailPages as readonly string[]).includes(page) ? (page as ProductDetailPageName) : undefined
})

const activeProductTitle = computed(() => {
  const page = activeProductPage.value
  return page && !activeProductDetailPage.value ? comingSoonProducts[page] : ''
})

onMounted(() => window.addEventListener('hashchange', onHashChange))
onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))
</script>
