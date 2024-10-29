import { useEffect, useState } from "react";

const Datas = () => {
    const [datas,setDatas] =useState([]);
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/TanzidAnan/retro-forum/refs/heads/main/fake.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div>
            <h2>Data:{datas.length}</h2>
            <div>
                <p></p>
            </div>

        </div>
    );
};

export default Datas;