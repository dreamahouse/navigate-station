import axios from 'axios'

const test = () => {
    const instance = axios.create({
        timeout: 10 * 1000
    })
    instance.interceptors.response.use(res => {
        const { data, errono } = res.data
        if (errono) {
            message.error(errono.msg)
            throw new Error(errono)
        }
        return data
    })
    return (
        <div>test</div>
    )
}
export default test