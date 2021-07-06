export async function fetchNavigationItemsAPI(APIUrl) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navigation-menu-items`)
    console.log(res)
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}
