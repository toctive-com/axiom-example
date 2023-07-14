import { EnvVariables } from '@toctive/axiom';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVariables, NodeJS.ProcessEnv {}
  }
}
