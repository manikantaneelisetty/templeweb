const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

c = c.replace(/style="background-image: url\(&quot;https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuBvP0sdKyGiUXSLR8YYxCeDf7lXtBBmr6jYgovSHWMnlRgfUGFpVp7AU9I6UOPIQZvCFcVApZ53iAD3ptWKyKjn-mVM5hwa3etkvc16Tvg9STgMhyrwZVp2AuMgjqPgnpzEX71mjlktsYcPbnkzeHHh93edMYy-RUq6SxC7YFr9-3AI649_4owiPP9eEMNrv7piHCL9dQTO3DyT9sNr8OGXy3qvPeQ6VoouNseQpWPW72RdIBkpot0y&quot;\);"/g, 'style="background-image: url(\'/images/hero.jpg\');"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuBjcjhObERGzzzegYKxQ4QritFe29-o8mBGnk5ZK1agRPQOpzG-tgj4a5nr2ZiLl_HEEtLMziWcfrXrklD8kgHfYMymGPidn-bTsBivMldUCcQ7aOaoxA3bP3NQVGec-4_gMvCs1g-t3MoE3bNuQTmFyqqDXgJbWqgiURyW6sRDSCxMS8s0lFpvr0x6rpqdh-Y1iwFchlOk3SPnAoDey8dzt7gXfVGcjc2ByG1HxkvGVISDaV_5jq2x"/g, 'src="/images/journey.jpg"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuDYJvI05sKzHE_7vAP0a22VSagozaH9GgRpIS1CZQtvFWAmaOLP_jfc0_pUfaAZVCB-9Z6g8Ubm0dH3zT8YrMvz1tm7mIRkjBotoOxBii67LPZws7mfW3Y8Fn5U3HJqKv5TA-kJC7vx0hIo5kiBS5VZm5OyTRc2457R29cUSUX241AXGVvDUljaN-S-LIaPIRhJy4Qsv0HlDDPvyBhsnw_FwnwLWkLQXw5SHfhqavMYXysbtNTvp-Bc"/g, 'src="/images/video.jpg"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuAN3l0UgItGzRhxtsb-vkaIP-smbe5NL4TQI3qf7HyERvPZniXN4BwZok2x8ZIpI-9hrs-BmtMakDENigSAA7JmAutoNjZhecC7PDYpFWmNk9fpIzgNoOqxdrrx7t-XwlJ8QmhoiR76S1dAVYZOcXfV6xnIIBGSLP7df80r1qVpFrGWh5KQRqwnniF_Y01dIIMXkai-rDuoGRlOLhmHP9Cq6ggIi143gDQNVTIQuu-_PHY3Ui3KohYQ"/g, 'src="/images/services.jpg"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuDd__GeVwRBpzS1CrSDfoVPc1k_PNZSl6608kzXzh7So-wL137VLxRCb6uLyR2bHY9UEjbO9F7EY48A5ZNm7gS2roaQdTy6q2shzsmSwnxop46spKa7JwE3C1jp56iOsH-6FvhDbEvY3LusP2EsO98TieiMntjyc_Y9jwx69RkTr7MO8tgEOV-dA9dZ-NZ7pSYcOY-g2ouwNd3HZsNO0fCw-v3cle9FM1kJd6qbry10SeL8F9ww5itk"/g, 'src="/images/gallery1.jpg"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuDvXWkMSwG2Dng0sL5XmFEDzOwWxc7NA1wLwompadlg-Hbygq_bbFIBSKr3b8Eo3rzqIdWElclgl0IhtiH11NAiWu_a8kOJNfOjUBVpX7Yp8k77J_G9BMpYpDHaKJ6OiNQIE6b9Uds3OwV-mASY1un2TBvAFuuucSUtIe7ujxjHj7fzK6zRcBwTsr0UQD_00ytGq1FVadcy12mn2ALv15bvAYeKakitpq4nALBQ5mzzj2DzK_jcidc2"/g, 'src="/images/gallery2.jpg"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuDIcr5LfQcaEdMM5SRTou7d5-k5wjgkIT5987AXXwd5XEYsJ_RZft8yOVYcEWLNNzuW576w7fdHmLRxhAL7eTfEbFLbBU8i1QZa2Hc--Ma_5GSOQQ5sI2KldT8AidBHLdHyKPtGo8x-RrJXU45ihxbbzSElz_8OpFQCzpgjq7VbnXH22sk5YkpsbMLLysF-B0p3Z4grpWA57B9dF61FYQ7szaz6k9Ze1rD9YEjt4sURvWwi1AHLnzpG"/g, 'src="/images/gallery3.jpg"');

c = c.replace(/src="https:\/\/lh3.googleusercontent.com\/aida-public\/AB6AXuCCe_leIspNl42ERXs-6m8B12yipId6mRuFkUKrUWJVszPFl_SCwaxmGlgu8jIRaVGlck7w6PlSOL0xJamuCujQxM2POg-dIXS6Ac4A6tKSY-F7q2y6VkTVfXU3UC4EcOEF0wAma8BF2RveDtLtkdPjaBMoG9J2lUU8sIEQQE2PwCjK5ZYWFfBrwMqUF5pHT-avTPXxnCsKUyIP4PFfYtVe9OTBdOI8TAiKYymql0WDhEpKjWVNkUID"/g, 'src="/images/gallery4.jpg"');

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
