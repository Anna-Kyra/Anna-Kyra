export default function getCurrentPage(pageURL) {
    switch (pageURL) {
        case '/':
            return 'home'
        case '/projects/':
            return 'projects'
        case '/about/':
            return 'about'
        case '/contact/':
            return 'contact'
        default:
            return 'other'
    }
  }