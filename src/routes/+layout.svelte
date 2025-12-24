<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  // --- Support Logic ---
  const paypalUsername = 'AxelLab427'; 
  const donationAmounts = [1, 3, 5, 10];
  let isSupportOpen = false;
  let isResourcesOpen = false;

  const toggleSupport = () => { isSupportOpen = !isSupportOpen; isResourcesOpen = false; };
  const toggleResources = () => { isResourcesOpen = !isResourcesOpen; isSupportOpen = false; };
  const closeAll = () => { isSupportOpen = false; isResourcesOpen = false; };

  // --- Theme Logic ---
  function toggleTheme() {
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.dataset.bsTheme = body.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    }
  }

  // Click Outside Action
  function clickOutside(node: HTMLElement) {
    const handleClick = (e: MouseEvent) => {
      if (node && !node.contains(e.target as Node) && !e.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1050;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-lg" style="max-width: 1240px;">
    
    <div class="d-flex align-items-center gap-2 gap-md-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none" on:click={closeAll}>
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="fw-bold fs-5 brand-text d-none d-sm-inline">AxelBase</span>
      </a>

      <button class="theme-toggle-btn" on:click={toggleTheme} aria-label="Toggle theme">
        <i class="bi bi-moon-stars-fill"></i>
      </button>

      <div class="position-relative" use:clickOutside on:click_outside={() => isSupportOpen = false}>
        <button class="btn btn-coffee" on:click={toggleSupport}>
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline">Support</span>
        </button>

        {#if isSupportOpen}
          <div class="dropdown-menu-custom glass shadow-lg" transition:slide={{ duration: 300 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeAll} class="dropdown-item-link text-center">
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      
      <li class="position-relative" use:clickOutside on:click_outside={() => isResourcesOpen = false}>
        <button class="nav-link-custom border-0 bg-transparent d-flex align-items-center" on:click={toggleResources}>
          Resources <i class="bi bi-chevron-down small ms-1 pt-1"></i>
        </button>
        {#if isResourcesOpen}
          <div class="dropdown-menu-custom glass shadow-lg dropdown-right" transition:slide={{ duration: 300 }}>
            <a href="{base}/breakdown" class="dropdown-item-link" on:click={closeAll}>
              <i class="bi bi-graph-up-arrow me-2"></i> Breakdown
            </a>
            <a href="{base}/tips" class="dropdown-item-link" on:click={closeAll}>
              <i class="bi bi-lightbulb me-2"></i> Trading Tips
            </a>
          </div>
        {/if}
      </li>

      <li><a class="btn-bubbly ms-2" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main class="flex-shrink-0">
  <slot />
</main>

<footer class="glass border-top py-4 mt-5">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center opacity-75 small">
    <p class="m-0 text-center text-md-start">
      © {new Date().getFullYear()} AxelBase • <span class="text-accent">Single-Trade Precision</span>
    </p>
    <div class="d-flex gap-4 mt-3 mt-md-0">
      <a href="{base}/privacy" class="text-decoration-none color-inherit hover-accent">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none color-inherit hover-accent">Terms</a>
    </div>
  </div>
</footer>

<style>
  .nav-logo { height: 32px; transition: transform 0.3s; }
  .brand-text { color: var(--color-text-main); letter-spacing: -0.5px; }
  
  /* Theme Toggle */
  .theme-toggle-btn {
    background: var(--glass-border);
    border: 1px solid var(--glass-border);
    width: 38px; height: 38px;
    border-radius: 50%;
    color: var(--color-text-main);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s;
  }
  .theme-toggle-btn:hover { background: var(--color-accent); color: white; transform: rotate(15deg); }

  /* Refined Coffee Button */
  .btn-coffee {
    background: #FFDD00;
    color: #2b2b2b;
    font-weight: 800;
    border-radius: 50px;
    border: 2px solid rgba(0,0,0,0.05);
    padding: 6px 18px;
    display: flex; 
    align-items: center; 
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 12px rgba(255, 221, 0, 0.3);
    font-size: 0.9rem;
  }
  .btn-coffee:hover { 
    transform: translateY(-2px) scale(1.02); 
    background: #ffea5e; 
    box-shadow: 0 6px 15px rgba(255, 221, 0, 0.4); 
  }
  .btn-coffee:active { transform: translateY(0); }

  /* Dropdown Styles */
  .dropdown-menu-custom {
    position: absolute;
    top: calc(100% + 15px);
    left: 0;
    min-width: 180px;
    padding: 10px;
    border-radius: 20px;
    display: flex; flex-direction: column; gap: 6px;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
    z-index: 1100;
  }
  .dropdown-right { left: auto; right: 0; }

  .dropdown-item-link {
    text-decoration: none;
    color: var(--color-text-main);
    padding: 10px 16px;
    border-radius: 14px;
    font-weight: 600;
    font-size: 0.85rem;
    transition: 0.2s;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
  }
  .dropdown-item-link:hover { background: var(--color-accent); color: white; transform: translateX(5px); }

  /* Nav Links */
  .nav-link-custom {
    color: var(--color-text-main);
    text-decoration: none;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 50px;
    transition: 0.3s;
    font-size: 0.9rem;
  }
  .nav-link-custom:hover { background: var(--glass-border); color: var(--color-accent); }

  .text-accent { color: var(--color-accent); font-weight: 600; }
  main { min-height: 80vh; padding-top: 100px; }

  /* Ensure dropdown items are centered for the Support menu specifically */
  .position-relative .dropdown-item-link.text-center {
    justify-content: center;
  }
</style>