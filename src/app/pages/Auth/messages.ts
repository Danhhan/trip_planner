import { translations } from '@/locales/translations'
import { _t } from '@/utils/messages'

export const messages = {
  'Sign in': () => _t(translations.auth['Sign in']),
  Email: () => _t(translations.auth.Email),
  "Get's Started": () => _t(translations.auth["Get's Started"]),
  "Don't have an account": () => _t(translations.auth["Don't have an account"]),
  'Sign up': () => _t(translations.auth['Sign up']),
  Password: () => _t(translations.auth.Password),
  'Remember me': () => _t(translations.auth['Remember me']),
  'Forgot your password': () => _t(translations.auth['Forgot your password'])
}
