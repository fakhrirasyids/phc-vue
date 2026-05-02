<template>
  <section class="relative flex min-h-screen items-center overflow-hidden bg-black px-5 pt-28 text-white sm:px-6 lg:px-10">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(45,212,191,0.16),transparent_34%),linear-gradient(180deg,#000000_0%,#06111e_100%)]"></div>
    <div class="relative mx-auto max-w-[920px] py-24 text-center">
      <p class="text-[12px] font-bold uppercase tracking-[0.24em] text-brand-400">{{ t('detail.shared.comingDetail') }}</p>
      <h1 class="mt-5 text-[42px] font-black uppercase leading-[1.05] tracking-[0.02em] sm:text-[64px] lg:text-[78px]">
        {{ t('detail.shared.comingSoon') }}
      </h1>
      <p class="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.7] text-white/65 sm:text-[22px]">
        {{ t('detail.shared.comingBody', { title: t(titleKey) }) }}
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <button
          class="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[14px] font-bold text-ink transition-colors hover:bg-slate-100"
          @click="$emit('navigate', 'contact')"
        >
          {{ t('common.contactDemo') }}
        </button>
        <button
          class="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-7 text-[14px] font-bold text-white transition-colors hover:bg-white/10"
          @click="$emit('navigate', 'products')"
        >
          {{ t('detail.shared.backToProducts') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PageName } from '@/App.vue'

defineProps<{
  titleKey: string
}>()

defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const { t } = useI18n({ useScope: 'global' })
</script>
