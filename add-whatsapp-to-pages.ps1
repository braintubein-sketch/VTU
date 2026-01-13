# PowerShell script to add WhatsApp modal to all HTML pages

$pages = @(
    "branch.html",
    "contact.html",
    "contribute.html",
    "faq.html",
    "login.html",
    "pricing.html",
    "privacy.html",
    "profile.html",
    "refund.html",
    "register.html",
    "resources.html",
    "scheme.html",
    "subject.html",
    "terms.html",
    "about.html"
)

$cssLine = '    <link rel="stylesheet" href="../styles/whatsapp-modal.css">'
$jsLine = '    <script src="../scripts/whatsapp-modal.js"></script>'

foreach ($page in $pages) {
    $filePath = "c:\Users\raghu\OneDrive\Desktop\VTU\client\pages\$page"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Add CSS after index.css if not already present
        if ($content -notmatch "whatsapp-modal.css") {
            $content = $content -replace '(\s*<link rel="stylesheet" href="\.\./styles/index\.css">)', "`$1`n$cssLine"
        }
        
        # Add JS before </body> if not already present
        if ($content -notmatch "whatsapp-modal.js") {
            $content = $content -replace '(\s*</body>)', "$jsLine`n`$1"
        }
        
        Set-Content -Path $filePath -Value $content
        Write-Host "Updated: $page"
    }
}

Write-Host "`nAll pages updated with WhatsApp modal!"
