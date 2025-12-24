<!-- src/routes/+page.svelte (Home Page with About, How to Use, and FAQ) -->

<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { base } from '$app/paths';

  let inputs = {
    symbol: '',
    quantity: 1,
    buyPrice: 0,
    sellPrice: 0,
    buyFee: 0.1,
    sellFee: 0.1,
    taxRate: 0
  };

  let results: any = null;

  function compute() {
    const baseBuy = inputs.buyPrice * inputs.quantity;
    const buyFeeAmt = baseBuy * (inputs.buyFee / 100);
    const totalBuy = baseBuy + buyFeeAmt;

    const baseSell = inputs.sellPrice * inputs.quantity;
    const sellFeeAmt = baseSell * (inputs.sellFee / 100);
    const totalSell = baseSell - sellFeeAmt;

    const grossProfit = totalSell - totalBuy;
    const taxDeduction = grossProfit > 0 ? grossProfit * (inputs.taxRate / 100) : 0;
    const netProfit = grossProfit - taxDeduction;
    const roi = totalBuy > 0 ? (netProfit / totalBuy) * 100 : 0;

    results = {
      totalBuy,
      totalSell,
      grossProfit,
      taxDeduction,
      netProfit,
      roi: roi.toFixed(2),
      profitPercent: totalBuy > 0 ? ((grossProfit / totalBuy) * 100).toFixed(2) : '0.00',
      breakEven: (totalBuy / inputs.quantity / (1 - inputs.sellFee / 100)).toFixed(2)
    };
  }
</script>

