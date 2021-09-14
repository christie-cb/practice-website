import GetApiData from '../joke'
import axios from 'axios'


function testGetApiData() {
    jest.mock('axios')
    const mockedAxios = axios.get
    const domain = "https://fakeapi.com/"
    const mockedConsole = jest.spyOn(global.console, 'error')
    const mockedData = {
        "id": "R7UfaahVfFd",
        "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
        "status": 200
    }
}

