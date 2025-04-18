
export {};

declare global {
  interface Window {
    hj?: {
      (...args: any[]): void;
      q?: any[];
    };
    _hjSettings?: {
      hjid: string | number;
      hjsv: number;
    };
  }
}
