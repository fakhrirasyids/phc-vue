<template>
  <footer class="bg-ink-950 text-white">
    <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-16">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
        <div>
          <button class="inline-flex" :aria-label="t('common.homeAria')" @click="$emit('navigate', 'home')">
            <img :src="logo" :alt="t('common.logoAlt')" class="h-10 w-auto" />
          </button>
          <p class="mt-7 max-w-[260px] text-[13px] leading-[1.8] text-slate-400">
            {{ t('footer.description') }}
          </p>
        </div>

        <div>
          <h2 class="text-[15px] font-semibold text-white">{{ t('footer.products') }}</h2>
          <ul class="mt-5 space-y-4 text-[13px] text-slate-400">
            <li v-for="item in products" :key="item.key">
              <button class="hover:text-white transition-colors text-left" @click="$emit('navigate', item.page)">{{ t(`products.items.${item.key}.title`) }}</button>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-[15px] font-semibold text-white">{{ t('footer.company') }}</h2>
          <ul class="mt-5 space-y-4 text-[13px] text-slate-400">
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'about')">{{ t('footer.links.about') }}</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'home')">{{ t('footer.links.technology') }}</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'products')">{{ t('footer.links.applications') }}</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'about')">{{ t('footer.links.investors') }}</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'about')">{{ t('footer.links.careers') }}</button></li>
          </ul>
        </div>

        <div>
          <h2 class="text-[15px] font-semibold text-white">{{ t('footer.contact') }}</h2>
          <div class="mt-5 space-y-4 text-[13px] leading-[1.7] text-slate-400">
            <p>{{ t('contact.cards.visit.line1') }}, {{ t('contact.cards.visit.line2') }}, {{ t('contact.cards.visit.line3') }}</p>
            <p>{{ t('footer.emailUser') }}{{ '@' }}{{ t('footer.emailDomain') }}</p>
            <p>{{ t('contact.cards.phone.line1') }}</p>
            <button class="rounded-lg border border-white/15 px-4 py-2 text-white hover:bg-white/10 transition-colors" @click="$emit('navigate', 'contact')">
              {{ t('common.contactSales') }}
            </button>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{{ t('footer.rights') }}</p>
        <div class="flex flex-wrap gap-6">
          <button class="hover:text-white transition-colors">{{ t('footer.links.privacy') }}</button>
          <button class="hover:text-white transition-colors">{{ t('footer.links.terms') }}</button>
          <button class="hover:text-white transition-colors">{{ t('footer.links.legal') }}</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logo from '@/assets/pet/8xpet-logo.png'
import type { PageName } from '@/App.vue'
import { productSummaries } from '@/data/productCatalog'

defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const { t } = useI18n({ useScope: 'global' })

const products = productSummaries.slice(0, 5)
</script>
