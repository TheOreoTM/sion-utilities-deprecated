import { Module } from '@kbotdev/plugin-modules';
import { ApplyOptions } from '@sapphire/decorators';
import type { SionUtilitiesModules } from '#lib/types/Enums';

@ApplyOptions<Module.Options>({
	fullName: 'Dev Module'
})
export class DevModule extends Module {}

declare module '@kbotdev/plugin-modules' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Modules {
		[SionUtilitiesModules.Dev]: never;
	}
}
