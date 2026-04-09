import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  /** Absolute or relative path for the canonical URL of this page. */
  path?: string
  image?: string
}

const SITE_URL = 'https://50elixir.com'
const SITE_NAME = '50 Elixir'
const DEFAULT_IMAGE = '/favicon.png'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const url = path.startsWith('http') ? path : `${SITE_URL}${path}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = fullTitle

    upsertMeta('name', 'description', description)

    // Open Graph
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    // Canonical
    upsertLink('canonical', url)
  }, [title, description, path, image])

  return null
}
