<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly, slide } from 'svelte/transition';

  // Support & Resources Logic
  let isSupportOpen = false;
  let isResourcesOpen = false;

  const toggleSupport = () => {
    isSupportOpen = !isSupportOpen;
    isResourcesOpen = false;
  };

  const toggleResources = () => {
    isResourcesOpen = !isResourcesOpen;
    isSupportOpen = false;
  };

  const closeAll = () => {
    isSupportOpen = false;
    isResourcesOpen = false;
  };

  // Theme toggle
  function toggleTheme() {
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.dataset.bsTheme = body.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    }
  }

  // Click outside helper
  function clickOutside(node: HTMLElement) {
    const handleClick = (e: MouseEvent) => {
      if (node && !node.contains(e.target as Node) && !e.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1050;">
  <nav
    class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-lg"
    style="max-width: 1240px;"
  >
    <div class="d-flex align-items-center gap-2 gap-md-3">
      <a
        href="{base}/"
        class="d-flex align-items-center gap-2 text-decoration-none"
        on:click={closeAll}
      >
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="fw-bold fs-5 brand-text d-none d-sm-inline">AxelBase</span>
      </a>

      <button class="theme-toggle-btn" on:click={toggleTheme} aria-label="Toggle theme">
        <i class="bi bi-moon-stars-fill"></i>
      </button>

      <!-- Buy Me a Coffee + Bitcoin Dropdown -->
      <div class="position-relative" use:clickOutside on:click_outside={() => (isSupportOpen = false)}>
        <button
          class="btn-coffee d-flex align-items-center gap-2 shadow-sm"
          on:click={toggleSupport}
          aria-label="Support AxelBase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z"
            />
          </svg>
          <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isSupportOpen}
          <div
            class="bmac-dropdown glass shadow-lg"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeAll}
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeAll}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeAll}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeAll}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeAll}
              class="custom-amount bitcoin-option"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>

      <li class="position-relative" use:clickOutside on:click_outside={() => (isResourcesOpen = false)}>
        <button
          class="nav-link-custom border-0 bg-transparent d-flex align-items-center"
          on:click={toggleResources}
        >
          Resources <i class="bi bi-chevron-down small ms-1 pt-1"></i>
        </button>

        {#if isResourcesOpen}
          <div
            class="dropdown-menu-custom glass shadow-lg dropdown-right"
            transition:slide={{ duration: 300 }}
          >
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
  /* ──────────────────────────────────────────────
     Keeping most of your original File 2 styles...
     Only adding / modifying what's needed for BMC
  ────────────────────────────────────────────── */

  .nav-logo {
    height: 32px;
    transition: transform 0.3s;
  }

  .brand-text {
    color: var(--color-text-main);
    letter-spacing: -0.5px;
  }

  .theme-toggle-btn {
    background: var(--glass-border);
    border: 1px solid var(--glass-border);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: var(--color-text-main);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .theme-toggle-btn:hover {
    background: var(--color-accent);
    color: white;
    transform: rotate(15deg);
  }

  /* Buy Me a Coffee Button (blended style) */
  .btn-coffee {
    background: #ffdd00;
    color: #1a1a1a;
    font-weight: 800;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 8px 18px;
    display: flex;
    align-items: center;
    gap: 9px;
    transition: all 0.32s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 14px rgba(255, 221, 0, 0.28);
    font-size: 0.92rem;
  }

  .btn-coffee:hover {
    transform: translateY(-2px) scale(1.015);
    background: #ffea5e;
    box-shadow: 0 7px 18px rgba(255, 221, 0, 0.42);
  }

  /* BMC Dropdown – glass + File 1 layout */
  .bmac-dropdown {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    width: 245px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    z-index: 1100;
    padding: 6px 0;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 22px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.94rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--color-accent);
    color: white;
    padding-left: 30px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: #ffdd00;
    font-size: 1.16rem;
    min-width: 40px;
    text-align: right;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--color-accent);
    justify-content: center !important;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: 4px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .bitcoin-option:hover {
    background: #f7931a !important; /* Bitcoin orange */
    color: white !important;
  }

  /* Your existing nav links, dropdowns, etc... */
  .nav-link-custom {
    color: var(--color-text-main);
    text-decoration: none;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 50px;
    transition: 0.3s;
    font-size: 0.9rem;
  }

  .nav-link-custom:hover {
    background: var(--glass-border);
    color: var(--color-accent);
  }

  .dropdown-menu-custom {
    position: absolute;
    top: calc(100% + 15px);
    min-width: 180px;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
    z-index: 1100;
  }

  .dropdown-right {
    left: auto;
    right: 0;
  }

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

  .dropdown-item-link:hover {
    background: var(--color-accent);
    color: white;
    transform: translateX(5px);
  }

  .btn-bubbly {
    border-radius: 50px;
    font-weight: 600;
    padding: 10px 24px;
    transition: all 0.3s ease;
    border: none;
    background: var(--color-accent);
    color: white;
  }

  .btn-bubbly:hover {
    transform: scale(1.05) translateY(-2px);
    background: var(--color-accent-hover);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .text-accent {
    color: var(--color-accent);
    font-weight: 600;
  }

  main {
    min-height: 80vh;
    padding-top: 100px;
  }
</style>