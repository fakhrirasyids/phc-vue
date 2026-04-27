<template>
  <header class="fixed inset-x-0 top-0 z-[110]">
    <div
      class="transition-all duration-300 ease-out"
      :class="headerBgClass"
    >
      <nav class="px-4 sm:px-6 lg:px-10 py-4 lg:py-5">
        <div class="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <!-- Logo -->
          <button
            class="flex items-center flex-shrink-0"
            @click="emit('navigate', 'home')"
            aria-label="8xPet home"
          >
            <img :src="logo" alt="8xPet" class="h-9 sm:h-10 lg:h-11 w-auto" />
          </button>

          <!-- Desktop nav -->
          <div class="hidden lg:flex items-center gap-9 xl:gap-11">
            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors"
              :class="navLinkClass('home')"
              @click="emit('navigate', 'home')"
            >Home</button>

            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors"
              :class="navLinkClass('about')"
              @click="emit('navigate', 'about')"
            >About Company</button>

            <!-- Products dropdown -->
            <div class="relative" ref="productsRef">
              <button
                class="flex items-center gap-1.5 text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors"
                :class="isProductsActive ? 'text-brand-400' : navTextClass"
                @click="toggleProducts"
              >
                Products
                <svg
                  class="h-4 w-4 transition-transform duration-200"
                  :class="productsOpen ? 'rotate-180' : ''"
                  viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
                </svg>
              </button>

              <Transition name="dropdown">
                <div
                  v-if="productsOpen"
                  class="fixed left-1/2 top-[72px] lg:top-[84px] -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1280px] rounded-[22px] bg-white shadow-[0_30px_80px_rgba(8,20,42,0.18)] border border-black/5 overflow-hidden"
                >
                  <div class="grid grid-cols-12">
                    <div class="col-span-9 p-9 grid grid-cols-4 gap-x-9 gap-y-6">
                      <div>
                        <p class="text-[13px] font-semibold tracking-[1.9px] text-brand-600 mb-7">DIAGNOSTIC DEVICES</p>
                        <ul class="space-y-7">
                          <li v-for="item in diagnosticItems" :key="item.title">
                            <button class="flex items-start gap-4 text-left group" @click="goProduct(item.page)">
                              <span class="mt-1 text-brand-600">
                                <component :is="item.icon" class="h-5 w-5" />
                              </span>
                              <span>
                                <span class="block text-[16px] font-semibold text-ink leading-tight group-hover:text-brand-600 transition-colors">{{ item.title }}</span>
                                <span class="block text-[14px] text-slate-500 mt-2 leading-snug">{{ item.desc }}</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p class="text-[13px] font-semibold tracking-[1.9px] text-brand-600 mb-7">IMAGING & HARDWARE</p>
                        <ul class="space-y-7">
                          <li>
                            <button class="flex items-start gap-4 text-left group" @click="goProduct('product-xray')">
                              <span class="mt-1 text-brand-600">
                                <ScanIcon class="h-5 w-5" />
                              </span>
                              <span>
                                <span class="block text-[16px] font-semibold text-ink leading-tight group-hover:text-brand-600 transition-colors">X-Ray Device for Pets</span>
                                <span class="block text-[14px] text-slate-500 mt-2 leading-snug">Next-generation digital</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p class="text-[13px] font-semibold tracking-[1.9px] text-brand-600 mb-7">SMART SYSTEMS</p>
                        <ul class="space-y-7">
                          <li>
                            <button class="flex items-start gap-4 text-left group" @click="goProduct('product-pet-health-kiosk')">
                              <span class="mt-1 text-brand-600">
                                <MonitorIcon class="h-5 w-5" />
                              </span>
                              <span>
                                <span class="block text-[16px] font-semibold text-ink leading-tight group-hover:text-brand-600 transition-colors">Pet Health Kiosk</span>
                                <span class="block text-[14px] text-slate-500 mt-2 leading-snug">An automated intake and</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div class="bg-slate-50 -m-9 ml-0 p-9">
                        <p class="text-[13px] font-semibold tracking-[1.9px] text-brand-600 mb-8">PLATFORM</p>
                        <ul class="space-y-6">
                          <li>
                            <button class="text-left group" @click="goProduct('product-cro')">
                              <span class="block text-[16px] font-semibold text-ink leading-tight group-hover:text-brand-600 transition-colors">CRO for Pets</span>
                              <span class="block text-[14px] text-slate-500 mt-2 leading-snug">The integrated software core connecting all</span>
                            </button>
                          </li>
                          <li>
                            <button class="text-left group" @click="goProduct('product-booking')">
                              <span class="block text-[16px] font-semibold text-ink leading-tight group-hover:text-brand-600 transition-colors">Vetenerary Booking System</span>
                              <span class="block text-[14px] text-slate-500 mt-2 leading-snug">Explore specific assays and clinical use cases.</span>
                            </button>
                          </li>
                        </ul>

                        <button
                          class="mt-10 inline-flex items-center gap-3 text-[16px] font-semibold text-brand-600 hover:text-brand-700"
                          @click="goProducts"
                        >
                          View all products
                          <ArrowRightIcon class="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div class="col-span-3 relative bg-white p-9">
                      <img
                        :src="dogImg"
                        alt="Veterinary care"
                        class="h-full w-full rounded-[24px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <button
              class="text-[15px] font-medium tracking-[0.2px] whitespace-nowrap transition-colors"
              :class="navLinkClass('contact')"
              @click="emit('navigate', 'contact')"
            >Contact Us</button>
          </div>

          <!-- Right -->
          <div class="flex items-center gap-3">
            <div class="hidden md:block">
              <LanguageDropdown :theme="languageTheme" />
            </div>

            <button
              class="lg:hidden p-2 rounded-md transition-colors"
              :class="hamburgerClass"
              aria-label="Open navigation"
              @click="drawerOpen = true"
            >
              <MenuIcon :size="24" />
            </button>
          </div>
        </div>
      </nav>
    </div>

    <MobileDrawer
      v-model="drawerOpen"
      :current-page="currentPage"
      :logo="logo"
      @navigate="handleMobileNav"
    />
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Menu as MenuIcon,
  Activity as ActivityIcon,
  Scan as ScanIcon,
  Monitor as MonitorIcon,
  Beaker as BeakerIcon,
  TestTube as TestTubeIcon,
  Box as BoxIcon,
  ArrowRight as ArrowRightIcon,
} from 'lucide-vue-next'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import MobileDrawer from '@/components/MobileDrawer.vue'
import logo from '@/assets/pet/8xpet-logo.png'
import dogImg from '@/assets/pet/dog.png'

