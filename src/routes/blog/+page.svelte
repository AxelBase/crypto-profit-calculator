<!-- src/routes/blog/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why Most Traders Overestimate Their Crypto Profits',
      description: 'Discover how hidden fees and taxes dramatically reduce real returns — and why accurate calculation matters.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Understanding Exchange Fees: Maker vs Taker Explained',
      description: 'Learn the difference between maker and taker fees and how choosing the right order type can save you hundreds.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Crypto Taxes 101: Short-Term vs Long-Term Gains',
      description: 'A beginner-friendly guide to capital gains tax rules and how holding period affects your net profit.'
    },
    {
      href: '/blog/posts/post4',
      title: 'How to Use Break-Even Analysis in Crypto Trading',
      description: 'Master the art of knowing exactly what price you need to sell at to cover costs — including fees.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Scenario Planning: The Key to Smarter Crypto Trades',
      description: 'Explore "what-if" analysis and how forward-thinking calculations help you set realistic profit targets.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Common Mistakes That Silently Destroy Your Returns',
      description: 'From ignoring fees to emotional selling — avoid the pitfalls that turn winning trades into losses.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Building a Profitable Mindset with Data-Driven Tools',
      description: 'How using precise calculators like this one helps you make rational, confident trading decisions.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Profit Insights</title>
  <meta name="description" content="In-depth articles on crypto trading, profit calculation, fees, taxes, and smart decision-making tools." />
</svelte:head>

<div class="container py-5">
  <header class="text-center mb-5">
    <h1 class="display-5 fw-bold mb-3">Crypto Profit Insights</h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Practical guides, deep dives, and expert tips to help you understand real profitability in cryptocurrency trading.
      Learn how fees, taxes, and smart planning impact your bottom line.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none h-100">
          <div class="card h-100 shadow-sm border-0 hover-lift transition">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title h5 fw-semibold text-primary mb-3">
                {post.title}
              </h2>
              <p class="card-text text-muted small flex-grow-1">
                {post.description}
              </p>
              <span class="mt-3 text-primary fw-medium small">
                Read Article →
              </span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
  }
  .transition {
    transition: all 0.3s ease;
  }
  .text-primary {
    color: #0d6efd !important;
  }
</style>