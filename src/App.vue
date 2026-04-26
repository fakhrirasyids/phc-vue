<template>
  <div class="min-h-screen bg-white">
    <Header :current-page="currentPage" @navigate="navigateTo" />

    <main>
      <HomePage v-if="currentPage === 'home'" @navigate="navigateTo" />
      <AboutPage v-else-if="currentPage === 'about'" @navigate="navigateTo" />
      <ProductsPage v-else-if="currentPage === 'products'" @navigate="navigateTo" />
      <UseCasesPage v-else-if="currentPage === 'use-cases'" @navigate="navigateTo" />
    </main>

    <Footer @navigate="navigateTo" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import UseCasesPage from '@/pages/UseCasesPage.vue'

export type PageName = 'home' | 'about' | 'products' | 'use-cases'

const pages: PageName[] = ['home', 'about', 'products', 'use-cases']

function pageFromHash(): PageName {
  const value = window.location.hash.replace('#', '')
  return pages.includes(value as PageName) ? (value as PageName) : 'home'
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

onMounted(() => window.addEventListener('hashchange', onHashChange))
onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))
</script>
