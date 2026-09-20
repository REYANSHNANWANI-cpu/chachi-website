# Visual QA Notes

Captured the full page at 1280×900 and 390×844. The desktop render shows the intended editorial hierarchy: dark image-led hero, ivory studio section, textured services band, plum gallery, process section, contact image CTA, and wine footer. The generated imagery is loading correctly from managed storage and appears coherent across the page.

The mobile render stacks the navigation, hero, stats, studio, services, gallery, process, CTA and footer without visible horizontal overflow. The service and gallery grids collapse into compact two-column layouts, and the navigation converts to a menu toggle. Typography remains readable and the warm gold/plum contrast is preserved.

Build status: `pnpm check` and `pnpm build` both pass. The only build output is Vite's advisory chunk-size warning; no runtime or TypeScript errors were reported.
