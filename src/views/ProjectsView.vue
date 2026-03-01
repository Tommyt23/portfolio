<template>
  <div class="page-wrapper">
    <div class="tag tag-top">&lt;projects&gt;</div>

    <p class="section-heading">my work</p>
    <h2 class="projects-title">Things I've Built</h2>

    <div class="filter-row">
      <button
        v-for="f in filters"
        :key="f"
        class="filter-btn"
        :class="{ active: activeFilter === f }"
        @click="activeFilter = f"
      >{{ f }}</button>
    </div>

    <div class="projects-grid">
      <a
        v-for="project in filteredProjects"
        :key="project.name"
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="project-card card"
      >
        <div class="project-header">
          <i class="fas fa-code-branch project-icon"></i>
          <span class="project-lang badge" :class="langBadge(project.lang)">{{ project.lang }}</span>
        </div>
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-desc">{{ project.desc }}</p>
        <div class="project-footer">
          <span v-if="project.stars" class="project-stat"><i class="fas fa-star"></i> {{ project.stars }}</span>
          <span class="project-link">
            View on GitHub <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </a>
    </div>

    <div class="tag tag-bottom">&lt;/projects&gt;</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')
const filters = ['All', 'Python', 'JavaScript', 'Java', 'ML/Data']

const projects = [
  {
    name: 'F1 Dashboard',
    lang: 'Python',
    desc: 'Formula 1 data dashboard — pull live and historical race data and visualise it interactively.',
    url: 'https://github.com/Tommyt23/f1dashboard',
    tags: ['Python'],
  },
  {
    name: 'Flight Tracker',
    lang: 'JavaScript',
    desc: 'Real-time flight tracking web app built with JavaScript, pulling live aviation data.',
    url: 'https://github.com/Tommyt23/flight-tracker',
    tags: ['JavaScript'],
  },
  {
    name: 'ML Stocks',
    lang: 'Python',
    desc: 'Machine learning models applied to stock market data for predictive analysis using Jupyter Notebooks.',
    url: 'https://github.com/Tommyt23/ML-stocks',
    tags: ['Python', 'ML/Data'],
  },
  {
    name: 'TwitchBots',
    lang: 'Python',
    desc: 'Collection of Twitch chat bots — moderation helpers, commands, and automations.',
    url: 'https://github.com/Tommyt23/TwitchBots',
    tags: ['Python'],
  },
  {
    name: 'Beacon Wars',
    lang: 'Java',
    desc: 'A Java-based game — strategic beacon capture mechanics built from scratch.',
    url: 'https://github.com/Tommyt23/beaconwars',
    tags: ['Java'],
  },
  {
    name: 'Reactive Display',
    lang: 'JavaScript',
    desc: 'Interactive JavaScript display application — dynamic, data-driven visual interface.',
    url: 'https://github.com/Tommyt23/reactive-display',
    tags: ['JavaScript'],
  },
  {
    name: 'Advent of Code 2025',
    lang: 'Python',
    desc: 'Solutions to Advent of Code 2025 puzzles, written in Python.',
    url: 'https://github.com/Tommyt23/adventofcode2025',
    tags: ['Python'],
  },
  {
    name: 'QR Code Generator',
    lang: 'Python',
    desc: 'Simple Python utility for generating QR codes from any URL or text.',
    url: 'https://github.com/Tommyt23/QR-code-generator',
    tags: ['Python'],
  },
  {
    name: 'Human Benchmark',
    lang: 'Java',
    desc: 'Java application for measuring and recording human reaction times and cognitive benchmarks.',
    url: 'https://github.com/Tommyt23/human_benchmark',
    tags: ['Java'],
  },
  {
    name: 'HCI Coursework',
    lang: 'JavaScript',
    desc: 'Human-Computer Interaction coursework project — user-centred design and implementation.',
    url: 'https://github.com/Tommyt23/HCIcw',
    tags: ['JavaScript'],
  },
  {
    name: 'JavaScript30',
    lang: 'JavaScript',
    desc: '30 JavaScript projects in 30 days — vanilla JS exercises covering the DOM, APIs, audio, and more.',
    url: 'https://github.com/Tommyt23/JavaScript30',
    tags: ['JavaScript'],
  },
  {
    name: 'Boolean Coding Week 2024',
    lang: 'JavaScript',
    desc: 'Projects built during the Boolean coding week event in 2024.',
    url: 'https://github.com/Tommyt23/boolean-coding-week-2024',
    tags: ['JavaScript'],
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.tags.includes(activeFilter.value))
})

const langBadge = (lang) => {
  const map = {
    Python: '',
    JavaScript: 'badge-green',
    Java: 'badge-purple',
    TypeScript: 'badge-green',
  }
  return map[lang] || ''
}
</script>

<style lang="scss" scoped>
$accent: #00d4ff;
$accent-2: #7928ca;
$accent-3: #39ff14;
$text-dim: #7a7a8c;
$border: #1e1e2e;

.projects-title {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 700;
  font-family: 'Fira Code', monospace;
  margin-bottom: 28px;
}

.filter-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.filter-btn {
  padding: 6px 18px;
  border-radius: 4px;
  border: 1px solid $border;
  background: transparent;
  color: $text-dim;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover, &.active {
    border-color: $accent;
    color: $accent;
    background: rgba($accent, 0.08);
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  margin-bottom: 8px;
}

.project-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;

  &:hover .project-name { color: $accent; }
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .project-icon {
    color: $text-dim;
    font-size: 16px;
  }
}

.project-name {
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  font-weight: 600;
  color: #e0e0e0;
  margin-bottom: 8px;
  transition: color 0.2s;
}

.project-desc {
  font-size: 13px;
  line-height: 1.65;
  color: $text-dim;
  flex: 1;
  margin-bottom: 16px;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: $text-dim;

  .project-stat { display: flex; align-items: center; gap: 4px; }
  .project-link { color: rgba($accent, 0.7); font-size: 11px; font-family: 'Fira Code', monospace; }
}
</style>
