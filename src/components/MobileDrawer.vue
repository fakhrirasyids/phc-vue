<template>
  <Teleport to="body">
    <Transition name="drawer" appear @after-leave="onAfterLeave">
      <div v-if="modelValue" class="fixed inset-0 z-[200]" role="dialog" aria-modal="true">
        <div
          class="absolute inset-0 bg-black/60 transition-opacity duration-300 ease-out"
          :class="isActive ? 'opacity-100' : 'opacity-0'"
          @click="close"
        />

        <div
          class="absolute right-0 top-0 h-full w-[320px] max-w-[88vw]
                 bg-ink-950 text-white shadow-2xl
                 transition-transform duration-300 ease-out will-change-transform"
          :class="isActive ? 'translate-x-0' : 'translate-x-full'"
        >
          <div class="px-5 py-5 flex items-center justify-between border-b border-white/10">
            <button @click="navigate('home')">
              <img :src="logo" alt="8xPet" class="h-10 w-auto" />
            </button>
            <button class="p-2 text-white" @click="close" aria-label="Close navigation">
              <XIcon :size="22" />
            </button>
          </div>

          <div class="px-5 py-4 flex flex-col gap-1 overflow-y-auto h-[calc(100%-72px)]">
            <button
              class="text-left py-3 text-[15px] font-medium transition-colors"
              :class="currentPage === 'home' ? 'text-brand-400' : 'text-white/90 hover:text-white'"
              @click="navigate('home')"
            >Home</button>

            <button
              class="text-left py-3 text-[15px] font-medium transition-colors"
              :class="currentPage === 'about' ? 'text-brand-400' : 'text-white/90 hover:text-white'"
              @click="navigate('about')"
            >About Company</button>

            <div>
              <button
                class="w-full text-left py-3 text-[15px] font-medium flex items-center justify-between transition-colors"
                :class="currentPage === 'products' ? 'text-brand-400' : 'text-white/90 hover:text-white'"
                @click="productsOpen = !productsOpen"
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
              <div v-if="productsOpen" class="ml-3 mb-2 flex flex-col gap-1 border-l border-white/10 pl-3">
                <button
                  v-for="p in productItems"
                  :key="p.label"
                  class="text-left py-2 text-[14px] text-white/75 hover:text-white transition-colors"
                  @click="navigate(p.page)"
                >{{ p.label }}</button>
              </div>
            </div>

            <button
              class="text-left py-3 text-[15px] font-medium transition-colors"
              :class="currentPage === 'contact' ? 'text-brand-400' : 'text-white/90 hover:text-white'"
              @click="navigate('contact')"
            >Contact Us</button>

            <div class="mt-4 border-t border-white/10 pt-4">
              <LanguageDropdown align="left" theme="light" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { X as XIcon } from 'lucide-vue-next'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import type { PageName } from '@/App.vue'
import { productNavItems } from '@/data/productCatalog'

const props = defineProps<{
  modelValue: boolean
  currentPage: PageName
  logo: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'navigate', page: PageName): void
}>()

const isActive = ref(false)
const productsOpen = ref(false)
const productItems = productNavItems

function close() {
  emit('update:modelValue', false)
}

function navigate(page: PageName) {
  emit('navigate', page)
  close()
}

function onAfterLeave() {
  isActive.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) close()
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
      await nextTick()
      requestAnimationFrame(() => { isActive.value = true })
    } else {
      isActive.value = false
      setTimeout(() => { document.documentElement.style.overflow = '' }, 300)
    }
  },
  { immediate: true }
)

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active { transition: opacity 300ms ease; }
.drawer-enter-from, .drawer-leave-to { opacity: 0; }
.drawer-enter-to, .drawer-leave-from { opacity: 1; }
</style>
