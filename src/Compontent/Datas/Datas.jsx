import { useLoaderData } from "react-router-dom";

const Datas = () => {
    const fakeDatas = useLoaderData();
    const { football_name} = fakeDatas
    console.log(fakeDatas)
    return (
        <div>
            <h2>Data: {fakeDatas.length}</h2>
            <div>
                <p>{football_name}</p>
            </div>

        </div>
    );
};

export default Datas;