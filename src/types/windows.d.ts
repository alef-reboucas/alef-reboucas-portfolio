
export {};

declare global {
  interface Window {
    hj?: (...args: any[]) => void;
    _hjSettings?: {
      hjid: string | number;
      hjsv: number;
    };
  }
}
