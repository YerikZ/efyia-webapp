import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const ACCESS_CODES = `${process.env.NEXT_PUBLIC_APP_ACCESS_CODES}`
export const APP_INFO: AppInfo = {
  title: 'Efyia Resume',
  description: `AI-powered resume builder and reviewer optimising your CV for job applications with personalised content suggestions. 
                AI can make mistakes and fabricate content. Results should be reviewed to ensure accuracy and suitability.
                Use at your own risk.`,
  copyright: 'efyia.ai',
  privacy_policy: 'https://dify.ai/privacy',
  default_language: 'en',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
