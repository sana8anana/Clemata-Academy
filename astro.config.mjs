// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SMP Academy',
			logo: {
				src: "assets/logo.png",
			},
			components: {
        	// Override the default `Header` component.
        	Header: '/src/components/Header.astro',
        	ThemeSelect: '/src/components/ThemeSelect.astro', // skjul tema-toggle globalt
          },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.  
						{ label: 'Introduktion', slug: 'example' },
						{ label: 'Modul 1 - Sygdom og Reklamationer', slug: 'guide1' },
						{ label: 'Modul 2 - Ubemandede opgaver', slug: 'guide2' },
						{ label: 'Modul 3 - Timer, dokumentation og frister', slug: 'guide3' },
						{ label: 'Modul 4 - Serviceplan og periodiske opgaver', slug: 'guide4' },
						{ label: 'Modul 5 - Produktanmodninger', slug: 'guide5' },
						{ label: 'Modul 6 - Kvalitetsrapporter', slug: 'guide6' },
						{ label: 'Modul 7 - Oprettelse af ny medarbejder', slug: 'guide7' },
          ],
        },
      ],
    }),
  ],
});