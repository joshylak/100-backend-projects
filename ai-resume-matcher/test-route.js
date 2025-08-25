// Quick test to verify server is working
fetch('http://localhost:3103/api/test')
  .then(r => r.json())
  .then(d => console.log('GET test:', d))
  .catch(e => console.error('GET error:', e));

fetch('http://localhost:3103/api/test', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ test: 'data' })
})
  .then(r => r.json())
  .then(d => console.log('POST test:', d))
  .catch(e => console.error('POST error:', e));