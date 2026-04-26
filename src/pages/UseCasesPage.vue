<template>
  <div>
    <section class="relative bg-ink-950 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="heroBg" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-25" />
        <div class="absolute inset-0 bg-ink-950/75"></div>
      </div>

      <div class="relative max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <p class="text-[12px] font-semibold tracking-[2px] text-brand-400 uppercase">Use Cases</p>
        <h1 class="mt-3 font-bold text-white text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.01em]">
          Clinical Workflows Built Around Real Veterinary Teams
        </h1>
        <p class="mt-5 text-white/65 text-[14px] sm:text-[16px] leading-[1.7] max-w-[720px] mx-auto">
          From intake to diagnostic review, 8xPet connects devices, records, and care decisions into a faster clinic rhythm.
        </p>
      </div>
    </section>

    <section class="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article v-for="item in useCases" :key="item.title" class="rounded-[18px] border border-slate-100 bg-white p-7 shadow-[0_4px_30px_rgba(15,27,45,0.05)]">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <component :is="item.icon" class="h-6 w-6" />
            </div>
            <h2 class="mt-6 text-[20px] font-bold text-ink">{{ item.title }}</h2>
            <p class="mt-3 text-[14px] leading-[1.7] text-slate-500">{{ item.copy }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ClipboardCheck, ScanLine, MonitorCog } from 'lucide-vue-next'
import heroBg from '@/assets/pet/bg-pet.png'

defineEmits<{
  (e: 'navigate', page: 'home' | 'about' | 'products' | 'use-cases'): void
}>()

const useCases = [
  {
    title: 'Point-of-Care Diagnostics',
    copy: 'Run molecular and rapid tests in the clinic and move from sample to treatment planning while the patient is still onsite.',
    icon: ClipboardCheck,
  },
  {
    title: 'Digital Imaging Review',
    copy: 'Capture radiography studies with hardware designed for companion animals and review findings inside a connected clinical record.',
    icon: ScanLine,
  },
  {
    title: 'Automated Intake',
    copy: 'Use kiosks and booking workflows to collect vitals, history, and owner context before the consultation starts.',
    icon: MonitorCog,
  },
]
</script>
