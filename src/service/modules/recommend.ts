import hyRequest from '..'
export function getTopBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}
