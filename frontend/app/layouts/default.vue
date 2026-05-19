<script setup lang="ts">
import { ref } from 'vue'
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, Bell, Menu, Sun, Moon } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'

const isSidebarOpen = ref(true)
const isDarkMode = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  if (typeof document !== 'undefined') {
    const html = document.documentElement
    if (isDarkMode.value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
}

// Initial theme setup
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark')
}
</script>

<template>
  <div class="min-h-screen flex bg-background text-foreground font-sans transition-colors duration-300">
    <!-- Sidebar -->
    <aside 
      :class="[
        'border-r border-border bg-card transition-all duration-300 flex flex-col z-20',
        isSidebarOpen ? 'w-64' : 'w-20'
      ]"
    >
      <!-- Brand Logo Header -->
      <div class="h-16 flex items-center px-6 border-b border-border gap-3">
        <img src="/logo.png" class="w-10 h-10 object-contain rounded-lg shadow-md shrink-0 bg-slate-900 border border-border" alt="GH" />
        <div v-if="isSidebarOpen" class="flex flex-col overflow-hidden">
          <span class="font-extrabold text-sm tracking-tight text-primary whitespace-nowrap">Grading Hub</span>
          <span class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Developer Portal</span>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        <NuxtLink 
          to="/" 
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all group"
        >
          <LayoutDashboard class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span v-if="isSidebarOpen" class="truncate">Dashboard</span>
        </NuxtLink>

        <NuxtLink 
          to="#" 
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all group"
        >
          <Package class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span v-if="isSidebarOpen" class="truncate">Presets Catalog</span>
        </NuxtLink>

        <NuxtLink 
          to="#" 
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all group"
        >
          <ShoppingCart class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span v-if="isSidebarOpen" class="truncate">Orders & Payments</span>
        </NuxtLink>

        <NuxtLink 
          to="#" 
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all group"
        >
          <Users class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span v-if="isSidebarOpen" class="truncate">Customers list</span>
        </NuxtLink>

        <NuxtLink 
          to="#" 
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all group"
        >
          <Settings class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span v-if="isSidebarOpen" class="truncate">System Settings</span>
        </NuxtLink>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-border flex items-center justify-between">
        <span v-if="isSidebarOpen" class="text-xs text-muted-foreground font-semibold">v1.0.0</span>
        <Button variant="ghost" size="icon" @click="toggleTheme">
          <Sun v-if="isDarkMode" class="w-4 h-4 text-amber-500" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
        </Button>
      </div>
    </aside>

    <!-- Main Container -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Header -->
      <header class="h-16 border-b border-border bg-card flex items-center justify-between px-8 z-10 shrink-0">
        <div class="flex items-center gap-4">
          <Button variant="ghost" size="icon" @click="toggleSidebar">
            <Menu class="w-5 h-5" />
          </Button>
          <h1 class="text-lg font-bold tracking-tight">System Overview</h1>
        </div>

        <div class="flex items-center gap-4">
          <!-- Notification Bell -->
          <Button variant="ghost" size="icon" class="relative">
            <Bell class="w-5 h-5" />
            <span class="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
          </Button>

          <!-- User Profile -->
          <div class="flex items-center gap-3 pl-3 border-l border-border">
            <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-xs">
              AD
            </div>
            <div class="hidden md:flex flex-col text-left">
              <span class="text-xs font-bold">Admin Developer</span>
              <span class="text-[10px] text-muted-foreground">admin@gradinghub.com</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
/* Nuxt page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>
