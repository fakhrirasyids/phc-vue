<template>
  <footer class="bg-ink-950 text-white">
    <div class="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-16">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
        <div>
          <button class="inline-flex" aria-label="8xPet home" @click="$emit('navigate', 'home')">
            <img :src="logo" alt="8xPet" class="h-10 w-auto" />
          </button>
          <p class="mt-7 max-w-[260px] text-[13px] leading-[1.8] text-slate-400">
            Advanced medical devices and software platforms transforming veterinary diagnostics and clinical workflows worldwide.
          </p>
        </div>

        <div>
          <h2 class="text-[15px] font-semibold text-white">Products</h2>
          <ul class="mt-5 space-y-4 text-[13px] text-slate-400">
            <li v-for="item in products" :key="item">
              <button class="hover:text-white transition-colors text-left" @click="$emit('navigate', 'products')">{{ item }}</button>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-[15px] font-semibold text-white">Company</h2>
          <ul class="mt-5 space-y-4 text-[13px] text-slate-400">
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'about')">About Us</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'home')">Technology Platform</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'use-cases')">Applications</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'about')">Investors</button></li>
            <li><button class="hover:text-white transition-colors" @click="$emit('navigate', 'about')">Careers</button></li>
          </ul>
        </div>

        <div>
          <h2 class="text-[15px] font-semibold text-white">Contact</h2>
          <div class="mt-5 space-y-4 text-[13px] leading-[1.7] text-slate-400">
            <p>3 TAI SENG AVENUE, #04-36, TAI SENG EXCHANGE, Singapore 536465</p>
            <p>contact@8xpet.com</p>
            <p>+1 (800) 555-0199</p>
            <button class="rounded-lg border border-white/15 px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 VetTech Medical Systems. All rights reserved.</p>
        <div class="flex flex-wrap gap-6">
          <button class="hover:text-white transition-colors">Privacy Policy</button>
          <button class="hover:text-white transition-colors">Terms of Service</button>
          <button class="hover:text-white transition-colors">Legal</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/pet/8xpet-logo.png'
import type { PageName } from '@/App.vue'

defineEmits<{
  (e: 'navigate', page: PageName): void
}>()

const products = [
  'PCR Molecular Diagnostics',
  'Lateral Flow Rapid Test',
  'Mini Cube Analyzer',
  'X-Ray Device for Pets',
  'Pet Health Kiosk',
]
</script>
