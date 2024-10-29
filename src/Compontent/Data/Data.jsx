
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
                    <hr />
                    <div className="flex justify-between items-center mt-3">
                        <div>
                        <p>{country}</p>
                        </div>
                       <div>
                       <p className="text-gray-600"><small>{category}</small></p>
                       </div>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center mt-4">
                       <div>
                       <p className="text-lime-800 font-bold">Gole: {player_goal}</p>
                       </div>
                       <div>
                        <p>Price: $ {price}</p>
                       </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;