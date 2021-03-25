import * as data from 'https://registry.begin.com/findit-api-deno-begin@master/mod.ts'

export default async function locations(req) {
  let locations = await data.get({
    table: 'locations'
  })
  // Return oldest location first
  locations.sort((a, b) => a.created > b.created)

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      locations
    })
  }
}