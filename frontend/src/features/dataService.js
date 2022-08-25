import axios from 'axios'




// get data

const data = async () => {
    const response = await axios.get('http://localhost:2000/getData')

    if(response.data) {
        localStorage.setItem('questions',JSON.stringify(response.data))
    }

    return response.data
}

const quizService = {
    data
}

export default quizService