/**
 * IP26 Production - Master Application Controller & ScrollSpy Router
 * Seamless Single-Page Landing Experience
 */

import { EVENT_METADATA, CREW_ROLES, MASTER_INVENTORY, ROUTING_PIPELINES, MEDIA_ASSET_CHECKLIST, SOP_AND_CONTINGENCIES } from './app-data.js';
import { RoutingSimulator } from './routing-simulator.js';
import { InventoryManager } from './inventory-manager.js';
import { MediaRundownHub } from './media-rundown.js';
import { PresentationMode } from './presentation-mode.js';
import { ProductionTools } from './production-tools.js';

class AppController {
  constructor() {
    this.simulator = new RoutingSimulator();
    this.inventory = new InventoryManager();
    this.mediaRundown = new MediaRundownHub();
    this.presentation = new PresentationMode();
    this.tools = new ProductionTools();
  }

  init() {
    this.initScrollSpy();
    this.initSopSection();
    
    // Subsystem initializations
    this.simulator.init();
    this.inventory.init();
    this.mediaRundown.init();
    this.presentation.init();
    this.tools.init();

    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.log('SW registration skipped:', err);
      });
    }

    console.log('🎬 IP26 Seamless Landing Page Initialized.');
  }

  initScrollSpy() {
    const sections = document.querySelectorAll('.landing-section');
    const navLinks = document.querySelectorAll('.hud-nav-link');
    const dockItems = document.querySelectorAll('.dock-item');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          // Highlight desktop nav links
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });

          // Highlight mobile dock items
          dockItems.forEach(item => {
            const href = item.getAttribute('href');
            item.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  initSopSection() {
    const container = document.getElementById('sop-container');
    if (!container) return;

    container.innerHTML = SOP_AND_CONTINGENCIES.map((sop, idx) => `
      <div class="panel" style="margin-bottom:1.5rem;">
        <div class="panel-header">
          <div class="panel-title">
            <span class="pill-badge ${idx === 2 ? 'red' : 'cyan'}">SOP PROTOCOL 0${idx + 1}</span>
            <span>${sop.title}</span>
          </div>
        </div>
        <div class="panel-body">
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem;">
            ${sop.steps.map((step, sIdx) => `
              <li style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.9rem; color:var(--text-secondary);">
                <span style="font-family:var(--font-mono); color:var(--accent-cyan); font-weight:700;">[0${sIdx + 1}]</span>
                <span>${step}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new AppController();
  app.init();
});
