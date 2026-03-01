<template>
  <div class="page-wrapper contact">
    <div class="tag tag-top">&lt;contact&gt;</div>

    <p class="section-heading">get in touch</p>
    <h2 class="contact-title">Let's Talk</h2>

    <div class="contact-grid">
      <div class="contact-text">
        <p>
          Whether you have a project in mind, want to collaborate, or just want to say hi —
          my inbox is always open. I'll do my best to get back to you quickly.
        </p>
        <a href="mailto:tom@ewok.co.uk" class="btn-glow contact-btn">
          <i class="fas fa-paper-plane"></i> Send me an email
        </a>
      </div>

      <div class="contact-links">
        <a
          v-for="link in socials"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="social-card card"
        >
          <i :class="link.icon" class="social-icon"></i>
          <div>
            <div class="social-label">{{ link.label }}</div>
            <div class="social-handle">{{ link.handle }}</div>
          </div>
          <i class="fas fa-arrow-right social-arrow"></i>
        </a>
      </div>
    </div>

    <div class="tag tag-bottom">&lt;/contact&gt;</div>
  </div>
</template>

<script setup>
const socials = [
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    handle: 'Tommyt23',
    url: 'https://github.com/Tommyt23',
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    handle: 'tom-thurston',
    url: 'https://www.linkedin.com/in/tom-thurston',
  },
  {
    icon: 'fab fa-twitch',
    label: 'Twitch',
    handle: 'trashpanda_2314',
    url: 'https://twitch.tv/trashpanda_2314',
  },
  {
    icon: 'fab fa-instagram',
    label: 'Instagram',
    handle: '@tommyt_23',
    url: 'https://instagram.com/tommyt_23',
  },
]
</script>

<style lang="scss" scoped>
$accent: #00d4ff;
$text-dim: #7a7a8c;
$border: #1e1e2e;

.contact { justify-content: center; }

.contact-title {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 700;
  font-family: 'Fira Code', monospace;
  margin-bottom: 36px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.contact-text {
  p {
    font-size: 15px;
    line-height: 1.8;
    color: #a0a0b0;
    margin-bottom: 28px;
  }
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;

  &:hover .social-label { color: $accent; }
  &:hover .social-arrow { color: $accent; transform: translateX(4px); }
}

.social-icon {
  font-size: 20px;
  color: $accent;
  width: 28px;
  text-align: center;
  opacity: 0.8;
}

.social-label {
  font-size: 14px;
  font-weight: 600;
  color: #d0d0e0;
  transition: color 0.2s;
}

.social-handle {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: $text-dim;
  margin-top: 2px;
}

.social-arrow {
  margin-left: auto;
  font-size: 13px;
  color: $text-dim;
  transition: color 0.2s, transform 0.2s;
}
</style>
