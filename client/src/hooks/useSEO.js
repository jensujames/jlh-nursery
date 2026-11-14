import { useEffect } from 'react';

/**
 * Custom SEO hook to dynamically synchronize title, meta description,
 * canonical link, Open Graph, Twitter Cards, and Breadcrumb schema per route.
 */
export function useSEO({ title, description, path = '', breadcrumbs = [] }) {
  useEffect(() => {
    const baseUrl = 'https://jlhnursery.com';
    const canonicalUrl = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;

    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tags
    const setMetaTag = (selector, attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Primary Meta Description
    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description);
      setMetaTag('meta[name="title"]', 'name', 'title', title || document.title);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    // 3. Open Graph & Twitter Title
    if (title) {
      setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }

    // 4. Canonical & Open Graph URL
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. BreadcrumbList Schema (if provided)
    const breadcrumbScriptId = 'schema-breadcrumbs-dynamic';
    let breadcrumbScript = document.getElementById(breadcrumbScriptId);

    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = breadcrumbScriptId;
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://jlhnursery.com/'
          },
          ...breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 2,
            name: crumb.name,
            item: `${baseUrl}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}`
          }))
        ]
      };

      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }
  }, [title, description, path, JSON.stringify(breadcrumbs)]);
}

export default useSEO;
