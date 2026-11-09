import myImg from '../assets/image.png'

function Card(props){
    return(
        <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
          src={myImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.username || "username"}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile → {props.username}
          </button>
        </div>
      </div>
    )
}

export default Card