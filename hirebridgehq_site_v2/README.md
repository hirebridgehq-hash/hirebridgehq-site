HireBridgeHQ - Single Page React + Tailwind (Vite)

What I included:
- Single-page React app with simple hash-based navigation
- TailwindCSS configured
- Official logo at src/assets/logo.png
- Dynamic Careers page reads from jobs.json
- 'Apply' buttons use mailto:careers@hirebridgehq.com

Quick start (locally):
1. npm install
2. npm run dev
3. Open http://localhost:5173

Deployment:
Vercel (recommended):
- Create a GitHub repo, commit these files
- Import project in Vercel and deploy (Vercel detects Vite automatically)

Netlify:
- Drag and drop the build output (after npm run build) or connect GitHub
- Build command: npm run build, Publish directory: dist

Notes:
- To edit job listings, update jobs.json at project root and redeploy.
- To receive contact form submissions, connect an email/form service or configure backend.
