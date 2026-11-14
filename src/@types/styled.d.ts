import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string[];
      secondary: string[];
      blue: string[];
      text?: string;
      error?: string;
      success?: string;
    };
    font: {
      main: string;
      kanit: string;
      inter: string;
      ubuntu: string;
      spline: string;
    };
  }
}
