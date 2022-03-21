// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('./types.actual').Locales } Locales,
 * @typedef { import('./types.actual').Translations } Translations,
 * @typedef { import('./types.actual').Namespaces } Namespaces
 */

import { initFormatters } from './formatters-template.actual'

import { loadedFormatters, loadedLocales, locales } from './util.actual'

const localeTranslationLoaders = {
	'en-us': () => import('./en-us'),
	de_at: () => import('./de_at'),
	it: () => import('./it'),
	de: () => import('./de'),
}

const localeNamespaceLoaders = {
	'en-us': {
		test: () => import('./en-us/test'),
		'some-other_namespace': () => import('./en-us/some-other_namespace')
	},
	de_at: {
		test: () => import('./de_at/test'),
		'some-other_namespace': () => import('./de_at/some-other_namespace')
	},
	it: {
		test: () => import('./it/test'),
		'some-other_namespace': () => import('./it/some-other_namespace')
	},
	de: {
		test: () => import('./de/test'),
		'some-other_namespace': () => import('./de/some-other_namespace')
	}
}

/**
 * @param { Locales } locale
 * @return { Promise<void> }
 */
export const loadLocaleAsync = async (locale) => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = /** @type { Translations } */ (/** @type { unknown } */ ((await localeTranslationLoaders[locale]()).default))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = () => Promise.all(locales.map(loadLocaleAsync))

/**
 * @param { Locales } locale
 * @return { void }
 */
export const loadFormatters = (locale) => {
	loadedFormatters[locale] = initFormatters(locale)
}

/**
 * @param { Locales } locale,
 * @param { Namespaces } namespace
 * @return { Promise<void> }
 */
export const loadNamespaceAsync = async (locale, namespace) => {
	if (!loadedLocales[locale]) loadedLocales[locale] = /** @type { Translations } */ ({})
	loadedLocales[locale][namespace] = /** @type { any } */ ((await (localeNamespaceLoaders[locale][namespace])()).default)
}
