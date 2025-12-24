<!-- src/routes/privacy/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Single-Trade Crypto Profit Calculator</title>
  <meta name="description" content="We collect no personal data. All calculations happen entirely in your browser for maximum privacy." />
  <meta property="og:title" content="Privacy Policy | Single-Trade Crypto Profit Calculator" />
  <meta property="og:description" content="We collect no personal data. All calculations happen entirely in your browser for maximum privacy." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 24, 2025</p>

    <p>Welcome to the <strong>Single-Trade Crypto Profit Calculator</strong>, a free, open-source, client-side web tool designed to help cryptocurrency traders accurately calculate profits after fees and taxes. We take your privacy seriously and have built this tool with a <strong>zero-data-collection philosophy</strong>. This Privacy Policy explains exactly how we handle (or rather, do not handle) your information.</p>

    <h2>No Personal Data Collected</h2>
    <p>This tool operates entirely in your browser. When you enter buy/sell prices, quantities, fees, or tax rates, <strong>all calculations are performed locally on your device</strong>. We do not collect, store, transmit, or process any of the data you input. There are no servers receiving your trade details, no databases storing your calculations, and no logs of your activity.</p>

    <p>We do not gather:</p>
    <ul>
      <li><strong>Personal information</strong> such as names, email addresses, or wallet addresses.</li>
      <li><strong>Usage data</strong> including IP addresses, browser type, device information, or location.</li>
      <li><strong>Trade data</strong> — all inputs remain strictly on your device and are cleared when you close or refresh the page.</li>
      <li><strong>Analytics or tracking data</strong> — we do not use Google Analytics, cookies, pixels, or any third-party tracking services.</li>
    </ul>

    <h2>How the Tool Works</h2>
    <p>Every feature — from basic profit calculation to scenario planning and break-even analysis — runs using JavaScript in your browser. No data ever leaves your device. Even features like resetting the form or navigating pages happen client-side without any server communication beyond loading the initial static files.</p>

    <h2>No Cookies or Tracking Technologies</h2>
    <p>We do not use cookies, localStorage for persistent data, session storage for tracking, or any other tracking mechanisms. Your experience is completely <em>stateless</em> and anonymous.</p>

    <h2>Third-Party Services</h2>
    <p>The site uses only Bootstrap via CDN for styling and no other external services that could collect data. Open-source libraries are loaded statically and do not track users.</p>

    <h2>Security and Your Responsibility</h2>
    <p>Since no data is transmitted, there is no risk of interception. However, we recommend using the tool on a secure device and network, especially when handling real trade information.</p>

    <h2>Children's Privacy</h2>
    <p>This tool is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy occasionally. Changes will be posted here with an updated effective date.</p>

    <h2>Contact</h2>
    <p>If you have questions about this policy, please open an issue on our GitHub repository.</p>

    <p class="italic-note">Your privacy is our priority — we collect <strong>nothing</strong>, store <strong>nothing</strong>, and track <strong>nothing</strong>.</p>
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