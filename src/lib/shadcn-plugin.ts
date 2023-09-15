import plugin from "tailwindcss/plugin"

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0, 0%, 100%",
        "--foreground": "0 0% 23%",
        "--card": "222.2 84% 4.9%",
        "--card-foreground": "0 0% 23%",

        "--popover": "222.2 84% 4.9%",
        "--popover-foreground": "0 0% 23%",

        "--primary": "154.008, 100%, 48%, 1",
        "--primary-foreground": "154.008, 100%, 48%, 100",

        "--secondary": "170, 100%, 12%, 1",
        "--secondary-foreground": "0 0% 23%",

        "--muted": "217.2 32.6% 17.5%",
        "--muted-foreground": "215 20.2% 65.1%",

        "--accent": "0, 0%, 58%",
        "--accent-foreground": "0 0% 23%",

        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 0% 23%",

        "--ring": "212.7 26.8% 83.9%",

        "--green_50": "0, 0%, 58%",
        "--green_500": "154.008, 100%, 48%, 1",
        "--green_100": "0,0%,96%",

        "--green-600": "119, 42%, 38%",
        "--red-600": "350, 100%, 36%"
      }
    })

    addBase({
      "*": {
        "@apply border-border": {}
      },
      body: {
        "@apply bg-background text-foreground": {}
      }
    })
  },

  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      extend: {
        fontFamily: {
          bricolage: [`var(--font-bricolage-grotesque)`]
        },
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))"
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))"
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))"
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))"
          },
          green_50: {
            DEFAULT: "hsl(var(--green_50))",
            foreground: "hsl(var(--black-foreground))"
          },
          green_500: {
            DEFAULT: "hsl(var(--green_500))",
            foreground: "hsl(var(--black-foreground))"
          },
          green_600: {
            DEFAULT: "hsl(var(--green_600))"
          },
          red_600: {
            DEFAULT: "hsl(var(--red_600))"
          },
          gray_100: {
            DEFAULT: "hsl(var(--gray_100))"
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))"
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))"
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))"
          }
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)"
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out"
        }
      }
    }
  }
)
