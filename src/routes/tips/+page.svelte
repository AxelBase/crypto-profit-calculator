<script lang="ts">
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';
</script>

<div class="container py-5 mt-5">
  <div in:fade={{ duration: 1000 }}>
    <h1 class="display-4 text-center mb-4 fw-800 text-gradient">Pro Trading Tips</h1>
    <p class="lead text-center mb-5 opacity-75 mx-auto" style="max-width: 800px;">
      Master your strategy and protect your capital with these industry best practices.
    </p>
  </div>

  <div class="row g-4 mb-5">
    {#each [
      { i: "bi-lightning", t: "Fee Efficiency", d: "Use limit orders to reduce fees and choose exchanges that offer fee rebates for high-volume traders." },
      { i: "bi-shield-check", t: "Risk Management", d: "Never risk more than 1-2% of your total portfolio on a single trade. Preservation is key." },
      { i: "bi-calendar-check", t: "Long-term Gains", d: "Holding assets for over a year can significantly reduce your tax burden in many jurisdictions." },
      { i: "bi-safe", t: "Secure Storage", d: "Keep your long-term holds in cold storage. Only keep what you are actively trading on exchanges." }
    ] as tip, idx}
      <div class="col-md-6 col-lg-3" in:fly={{ y: 20, delay: 200 + (idx * 100) }}>
        <div class="glass-card p-4 h-100 float-hover text-center">
          <div class="icon-circle mb-3 mx-auto">
            <i class="bi {tip.i} fs-4"></i>
          </div>
          <h5 class="fw-bold">{tip.t}</h5>
          <p class="small opacity-75 mb-0">{tip.d}</p>
        </div>
      </div>
    {/each}
  </div>

  <section class="mb-5" in:fly={{ y: 30, delay: 600 }}>
    <div class="glass-card p-4 p-md-5 border-start border-warning border-5 shadow-sm" style="background: rgba(255, 193, 7, 0.05);">
      <h2 class="h4 fw-bold mb-3 text-warning-emphasis">Important Disclaimer</h2>
      <p class="small opacity-75 m-0">
        The calculations provided by AxelBase are estimates only. Cryptocurrency trading involves substantial risk. 
        Always consult with a certified financial advisor or tax professional before making significant investment decisions. 
        We do not guarantee the accuracy of results due to market slippage and changing exchange policies.
      </p>
    </div>
  </section>
</div>

<style>
  .fw-800 { font-weight: 800; }
  .text-gradient {
    background: linear-gradient(135deg, var(--color-text-main), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .icon-circle {
    width: 50px;
    height: 50px;
    background: var(--primary-brand);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* FIXED: Added :global to prevent unused selector warning */
  :global([data-bs-theme="dark"]) .icon-circle {
    background: var(--color-accent);
    color: var(--primary-brand);
  }

  .float-hover {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .float-hover:hover {
    transform: translateY(-10px);
    box-shadow: var(--glass-shadow);
  }
</style>