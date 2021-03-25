@app
findit-api-deno-begin

@http
get /todos
post /todos
post /todos/delete
get /locations
post /locations
post /locations/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
