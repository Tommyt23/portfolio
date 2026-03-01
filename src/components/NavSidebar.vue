<template>
  <aside class="sidebar">
    <!-- Logo / name -->
    <RouterLink to="/" class="sidebar-logo">
      <span class="logo-bracket">&lt;</span>
      <span class="logo-name">TT</span>
      <span class="logo-bracket">/&gt;</span>
    </RouterLink>

    <!-- Nav icons -->
    <nav class="sidebar-nav">
      <RouterLink to="/" title="Home" :class="{ active: $route.path === '/' }">
        <i class="fas fa-house"></i>
      </RouterLink>
      <RouterLink to="/about" title="About" :class="{ active: $route.path === '/about' }">
        <i class="fas fa-user"></i>
      </RouterLink>
      <RouterLink to="/projects" title="Projects" :class="{ active: $route.path === '/projects' }">
        <i class="fas fa-code"></i>
      </RouterLink>
      <RouterLink to="/tutor" title="Tutoring" :class="{ active: $route.path === '/tutor' }">
        <i class="fas fa-chalkboard-user"></i>
      </RouterLink>
      <RouterLink to="/contact" title="Contact" :class="{ active: $route.path === '/contact' }">
        <i class="fas fa-envelope"></i>
      </RouterLink>
    </nav>

    <!-- Social links -->
    <ul class="sidebar-socials">
      <li>
        <a href="https://github.com/Tommyt23" target="_blank" title="GitHub" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tom-thurston" target="_blank" title="LinkedIn" rel="noopener">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="mailto:tom@ewok.co.uk" title="Email">
          <i class="fas fa-at"></i>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>

<style lang="scss" scoped>
$accent: #00d4ff;
$bg-card: #111118;
$border: #1e1e2e;
$text-dim: #7a7a8c;

.sidebar {
  width: 70px;
  min-height: 100vh;
  background: $bg-card;
  border-right: 1px solid $border;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: relative;
  z-index: 100;
  flex-shrink: 0;
}

.sidebar-logo {
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 700;
  color: $accent;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  margin-bottom: 40px;
  text-decoration: none;

  .logo-bracket { opacity: 0.5; font-size: 10px; }
  .logo-name { font-size: 15px; letter-spacing: 1px; }
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;

  a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: $text-dim;
    font-size: 16px;
    transition: all 0.2s ease;
    position: relative;

    &:hover, &.active {
      color: $accent;
      background: rgba($accent, 0.1);
    }

    &.active::before {
      content: '';
      position: absolute;
      left: -1px;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 24px;
      background: $accent;
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 8px $accent;
    }
  }
}

.sidebar-socials {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  a {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-dim;
    font-size: 15px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      color: $accent;
    }
  }
}
</style>
