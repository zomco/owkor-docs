// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type {Config} from '@docusaurus/types';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: "Owkor",
  tagline: "Owkor make it easy to build smart home using mmwave radars",
  url: "https://owkor.com",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zomco", // Usually your GitHub org/user name.
  projectName: "owkor", // Usually your repo name.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      image: "img/android-chrome-512x512.png",
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "owkor",
          src: "img/owkor.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            label: "Docs",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
            className: "header-translate-link",
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: "right",
          // },
          {
            href: "https://github.com/zomco/owkor",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://twitter.com/zomcoo">Vodja</a>`,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: { light: "base", dark: "base" },
        options: {
          themeVariables: {
            primaryColor: "#67EA94",
            primaryTextColor: "var(--tw-prose-headings)",
            primaryBorderColor: "#4D4D4D",
            lineColor: "#EAD667",
            secondaryColor: "#EA67BD",
            tertiaryColor: "#677CEA",
          },
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },
  plugins: [
    () => {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/zomco/owkor/tree/main/docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/zomco/owkor/tree/main/blog",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
