import type { InjectionKey } from 'vue';

/**
 * 卡片信息
 */
export const protagonist = Symbol('PROTAGONIST') as InjectionKey<IProtagonistInfo>;