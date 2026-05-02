<template>
  <div>
    <!-- Hero with full-width image -->
    <section class="relative bg-ink-950 pt-[72px] lg:pt-[84px]">
      <div class="relative w-full h-[420px] sm:h-[500px] lg:h-[560px]">
        <img
          :src="aboutHero"
          :alt="t('about.heroAlt')"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>

    <!-- About copy -->
    <section class="bg-slate-50 pt-14 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 lg:pb-20">
      <div class="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">{{ t('about.kicker') }}</p>
        <h1 class="mt-3 font-bold text-ink text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] tracking-[-0.01em]">
          {{ t('about.title') }}
        </h1>
        <p class="mt-5 text-slate-500 text-[14px] sm:text-[16px] leading-[1.7] max-w-[780px] mx-auto">
          {{ t('about.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
        <div class="rounded-[18px] bg-slate-50 border border-slate-100 p-7 sm:p-10 lg:p-11">
          <div class="w-10 h-10 flex items-center justify-center">
            <TargetIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="mt-12 font-bold text-ink text-[20px] sm:text-[22px]">{{ t('about.missionTitle') }}</h3>
          <p class="mt-3 text-slate-500 text-[14px] sm:text-[15px] leading-[1.7]">
            {{ t('about.missionBody') }}
          </p>
        </div>

        <div class="rounded-[18px] bg-slate-50 border border-slate-100 p-7 sm:p-10 lg:p-11">
          <div class="w-10 h-10 flex items-center justify-center">
            <ShieldIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="mt-12 font-bold text-ink text-[20px] sm:text-[22px]">{{ t('about.visionTitle') }}</h3>
          <p class="mt-3 text-slate-500 text-[14px] sm:text-[15px] leading-[1.7]">
            {{ t('about.visionBody') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Stats band (dark) -->
    <section class="bg-ink-950 py-14 sm:py-16 lg:py-20">
      <div class="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
          <div v-for="s in stats" :key="s.label">
            <p class="font-bold text-brand-400 text-[34px] sm:text-[42px] lg:text-[52px] leading-none tracking-[-0.02em]">{{ s.value }}</p>
            <p class="mt-2 text-white/70 text-[13px] sm:text-[14px]">{{ t(s.labelKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Target as TargetIcon, Shield as ShieldIcon } from 'lucide-vue-next'
import aboutHero from '@/assets/pet/bgheader.png'

defineEmits<{
  (e: 'navigate', page: 'home' | 'about' | 'products' | 'contact'): void
}>()

const { t } = useI18n({ useScope: 'global' })

const stats = [
  { value: '500+', labelKey: 'about.stats.clinics' },
  { value: '2M+', labelKey: 'about.stats.tests' },
  { value: '99.8%', labelKey: 'about.stats.accuracy' },
  { value: '24/7', labelKey: 'about.stats.support' },
]
</script>
