<script lang="ts">
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';
</script>

<div class="container py-5 mt-5">
  <div in:fade={{ duration: 800 }}>
    <h1 class="display-4 text-center mb-4 fw-800 text-gradient">Formulas & Breakdown</h1>
    <p class="lead text-center mb-5 opacity-75 mx-auto" style="max-width: 800px;">
      Deep dive into the mathematics driving your profit calculations.
    </p>
  </div>

  <section class="mb-5" in:fly={{ y: 30, duration: 800, delay: 200 }}>
    <h2 class="h3 mb-4 fw-bold">Core Calculation sequence</h2>
    <div class="glass-card p-4 p-md-5">
      <div class="row g-4">
        {#each [
          { t: "Buy Value", f: "Base Buy + Buy Fee Amount", d: "The absolute cost to enter the position." },
          { t: "Sell Value", f: "Base Sell - Sell Fee Amount", d: "The actual cash returned after exit fees." },
          { t: "Gross Profit", f: "Sell Value - Buy Value", d: "Profit before the tax man takes his share." },
          { t: "Net Profit", f: "Gross Profit - Tax Deduction", d: "The final amount available for reinvestment." }
        ] as item, i}
          <div class="col-md-6" in:fly={{ x: -20, delay: 300 + (i * 100) }}>
            <div class="formula-box p-3 h-100">
              <div class="fw-bold text-accent mb-1">{item.t}</div>
              <code>{item.f}</code>
              <p class="small opacity-75 mt-2 mb-0">{item.d}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="mb-5" in:fly={{ y: 30, duration: 800, delay: 400 }}>
    <h2 class="h3 mb-4 fw-bold">Detailed Examples</h2>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="glass-card p-4 border-start border-success border-4 h-100 float-hover">
          <h5 class="fw-bold text-success mb-3">Example: Winning Trade</h5>
          <ul class="list-unstyled small mb-0 opacity-75">
            <li class="mb-2">Buy: $5,000 (0.1% fee) → Cost: $5,005</li>
            <li class="mb-2">Sell: $6,000 (0.1% fee) → Net: $5,994</li>
            <li><strong>Net Profit: $791.20 (after 20% tax)</strong></li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="glass-card p-4 border-start border-danger border-4 h-100 float-hover">
          <h5 class="fw-bold text-danger mb-3">Example: Losing Trade</h5>
          <ul class="list-unstyled small mb-0 opacity-75">
            <li class="mb-2">Buy: $3,000 (0.2% fee) → Cost: $3,006</li>
            <li class="mb-2">Sell: $2,500 (0.2% fee) → Net: $2,495</li>
            <li><strong>Net Loss: -$511.00 (No tax applied)</strong></li>
          </ul>
        </div>
      </div>
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
  .formula-box {
    background: rgba(25, 55, 55, 0.05);
    border-radius: 15px;
    border: 1px solid var(--glass-border);
  }
  .float-hover { transition: transform 0.3s; }
  .float-hover:hover { transform: translateY(-5px); }
  
  code {
    background: var(--primary-brand);
    color: white;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.85rem;
  }

  /* FIXED: Added :global to prevent unused selector warning */
  :global([data-bs-theme="dark"]) code {
    background: var(--color-accent);
    color: var(--primary-brand);
  }
</style>