<template>
  <div class="bg-white">
    <section class="relative min-h-[646px] overflow-hidden bg-ink-950 pt-[84px] lg:min-h-[730px]">
      <img :src="product.heroImage" :alt="t(detailKey('heroTitle'))" class="absolute inset-0 h-full w-full object-cover object-[center_100%]" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div class="relative mx-auto flex min-h-[562px] max-w-[1280px] flex-col justify-center px-5 py-12 sm:px-6 lg:min-h-[646px] lg:px-[70px]">
        <div class="max-w-[560px]">
          <h1 class="text-[38px] font-black uppercase leading-[1.08] tracking-[0.035em] text-white sm:text-[56px] lg:text-[64px]">
            {{ t(detailKey('heroTitle')) }}
          </h1>
          <p class="mt-3 text-[16px] font-medium text-white sm:text-[24px]">{{ t(detailKey('heroSubtitle')) }}</p>
          <button
            class="mt-11 inline-flex h-[61px] w-full max-w-[515px] items-center justify-center rounded-[9px] bg-white px-8 text-[22px] font-bold text-ink transition-colors hover:bg-slate-100"
            @click="$emit('navigate', 'contact')"
          >
            {{ t('common.contactDemo') }}
          </button>
          <div v-if="product.heroStats.length" class="mt-11 grid max-w-[650px] grid-cols-1 gap-5 text-white sm:grid-cols-3">
            <div v-for="stat in product.heroStats" :key="stat.key" class="flex items-center gap-4 text-[15px] leading-tight">
              <component :is="heroStatIcon(stat.icon)" class="h-8 w-8 shrink-0 text-white" :stroke-width="1.8" />
              <span>{{ t(detailKey(`heroStats.${stat.key}`)) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#effcff] py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 class="max-w-[520px] text-[30px] font-black uppercase leading-[1.1] tracking-[0.01em] text-ink sm:text-[42px]">
              {{ t(detailKey('introTitle')) }}
            </h2>
            <p class="mt-5 max-w-[500px] text-[15px] leading-[1.8] text-slate-600">{{ t(detailKey('introBody')) }}</p>
          </div>
          <img :src="product.productImage" :alt="t(detailKey('introTitle'))" class="mx-auto max-h-[330px] w-full max-w-[520px] object-contain" />
        </div>

        <div class="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          <article v-for="feature in product.features" :key="feature.key" class="flex items-start gap-4">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#236bd4] to-[#6340af] text-white">
              <component :is="iconFor(feature.icon)" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-[14px] font-black uppercase leading-snug text-ink">{{ t(detailKey(`features.${feature.key}.title`)) }}</h3>
              <p class="mt-2 text-[12px] leading-[1.65] text-slate-500">{{ t(detailKey(`features.${feature.key}.copy`)) }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-if="t(detailKey('healthTitle'))" class="bg-[#111f4b] py-16 text-white sm:py-20 lg:py-24">
      <div class="mx-auto max-w-[1100px] px-5 text-center sm:px-6 lg:px-10">
        <p class="mx-auto inline-flex rounded-full bg-white/12 px-6 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white/90">
          {{ t('detail.shared.healthApplication') }}
        </p>
        <h2 class="mx-auto mt-7 max-w-[760px] text-[28px] font-black uppercase leading-[1.2] tracking-[0.02em] sm:text-[36px]">
          {{ t(detailKey('healthTitle')) }}
        </h2>

        <div class="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          <article v-for="item in healthApplications" :key="item.key" class="text-left">
            <img :src="item.image" :alt="t(`detail.shared.healthApplications.${item.key}.title`)" class="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg" />
            <h3 class="mt-7 text-[15px] font-bold">{{ t(`detail.shared.healthApplications.${item.key}.title`) }}</h3>
            <p class="mt-3 text-[12px] leading-[1.75] text-white/62">{{ t(`detail.shared.healthApplications.${item.key}.copy`) }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p class="inline-flex rounded-full border border-slate-200 px-7 py-2 text-[12px] font-black uppercase tracking-[0.04em] text-[#285fbc]">
              {{ t(detailKey('technicalLabel')) }}
            </p>
            <h2 class="mt-8 max-w-[520px] text-[28px] font-black uppercase leading-[1.15] tracking-[0.01em] text-[#172048] sm:text-[36px]">
              {{ t(detailKey('technicalTitle')) }}
            </h2>
            <img :src="product.productImage" :alt="t(detailKey('technicalTitle'))" class="mt-8 max-h-[280px] w-full max-w-[420px] object-contain" />
          </div>

          <div class="overflow-hidden rounded-[2px] border border-slate-100">
            <table class="w-full border-collapse text-left text-[13px]">
              <tbody>
                <tr v-for="(specKey, idx) in product.specs" :key="specKey" :class="idx === 0 ? 'bg-gradient-to-r from-[#08c47c] to-[#79d151] text-white' : 'odd:bg-[#effaff] even:bg-[#e3f5fb]'">
                  <th class="w-[38%] px-5 py-4 font-bold">{{ t(detailKey(`specs.${specKey}.label`)) }}</th>
                  <td class="px-5 py-4 text-slate-700" :class="idx === 0 ? '!text-white font-bold' : ''">{{ t(detailKey(`specs.${specKey}.value`)) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p class="inline-flex rounded-full border border-slate-200 px-7 py-2 text-[12px] font-black uppercase tracking-[0.04em] text-[#285fbc]">
              {{ t('detail.shared.softwareLabel') }}
            </p>
            <h2 class="mt-6 max-w-[540px] text-[28px] font-black uppercase leading-[1.12] tracking-[0.01em] text-[#172048] sm:text-[38px]">
              {{ t(detailKey('softwareTitle')) }}
            </h2>
            <p class="mt-4 text-[15px] text-slate-600">{{ t('detail.shared.softwareSubtitle') }}</p>

            <div class="mt-8 space-y-5">
              <div v-for="item in softwareBenefits" :key="item.key" class="flex max-w-[420px] items-start gap-4 rounded-[12px] bg-white p-4 shadow-[0_16px_40px_rgba(15,27,45,0.08)]">
                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-br from-[#236bd4] to-[#6340af] text-white">
                  <component :is="item.icon" class="h-4 w-4" />
                </div>
                <div>
                  <h3 class="text-[13px] font-bold text-ink">{{ t(`detail.shared.softwareBenefits.${item.key}.title`) }}</h3>
                  <p class="mt-1 text-[11.5px] leading-[1.55] text-slate-500">{{ t(`detail.shared.softwareBenefits.${item.key}.copy`) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -bottom-8 right-0 h-40 w-64 bg-[#cceeff]"></div>
            <img :src="product.softwareImage" :alt="t(detailKey('softwareTitle'))" class="relative mx-auto max-h-[360px] w-full object-contain" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#effcff] py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-[1120px] px-5 text-center sm:px-6 lg:px-10">
        <p class="inline-flex rounded-full border border-slate-200 bg-white/70 px-7 py-2 text-[12px] font-black uppercase tracking-[0.04em] text-[#285fbc]">
          {{ t('detail.shared.marketLabel') }}
        </p>
        <h2 class="mt-7 text-[30px] font-black uppercase tracking-[0.01em] text-[#172048] sm:text-[40px]">
          {{ t('detail.shared.marketTitle') }}
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-1 md:grid-cols-3">
          <article v-for="market in marketApplications" :key="market.key" class="relative min-h-[300px] overflow-hidden text-left">
            <img :src="market.image" :alt="t(`detail.shared.markets.${market.key}`)" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/15 to-transparent"></div>
            <h3 class="absolute bottom-7 left-7 max-w-[220px] text-[22px] font-black uppercase leading-[1.1] text-white">{{ t(`detail.shared.markets.${market.key}`) }}</h3>
          </article>
        </div>
      </div>
    </section>

    <section v-if="t(detailKey('finalTitle'))" class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-[980px] px-5 sm:px-6 lg:px-10">
        <h2 class="text-center text-[28px] font-black uppercase leading-[1.2] tracking-[0.02em] text-[#172048] sm:text-[38px]">
          {{ t(detailKey('finalTitle')) }}
        </h2>
        <div class="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <img :src="product.finalImage" :alt="t(detailKey('finalTitle'))" class="h-[280px] w-full rounded-[24px] object-cover" />
          <ul class="space-y-3 rounded-[18px] bg-[#e6fbff] p-7 text-left text-[14px] leading-[1.6] text-slate-700">
            <li v-for="item in product.finalBullets" :key="item" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#172048]"></span>
              <span>{{ t(detailKey(`finalBullets.${item}`)) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Box as BoxIcon,
  ClipboardList,
  Eye as EyeIcon,
  FileText,
  Leaf as LeafIcon,
  Pipette,
  Smartphone,
  ThermometerSun,
  TimerReset,
  Zap as ZapIcon,
} from 'lucide-vue-next'
import {
  healthApplications,
  marketApplications,
  productDetails,
  type ProductDetailPageName,
} from '@/data/productCatalog'
import type { PageName } from '@/App.vue'

const props = defineProps<{
  page: ProductDetailPageName
}>()

defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const product = computed(() => productDetails[props.page])
const { t } = useI18n({ useScope: 'global' })

function detailKey(path: string) {
  return `detail.${product.value.key}.${path}`
}

const iconMap = {
  cube: BoxIcon,
  eye: EyeIcon,
  leaf: LeafIcon,
  zap: ZapIcon,
}

const heroIconMap = {
  timer: TimerReset,
  pipette: Pipette,
  thermometer: ThermometerSun,
  report: FileText,
}

const softwareBenefits = [
  {
    key: 'ecosystem',
    icon: Smartphone,
  },
  {
    key: 'interpretation',
    icon: ZapIcon,
  },
  {
    key: 'reporting',
    icon: FileText,
  },
]

function iconFor(icon: keyof typeof iconMap) {
  return iconMap[icon]
}

function heroStatIcon(icon: keyof typeof heroIconMap) {
  return heroIconMap[icon]
}

void ClipboardList
</script>
