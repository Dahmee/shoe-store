import nike1 from "../assets/n1-min.png";

export function ShoeDetail() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse ">
      <div className="flex-1">
        <div className="bg-gradient-to-br from-[#910A67] via-[#3C0753] to-[#720455]">
          <img src={nike1} />
        </div>
      </div>
      <div className="space-y-6 flex-1">
        <div className="text-4xl  font-black md:9xl">Nike Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae harum"
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">100$</div>
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            {" "}
            Add to bag
          </button>
          <a href="#" className="text-lg font-bold underline">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
