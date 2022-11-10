import "./style.css";
import { useRef, useState } from 'react';
const AutoClosedComponent = () => {
    const ref = useRef();

    const handleClick = () => {
        ref.current.style.opacity = "1"
        setTimeout(() => ref.current.style.opacity = "0", 4000)
    }

    return <>
        <button onClick={handleClick}> add opacity </button>
        <div ref={ref} className='container'>ndüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 150 Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus Pag</div>
    </>
}

export default AutoClosedComponent;