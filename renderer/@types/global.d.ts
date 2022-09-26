declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

export interface IElectronAPI {
  setTitle: (title: string) => void;
}
