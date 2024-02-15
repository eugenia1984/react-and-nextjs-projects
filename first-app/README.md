## Commands

- To install de dependencies (libraries), run:

```BASH
npm install
```

- To see in the browser, run:

```BASH
npm run dev
```

En see it locally, at: [http://localhost:3000](http://localhost:3000)

---

## Next.js vs "Just React"

Next.js can be **render on a client** (BackEnd) that return one single HTML file which contains the client-side JavaScript code.

And in the **client side** the visible content is generated & rendered on the client-side (by the client-side React code). The page is not reloaded or re-render on the server.

Client side negative -> If we were using "React only", inspecting the page we can only see the `<div>` with the `root` id, but in Next.js project we can see the server side content rendering.

With Net.js we have a **full stack** application -> server-side (BackEnd) + client-side (FrontEnd)

---

## Two approaches for building Next.js Apps

- **Pages Router**, the older way of doing. Very stable. Used in many exiting Next.js projects. Allows you to build feature-rich Full Stack apps with React.

- **App Router**, the new way, with Next.js 13. Marked as stable but still relatively new and partially buggy. Supports modern Next & React features. The future of Next.js.

---