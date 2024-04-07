export function removeProtocolAndSubdomain(url: string): string {
  const withoutProtocol = url.replace(/^(https?:)?\/\//, '')

  const parts = withoutProtocol.split('.')

  if (parts.length > 2) {
    parts.shift()
  }

  let result = parts.join('.')

  result = result.replace(/\/$/, '')

  return result
}
