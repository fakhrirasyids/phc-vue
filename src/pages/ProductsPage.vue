<template>
  <div>
    <!-- Header band -->
    <section class="relative bg-ink-950 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
      <div class="relative max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <p class="text-[12px] font-semibold tracking-[2px] text-brand-400 uppercase">{{ t('products.page.kicker') }}</p>
        <h1 class="mt-3 font-bold text-white text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.01em]">
          <span class="text-gradient-brand">{{ t('products.page.titleLine1') }}</span>
          <span class="block text-white">{{ t('products.page.titleLine2') }}</span>
        </h1>
        <p class="mt-5 text-white/65 text-[14px] sm:text-[16px] leading-[1.7] max-w-[680px] mx-auto">
          {{ t('products.page.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Product grid -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <button
            v-for="product in products"
            :key="product.key"
            class="group rounded-[14px] border border-slate-100 bg-white text-left shadow-[0_4px_30px_rgba(15,27,45,0.05)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,27,45,0.10)] transition-all duration-300"
            @click="$emit('navigate', product.page)"
          >
            <div class="aspect-[16/10] overflow-hidden" :style="{ background: product.bg }">
              <img :src="product.image" :alt="t(`products.items.${product.key}.title`)" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div class="p-5 lg:p-6">
              <p class="text-[11px] font-semibold tracking-[1.6px] text-brand-500 uppercase">{{ t(product.categoryKey) }}</p>
              <h3 class="mt-1.5 font-bold text-ink text-[16px] sm:text-[17px] group-hover:text-brand-600 transition-colors">{{ t(`products.items.${product.key}.title`) }}</h3>
              <p class="mt-2 text-slate-500 text-[13px] leading-[1.65]">{{ t(`products.items.${product.key}.desc`) }}</p>
              <p class="mt-4 text-[13px] font-semibold text-brand-600">
                {{ product.page === 'product-pcr' || product.page === 'product-lateral-flow' || product.page === 'product-xray' ? t('products.page.viewDetails') : t('products.page.comingSoon') }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-50 py-16 sm:py-20">
      <div class="max-w-[920px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <h2 class="font-bold text-ink text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.01em]">
          {{ t('products.page.ctaTitle') }}
        </h2>
        <p class="mt-3 text-slate-500 text-[14px] sm:text-[15px]">
          {{ t('products.page.ctaSubtitle') }}
        </p>
        <button
          class="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white hover:bg-ink-900 transition-colors"
          @click="$emit('navigate', 'contact')"
        >{{ t('common.talkToSales') }}</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { productSummaries } from '@/data/productCatalog'
import type { PageName } from '@/App.vue'

defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const { t } = useI18n({ useScope: 'global' })

const products = productSummaries
</script>
