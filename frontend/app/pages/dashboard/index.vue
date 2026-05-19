<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { DollarSign, Package, Users, ArrowUpRight, Search } from 'lucide-vue-next'

// Mock Data
const stats = ref([
  { title: 'Total Revenue', value: '$12,459.00', change: '+15.2% from last month', icon: DollarSign },
  { title: 'Presets Active', value: '48 items', change: '+3 new this week', icon: Package },
  { title: 'Subscribers', value: '1,842 accounts', change: '+180 new downloads', icon: Users },
])

const recentOrders = ref([
  { id: '#ORD-9281', name: 'John Doe', preset: 'Cinematic Dream (Individual)', amount: '$3.99', status: 'Completed', date: '2026-05-19' },
  { id: '#ORD-9280', name: 'Alice Smith', preset: 'Landscape Pack (Bundle)', amount: '$24.99', status: 'Completed', date: '2026-05-19' },
  { id: '#ORD-9279', name: 'Bob Johnson', preset: 'Teal & Orange Premium', amount: '$3.99', status: 'Pending', date: '2026-05-18' },
  { id: '#ORD-9278', name: 'Sarah Miller', preset: 'Retro Grain Pack (Bundle)', amount: '$14.99', status: 'Completed', date: '2026-05-18' },
])
</script>

<template>
  <div class="space-y-8 max-w-7xl mx-auto">
    <!-- Page Intro Header -->
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-extrabold tracking-tight">Dashboard Overview</h2>
      <p class="text-muted-foreground">Monitor real-time download activity, preset sales volume, and server status.</p>
    </div>

    <!-- Stats Cards Grid -->
    <div class="grid gap-6 md:grid-cols-3">
      <Card v-for="(stat, idx) in stats" :key="idx" class="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle class="text-sm font-semibold tracking-wide text-muted-foreground">{{ stat.title }}</CardTitle>
          <component :is="stat.icon" class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent class="space-y-1">
          <div class="text-3xl font-black tracking-tight">{{ stat.value }}</div>
          <p class="text-xs text-emerald-500 font-medium flex items-center gap-1">
            {{ stat.change }}
          </p>
        </CardContent>
      </Card>
    </div>

    <!-- Details Section -->
    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Recent Orders Table Card (Span 2) -->
      <Card class="lg:col-span-2 border border-border bg-card">
        <CardHeader class="flex flex-row items-center justify-between">
          <div class="space-y-1">
            <CardTitle class="text-lg font-bold">Recent Transactions</CardTitle>
            <CardDescription>A list of recent purchases processed via Stripe checkout.</CardDescription>
          </div>
          <Button size="sm" variant="outline" class="gap-1">
            View All <ArrowUpRight class="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div class="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow class="hover:bg-transparent">
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Preset</TableHead>
                  <TableHead class="text-right">Amount</TableHead>
                  <TableHead class="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="order in recentOrders" :key="order.id" class="hover:bg-accent/40 transition-colors">
                  <TableCell class="font-semibold text-xs text-primary">{{ order.id }}</TableCell>
                  <TableCell class="text-sm">{{ order.name }}</TableCell>
                  <TableCell class="text-sm text-muted-foreground">{{ order.preset }}</TableCell>
                  <TableCell class="text-right font-bold text-sm">{{ order.amount }}</TableCell>
                  <TableCell class="text-center">
                    <Badge 
                      :variant="order.status === 'Completed' ? 'default' : 'secondary'"
                      class="text-[10px] uppercase font-bold"
                    >
                      {{ order.status }}
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <!-- Quick Preset Actions Card -->
      <Card class="border border-border bg-card">
        <CardHeader class="space-y-1">
          <CardTitle class="text-lg font-bold">Preset Finder</CardTitle>
          <CardDescription>Quickly search the digital asset library.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="relative">
            <Search class="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Enter preset name..." class="pl-9" />
          </div>
          <div class="space-y-2">
            <h4 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fast Links</h4>
            <div class="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" class="justify-start">Add Preset</Button>
              <Button variant="outline" size="sm" class="justify-start">Upload Assets</Button>
              <Button variant="outline" size="sm" class="justify-start">Create Bundle</Button>
              <Button variant="outline" size="sm" class="justify-start">View Stats</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
