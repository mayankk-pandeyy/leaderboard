import { FaCheck } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import data from '../data';


function Leaderboard(){

    let playerOneWins = 0;
    let playerTwoWins = 0;

    return(
        <div className="w-100vw h-screen bg-[#1D1E2C]">
            <div className="w-9/12 mx-auto flex flex-col">
                <div className="rounded-lg">
                    <div className="w-full text-center text-3xl font-bold py-2 bg-blue-400 rounded-xl">LEADERBOARD</div>
                </div>
                <div className="mt-4 flex justify-center">
                    <div>
                        <table className="text-center">
                            <tr className="border">
                                <td className="border flex flex-col items-center px-4 bg-[#303A2B] text-white">
                                    <div>Round</div>
                                    <div className="w-full h-[2px] bg-white"></div>
                                    <div>Player</div>
                                </td>

                                {
                                    data.map((result, index) => {
                                        return <td className="border px-2 bg-[#F2F230] font-semibold">Round {index + 1}</td>
                                    })
                                }

                                <td className="px-2 bg-[#F2F230]">
                                    Results
                                </td>
                            </tr>

                        {/* Player 1 */}
                            <tr className="border">
                                <td className="border bg-amber-600">
                                    <div>Player 1</div>
                                </td>
                                
                                {
                                    data.map((result) => {
                                        if(result.winner == 1){
                                            playerOneWins++;
                                            return <td className="border text-green-500 px-5 py-2"><FaCheck /></td>
                                        }else{
                                            return <td className="border text-red-600 px-5 py-2"><GiCrossMark /></td>
                                        }
                                    })
                                }

                                <td className="text-[#C7EF00]">
                                    {playerOneWins}
                                </td>
                            </tr>
                        {/* Player 2 */}
                            <tr className="border">
                                <td className="border bg-amber-600">
                                    <div>Player 2</div>
                                </td>
                                
                                {
                                    data.map((result) => {
                                        if(result.winner == 2){
                                            playerTwoWins++;
                                            return <td className="border mx-auto text-green-500 px-5 py-2"><FaCheck /></td>
                                        }else{
                                            return <td className="border text-red-600 px-5 py-2"><GiCrossMark /></td>
                                        }
                                    })
                                }

                                <td className="text-[#C7EF00]">
                                    {playerTwoWins}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="mx-auto mt-10">
                    <table>
                        <tr>
                            <td className="px-4 py-2 font-semibold text-[#C7EF00]">Games Won By Player 1</td>
                            <td className="px-5 font-semibold text-xl text-green-400">{playerOneWins}</td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 font-semibold text-[#C7EF00]">Games Won By Player 2</td>
                            <td className="px-5 font-semibold text-xl text-green-400">{playerTwoWins}</td>
                        </tr>
                    </table>
                </div>

                <div className="flex justify-center">
                    {playerOneWins > playerTwoWins ? 
                            (<div className="border-[2px] mt-10 px-3 py-2 text-2xl font-bold bg-[#685F74] text-[#CA9CE1]">Player 1 WON the Game!</div>) : 
                            (<div className="border-[2px] mt-10 px-3 py-2 text-2xl font-bold bg-[#685F74] text-[#CA9CE1]">Player 2 WON the Game!.</div>)}
                </div>
            </div>
        </div>
    );

}

export default Leaderboard;