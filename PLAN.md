#  Project Plan — Food Ordering Platform (Frontend Only)

##  Timeline & Milestones

| Day | Goal                        | Output / Notes                        |
|-----|-----------------------------|----------------------------------------|
| 0   | Kick-off                    | PLAN.md, repo setup                    |
| 1-2 | Frontend scaffolding        | Vite + React + Tailwind, routing setup |
| 3-4 | Menu & Cart UI              | Fetch menu from mock JSON, local cart state in Redux/Zustand |
| 5   | Checkout Page               | Form with validation (name, phone, address) |
| 6   | Order Tracker UI            | Status flow (mocked), auto-refresh simulation |
| 7   | Sign-Up/Login               | using React |
| 8   | PlaceOrder                  | Orders  |
| 9   | Lighthouse & polish         | Ensure ≥90 score mobile/desktop |
| 10  | Final docs & deployment     | README.md, deploy to Vercel/Netlify    |

---

## 🚨 Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Tailwind utility noise | Medium | Use `@apply` for reusable styles |
| State persistence issues | Low | Store cart in StoreContext |
| Performance bottlenecks | Low | Lazy-load components if needed |
| Deployment issues | Medium | Deploy early and test build |

---

## 📦 Deliverables

- `/frontend` React app
- CSS styling
- Deployed frontend URL
- README.md with usage instructions
