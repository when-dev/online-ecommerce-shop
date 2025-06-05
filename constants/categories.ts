export type Category = {
  label: string;
  slug: string;
  href?: string;
  children?: Category[];
};

export const catalogCategories: Category[] = [
  {
    label: "Apple",
    slug: "apple",
    children: [
      {
        label: "iPhone",
        slug: "iphone",
        children: [
          {
            label: "iPhone 16 Pro Max",
            slug: "iphone-16-pro-max",
            href: "/catalog/iphone-16-pro-max"
          },
          {
            label: "iPhone 16 Pro",
            slug: "iphone-16-pro",
            href: "/catalog/iphone-16-pro"
          },
          {
            label: "iPhone 16 Plus",
            slug: "iphone-16-plus",
            href: "/catalog/iphone-16-plus"
          },
          {
            label: "iPhone 16e",
            slug: "iphone-16e",
            href: "/catalog/iphone-16e"
          },
          { label: "iPhone 16", slug: "iphone-16", href: "/catalog/iphone-16" },
          {
            label: "iPhone 15 Pro Max",
            slug: "iphone-15-pro-max",
            href: "/catalog/iphone-15-pro-max"
          },
          {
            label: "iPhone 15 Pro",
            slug: "iphone-15-pro",
            href: "/catalog/iphone-15-pro"
          },
          {
            label: "iPhone 15 Plus",
            slug: "iphone-15-plus",
            href: "/catalog/iphone-15-plus"
          },
          { label: "iPhone 15", slug: "iphone-15", href: "/catalog/iphone-15" },
          {
            label: "iPhone 14 Pro Max",
            slug: "iphone-14-pro-max",
            href: "/catalog/iphone-14-pro-max"
          },
          {
            label: "iPhone 14 Pro",
            slug: "iphone-14-pro",
            href: "/catalog/iphone-14-pro"
          },
          {
            label: "iPhone 14 Plus",
            slug: "iphone-14-plus",
            href: "/catalog/iphone-14-plus"
          },
          { label: "iPhone 14", slug: "iphone-14", href: "/catalog/iphone-14" }
        ]
      },
      {
        label: "Apple Watch",
        slug: "apple-watch",
        children: [
          {
            label: "Apple Watch SE 2024",
            slug: "apple-watch-se-2024",
            href: "/catalog/apple-watch-se-2024"
          },
          {
            label: "Apple Watch Ultra 2 (2024)",
            slug: "apple-watch-ultra-2-2024",
            href: "/catalog/apple-watch-ultra-2-2024"
          },
          {
            label: "Apple Watch Ultra 2",
            slug: "apple-watch-ultra-2",
            href: "/catalog/apple-watch-ultra-2"
          },
          {
            label: "Apple Watch Ultra",
            slug: "apple-watch-ultra",
            href: "/catalog/apple-watch-ultra"
          },
          {
            label: "Apple Watch Series 10",
            slug: "apple-watch-series-10",
            href: "/catalog/apple-watch-series-10"
          },
          {
            label: "Apple Watch Series 9",
            slug: "apple-watch-series-9",
            href: "/catalog/apple-watch-series-9"
          },
          {
            label: "Apple Watch Series 8",
            slug: "apple-watch-series-8",
            href: "/catalog/apple-watch-series-8"
          },
          {
            label: "Apple Watch Series 7",
            slug: "apple-watch-series-7",
            href: "/catalog/apple-watch-series-7"
          }
        ]
      },
      {
        label: "MacBook",
        slug: "macbook",
        children: [
          {
            label: "MacBook Pro",
            slug: "macbook-pro",
            href: "/catalog/macbook-pro"
          },
          {
            label: "MacBook Air",
            slug: "macbook-air",
            href: "/catalog/macbook-air"
          }
        ]
      },
      {
        label: "iPad",
        slug: "ipad",
        children: [
          {
            label: "iPad 11 (2025)",
            slug: "ipad-11-2025",
            href: "/catalog/ipad-11-2025"
          },
          { label: "iPad Air", slug: "ipad-air", href: "/catalog/ipad-air" },
          { label: "iPad mini", slug: "ipad-mini", href: "/catalog/ipad-mini" },
          { label: "iPad Pro", slug: "ipad-pro", href: "/catalog/ipad-pro" }
        ]
      },
      {
        label: "AirPods",
        slug: "airpods",
        children: [
          { label: "AirPods 4", slug: "airpods-4", href: "/catalog/airpods-4" },
          {
            label: "AirPods Max (2024) Type-C",
            slug: "airpods-max-2024-type-c",
            href: "/catalog/airpods-max-2024-type-c"
          },
          {
            label: "AirPods Max",
            slug: "airpods-max",
            href: "/catalog/airpods-max"
          },
          { label: "AirPods 3", slug: "airpods-3", href: "/catalog/airpods-3" },
          {
            label: "AirPods Pro 2 (2023) Type-C",
            slug: "airpods-pro-2-2023-type-c",
            href: "/catalog/airpods-pro-2-2023-type-c"
          },
          {
            label: "AirPods Pro 2 (2022)",
            slug: "airpods-pro-2-2023",
            href: "/catalog/airpods-pro-2-2023"
          },
          {
            label: "AirPods Pro 2",
            slug: "airpods-pro-2",
            href: "/catalog/airpods-pro-2"
          },
          {
            label: "AirPods Pro",
            slug: "airpods-pro",
            href: "/catalog/airpods-pro"
          }
        ]
      }
    ]
  },
  {
    label: "Samsung",
    slug: "samsung",
    children: [
      {
        label: "Телефоны",
        slug: "samsung-phones",
        children: [
          {
            label: "Galaxy S24 Ultra",
            slug: "galaxy-s24-ultra",
            href: "/catalog/galaxy-s24-ultra"
          },
          {
            label: "Galaxy S23 Ultra",
            slug: "galaxy-s23-ultra",
            href: "/catalog/galaxy-s23-ultra"
          },
          {
            label: "Galaxy Z Flip",
            slug: "galaxy-z-flip",
            href: "/catalog/galaxy-z-flip"
          },
          {
            label: "Galaxy Z Fold",
            slug: "galaxy-z-fold",
            href: "/catalog/galaxy-z-fold"
          }
        ]
      },
      {
        label: "Планшеты",
        slug: "samsung-tablets",
        children: [
          {
            label: "Galaxy Tab S10 Ultra",
            slug: "galaxy-tab-s10-ultra",
            href: "/catalog/galaxy-tab-s10-ultra"
          },
          {
            label: "Galaxy Tab S9",
            slug: "galaxy-tab-s9",
            href: "/catalog/galaxy-tab-s9"
          }
        ]
      }
    ]
  },
  {
    label: "Ноутбуки",
    slug: "notebooks",
    children: [
      {
        label: "Lenovo ThinkPad",
        slug: "lenovo-thinkpad",
        href: "/catalog/lenovo-thinkpad"
      },
      { label: "Dell XPS", slug: "dell-xps", href: "/catalog/dell-xps" },
      {
        label: "Asus ZenBook",
        slug: "asus-zenbook",
        href: "/catalog/asus-zenbook"
      },
      { label: "HP Spectre", slug: "hp-spectre", href: "/catalog/hp-spectre" },
      {
        label: "Acer Aspire",
        slug: "acer-aspire",
        href: "/catalog/acer-aspire"
      }
    ]
  },
  {
    label: "Наушники Beats",
    slug: "beats",
    children: [
      {
        label: "Powerbeats Pro 2",
        slug: "powerbeats-pro-2",
        href: "/catalog/powerbeats-pro-2"
      },
      {
        label: "Beats Studio Pro",
        slug: "beats-studio-pro",
        href: "/catalog/beats-studio-pro"
      },
      {
        label: "Beats Fit Pro",
        slug: "beats-fit-pro",
        href: "/catalog/beats-fit-pro"
      },
      { label: "Beats Flex", slug: "beats-flex", href: "/catalog/beats-flex" },
      {
        label: "Beats Solo Buds",
        slug: "beats-solo-buds",
        href: "/catalog/beats-solo-buds"
      },
      {
        label: "Beats Studio Buds",
        slug: "beats-studio-buds",
        href: "/catalog/beats-studio-buds"
      }
    ]
  },
  {
    label: "Игровые приставки",
    slug: "game-consoles",
    children: [
      {
        label: "Nintendo Switch",
        slug: "nintendo-switch",
        href: "/catalog/nintendo-switch"
      },
      {
        label: "PlayStation 5 Pro (PS5 Pro)",
        slug: "ps5-pro",
        href: "/catalog/ps5-pro"
      },
      {
        label: "PlayStation 5 Slim (PS5 Slim)",
        slug: "ps5-slim",
        href: "/catalog/ps5-slim"
      },
      { label: "PlayStation 5 (PS5)", slug: "ps5", href: "/catalog/ps5" }
    ]
  },
  {
    label: "Уценка",
    slug: "discount"
  }
];
