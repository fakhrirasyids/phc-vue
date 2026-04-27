<template>
  <div>
    <section class="bg-ink-950 pt-36 sm:pt-44 lg:pt-52 pb-20 sm:pb-32 lg:pb-44">
      <div class="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <h1 class="font-serif font-bold text-white text-[40px] sm:text-[56px] lg:text-[64px] leading-tight">
          Get In Touch
        </h1>
        <p class="mt-6 text-white/70 text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.55] max-w-[760px] mx-auto">
          Ready to explore how our Integrated Veterinary Technology Platform can transform your veterinary? Let's start a conversation.
        </p>
      </div>
    </section>

    <section class="bg-[#effcff] py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          <article
            v-for="item in contactCards"
            :key="item.title"
            class="rounded-[16px] border border-slate-100 bg-white px-6 py-9 sm:py-10 text-center shadow-[0_8px_30px_rgba(15,27,45,0.04)]"
          >
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#236bd4] to-[#6340af] text-white">
              <component :is="item.icon" class="h-7 w-7" :stroke-width="2" />
            </div>
            <h2 class="mt-7 font-serif text-[24px] font-bold text-ink">{{ item.title }}</h2>
            <div class="mt-4 text-[14px] leading-[1.65] text-slate-500">
              <p v-for="line in item.lines" :key="line">{{ line }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_480px] lg:gap-16 xl:gap-20 items-start">
          <div class="pt-1 lg:pt-3">
            <p class="inline-flex rounded-full bg-[#eaf2ff] px-7 py-3 text-[15px] font-bold uppercase tracking-[0.3px] text-[#2567c9]">
              Request a Demo
            </p>
            <h2 class="mt-8 max-w-[640px] font-serif text-[34px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.18] text-ink">
              <span class="block lg:whitespace-nowrap">Integrated Veterinary</span>
              <span class="block lg:whitespace-nowrap">Technology Platform</span>
            </h2>
            <p class="mt-6 max-w-[520px] text-[15px] sm:text-[16px] leading-[1.85] text-slate-500">
              Integrated Veterinary Technology Platform Advanced medical devices and digital solutions designed to enhance veterinary care—from diagnostics and imaging to health kiosks and integrated platforms.
            </p>

            <div class="mt-10 space-y-6">
              <div v-for="step in demoSteps" :key="step.title" class="flex items-start gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-br from-[#236bd4] to-[#6340af] text-[18px] font-bold text-white">
                  {{ step.number }}
                </div>
                <div>
                  <h3 class="text-[16px] font-bold text-ink">{{ step.title }}</h3>
                  <p class="mt-1 text-[14px] text-slate-500">{{ step.copy }}</p>
                </div>
              </div>
            </div>
          </div>

          <form class="rounded-[20px] border border-slate-100 bg-slate-50/80 p-6 sm:p-8 lg:p-10 shadow-[0_10px_36px_rgba(15,27,45,0.04)]" @submit.prevent>
            <div class="space-y-6">
              <label v-for="field in formFields" :key="field.id" class="block">
                <span class="text-[14px] font-semibold text-ink">{{ field.label }}</span>
                <input
                  :id="field.id"
                  class="mt-3 h-12 w-full rounded-[10px] border border-slate-200 bg-white px-4 text-[14px] text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-[#236bd4]"
                  :type="field.type"
                  :placeholder="field.placeholder"
                />
              </label>

              <label class="block">
                <span class="text-[14px] font-semibold text-ink">How can we help? *</span>
                <textarea
                  class="mt-3 h-32 w-full resize-none rounded-[10px] border border-slate-200 bg-white px-4 py-4 text-[14px] text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-[#236bd4]"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </label>
            </div>

            <button
              type="submit"
              class="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#236bd4] to-[#6340af] px-7 text-[16px] font-bold text-white shadow-[0_12px_28px_rgba(58,83,185,0.24)] transition-opacity hover:opacity-95"
            >
              Send Message
              <SendIcon class="h-5 w-5" :stroke-width="2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Mail as MailIcon, MapPin as MapPinIcon, Phone as PhoneIcon, Send as SendIcon } from 'lucide-vue-next'
import type { PageName } from '@/App.vue'

defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const contactCards = [
  {
    title: 'Visit Us',
    icon: MapPinIcon,
    lines: ['3 TAI SENG AVENUE, #04-36', 'TAI SENG EXCHANGE', 'Singapore 536465'],
  },
  {
    title: 'Email Us',
    icon: MailIcon,
    lines: ['contact@8isugar.com', 'sales@8isugar.com'],
  },
  {
    title: 'Call Us',
    icon: PhoneIcon,
    lines: ['+1 (800) 555-0199', '+65 6123 4567'],
  },
]

const demoSteps = [
  { number: '1', title: 'Tell us about your needs', copy: 'Share your current challenges and goals' },
  { number: '2', title: 'Schedule a consultation', copy: 'Meet with our technical team' },
  { number: '3', title: 'Get a custom solution', copy: 'Receive tailored recommendations' },
]

const formFields = [
  { id: 'fullName', label: 'Full Name *', type: 'text', placeholder: 'John Smith' },
  { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com' },
  { id: 'company', label: 'Company', type: 'text', placeholder: 'Your Company Name' },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
]
</script>
