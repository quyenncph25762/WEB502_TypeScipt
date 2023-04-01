import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(1)
    const [image, setImage] = useState(null);
    const clickCount = () => {
        setCount(count + 1)
    }
    const clickImage = async () => {
        const { url } = await fetch("https://picsum.photos/200/300");
        setImage(url)
    }
    useEffect(() => {
        clickImage();
        // setTimeout(() => {
        //     setCount(count + 1)
        // }, 1000)
        console.log(count);
        // return () => clearInterval(interval)
        // clickCount();
    }, [count])
    return <>
        <div className="">Count {count}</div>
        <img src={image} alt="" />
        <button className="bg-black text-white" onClick={clickCount}>Count +</button>
    </>
}

export default Counter