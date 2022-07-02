import './style.css'
import axios from 'axios'
const btn = document.querySelector('.btn')
const text = document.querySelector('.text')
const getData = async ()=>{
  await axios
  .get('http://127.0.0.1:8083/user')
  .then((res)=>{
    text.innerText =res.data.username
  })
  .catch(err=>{
    console.error(err)
  })
  .finally(()=>{
    console.log('执行了最终逻辑')
  })
}
btn.addEventListener('click',getData)