<template>
  <div class="page-wrapper home">
    <div class="tag tag-top">&lt;body&gt;</div>

    <div class="home-hero">
      <p class="home-greeting mono">// hello, world</p>
      <h1 class="home-title">
        Hi, I'm
        <span class="name-highlight">{{ name }}</span>
      </h1>
      <h2 class="home-role">
        <span class="role-prefix">~$&nbsp;</span>
        <span class="typed-role">{{ displayedRole }}</span>
        <span class="cursor" :class="{ blink: !typing }">_</span>
      </h2>
      <p class="home-bio">
        Computer Science student &amp; developer based in the UK.
        I build full-stack web apps, experiment with machine learning,
        and enjoy shipping clean, functional software.
      </p>
      <div class="home-cta">
        <RouterLink to="/projects" class="btn-glow">View Projects</RouterLink>
        <RouterLink to="/contact" class="btn-glow btn-outline">Get In Touch</RouterLink>
      </div>
    </div>

    <div class="tag tag-bottom">&lt;/body&gt;<br /><span style="margin-left:4px;">&lt;/html&gt;</span></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const name = 'Tom Thurston'

const roles = [
  'Full-Stack Developer',
  'CS Student',
  'ML Enthusiast',
  'Open-Source Builder',
]

const displayedRole = ref('')
const typing = ref(true)
let roleIdx = 0
let charIdx = 0
let deleting = false

function tick() {
  const current = roles[roleIdx]
  if (!deleting) {
    charIdx++
    displayedRole.value = current.slice(0, charIdx)
    typing.value = true
    if (charIdx === current.length) {
      deleting = true
      typing.value = false
      setTimeout(tick, 2000)
      return
    }
  } else {
    charIdx--
    displayedRole.value = current.slice(0, charIdx)
    if (charIdx === 0) {
      deleting = false
      roleIdx = (roleIdx + 1) % roles.length
    }
  }
  setTimeout(tick, deleting ? 40 : 70)
}

onMounted(() => setTimeout(tick, 500))
</script>

<style lang="scss" scoped>
$accent: #00d4ff;
$accent-2: #7928ca;
$text-dim: #7a7a8c;

.home {
  justify-content: center;
}

.home-greeting {
  font-size: 13px;
  color: $text-dim;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.home-title {
  font-size: clamp(32px, 5vw, 58px);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  font-family: 'Fira Code', monospace;
}

.name-highlight {
  color: $accent;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.35);
}

.home-role {
  font-family: 'Fira Code', monospace;
  font-size: clamp(16px, 2.5vw, 22px);
  font-weight: 400;
  color: #c0c0d0;
  margin-bottom: 28px;
  min-height: 32px;
}

.role-prefix { color: $accent; opacity: 0.6; }

.cursor {
  color: $accent;
  font-weight: 300;

  &.blink { animation: blink 1s step-end infinite; }
}

@keyframes blink { 50% { opacity: 0; } }

.home-bio {
  max-width: 560px;
  font-size: 16px;
  line-height: 1.75;
  color: #a0a0b0;
  margin-bottom: 40px;
}

.home-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  .btn-outline {
    color: #a0a0b0;
    border-color: #333;

    &:hover {
      color: $accent;
      border-color: $accent;
      box-shadow: 0 0 18px rgba(0, 212, 255, 0.2);
    }
  }
}
</style>
