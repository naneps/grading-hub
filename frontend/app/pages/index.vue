<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sparkles, Camera, Check, Heart, ShoppingCart, Download, Mail, Star } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'

definePageMeta({
  layout: 'store'
})

// Slider State
const sliderPosition = ref(100) // Start at 100% for initial entrance sweep
const sliderContainer = ref<HTMLElement | null>(null)

function handleDrag(e: MouseEvent) {
  if (!sliderContainer.value) return
  const rect = sliderContainer.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPosition.value = percentage
}

function handleTouchDrag(e: TouchEvent) {
  if (!sliderContainer.value || e.touches.length === 0) return
  const rect = sliderContainer.value.getBoundingClientRect()
  const x = e.touches[0].clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPosition.value = percentage
}

onMounted(() => {
  // Animate slider sweep from 100% to 50% on load for a dynamic intro presentation
  const duration = 1400 // ms
  const startTime = performance.now()
  
  function animate(time: number) {
    const elapsed = time - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Ease-out cubic curve
    const ease = 1 - Math.pow(1 - progress, 3)
    sliderPosition.value = 100 - (ease * 50)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  setTimeout(() => {
    requestAnimationFrame(animate)
  }, 150)
})

// Preset Cards State
const presets = ref([
  {
    id: 'pr-1',
    name: 'Warm Golden Hour',
    category: 'Travel / Portrait',
    price: '$3.99',
    description: 'Brings rich honey tones and amber warmth to sunset photos.',
    filterBefore: 'grayscale-[20%] brightness-90',
    filterAfter: 'saturate-[1.3] brightness-[1.05] contrast-[1.05] sepia-[0.1] hue-rotate-[4deg]',
    isHovered: false
  },
  {
    id: 'pr-2',
    name: 'Cinematic Teal & Orange',
    category: 'Street / Urban',
    price: '$3.99',
    description: 'Cool blue-green shadows contrasted with warm skin tones.',
    filterBefore: 'brightness-95 contrast-95',
    filterAfter: 'hue-rotate-[10deg] saturate-[1.25] contrast-[1.1] brightness-[0.98]',
    isHovered: false
  },
  {
    id: 'pr-3',
    name: 'Vintage Analogue Film',
    category: 'Nostalgia / Grain',
    price: '$3.99',
    description: 'Soft pastel colors with subtle vintage matte contrast.',
    filterBefore: 'brightness-90 contrast-100',
    filterAfter: 'contrast-[0.9] saturate-[0.9] brightness-[1.05] sepia-[0.12] blur-[0.2px]',
    isHovered: false
  },
  {
    id: 'pr-4',
    name: 'Minimalist Portrait',
    category: 'Studio / Clean',
    price: 'Free',
    description: 'Pristine whites and smooth, accurate skin texture tones.',
    filterBefore: 'saturate-[1.1] contrast-[1.02]',
    filterAfter: 'contrast-[1.08] saturate-[0.92] brightness-[1.02]',
    isHovered: false
  }
])

// Subscription Form
const emailInput = ref('')
const isSubscribed = ref(false)

function submitSubscription() {
  if (emailInput.value.includes('@')) {
    isSubscribed.value = true
    emailInput.value = ''
  }
}
</script>

<template>
  <div class="space-y-24 pb-24 overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative pt-12 md:pt-20">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Hero Text -->
          <div class="lg:col-span-5 space-y-8 text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-bold text-amber-500 tracking-wider uppercase animate-fade-in-up">
              <Sparkles class="w-3.5 h-3.5 animate-pulse" />
              Professional Color. One Click.
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight animate-fade-in-up delay-100">
              Bring Your <br />
              <span class="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Photography</span> To Life
            </h1>
            
            <p class="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg animate-fade-in-up delay-200">
              Carefully tuned Lightroom presets that deliver professional-grade color grading in a single click. Tested across thousands of photos, skin tones, and lighting conditions.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <NuxtLink to="#catalog">
                <Button size="lg" class="w-full sm:w-auto text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-6 rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25">
                  Explore Presets
                </Button>
              </NuxtLink>
              <NuxtLink to="#free-download">
                <Button size="lg" variant="outline" class="w-full sm:w-auto text-xs font-bold uppercase tracking-wider border-slate-800 text-slate-300 hover:text-white bg-transparent hover:bg-slate-900 px-8 py-6 rounded-lg transition-all">
                  <Download class="w-4 h-4 mr-2" />
                  Get 3 Free Presets
                </Button>
              </NuxtLink>
            </div>

            <!-- Trust Badge -->
            <div class="flex items-center gap-6 pt-4 border-t border-slate-900 animate-fade-in-up delay-400">
              <div class="flex flex-col">
                <span class="text-2xl font-black text-white">500+</span>
                <span class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Photographers</span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-black text-white">1000+</span>
                <span class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">RAW Samples</span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-black text-white">4.9/5</span>
                <div class="flex items-center gap-0.5 text-amber-500">
                  <Star class="w-3.5 h-3.5 fill-current" />
                  <Star class="w-3.5 h-3.5 fill-current" />
                  <Star class="w-3.5 h-3.5 fill-current" />
                  <Star class="w-3.5 h-3.5 fill-current" />
                  <Star class="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Before-After Interactive Slider -->
          <div class="lg:col-span-7 animate-fade-in-up delay-200">
            <div 
              class="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-900 select-none cursor-ew-resize group"
              @mousemove="handleDrag"
              @touchmove="handleTouchDrag"
              ref="sliderContainer"
            >
              <!-- Before Image (Left / Base) -->
              <div class="absolute inset-0 bg-slate-900">
                <img 
                  src="/images/hero_sample.png" 
                  class="w-full h-full object-cover filter grayscale contrast-90 brightness-95" 
                  alt="Before Preset"
                />
                <div class="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded text-slate-400 border border-slate-900">
                  Original (RAW)
                </div>
              </div>

              <!-- After Image (Right / Clipped Overlay) -->
              <div 
                class="absolute inset-0 pointer-events-none"
                :style="{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }"
              >
                <img 
                  src="/images/hero_sample.png" 
                  class="w-full h-full object-cover filter saturate-[1.25] contrast-[1.08] sepia-[0.08] hue-rotate-[4deg] brightness-[1.02]" 
                  alt="After Preset"
                />
                <div class="absolute bottom-4 right-4 bg-amber-500/90 text-slate-950 text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded shadow">
                  Warm Golden Preset
                </div>
              </div>

              <!-- Slider Divider Line -->
              <div 
                class="absolute top-0 bottom-0 w-0.5 bg-amber-500 pointer-events-none shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                :style="{ left: sliderPosition + '%' }"
              >
                <!-- Pulsing Interactive Indicator -->
                <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-slate-950 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg text-amber-500 text-xs transition-transform duration-300 group-hover:scale-110">
                  <span class="absolute inset-0 rounded-full bg-amber-500/25 animate-ping"></span>
                  ↔
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Feature 1 -->
        <div class="p-8 rounded-2xl bg-slate-950 border border-slate-900 space-y-4 hover:border-amber-500/20 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 animate-fade-in-up delay-300">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
            <Camera class="w-5 h-5" />
          </div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-slate-50">1000+ Real Examples</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Every preset is refined and validated across diverse environments, skin tones, and lighting structures to ensure consistency.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="p-8 rounded-2xl bg-slate-950 border border-slate-900 space-y-4 hover:border-amber-500/20 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 animate-fade-in-up delay-400">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
            <Sparkles class="w-5 h-5" />
          </div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-slate-50">One-Click Magic</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            No intricate configuration needed. Import the preset, click once to apply, and make minor exposure adjustments as necessary.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="p-8 rounded-2xl bg-slate-950 border border-slate-900 space-y-4 hover:border-amber-500/20 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 animate-fade-in-up delay-500">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
            <Check class="w-5 h-5" />
          </div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-slate-50">Instant Download</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Receive direct access files immediately upon checkout. Supported format compatibility for Lightroom Desktop, Classic, and Mobile.
          </p>
        </div>

      </div>
    </section>

    <!-- Preset Catalog Grid Section -->
    <section id="catalog" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Elevate Your Aesthetic</h2>
        <p class="text-sm text-slate-400 max-w-lg mx-auto">
          Explore our signature Lightroom preset series. Hover over card thumbnails to simulate the preset effect.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          v-for="preset in presets" 
          :key="preset.id"
          class="bg-slate-950 border border-slate-900 overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(245,158,11,0.06)] hover:border-amber-500/30 transition-all duration-500 rounded-2xl group"
          @mouseenter="preset.isHovered = true"
          @mouseleave="preset.isHovered = false"
        >
          <!-- Before-After Hover Thumbnail -->
          <div class="relative aspect-square overflow-hidden bg-slate-900">
            <img 
              src="/images/hero_sample.png" 
              :class="[
                'w-full h-full object-cover transition-all duration-700 ease-out select-none group-hover:scale-105',
                preset.isHovered ? preset.filterAfter : preset.filterBefore
              ]" 
              alt="Preset Demo"
            />
            <div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded text-amber-500 z-10">
              {{ preset.category }}
            </div>
            <!-- Interactive Hover Prompt -->
            <div class="absolute inset-0 bg-slate-950/20 pointer-events-none flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span class="text-[10px] uppercase font-extrabold tracking-widest bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
                {{ preset.isHovered ? 'PRESET EFFECT' : 'HOVER TO VIEW' }}
              </span>
            </div>
          </div>

          <CardContent class="p-6 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-sm text-slate-100 group-hover:text-amber-400 transition-colors">{{ preset.name }}</h3>
              <span class="text-sm font-black text-amber-500">{{ preset.price }}</span>
            </div>
            
            <p class="text-xs text-slate-400 leading-relaxed min-h-[40px]">
              {{ preset.description }}
            </p>

            <div class="pt-2 flex items-center gap-2">
              <Button size="sm" class="flex-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-850 hover:bg-slate-800 text-slate-100 transition-colors">
                View Details
              </Button>
              <Button size="sm" class="text-[10px] font-bold uppercase bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all hover:scale-105">
                <ShoppingCart class="w-3.5 h-3.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Social Proof Testimonial Section -->
    <section class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="p-8 md:p-12 rounded-3xl bg-slate-950 border border-slate-900 text-center max-w-3xl mx-auto space-y-6">
        <div class="flex justify-center items-center gap-1 text-amber-500">
          <Star class="w-5 h-5 fill-current animate-pulse" v-for="i in 5" :key="i" />
        </div>
        <blockquote class="text-base md:text-lg font-medium text-slate-200 leading-relaxed italic">
          "Grading Hub completely revolutionized my post-processing flow. Presets usually require so much tweaking, but these are so well balanced. The skin tones are consistently perfect."
        </blockquote>
        <div class="flex flex-col items-center">
          <span class="text-xs font-bold text-white uppercase tracking-wider">Clara M.</span>
          <span class="text-[10px] text-slate-500 uppercase tracking-widest">Travel & Landscape Photographer</span>
        </div>
      </div>
    </section>

    <!-- Free Presets Email Capture Section -->
    <section id="free-download" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 px-8 py-16 text-center max-w-4xl mx-auto space-y-8">
        
        <div class="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mx-auto">
          <Download class="w-6 h-6 animate-bounce" />
        </div>

        <div class="space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Download 3 Free Presets</h2>
          <p class="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Get instant download files for three custom cinematic presets. Plus, receive exclusive editing tips and deals weekly.
          </p>
        </div>

        <!-- Form -->
        <div v-if="!isSubscribed" class="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <Mail class="absolute left-3 top-3 w-4 h-4 text-slate-500" />
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              v-model="emailInput" 
              class="pl-10 py-5 bg-slate-950/80 border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus-visible:ring-amber-500 focus-visible:border-amber-500"
            />
          </div>
          <Button @click="submitSubscription" class="text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-5 rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/15">
            Download Now
          </Button>
        </div>

        <!-- Success Message -->
        <div v-else class="max-w-md mx-auto p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 space-y-2">
          <h4 class="text-sm font-bold uppercase tracking-wider">Check Your Inbox! 📩</h4>
          <p class="text-xs">
            We've sent the download link and installation guide directly to your email address.
          </p>
        </div>

        <p class="text-[10px] text-slate-500 tracking-wider">
          No credit card required. No spam. Instant inbox delivery.
        </p>

      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 {
  animation-delay: 100ms;
}
.delay-200 {
  animation-delay: 200ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-400 {
  animation-delay: 400ms;
}
.delay-500 {
  animation-delay: 500ms;
}
</style>
