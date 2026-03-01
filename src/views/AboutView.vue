<template>
  <div class="page-wrapper">
    <div class="tag tag-top">&lt;about&gt;</div>

    <p class="section-heading">about me</p>
    <h2 class="about-title">Who am I?</h2>

    <div class="about-grid">
      <div class="about-text">
        <p>
          I'm <strong>Tom Thurston</strong> — a Computer Science student and full-stack developer
          based in the UK. I enjoy building things that live on the internet, from web apps to
          data-driven tools, and occasionally breaking things just to see how they work.
        </p>
        <p>
          Alongside coding I work as a programming tutor, helping others get to grips with
          languages like Python, JavaScript and more. When I'm not writing code, I'm probably
          diving into Advent of Code, tinkering with machine learning models, or watching far too
          much Formula 1.
        </p>
        <p>
          I'm open to freelance projects, collaborations, and interesting opportunities.
        </p>
      </div>

      <div class="about-info card">
        <div class="info-row">
          <i class="fas fa-envelope"></i>
          <a href="mailto:tom@ewok.co.uk">tom@ewok.co.uk</a>
        </div>
        <div class="info-row">
          <i class="fas fa-globe"></i>
          <a href="https://www.thomasthurston.work" target="_blank" rel="noopener">thomasthurston.work</a>
        </div>
        <div class="info-row">
          <i class="fab fa-github"></i>
          <a href="https://github.com/Tommyt23" target="_blank" rel="noopener">Tommyt23</a>
        </div>
        <div class="info-row">
          <i class="fab fa-linkedin"></i>
          <a href="https://linkedin.com/in/tom-thurston" target="_blank" rel="noopener">tom-thurston</a>
        </div>
        <div class="info-row">
          <i class="fas fa-map-marker-alt"></i>
          <span>United Kingdom</span>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="skills-section">
      <p class="section-heading">tech stack</p>

      <div class="skill-group" v-for="group in skills" :key="group.category">
        <h4 class="skill-category">{{ group.category }}</h4>
        <div class="badges-row">
          <span
            v-for="skill in group.items"
            :key="skill"
            class="badge"
            :class="group.badgeClass"
          >{{ skill }}</span>
        </div>
      </div>
    </div>

    <div class="tag tag-bottom">&lt;/about&gt;</div>
  </div>
</template>

<script setup>
const skills = [
  {
    category: 'Languages',
    badgeClass: '',
    items: ['JavaScript', 'Python', 'C#', 'C++', 'TypeScript', 'Bash', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    badgeClass: 'badge-purple',
    items: ['Vue.js', 'Nuxt.js', 'React', 'React Native', 'Flask', '.NET', 'Vuetify', 'Vite'],
  },
  {
    category: 'Data & ML',
    badgeClass: 'badge-green',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'OpenCV'],
  },
  {
    category: 'Databases',
    badgeClass: '',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'DynamoDB', 'Redis', 'Firebase'],
  },
  {
    category: 'DevOps & Platforms',
    badgeClass: 'badge-purple',
    items: ['AWS', 'Docker', 'Vercel', 'GitHub Actions', 'ElasticSearch'],
  },
  {
    category: 'Game Dev',
    badgeClass: 'badge-green',
    items: ['Unity', 'Unreal Engine', 'Godot'],
  },
]
</script>

<style lang="scss" scoped>
$accent: #00d4ff;
$border: #1e1e2e;
$text-dim: #7a7a8c;
$bg-card: #111118;

.about-title {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 700;
  font-family: 'Fira Code', monospace;
  margin-bottom: 36px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: 700px) { grid-template-columns: 1fr; }
}

.about-text {
  p {
    font-size: 15px;
    line-height: 1.8;
    color: #b0b0c0;
    margin-bottom: 16px;

    strong { color: #e0e0e0; }
  }
}

.about-info {
  .info-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #1e1e2e;
    font-size: 14px;
    color: #b0b0c0;

    &:last-child { border-bottom: none; }

    i {
      width: 18px;
      text-align: center;
      color: $accent;
      opacity: 0.8;
    }

    a {
      color: #b0b0c0;
      transition: color 0.2s;
      &:hover { color: $accent; }
    }
  }
}

.skills-section {
  margin-top: 8px;
}

.skill-group {
  margin-bottom: 28px;
}

.skill-category {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: $text-dim;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.badges-row { display: flex; flex-wrap: wrap; gap: 4px; }
</style>
