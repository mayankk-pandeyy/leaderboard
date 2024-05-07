import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Form(){
    const navigate = useNavigate();

    const [data, setData] = useState({players : "", rounds : ""});

    function playerHandler(event){
        setData((data) =>{
            return { ...data, players : event.target.value}
        })
    }

    function roundHandler(event){
        setData((data) =>{
            return { ...data, rounds : event.target.value}
        })
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(data);
        if(data.players != "" && data.rounds != ""){
            navigate("/leaderboard");
        }
    }

    return(
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={submitHandler}>

                {/* No of Players */}
                <label id="players">No of Players</label>
                <input
                    type="number"
                    name="players"
                    placeholder="Enter the no. of Players"
                    onChange={playerHandler}
                    className="w-[200px] border-[1px] border-black ml-2 mb-2 px-2"
                />
        <br/>
                {/* No of rounds */}
                <label id="players">No of Rounds</label>
                <input 
                    type="number"
                    name="rounds"
                    placeholder="Enter the no. of Rounds"
                    onChange={roundHandler}
                    className="w-[220px] border-[1px] border-black ml-2 px-2"
                />

        <br/>
                <button type="submit" className="border-[1px] border-black ml-2 px-3 mt-3">Submit</button>
            </form>
        </div>
    );

}
export default Form;