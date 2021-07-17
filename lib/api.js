const _ = require('lodash');

export async function fetchNavigationItemsAPI() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navigation-menu-items`)
    const json = await res.json()
    if (json.errors) {
        throw new Error('Failed to fetch API')
    }

    const navigationMenuItems = _.sortBy(json, ['sort_order', 'updated_at'])
    navigationMenuItems.forEach((navigationMenuItem) => {
        if (navigationMenuItem.navigation_items) {
            navigationMenuItem.navigation_items = _.sortBy(navigationMenuItem.navigation_items, ['sort_order', 'updated_at'])
        }
    })
    return navigationMenuItems
}
