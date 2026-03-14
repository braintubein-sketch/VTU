$blogDir = "c:\Users\raghu\OneDrive\Desktop\VTU\client\pages\blog"
$files = Get-ChildItem "$blogDir\*.html" -Exclude "index.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Extract the title from <title> tag
    if ($content -match '<title>(.*?)</title>') {
        $pageTitle = $matches[1]
    } else {
        $pageTitle = "Blog - Braintube"
    }
    
    # Extract meta description
    if ($content -match 'content="(.*?)"[^>]*>\s*<title>') {
        $metaDesc = $matches[1]
    } elseif ($content -match '<meta name="description"\s+content="(.*?)"') {
        $metaDesc = $matches[1]
    } else {
        $metaDesc = "Blog article - Braintube"
    }
    
    # Extract article body content (between blog-content div or the main content area)
    # We need to find the article text content between the heading and footer
    
    # Extract the H1 content
    $h1Match = ""
    if ($content -match '<h1[^>]*>(.*?)</h1>') {
        $h1Match = $matches[1]
    }
    
    # Extract date info
    $dateMatch = "2026"
    if ($content -match '(\w+ \d+, 202\d)') {
        $dateMatch = $matches[1]
    }
    
    # Extract read time
    $readTime = "10 min read"
    if ($content -match '(\d+ min read)') {
        $readTime = $matches[1]
    }
    
    # Extract the blog content div
    $bodyContent = ""
    if ($content -match '(?s)<div class="blog-content"[^>]*>(.*?)</div>\s*<div') {
        $bodyContent = $matches[1].Trim()
    }
    
    # If we couldn't extract the body cleanly, do a simpler extraction
    if ([string]::IsNullOrEmpty($bodyContent)) {
        # Just find content between first </div> after date and the CTA card
        if ($content -match '(?s)<div class="blog-content"[^>]*>(.*?)</div>\s*\n\s*<div\s') {
            $bodyContent = $matches[1].Trim()
        }
    }
    
    # Clean up old CSS variable references in body content
    $bodyContent = $bodyContent -replace 'style="[^"]*var\(--space[^"]*"', ''
    $bodyContent = $bodyContent -replace 'style="[^"]*var\(--text[^"]*"', ''
    $bodyContent = $bodyContent -replace 'style="color: var\(--text-primary\);[^"]*"', ''
    $bodyContent = $bodyContent -replace 'var\(--space-\d+\)', '24px'
    $bodyContent = $bodyContent -replace 'var\(--text-primary\)', 'var(--text-primary)'
    $bodyContent = $bodyContent -replace 'var\(--text-secondary\)', 'var(--text-secondary)'
    
    # Remove all inline styles from body content to use article-body CSS
    $bodyContent = $bodyContent -replace ' style="[^"]*"', ''
    
    $newContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="$metaDesc">
  <title>$pageTitle</title>
  <link rel="stylesheet" href="../../styles/premium.css">
  <link rel="stylesheet" href="../../styles/pages.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%230050FF'/><stop offset='100%25' style='stop-color:%2300D6FF'/></linearGradient></defs><circle cx='50' cy='50' r='44' fill='url(%23g)'/><text x='50' y='65' font-size='48' fill='white' text-anchor='middle' font-family='Inter,Arial' font-weight='800'>B</text></svg>">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2703338145574896" crossorigin="anonymous"></script>
</head>
<body>
  <nav class="nav-premium scrolled">
    <div class="nav-inner">
      <a href="../../index.html" class="nav-logo"><span class="nav-logo-dot"></span> Braintube</a>
      <ul class="nav-links">
        <li><a href="../../index.html">Home</a></li>
        <li><a href="../branches.html">Subjects</a></li>
        <li><a href="index.html" style="color:var(--text-primary);">Blog</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a href="../contact.html">Contact</a></li>
      </ul>
      <a href="../branches.html" class="nav-cta">Start Learning</a>
      <button class="nav-mobile-toggle" onclick="document.getElementById('mob').style.opacity=1;document.getElementById('mob').style.pointerEvents='auto'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </nav>
  <div id="mob" style="position:fixed;inset:0;z-index:999;background:rgba(5,5,5,0.98);backdrop-filter:blur(20px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;opacity:0;pointer-events:none;transition:opacity 0.4s;">
    <a href="../../index.html" style="color:white;text-decoration:none;font-size:1.3rem;font-weight:600;">Home</a>
    <a href="../branches.html" style="color:white;text-decoration:none;font-size:1.3rem;font-weight:600;">Subjects</a>
    <a href="index.html" style="color:var(--accent-cyan);text-decoration:none;font-size:1.3rem;font-weight:600;">Blog</a>
    <a href="../about.html" style="color:white;text-decoration:none;font-size:1.3rem;font-weight:600;">About</a>
    <a href="../contact.html" style="color:white;text-decoration:none;font-size:1.3rem;font-weight:600;">Contact</a>
    <button onclick="document.getElementById('mob').style.opacity=0;document.getElementById('mob').style.pointerEvents='none'" style="position:absolute;top:16px;right:24px;background:none;border:none;color:white;font-size:2rem;cursor:pointer;">x</button>
  </div>

  <div class="article-header">
    <a href="index.html" class="article-back">← Back to Blog</a>
    <h1 class="headline-md">$h1Match</h1>
    <div class="article-meta">
      <span>By Braintube Editorial</span>
      <span>•</span>
      <span>$dateMatch</span>
      <span>•</span>
      <span>$readTime</span>
    </div>
  </div>

  <div class="article-body">
    $bodyContent

    <div class="article-cta">
      <h3>Ready to ace your VTU exams?</h3>
      <p>Access notes and previous year papers for all VTU subjects.</p>
      <a href="../branches.html" class="btn-premium">Browse Study Materials →</a>
    </div>
  </div>

  <footer class="footer-premium">
    <div class="footer-inner">
      <div class="footer-bottom">
        <span>© 2026 Braintube. All rights reserved.</span>
        <span>Independent platform. Not affiliated with VTU.</span>
      </div>
    </div>
  </footer>
</body>
</html>
"@
    
    Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
    Write-Host "Updated: $($file.Name)"
}
