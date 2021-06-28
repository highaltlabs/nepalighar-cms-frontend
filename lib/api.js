export async function fetchAPI() {
    const res = await fetch(`https://nepalighar-cms-backend.herokuapp.com/navigation-menu-items`)
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}
