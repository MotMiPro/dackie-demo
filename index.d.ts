/* eslint-disable @typescript-eslint/no-explicit-any */
import { Near } from 'near-api-js';

export {};
declare global {
  interface Window {
    near: INear; // this will be your variable name
  }
}

interface ISenderNear {
  isSender: any;
  [key: string]: any;
}

export interface INear extends Near, ISenderNear {}
