<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ShoppingCart, User, Menu, X, Star, Heart } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'

const isMobileMenuOpen = ref(false)
const cartItemCount = ref(0) // Mock cart state

// Ensure dark mode is active on document root for variables context
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark')
}

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 dark flex flex-col font-sans selection:bg-amber-500 selection:text-slate-900">
    <!-- Navigation Header -->
    <header class="sticky top-0 z-40 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      <div class="container mx-auto max-w-7xl h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <!-- Logo and Wordmark -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <img src="/logo.png" class="w-9 h-9 object-contain rounded-md bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform" alt="GH" />
          <div class="flex flex-col">
            <span class="font-extrabold text-sm tracking-tight text-slate-50 group-hover:text-amber-400 transition-colors">Grading Hub</span>
            <span class="text-[9px] text-amber-500 font-bold uppercase tracking-widest leading-none">Color Lab</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink to="/" class="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors">Home</NuxtLink>
          <NuxtLink to="#" class="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors">Presets</NuxtLink>
          <NuxtLink to="#" class="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors">Gallery</NuxtLink>
          <NuxtLink to="#" class="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors">How To Use</NuxtLink>
          <NuxtLink to="#" class="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors">About</NuxtLink>
        </nav>

        <!-- Utility Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Shopping Cart -->
          <NuxtLink to="#" class="relative p-2 text-slate-400 hover:text-slate-100 transition-colors">
            <ShoppingCart class="w-5 h-5" />
            <span v-if="cartItemCount > 0" class="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {{ cartItemCount }}
            </span>
          </NuxtLink>

          <!-- Login / Dashboard -->
          <NuxtLink to="/dashboard">
            <Button size="sm" variant="ghost" class="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-slate-900">
              <User class="w-4 h-4 mr-2" />
              Portal
            </Button>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="flex items-center gap-4 md:hidden">
          <NuxtLink to="#" class="relative p-2 text-slate-400 hover:text-slate-100 transition-colors">
            <ShoppingCart class="w-5 h-5" />
          </NuxtLink>
          <Button variant="ghost" size="icon" class="text-slate-400 hover:text-slate-100" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </Button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-b border-slate-900 bg-slate-950 px-4 py-6 space-y-4">
        <nav class="flex flex-col gap-4">
          <NuxtLink to="/" class="text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors" @click="isMobileMenuOpen = false">Home</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors" @click="isMobileMenuOpen = false">Presets</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors" @click="isMobileMenuOpen = false">Gallery</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors" @click="isMobileMenuOpen = false">How To Use</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-100 transition-colors" @click="isMobileMenuOpen = false">About</NuxtLink>
        </nav>
        <div class="pt-4 border-t border-slate-900 flex items-center justify-between">
          <NuxtLink to="/dashboard" class="flex items-center text-sm font-semibold uppercase tracking-wider text-amber-500" @click="isMobileMenuOpen = false">
            <User class="w-4 h-4 mr-2" />
            Developer Portal
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-900 bg-slate-950 py-12">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Column 1: Brand Info -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img src="/logo.png" class="w-8 h-8 object-contain rounded bg-slate-900 border border-slate-800" alt="GH" />
              <span class="font-extrabold text-sm tracking-tight text-slate-50">Grading Hub</span>
            </div>
            <p class="text-xs text-slate-400 max-w-xs">
              Professional color grading tools for Lightroom, Lightroom Classic, and Mobile. Transform your photos in one click.
            </p>
          </div>

          <!-- Column 2: Shop -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-4">Shop</h3>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><NuxtLink to="#" class="hover:text-slate-100 transition-colors">Premium Presets</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-slate-100 transition-colors">Lightroom Bundles</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-slate-100 transition-colors">Free Download Packs</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 3: Support -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-4">Support</h3>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><NuxtLink to="#" class="hover:text-slate-100 transition-colors">Installation Guides</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-slate-100 transition-colors">Troubleshooting</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-slate-100 transition-colors">Frequently Asked Questions</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 4: Legal & Contact -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-4">Contact</h3>
            <p class="text-xs text-slate-400 mb-2">Have questions? Reach us at:</p>
            <span class="text-xs font-semibold text-slate-300">support@gradinghub.com</span>
          </div>

        </div>

        <div class="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>&copy; 2026 Grading Hub. All rights reserved.</span>
          <div class="flex items-center gap-4">
            <NuxtLink to="#" class="hover:text-slate-300">Privacy Policy</NuxtLink>
            <NuxtLink to="#" class="hover:text-slate-300">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
