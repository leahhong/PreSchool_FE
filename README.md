# Kiddie Preschool Frontend

Prototype React frontend for the Kiddie Preschool experience. The project is scaffolded with Vite and organised for future feature growth while currently relying on hard coded data.

## Tech stack

- React 18 with Vite
- React Router DOM for navigation
- Tailwind CSS for styling
- ESLint with React and accessibility presets

## Scripts

- `npm install` – install dependencies
- `npm run dev` – start local dev server
- `npm run build` – build production assets
- `npm run preview` – preview built output
- `npm run lint` – run ESLint

## Structure

```
PreSchool_FE/
├── public/ (optional static assets)
├── src/
│   ├── assets/         # images, icons, fonts
│   ├── components/     # reusable UI building blocks
│   ├── data/           # static content used across pages
│   ├── layouts/        # page level layout components
│   ├── pages/          # route level pages
│   ├── routes/         # router configuration
│   ├── styles/         # global styles and variables
│   └── main.jsx        # application bootstrap
└── ...
```

## Notes

- No API integration yet — all content is driven by static data.
- Styling uses plain CSS modules and utility classes defined in `styles/global.css`.
- Replace placeholder images in `src/assets` with branded artwork as needed.

