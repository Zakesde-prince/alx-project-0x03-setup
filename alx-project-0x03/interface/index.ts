// interface/index.ts

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: "blue" | "green" | "orange";
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}
