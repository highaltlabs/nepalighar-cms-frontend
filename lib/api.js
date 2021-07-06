export async function fetchNavigationItemsAPI() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navigation-menu-items`)
    const json = await res.json()
    if (json.errors) {
        throw new Error('Failed to fetch API')
    }
    return json
}
