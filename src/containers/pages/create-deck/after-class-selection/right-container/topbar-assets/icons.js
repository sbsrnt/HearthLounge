export const topbar_icons = (active_class) => {
  return {
    cards: [
      {
        title: active_class,
        icon: active_class
      },
      {
        title: 'classic',
        icon: 'hs-logo'
      },
      {
        title: 'basic',
        icon: 'basic'
      },
      {
        title: "journey to un'goro",
        icon: 'journey-to-ungoro'
      }
    ],
    options: [
      {
        title: 'copy deckstring to clipboard',
        icon: 'copy',
        popover: false,
        allowCopy: true
      },
      {
        title: 'save deck as image',
        icon: 'image',
        popover: true,
        allowCopy: false
      },
      {
        title: 'import deck',
        icon: 'import',
        popover: true,
        allowCopy: false
      },
      {
        title: 'save deck in hearth lounge',
        icon: 'save',
        popover: false,
        allowCopy: false
      },
    ],
    types: [
      {
        title: 'minion',
        icon: 'minions'
      },
      {
        title: 'spell',
        icon: 'fire'
      },
      {
        title: 'weapon',
        icon: 'warrior'
      }
    ]
  }
};