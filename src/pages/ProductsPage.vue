<template>
  <div>
    <!-- Header band -->
    <section class="relative bg-ink-950 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
      <div class="relative max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <p class="text-[12px] font-semibold tracking-[2px] text-brand-400 uppercase">Products</p>
        <h1 class="mt-3 font-bold text-white text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.01em]">
          <span class="text-gradient-brand">Advanced Medical Devices</span>
          <span class="block text-white">Built for Veterinary Care</span>
        </h1>
        <p class="mt-5 text-white/65 text-[14px] sm:text-[16px] leading-[1.7] max-w-[680px] mx-auto">
          Diagnostics, imaging, and smart systems that work as one — engineered to elevate clinical accuracy and efficiency.
        </p>
      </div>
    </section>

    <!-- Product grid -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <article
            v-for="product in products"
            :key="product.title"
            class="rounded-[14px] border border-slate-100 bg-white shadow-[0_4px_30px_rgba(15,27,45,0.05)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,27,45,0.10)] transition-all duration-300"
          >
            <div class="aspect-[16/10] overflow-hidden" :style="{ background: product.bg }">
              <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-5 lg:p-6">
              <p class="text-[11px] font-semibold tracking-[1.6px] text-brand-500 uppercase">{{ product.category }}</p>
              <h3 class="mt-1.5 font-bold text-ink text-[16px] sm:text-[17px]">{{ product.title }}</h3>
              <p class="mt-2 text-slate-500 text-[13px] leading-[1.65]">{{ product.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-50 py-16 sm:py-20">
      <div class="max-w-[920px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <h2 class="font-bold text-ink text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.01em]">
          Need help choosing the right device?
        </h2>
        <p class="mt-3 text-slate-500 text-[14px] sm:text-[15px]">
          Our specialists will configure a setup tailored to your clinic.
        </p>
        <button
          class="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white hover:bg-ink-900 transition-colors"
          @click="$emit('navigate', 'use-cases')"
        >Talk to Sales</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import dev1 from '@/assets/pet/dev1.png'
import dev2 from '@/assets/pet/dev2.png'
import dev3 from '@/assets/pet/dev3.png'
import dev4 from '@/assets/pet/dev4.png'
import dev5 from '@/assets/pet/dev5.png'
import dev6 from '@/assets/pet/dev6.png'

defineEmits<{
  (e: 'navigate', page: 'home' | 'about' | 'products' | 'use-cases'): void
}>()

const products = [
  { title: 'PCR Molecular Diagnostics', category: 'Diagnostics', desc: 'Advanced PCR testing capabilities offering rapid detection of infectious diseases with unprecedented accuracy.', image: dev1, bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' },
  { title: 'Lateral Flow Rapid Test',  category: 'Diagnostics', desc: 'Compact and reliable rapid tests for immediate screening of common veterinary conditions.',                  image: dev2, bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' },
  { title: 'Mini Cube Analyzer',       category: 'Diagnostics', desc: 'A revolutionary hematology and biochemistry analyzer for the modern, space-conscious clinic.',               image: dev3, bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)' },
  { title: 'X-Ray Device for Pets',    category: 'Imaging',     desc: 'Next-generation digital radiography tailored specifically for veterinary anatomy with lower radiation exposure.', image: dev4, bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)' },
  { title: 'Pet Health Kiosk',         category: 'Smart Systems', desc: 'An automated intake and triage system that captures vital signs, weight, and owner questionnaires before the doctor enters the room.', image: dev5, bg: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)' },
  { title: 'Pet CRO & Booking System', category: 'Platform',    desc: 'Integrated software that connects every device, schedule, and patient record into a single clinical view.', image: dev6, bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' },
]
</script>
