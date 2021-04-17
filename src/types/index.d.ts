declare module 'is-valid-domain' {
  export default function(value: string, opts?: {
    allowUnicode: boolean,
    subdomain: boolean,
    wildcard: boolean
  })
}