const url = 'http://10.106.20.107:8084/users'

export const getAll = async () => {
    try {
        const response = await fetch(`${url}/show/all`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json()
            return data
        }
    } catch (err: any) {
        console.error("Error fetching users:", err);
    }
}