import { BytebotAgentModel } from '../agent/agent.types';

export const GOOGLE_MODELS: BytebotAgentModel[] = [
  {
    provider: 'google',
    name: 'models/gemini-3-pro-preview',
    title: 'Gemini 3 Pro Preview',
    contextWindow: 1000000,
  },
];

export const DEFAULT_MODEL = GOOGLE_MODELS[0];
