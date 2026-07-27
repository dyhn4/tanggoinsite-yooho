import type { MetadataRoute } from "next";

const BASE = "https://www.tangoinsight.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/company`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/solutions`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/history`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/faq`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/apply`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
  ];
}
