import { useEffect, useState } from "react";
import Data from "../Data/Data";

const Datas = () => {
    const [datas,setDatas] =useState([]);
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/TanzidAnan/retro-forum/refs/heads/main/fake.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div className="w-10/12 mx-auto">
            <h2>Data:{datas.length}</h2>
            <div className="grid grid-cols-3 gap-8">
                {
                    datas.map(data => <Data key={data.id} data={data}></Data>)
                }
            </div>

        </div>
    );
};

export default Datas;