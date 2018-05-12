// Imports:
import m from '../../../node_modules/mithril/mithril'

// Classes:
class Line {
  view(vnode) {
    return m('div', { class: 'line ' + (vnode.attrs.class || '') })
  }
}

// Exports:
export { Line }