<div class="container py-5 mt-5" in:fade={{ duration: 800 }}>
  <div class="text-center mb-5">
    <h1 class="display-4 fw-bold text-gradient">Single-Trade Crypto Profit Calculator</h1>
    <p class="lead opacity-75">Precise profit calculation including fees, taxes, ROI, and break-even analysis — all client-side and privacy-focused.</p>
  </div>

  <div class="row g-5 justify-content-center">
    <div class="col-lg-6" in:fly={{ x: -50, duration: 800 }}>
      <div class="glass-card p-4 shadow-lg">
        <form on:submit|preventDefault={compute} class="row g-3">
          <div class="col-md-6">
            <label for="symbol" class="form-label fw-bold small">Token Symbol (optional)</label>
            <input id="symbol" type="text" class="form-control" bind:value={inputs.symbol} placeholder="e.g. BTC">
          </div>
          <div class="col-md-6">
            <label for="quantity" class="form-label fw-bold small">Quantity</label>
            <input id="quantity" type="number" class="form-control" bind:value={inputs.quantity} min="0" step="0.000001">
          </div>
          <div class="col-md-6">
            <label for="buyPrice" class="form-label fw-bold small">Buy Price (USD)</label>
            <input id="buyPrice" type="number" class="form-control" bind:value={inputs.buyPrice} min="0" step="0.01">
          </div>
          <div class="col-md-6">
            <label for="sellPrice" class="form-label fw-bold small">Sell Price (USD)</label>
            <input id="sellPrice" type="number" class="form-control" bind:value={inputs.sellPrice} min="0" step="0.01">
          </div>
          <div class="col-md-4">
            <label for="buyFee" class="form-label fw-bold small">Buy Fee % (default 0.1)</label>
            <input id="buyFee" type="number" class="form-control" bind:value={inputs.buyFee} min="0" step="0.01">
          </div>
          <div class="col-md-4">
            <label for="sellFee" class="form-label fw-bold small">Sell Fee % (default 0.1)</label>
            <input id="sellFee" type="number" class="form-control" bind:value={inputs.sellFee} min="0" step="0.01">
          </div>
          <div class="col-md-4">
            <label for="taxRate" class="form-label fw-bold small">Tax Rate % (default 0)</label>
            <input id="taxRate" type="number" class="form-control" bind:value={inputs.taxRate} min="0" step="0.1">
          </div>
          <div class="col-12 mt-4">
            <button type="submit" class="btn btn-primary-custom w-100 fw-bold py-3 shadow">Calculate Profit</button>
          </div>
        </form>
      </div>
    </div>

    <div class="col-lg-6" in:fly={{ x: 50, duration: 800 }}>
      {#if results}
        <div class="glass-card p-5 h-100" in:fade>
          <h3 class="h4 fw-bold mb-4 text-center">Trade Results {inputs.symbol ? `— ${inputs.symbol.toUpperCase()}` : ''}</h3>
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2"><span>Total Cost (incl. buy fee):</span> <strong>${results.totalBuy.toFixed(2)}</strong></div>
            <div class="d-flex justify-content-between mb-2"><span>Total Proceeds (after sell fee):</span> <strong>${results.totalSell.toFixed(2)}</strong></div>
            <hr>
            <div class="d-flex justify-content-between mb-3"><span>Gross Profit:</span> <strong class="{results.grossProfit >= 0 ? 'text-success' : 'text-danger'}">${results.grossProfit.toFixed(2)}</strong></div>
            <div class="d-flex justify-content-between mb-3"><span>Tax Deduction:</span> <strong>${results.taxDeduction.toFixed(2)}</strong></div>
            <div class="d-flex justify-content-between fs-4"><span>Net Profit:</span> <strong class="{results.netProfit >= 0 ? 'text-success' : 'text-danger'}">${results.netProfit.toFixed(2)}</strong></div>
            <hr>
            <div class="d-flex justify-content-between"><span>Net ROI:</span> <strong class="{results.netProfit >= 0 ? 'text-success' : 'text-danger'}">{results.roi}%</strong></div>
            <div class="d-flex justify-content-between"><span>Gross Profit %:</span> <strong>{results.profitPercent}%</strong></div>
            <div class="d-flex justify-content-between"><span>Break-Even Sell Price:</span> <strong>${results.breakEven}</strong></div>
          </div>
        </div>
      {:else}
        <div class="glass-card p-5 h-100 d-flex align-items-center justify-content-center border-dashed opacity-50">
          <p class="text-center m-0">Enter your trade details on the left to see instant results, including net profit, ROI, and break-even price.</p>
        </div>
      {/if}
    </div>
  </div>

  <!-- About Section -->
  <section id="about" class="mt-5 py-5" in:fade={{ delay: 400 }}>
    <div class="glass-card p-5 shadow-lg">
      <h2 class="h3 fw-bold mb-4 text-center">About This Tool</h2>
      <p>The Single-Trade Crypto Profit Calculator was created to address a common problem highlighted across our blog series: most traders significantly overestimate their actual returns. While price charts show impressive percentage gains, real-world deductions from exchange fees and capital gains taxes often reduce profits by 10-30% or more. This tool provides complete transparency by calculating true net outcomes.</p>
      
      <p>Built as a fully client-side, static web application using SvelteKit and Bootstrap, it requires no accounts, no data storage, and no server communication beyond loading the page. Every calculation — from gross profit to tax deduction, ROI, profit percentage, and break-even sell price — happens instantly in your browser. This privacy-first design ensures your trade data never leaves your device.</p>
      
      <p>Key features include accurate fee modeling (separate buy and sell percentages), optional tax rate input, detailed result breakdowns, and additional metrics like break-even price and return percentages. The tool supports both realized trade analysis and hypothetical scenario planning, helping traders set realistic targets and understand cost impacts before executing trades.</p>
      
      <p>Inspired by real trading pitfalls discussed in our blog posts — such as ignoring maker/taker fee differences, misunderstanding tax implications, and failing to account for round-trip costs — this calculator empowers users to make more informed decisions. Whether you're a beginner learning about net returns or an experienced trader refining strategy, precise calculation is the foundation of disciplined, profitable trading.</p>
      
      <p>We believe accurate tools foster better habits. By revealing the true cost of each trade, this calculator encourages selective entry, realistic target setting, and awareness of tax efficiency. It aligns perfectly with our educational content, turning insights from the blog into practical, everyday utility.</p>
      
      <p class="mt-4">The project is open-source and free forever. We welcome contributions and feedback via GitHub. Thank you for using this tool — may your future trades be calculated, disciplined, and truly profitable.</p>
    </div>
  </section>

  <!-- How to Use Section -->
  <section id="how-to" class="mt-5 py-5" in:fade={{ delay: 600 }}>
    <div class="glass-card p-5 shadow-lg">
      <h2 class="h3 fw-bold mb-5 text-center">How to Use the Calculator</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="text-center">
            <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px; font-size: 1.8rem; font-weight: bold;">1</div>
            <h5 class="fw-bold">Enter Basic Trade Details</h5>
            <p>Start by inputting the cryptocurrency symbol (optional), quantity traded, buy price per unit, and sell price per unit. These form the foundation of all calculations. Use real executed prices or hypothetical values for planning.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center">
            <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px; font-size: 1.8rem; font-weight: bold;">2</div>
            <h5 class="fw-bold">Adjust Fees and Tax Rate</h5>
            <p>Set your actual exchange fees — most platforms charge 0.1-0.5% per trade. Use separate buy and sell percentages for accuracy (e.g., taker vs maker rates). Add your applicable capital gains tax rate (short-term or long-term) to see true net profit.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center">
            <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px; font-size: 1.8rem; font-weight: bold;">3</div>
            <h5 class="fw-bold">Review Detailed Results</h5>
            <p>Click "Calculate Profit" to instantly see total cost (including buy fee), proceeds (after sell fee), gross profit, tax deduction, net profit, ROI, gross profit percentage, and break-even sell price. Green/red coloring highlights profit or loss clearly.</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-8 mx-auto">
          <h5 class="fw-bold mb-3">Advanced Tips</h5>
          <ul class="list-styled">
            <li>Use the break-even price to set realistic minimum targets or stop-loss levels.</li>
            <li>Test different fee scenarios to understand maker/taker impact.</li>
            <li>Compare short-term vs long-term tax rates to inform holding decisions.</li>
            <li>Run hypothetical scenarios before entering trades to validate risk-reward.</li>
            <li>Bookmark results or screenshot for record-keeping (no data is saved).</li>
          </ul>
          <p class="mt-4">All calculations update instantly as you type. Experiment freely — your data stays private and local.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="mt-5 py-5 mb-5" in:fade={{ delay: 800 }}>
    <div class="glass-card p-5 shadow-lg">
      <h2 class="h3 fw-bold mb-5 text-center">Frequently Asked Questions</h2>
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header" id="faq1">
            <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
              Is my trade data stored or transmitted anywhere?
            </button>
          </h2>
          <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. This tool runs 100% client-side in your browser. All inputs and calculations remain on your device only. We collect no data, use no cookies, and have no servers receiving information. Your privacy is absolute.
            </div>
          </div>
        </div>
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header" id="faq2">
            <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
              Why include separate buy and sell fees?
            </button>
          </h2>
          <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Many exchanges charge different rates depending on order type (maker vs taker). Buy and sell legs often use different order types, creating meaningful cost differences. Separate inputs provide maximum accuracy.
            </div>
          </div>
        </div>
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header" id="faq3">
            <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
              How is break-even sell price calculated?
            </button>
          </h2>
          <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              It shows the exact sell price needed to recover your total buy cost (including buy fee) after deducting the sell fee. This is your true zero-profit point — essential for setting realistic targets and stop-losses.
            </div>
          </div>
        </div>
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header" id="faq4">
            <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
              Does this replace professional tax advice?
            </button>
          </h2>
          <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Absolutely not. Tax rates vary by jurisdiction, holding period, and individual circumstances. This tool uses simplified flat-rate assumptions for estimation only. Always consult a qualified tax professional for your specific situation.
            </div>
          </div>
        </div>
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header" id="faq5">
            <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
              Can I use this for planning future trades?
            </button>
          </h2>
          <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes! Input hypothetical prices and fees to model scenarios. Test different targets, fee structures, or tax rates to understand potential outcomes before committing capital.
            </div>
          </div>
        </div>
        <div class="accordion-item border-0 mb-3 shadow-sm">
          <h2 class="accordion-header" id="faq6">
            <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
              Is this tool free and open-source?
            </button>
          </h2>
          <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Completely free forever with no limits or ads. The full source code is available on GitHub under an open-source license. Contributions and feedback are welcome!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center mt-5">
    <a href="{base}/blog" class="btn btn-outline-primary me-3">Read Our Blog</a>
    <a href="{base}/calculator" class="btn btn-primary-custom">Advanced Calculator</a>
  </div>
</div>

<style>
  .fw-bold { font-weight: 700; }
  .text-gradient {
    background: linear-gradient(135deg, #0d6efd, #6f42c1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .glass-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .border-dashed {
    border: 2px dashed rgba(255, 255, 255, 0.3);
  }
  .btn-primary-custom {
    background: linear-gradient(135deg, #0d6efd, #6f42c1);
    border: none;
    border-radius: 12px;
    padding: 0.75rem 2rem;
    transition: all 0.3s;
  }
  .btn-primary-custom:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3);
  }
  .list-styled li {
    margin-bottom: 0.75rem;
    padding-left: 0.5rem;
  }
</style>