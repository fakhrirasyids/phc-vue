<template>
  <div>
    <!-- ===========================================================
         HERO
    ============================================================ -->
    <section class="relative overflow-hidden bg-ink-950">
      <div class="absolute inset-0">
        <img
          :src="heroBg"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-cover object-center opacity-90"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/10"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/30"></div>
      </div>

      <div class="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-36">
        <div class="max-w-[640px]">
          <h1 class="font-bold leading-[1.05] tracking-[-0.02em] text-white text-[34px] sm:text-[44px] lg:text-[54px]">
            <span class="block text-gradient-brand">{{ t('home.hero.titleLine1') }}</span>
            <span class="block">{{ t('home.hero.titleLine2') }}</span>
          </h1>

          <p class="mt-5 sm:mt-6 text-white/75 text-[15px] sm:text-[16px] leading-[1.7] max-w-[520px]">
            {{ t('home.hero.subtitle') }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink hover:bg-slate-100 transition-colors shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
              @click="$emit('navigate', 'contact')"
            >{{ t('common.requestDemo') }}</button>

            <button
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
              @click="$emit('navigate', 'products')"
            >
              {{ t('common.exploreProducts') }}
              <ArrowRightIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================================================
         CORE PILLARS
    ============================================================ -->
    <section class="bg-slate-50 py-14 sm:py-18 lg:py-20">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="text-center max-w-[680px] mx-auto">
          <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">{{ t('home.pillars.kicker') }}</p>
          <h2 class="mt-3 font-bold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-tight tracking-[-0.01em]">
            {{ t('home.pillars.title') }}
          </h2>
          <p class="mt-4 text-slate-500 text-[14px] sm:text-[15px] leading-[1.7]">
            {{ t('home.pillars.subtitle') }}
          </p>
        </div>

        <div class="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          <div
            v-for="pillar in pillars"
            :key="pillar.titleKey"
            class="bg-white rounded-[14px] p-6 lg:p-7 shadow-[0_4px_30px_rgba(15,27,45,0.06)] border border-slate-100 hover:shadow-[0_10px_40px_rgba(15,27,45,0.08)] transition-shadow"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
              <img :src="pillar.icon" :alt="t(pillar.titleKey)" class="w-6 h-6 object-contain" />
            </div>
            <h3 class="mt-5 font-bold text-ink text-[18px] sm:text-[20px]">{{ t(pillar.titleKey) }}</h3>
            <p class="mt-2 text-slate-500 text-[13px] sm:text-[14px] leading-[1.65]">{{ t(pillar.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================================================
         PRODUCT PORTFOLIO
    ============================================================ -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">{{ t('home.portfolio.kicker') }}</p>
            <h2 class="mt-2 font-bold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-tight tracking-[-0.01em]">
              {{ t('home.portfolio.title') }}
            </h2>
          </div>
          <button
            class="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold text-[14px]"
            @click="$emit('navigate', 'products')"
          >
            {{ t('common.viewAllProducts') }}
            <ChevronRightIcon class="h-4 w-4" />
          </button>
        </div>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <article
            v-for="product in products"
            :key="product.key"
            class="rounded-[14px] border border-slate-100 bg-white shadow-[0_4px_30px_rgba(15,27,45,0.05)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,27,45,0.10)] transition-all duration-300"
          >
            <div
              class="aspect-[16/10] flex items-center justify-center overflow-hidden"
              :style="{ background: product.bg }"
            >
              <img :src="product.image" :alt="t(`products.items.${product.key}.title`)" class="w-full h-full object-cover" />
            </div>
            <div class="p-5 lg:p-6">
              <h3 class="font-bold text-ink text-[16px] sm:text-[17px]">{{ t(`products.items.${product.key}.title`) }}</h3>
              <p class="mt-2 text-slate-500 text-[13px] leading-[1.65]">{{ t(`products.items.${product.key}.desc`) }}</p>
              <button
                class="mt-4 inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold text-[13px]"
                @click="$emit('navigate', 'products')"
              >
                {{ t('common.learnMore') }}
                <ArrowRightIcon class="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===========================================================
         CLINICAL WORKFLOW
    ============================================================ -->
    <section class="relative bg-ink-950 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div class="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="text-center max-w-[680px] mx-auto">
          <p class="text-[12px] font-semibold tracking-[2px] text-brand-400 uppercase">{{ t('home.workflow.kicker') }}</p>
          <h2 class="mt-3 font-bold text-white text-[28px] sm:text-[34px] lg:text-[40px] leading-tight tracking-[-0.01em]">
            {{ t('home.workflow.title') }}
          </h2>
          <p class="mt-4 text-white/65 text-[14px] sm:text-[15px] leading-[1.7]">
            {{ t('home.workflow.subtitle') }}
          </p>
        </div>

        <div class="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 relative">
          <div
            v-for="(step, idx) in workflow"
            :key="step.titleKey"
            class="text-center relative"
          >
            <div class="mx-auto w-14 h-14 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
              <component :is="step.icon" class="h-6 w-6 text-brand-400" :stroke-width="1.75" />
            </div>
            <p class="mt-5 text-[11px] font-semibold tracking-[2px] text-brand-400 uppercase">{{ t('home.workflow.stepLabel', { number: `0${idx + 1}` }) }}</p>
            <h3 class="mt-2 text-white font-bold text-[18px] sm:text-[20px]">{{ t(step.titleKey) }}</h3>
            <p class="mt-2 text-white/55 text-[12.5px] leading-[1.65] max-w-[200px] mx-auto">{{ t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================================================
         WHY IT MATTERS
    ============================================================ -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">{{ t('home.why.kicker') }}</p>
            <h2 class="mt-3 font-bold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em]">
              {{ t('home.why.title') }}
            </h2>
            <p class="mt-4 text-slate-500 text-[14px] sm:text-[15px] leading-[1.7]">
              {{ t('home.why.subtitle') }}
            </p>

            <div class="mt-8 space-y-4 sm:space-y-5">
              <div
                v-for="b in benefits"
                :key="b.titleKey"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <component :is="b.icon" class="h-5 w-5 text-brand-600" :stroke-width="2" />
                </div>
                <div>
                  <h4 class="font-bold text-ink text-[15px] sm:text-[16px]">{{ t(b.titleKey) }}</h4>
                  <p class="mt-1 text-slate-500 text-[13px] sm:text-[14px] leading-[1.65]">{{ t(b.descKey) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden bg-slate-100">
              <img :src="whyImg" :alt="t('home.why.imageAlt')" class="w-full h-full object-cover" />
            </div>

            <div class="absolute left-4 sm:left-6 -bottom-6 sm:bottom-6 right-4 sm:right-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(15,27,45,0.18)] border border-slate-100 p-3.5 sm:p-4 sm:max-w-[260px] flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon class="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p class="font-bold text-ink text-[13px] sm:text-[14px]">{{ t('home.why.badgeTitle') }}</p>
                <p class="text-slate-500 text-[11.5px] sm:text-[12px] mt-0.5">{{ t('home.why.badgeSubtitle') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===========================================================
         CTA
    ============================================================ -->
    <section class="relative bg-[#082f35] overflow-hidden">
      <div class="absolute inset-0">
        <img :src="ctaBg" alt="" aria-hidden="true" class="w-full h-full object-cover opacity-30" />
        <div class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40"></div>
      </div>

      <div class="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 text-center">
        <h2 class="font-bold text-white text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] tracking-[-0.01em] max-w-[720px] mx-auto">
          {{ t('home.cta.title') }}
        </h2>
        <p class="mt-4 text-white/65 text-[14px] sm:text-[15px] leading-[1.7] max-w-[600px] mx-auto">
          {{ t('home.cta.subtitle') }}
        </p>

        <div class="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <button
            class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink hover:bg-slate-100 transition-colors"
            @click="$emit('navigate', 'contact')"
          >{{ t('home.cta.primary') }}</button>

          <button
            class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
            @click="$emit('navigate', 'products')"
          >{{ t('home.cta.secondary') }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight as ArrowRightIcon,
  ChevronRight as ChevronRightIcon,
  Beaker as BeakerIcon,
  Cpu as CpuIcon,
  BarChart3 as BarIcon,
  CheckCircle2 as CheckIcon,
  ShieldCheck as ShieldCheckIcon,
  Zap as ZapIcon,
  TrendingUp as TrendIcon,
  Workflow as WorkflowIcon,
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import heroBg from '@/assets/pet/bg-pet.png'
import ctaBg from '@/assets/pet/bg-pet.png'
import whyImg from '@/assets/pet/whyitsmatters.png'
import icDiagnostic from '@/assets/pet/ic-diagnostic.png'
import icImaging from '@/assets/pet/ic_imaging.png'
import icSmart from '@/assets/pet/ic_smart_system.png'
import { productSummaries } from '@/data/productCatalog'

defineEmits<{
  (e: 'navigate', page: 'home' | 'about' | 'products' | 'contact'): void
}>()

const { t } = useI18n({ useScope: 'global' })

const pillars = [
  {
    titleKey: 'home.pillars.diagnostics.title',
    descKey: 'home.pillars.diagnostics.desc',
    icon: icDiagnostic,
  },
  {
    titleKey: 'home.pillars.imaging.title',
    descKey: 'home.pillars.imaging.desc',
    icon: icImaging,
  },
  {
    titleKey: 'home.pillars.smartSystems.title',
    descKey: 'home.pillars.smartSystems.desc',
    icon: icSmart,
  },
]

const products = productSummaries

const workflow = [
  { titleKey: 'home.workflow.sample.title', descKey: 'home.workflow.sample.desc', icon: BeakerIcon },
  { titleKey: 'home.workflow.device.title', descKey: 'home.workflow.device.desc', icon: CpuIcon },
  { titleKey: 'home.workflow.result.title', descKey: 'home.workflow.result.desc', icon: BarIcon },
  { titleKey: 'home.workflow.decision.title', descKey: 'home.workflow.decision.desc', icon: CheckIcon },
]

const benefits = [
  { titleKey: 'home.why.fasterDiagnosis.title', descKey: 'home.why.fasterDiagnosis.desc', icon: ZapIcon },
  { titleKey: 'home.why.betterOutcomes.title', descKey: 'home.why.betterOutcomes.desc', icon: TrendIcon },
  { titleKey: 'home.why.simplifiedWorkflow.title', descKey: 'home.why.simplifiedWorkflow.desc', icon: WorkflowIcon },
]
</script>
