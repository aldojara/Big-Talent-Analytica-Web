This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Comprobacion de version desplegada

El endpoint publico de diagnostico `/api/version` devuelve el Git commit SHA
usado para compilar la version desplegada. Solo expone metadata segura de build:

```bash
curl -s https://big-talent-analytica-web.aldo-pisconti-fr01.workers.dev/api/version
```

Para comparar produccion con GitHub:

```bash
git fetch origin
git rev-parse origin/main
```

Si `origin/main` y el valor `gitCommit` del endpoint coinciden, produccion esta
sincronizada con la rama principal. Si no coinciden, existe un commit pendiente
de despliegue o produccion fue compilada desde otro commit.

El Cloudflare Version ID y el Git commit SHA son identificadores diferentes:
Cloudflare identifica una version desplegada del Worker, mientras que
`gitCommit` identifica la revision del repositorio usada durante el build.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
