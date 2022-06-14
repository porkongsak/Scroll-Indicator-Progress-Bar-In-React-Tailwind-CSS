import React, { useEffect, useState } from 'react'

function useReadingProgress() {

    const [completion, setCompletion ] = useState(0);

    useEffect(()=>{
        const upadteScrollCompletion = () =>{
            const currentProgress =window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if(scrollHeight){
                setCompletion(
                    // ความคืบหน้าปัจจุบัน หาร scrollHeight
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                )
            }
        }
        //เมื่อเลื่อน scroll จะใช้ฟังชั้น upadteScrollCompletion
        window.addEventListener('scroll', upadteScrollCompletion);


        return () =>{
            window.removeEventListener('scroll', upadteScrollCompletion);
        }

    },[]);

  return completion
}

export default useReadingProgress