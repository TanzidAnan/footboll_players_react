
const Data = ({ data }) => {
    const {category,country,football_name,img,player_goal,position,price    } =data
    console.log(data)
    return (
        <div>
            <div className="card  w-96 shadow-xl p-3 bg-slate-100 gap-5 text-black">
                <figure className="h-[200px]">
                    <img className="h-full w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{football_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;