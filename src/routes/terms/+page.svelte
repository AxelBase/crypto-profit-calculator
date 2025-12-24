<!-- src/routes/terms/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Single-Trade Crypto Profit Calculator</title>
  <meta name="description" content="Read the terms of use for this free crypto profit calculation tool, including disclaimers about financial advice and accuracy." />
  <meta property="og:title" content="Terms and Conditions | Single-Trade Crypto Profit Calculator" />
  <meta property="og:description" content="Read the terms of use for this free crypto profit calculation tool, including disclaimers about financial advice and accuracy." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 24, 2025</p>

    <p>By accessing or using the <strong>Single-Trade Crypto Profit Calculator</strong> (the "Tool"), you agree to be bound by these Terms and Conditions. This Tool is a free, open-source, client-side web application provided for informational and educational purposes only.</p>

    <h2>Use of the Tool</h2>
    <p>You may use the Tool to perform personal cryptocurrency trade profit calculations. All features are available without registration or payment. The Tool is provided "as is" and we reserve the right to modify, suspend, or discontinue it at any time without notice.</p>

    <h2>No Financial Advice</h2>
    <p><strong>The Tool does not provide financial, investment, tax, or legal advice.</strong> Calculations are based solely on user-provided inputs and simplified assumptions about fees and taxes. Results are estimates only and may not reflect real-world outcomes due to market slippage, varying exchange rules, or complex tax situations. You are solely responsible for any decisions made using the Tool.</p>

    <h2>Accuracy and Limitations</h2>
    <p>While we strive for computational accuracy, we make no warranties about the correctness of results. The Tool uses standard mathematical formulas but does not account for every possible variable (e.g., network fees, rebates, or jurisdictional tax nuances). Users must verify results independently.</p>

    <ul>
      <li>We are not liable for any losses resulting from reliance on the Tool.</li>
      <li>Cryptocurrency trading involves substantial risk, including the potential for total loss of capital.</li>
      <li>Past performance calculations do not predict future results.</li>
    </ul>

    <h2>User Responsibilities</h2>
    <p>You agree to use the Tool lawfully and responsibly. Do not input false or misleading data with intent to manipulate outputs. You are responsible for maintaining the security of your device and browser while using the Tool.</p>

    <h2>Intellectual Property</h2>
    <p>The Tool is open-source and licensed under the MIT License. You may fork, modify, and distribute the code subject to license terms. Content on the site (blog posts, documentation) is copyrighted but may be shared with attribution.</p>

    <h2>Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool, even if advised of the possibility of such damages.</p>

    <h2>Changes to Terms</h2>
    <p>We may update these Terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>

    <h2>Governing Law</h2>
    <p>These Terms are governed by general open-source community standards and applicable laws where the Tool is hosted.</p>

    <p class="italic-note">Thank you for using this free tool responsibly. Trade wisely and always do your own research.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: #6c757d;
  }
  .breadcrumbs a {
    color: #0d6efd;
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
    color: #495057;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: #0d6efd;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: #212529;
    margin-bottom: 1.25rem;
  }

  .prose ul {
    padding-left: 1.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: #6c757d;
    text-align: center;
    margin-top: 3rem;
  }
</style>