import type { PageName } from '@/App.vue'
import type { ProductPageName } from '@/data/productCatalog'

const props = defineProps<{ currentPage: PageName }>()

const emit = defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const scrolled = ref(false)
const drawerOpen = ref(false)
const productsOpen = ref(false)
const productsRef = ref<HTMLElement | null>(null)

const isOnDarkHero = computed(() =>
  props.currentPage === 'home' && !scrolled.value
)

const headerBgClass = computed(() => {
  if (scrolled.value) return 'bg-ink-950/95 backdrop-blur-md shadow-[0_2px_20px_rgba(6,17,30,0.4)]'
  if (isOnDarkHero.value) return 'bg-transparent'
  return 'bg-ink-950'
})

const navTextClass = computed(() => 'text-white hover:text-white/80')
const isProductsActive = computed(() => props.currentPage === 'products' || props.currentPage.startsWith('product-'))

function navLinkClass(page: PageName) {
  return props.currentPage === page ? 'text-brand-400' : navTextClass.value
}

const languageTheme = computed<'light' | 'dark'>(() => {
  return scrolled.value || isOnDarkHero.value ? 'dark' : 'light'
})

const hamburgerClass = computed(() => 'text-white hover:bg-white/10')

const diagnosticItems = [
  { title: 'PCR Molecular Diagnostics', desc: 'Advanced PCR testing', icon: BeakerIcon, page: 'product-pcr' },
  { title: 'Lateral Flow Rapid Test', desc: 'Compact and reliable', icon: TestTubeIcon, page: 'product-lateral-flow' },
  { title: 'Mini Cube Analyzer', desc: 'A revolutionary', icon: BoxIcon, page: 'product-mini-cube' },
] satisfies Array<{ title: string; desc: string; icon: unknown; page: ProductPageName }>

void ActivityIcon

function toggleProducts() {
  productsOpen.value = !productsOpen.value
}

function goProducts() {
  productsOpen.value = false
  emit('navigate', 'products')
}

function goProduct(page: ProductPageName) {
  productsOpen.value = false
  emit('navigate', page)
}

function handleMobileNav(page: PageName) {
  drawerOpen.value = false
  emit('navigate', page)
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function onDocClick(e: MouseEvent) {
  if (productsRef.value && !productsRef.value.contains(e.target as Node)) {
    productsOpen.value = false
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocClick, { capture: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick, { capture: true } as any)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>
