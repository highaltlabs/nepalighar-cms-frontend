export async function fetchNavigationItemsAPI(path) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`)
    const json = await res.json()
    if (json.errors) {
        throw new Error('Failed to fetch API')
    }
    return json
}
