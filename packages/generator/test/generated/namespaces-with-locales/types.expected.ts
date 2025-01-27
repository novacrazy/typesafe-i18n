// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'de'

export type Locales =
	| 'en-us'
	| 'de_at'
	| 'it'
	| 'de'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	test: NamespaceTestTranslation,
	'some-other_namespace': NamespaceSomeOtherNamespaceTranslation
}

type RootTranslation = {}

export type NamespaceTestTranslation = {
	/**
	 * hello
	 */
	hi: string
}

export type NamespaceSomeOtherNamespaceTranslation = {
	/**
	 * abc
	 */
	a: string
}

export type Namespaces =
	| 'test'
	| 'some-other_namespace'

type DisallowNamespaces = {
	/**
	 * reserved for 'test'-namespace\
	 * you need to use the `./test/index.ts` file instead
	 */
	test?: "[typesafe-i18n] reserved for 'test'-namespace. You need to use the `./test/index.ts` file instead."

	/**
	 * reserved for 'some-other_namespace'-namespace\
	 * you need to use the `./some-other_namespace/index.ts` file instead
	 */
	'some-other_namespace'?: "[typesafe-i18n] reserved for 'some-other_namespace'-namespace. You need to use the `./some-other_namespace/index.ts` file instead."
}

export type TranslationFunctions = {
	test: {
		/**
		 * hello
		 */
		hi: () => LocalizedString
	}
	'some-other_namespace': {
		/**
		 * abc
		 */
		a: () => LocalizedString
	}
}

export type Formatters = {}
