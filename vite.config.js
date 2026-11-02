import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import contactHandler from './netlify/functions/contact.mjs'

// Serves /api/contact during `npm run dev` with the same function Netlify runs in
// production, so the contact form sends real emails locally (key from .env.local).
function contactApi(env) {
  return {
    name: 'contact-api',
    configureServer(server) {
      for (const key of ['RESEND_API_KEY', 'CONTACT_TO', 'CONTACT_FROM', 'CONTACT_AUTOREPLY']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key]
      }

      server.middlewares.use('/api/contact', async (req, res) => {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        const body = Buffer.concat(chunks)

        const request = new Request(`http://localhost${req.originalUrl}`, {
          method: req.method,
          headers: { 'Content-Type': req.headers['content-type'] || 'application/json' },
          body: ['GET', 'HEAD'].includes(req.method) ? undefined : body,
        })

        try {
          const response = await contactHandler(request)
          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          res.end(await response.text())
        } catch (err) {
          console.error('contact-api:', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'The message couldn\'t be sent.' }))
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('.', import.meta.url)), '')
  return {
    plugins: [react(), contactApi(env)],
  }
})
