/**
 * IP26 Production - Fullscreen Crew Briefing & Pitch Presentation Mode
 */

export class PresentationMode {
  constructor() {
    this.currentSlideIndex = 0;
    this.totalSlides = 8;
    this.modalEl = null;
    this.slides = [];
  }

  init() {
    this.modalEl = document.getElementById('presentation-modal');
    this.slides = Array.from(document.querySelectorAll('.pres-slide'));
    this.totalSlides = this.slides.length;

    this.attachControls();
  }

  attachControls() {
    // Open Presentation Trigger
    const openBtn = document.getElementById('btn-open-presentation');
    if (openBtn) {
      openBtn.addEventListener('click', () => this.open());
    }

    const closeBtn = document.getElementById('btn-close-presentation');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    const prevBtn = document.getElementById('btn-pres-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prevSlide());
    }

    const nextBtn = document.getElementById('btn-pres-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!this.modalEl || !this.modalEl.classList.contains('active')) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  open() {
    if (!this.modalEl) return;
    this.modalEl.classList.add('active');
    this.showSlide(0);
    
    // Attempt fullscreen if supported
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }

  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('active');
    if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  showSlide(index) {
    if (index < 0) index = 0;
    if (index >= this.totalSlides) index = this.totalSlides - 1;
    this.currentSlideIndex = index;

    this.slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });

    const indicator = document.getElementById('pres-slide-indicator');
    if (indicator) {
      indicator.textContent = `Slide ${index + 1} of ${this.totalSlides}`;
    }

    const progressBar = document.getElementById('pres-progress-bar');
    if (progressBar) {
      const pct = ((index + 1) / this.totalSlides) * 100;
      progressBar.style.width = `${pct}%`;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.totalSlides - 1) {
      this.showSlide(this.currentSlideIndex + 1);
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.showSlide(this.currentSlideIndex - 1);
    }
  }
}
