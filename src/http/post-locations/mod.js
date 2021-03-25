import * as data from 'https://registry.begin.com/findit-api-deno-begin@master/mod.ts'

export default async function create(req) {
  location.created = location.created || Date.now()
  location.completed = !!location.completed
  await data.set({
    table: 'locations',
    ...location
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}