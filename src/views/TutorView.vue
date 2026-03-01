<template>
  <div class="page-wrapper">
    <div class="tag tag-top">&lt;tutor&gt;</div>

    <p class="section-heading">tutoring</p>
    <h2 class="tutor-title">Programming Tutoring</h2>

    <div class="tutor-intro">
      <p>
        I offer one-to-one programming tutoring for students at all levels — from complete
        beginners picking up their first language to university students working through
        algorithms and data structures.
      </p>
    </div>

    <div class="tutor-grid">
      <div class="tutor-card card" v-for="item in offerings" :key="item.title">
        <div class="tutor-icon"><i :class="item.icon"></i></div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>

    <div class="tutor-langs">
      <p class="section-heading">languages I teach</p>
      <div class="badges-row">
        <span v-for="lang in langs" :key="lang.name" class="badge" :class="lang.cls">{{ lang.name }}</span>
      </div>
    </div>

    <div class="tutor-cta card">
      <p>Interested in sessions? Drop me a message and we'll sort something out.</p>
      <a href="mailto:tom@ewok.co.uk" class="btn-glow">
        <i class="fas fa-envelope"></i> Get in touch
      </a>
    </div>

    <div class="tag tag-bottom">&lt;/tutor&gt;</div>
  </div>
</template>

<script setup>
const offerings = [
  {
    icon: 'fas fa-user-graduate',
    title: 'Beginner Friendly',
    desc: 'No experience needed. We start from scratch and build at your pace — concepts before code.',
  },
  {
    icon: 'fas fa-university',
    title: 'University Level',
    desc: 'Helping with coursework, exam prep, algorithms, data structures, and project work.',
  },
  {
    icon: 'fas fa-project-diagram',
    title: 'Project Guidance',
    desc: 'Got a project idea or stuck on one? I can help you plan, structure, and build it properly.',
  },
  {
    icon: 'fas fa-bug',
    title: 'Debugging & Review',
    desc: "Bring me your broken code. We'll find the bug, understand why, and fix it together.",
  },
]

const langs = [
  { name: 'Python', cls: '' },
  { name: 'JavaScript', cls: 'badge-green' },
  { name: 'Java', cls: 'badge-purple' },
  { name: 'C#', cls: 'badge-purple' },
  { name: 'C++', cls: '' },
  { name: 'HTML & CSS', cls: 'badge-green' },
  { name: 'SQL', cls: '' },
]
</script>

<style lang="scss" scoped>
$accent: #00d4ff;
$text-dim: #7a7a8c;

.tutor-title {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 700;
  font-family: 'Fira Code', monospace;
  margin-bottom: 20px;
}

.tutor-intro {
  margin-bottom: 36px;

  p {
    font-size: 15px;
    line-height: 1.8;
    color: #a0a0b0;
    max-width: 640px;
  }
}

.tutor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  .tutor-card {
    h3 {
      font-family: 'Fira Code', monospace;
      font-size: 14px;
      color: #e0e0e0;
      margin: 12px 0 8px;
    }
    p {
      font-size: 13px;
      line-height: 1.65;
      color: $text-dim;
    }
  }
}

.tutor-icon {
  font-size: 22px;
  color: $accent;
  opacity: 0.8;
}

.tutor-langs {
  margin-bottom: 32px;

  .badges-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
}

.tutor-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  p {
    font-size: 14px;
    color: #a0a0b0;
    flex: 1;
    min-width: 200px;
  }

  .btn-glow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }
}
</style>
