import axios from 'axios'
import base_url from './constants'

export default axios.create({
        base_url: base_url
    }
)

