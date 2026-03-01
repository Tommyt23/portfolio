<template>
  <div class="app-shell">
    <NavSidebar />
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" class="page-enter-active" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import NavSidebar from './components/NavSidebar.vue'
</script>
