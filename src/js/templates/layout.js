// Imports:
import m from '../../../node_modules/mithril/mithril'
import { Footer, Menu } from '../components'

// Functions:
export function layout(className, content) {
  return m('div', { class: 'layout ' + (className || '') }, [
    m(Menu),
    content,
    m(Footer)
  ])
}
