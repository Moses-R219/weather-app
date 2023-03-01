import React from "react";
import bgImage from '././img/bg.jpg'
import img1 from '././img/sunny.jpg'
import img2 from '././img/haze.jpg'
// import img1 from '././img/sunny.jpg'
// import img1 from '././img/sunny.jpg'
// import img1 from '././img/sunny.jpg'
const ChangeBg=()=>{
    const arr=[
        {image:img1}
        ,{image:'././img/sunny.jpg'}
        ,{image:img2}]
    return(
        <div>
            {
           arr.map((a)=>{
            return <img src={`${a.image}`}></img>
           })
        }
            <h1>GURUBHARA N M</h1>
            <h2>MOSES R</h2>
        </div>
    )
}


export default ChangeBg;