// Imports:
import m from 'mithril'

// Classes:
class Paragraph {
  view(vnode) {
    return m('p', { class: 'paragraph ' + (vnode.attrs.class || '') }, vnode.attrs.content)
  }
}

// Exports:
export { Paragraph }
