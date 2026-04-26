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
            <span class="block text-gradient-brand">Integrated Veterinary</span>
            <span class="block">Technology Platform</span>
          </h1>

          <p class="mt-5 sm:mt-6 text-white/75 text-[15px] sm:text-[16px] leading-[1.7] max-w-[520px]">
            Advanced medical devices and digital solutions designed to enhance veterinary care—from diagnostics and imaging to health kiosks and integrated platforms.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink hover:bg-slate-100 transition-colors shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
              @click="$emit('navigate', 'use-cases')"
            >Request Demo</button>

            <button
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
              @click="$emit('navigate', 'products')"
            >
              Explore Products
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
          <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">Core Pillars</p>
          <h2 class="mt-3 font-bold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-tight tracking-[-0.01em]">
            An Integrated Ecosystem
          </h2>
          <p class="mt-4 text-slate-500 text-[14px] sm:text-[15px] leading-[1.7]">
            Our comprehensive suite seamlessly connects hardware and software, empowering your clinic from intake to diagnosis.
          </p>
        </div>

        <div class="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="bg-white rounded-[14px] p-6 lg:p-7 shadow-[0_4px_30px_rgba(15,27,45,0.06)] border border-slate-100 hover:shadow-[0_10px_40px_rgba(15,27,45,0.08)] transition-shadow"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
              <img :src="pillar.icon" :alt="pillar.title" class="w-6 h-6 object-contain" />
            </div>
            <h3 class="mt-5 font-bold text-ink text-[18px] sm:text-[20px]">{{ pillar.title }}</h3>
            <p class="mt-2 text-slate-500 text-[13px] sm:text-[14px] leading-[1.65]">{{ pillar.desc }}</p>
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
            <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">Product Portfolio</p>
            <h2 class="mt-2 font-bold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-tight tracking-[-0.01em]">
              Advanced Medical Devices
            </h2>
          </div>
          <button
            class="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold text-[14px]"
            @click="$emit('navigate', 'products')"
          >
            View All Products
            <ChevronRightIcon class="h-4 w-4" />
          </button>
        </div>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <article
            v-for="product in products"
            :key="product.title"
            class="rounded-[14px] border border-slate-100 bg-white shadow-[0_4px_30px_rgba(15,27,45,0.05)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,27,45,0.10)] transition-all duration-300"
          >
            <div
              class="aspect-[16/10] flex items-center justify-center overflow-hidden"
              :style="{ background: product.bg }"
            >
              <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-5 lg:p-6">
              <h3 class="font-bold text-ink text-[16px] sm:text-[17px]">{{ product.title }}</h3>
              <p class="mt-2 text-slate-500 text-[13px] leading-[1.65]">{{ product.desc }}</p>
              <button
                class="mt-4 inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold text-[13px]"
                @click="$emit('navigate', 'products')"
              >
                Learn More
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
          <p class="text-[12px] font-semibold tracking-[2px] text-brand-400 uppercase">Clinical Workflow</p>
          <h2 class="mt-3 font-bold text-white text-[28px] sm:text-[34px] lg:text-[40px] leading-tight tracking-[-0.01em]">
            From Sample to Clinical Decision
          </h2>
          <p class="mt-4 text-white/65 text-[14px] sm:text-[15px] leading-[1.7]">
            Our intuitive platforms are designed to seamlessly integrate into your busy practice, eliminating manual steps.
          </p>
        </div>

        <div class="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 relative">
          <div
            v-for="(step, idx) in workflow"
            :key="step.title"
            class="text-center relative"
          >
            <div class="mx-auto w-14 h-14 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
              <component :is="step.icon" class="h-6 w-6 text-brand-400" :stroke-width="1.75" />
            </div>
            <p class="mt-5 text-[11px] font-semibold tracking-[2px] text-brand-400 uppercase">Step 0{{ idx + 1 }}</p>
            <h3 class="mt-2 text-white font-bold text-[18px] sm:text-[20px]">{{ step.title }}</h3>
            <p class="mt-2 text-white/55 text-[12.5px] leading-[1.65] max-w-[200px] mx-auto">{{ step.desc }}</p>
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
            <p class="text-[12px] font-semibold tracking-[2px] text-brand-500 uppercase">Why It Matters</p>
            <h2 class="mt-3 font-bold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em]">
              Elevating the Standard of Veterinary Care
            </h2>
            <p class="mt-4 text-slate-500 text-[14px] sm:text-[15px] leading-[1.7]">
              By bringing enterprise-level medical technology directly to the veterinary clinic, we enable practitioners to deliver human-grade healthcare to their animal patients.
            </p>

            <div class="mt-8 space-y-4 sm:space-y-5">
              <div
                v-for="b in benefits"
                :key="b.title"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <component :is="b.icon" class="h-5 w-5 text-brand-600" :stroke-width="2" />
                </div>
                <div>
                  <h4 class="font-bold text-ink text-[15px] sm:text-[16px]">{{ b.title }}</h4>
                  <p class="mt-1 text-slate-500 text-[13px] sm:text-[14px] leading-[1.65]">{{ b.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden bg-slate-100">
              <img :src="whyImg" alt="Veterinarian using diagnostic equipment" class="w-full h-full object-cover" />
            </div>

            <div class="absolute left-4 sm:left-6 -bottom-6 sm:bottom-6 right-4 sm:right-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(15,27,45,0.18)] border border-slate-100 p-3.5 sm:p-4 sm:max-w-[260px] flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon class="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p class="font-bold text-ink text-[13px] sm:text-[14px]">Lab-Grade Accuracy</p>
                <p class="text-slate-500 text-[11.5px] sm:text-[12px] mt-0.5">Gold standard validated</p>
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
          Transform Your Veterinary Practice Today
        </h2>
        <p class="mt-4 text-white/65 text-[14px] sm:text-[15px] leading-[1.7] max-w-[600px] mx-auto">
          Join hundreds of forward-thinking clinics leveraging our platform to deliver superior care and drive clinical efficiency.
        </p>

        <div class="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <button
            class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink hover:bg-slate-100 transition-colors"
          >Book a Consultation</button>

          <button
            class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
            @click="$emit('navigate', 'products')"
          >Explore Test Menu</button>
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

import heroBg from '@/assets/pet/bg-pet.png'
import ctaBg from '@/assets/pet/bg-pet.png'
import whyImg from '@/assets/pet/whyitsmatters.png'
import icDiagnostic from '@/assets/pet/ic-diagnostic.png'
import icImaging from '@/assets/pet/ic_imaging.png'
import icSmart from '@/assets/pet/ic_smart_system.png'
import dev1 from '@/assets/pet/dev1.png'
import dev2 from '@/assets/pet/dev2.png'
import dev3 from '@/assets/pet/dev3.png'
import dev4 from '@/assets/pet/dev4.png'
import dev5 from '@/assets/pet/dev5.png'
import dev6 from '@/assets/pet/dev6.png'

defineEmits<{
  (e: 'navigate', page: 'home' | 'about' | 'products' | 'use-cases'): void
}>()

const pillars = [
  {
    title: 'Diagnostics',
    desc: 'Lab-quality point-of-care testing. From rapid lateral flow to complex PCR molecular diagnostics, deliver accurate results in minutes instead of days.',
    icon: icDiagnostic,
  },
  {
    title: 'Imaging',
    desc: 'Crystal clear digital radiography. Advanced sensors and AI-assisted analysis provide unprecedented clarity for soft tissue and orthopedics.',
    icon: icImaging,
  },
  {
    title: 'Smart Systems',
    desc: 'Automated clinical workflows. Streamline patient check-in, vitals capture, and data synchronization seamlessly with our intelligent kiosks.',
    icon: icSmart,
  },
]

const products = [
  {
    title: 'PCR Molecular Diagnostics',
    desc: 'Advanced PCR testing capabilities offering rapid detection of infectious diseases with unprecedented accuracy.',
    image: dev1,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
  },
  {
    title: 'Lateral Flow Rapid Test',
    desc: 'Compact and reliable rapid tests for immediate screening of common veterinary conditions.',
    image: dev2,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
  },
  {
    title: 'Mini Cube Analyzer',
    desc: 'A revolutionary hematology and biochemistry analyzer designed for the modern, space-conscious clinic.',
    image: dev3,
    bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
  },
  {
    title: 'X-Ray Device for Pets',
    desc: 'Next-generation digital radiography tailored specifically for veterinary anatomy, providing high-resolution images with lower radiation exposure.',
    image: dev4,
    bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
  },
  {
    title: 'Pet Health Kiosk',
    desc: 'An automated intake and triage system that records vital signs, weight, and owner questionnaires before the doctor enters the room.',
    image: dev5,
    bg: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
  },
  {
    title: 'Pet CRO & Booking System',
    desc: 'An automated intake and triage system that records vital signs, weight, and owner questionnaires before the doctor enters the room.',
    image: dev6,
    bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
  },
]

const workflow = [
  { title: 'Sample',   desc: 'Collect minimally invasive samples directly from the patient.', icon: BeakerIcon },
  { title: 'Device',   desc: 'Automated processing with our intuitive medical hardware.',     icon: CpuIcon },
  { title: 'Result',   desc: 'Receive lab-grade accurate diagnostic data in minutes.',        icon: BarIcon },
  { title: 'Decision', desc: 'Make confident, immediate treatment decisions.',                icon: CheckIcon },
]

const benefits = [
  { title: 'Faster Diagnosis',   desc: 'Reduce turnaround times from days to minutes, allowing for immediate intervention while the patient is still in the clinic.', icon: ZapIcon },
  { title: 'Better Outcomes',    desc: 'Highly sensitive molecular diagnostics and imaging catch underlying conditions earlier, dramatically improving prognosis.',     icon: TrendIcon },
  { title: 'Simplified Workflow',desc: 'Automated systems require minimal training, freeing up your technicians to focus on patient care rather than manual testing.',  icon: WorkflowIcon },
]
</script>
