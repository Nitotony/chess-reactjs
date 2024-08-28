import { useState } from "react";
import "./App.css";
import Green from "./components/green";
import Light from "./components/light";

import {
  FaChessKing,
  FaChessQueen,
  FaChessBishop,
  FaChessKnight,
  FaChessRook,
  FaChessPawn,
} from "react-icons/fa";
import {
  FaRegChessKing,
  FaRegChessQueen,
  FaRegChessBishop,
  FaRegChessKnight,
  FaRegChessRook,
  FaRegChessPawn,
} from "react-icons/fa6";

function App() {
  const [chessBoardState, setChessBoardState] = useState({
    A1: <FaChessRook />,
    A2: <FaChessKnight />,
    A3: <FaChessBishop />,
    A4: <FaChessKing />,
    A5: <FaChessQueen />,
    A6: <FaChessBishop />,
    A7: <FaChessKnight />,
    A8: <FaChessRook />,
    B1: <FaChessPawn />,
    B2: <FaChessPawn />,
    B3: <FaChessPawn />,
    B4: <FaChessPawn />,
    B5: <FaChessPawn />,
    B6: <FaChessPawn />,
    B7: <FaChessPawn />,
    B8: <FaChessPawn />,
    C1: null,
    C2: null,
    C3: null,
    C4: null,
    C5: null,
    C6: null,
    C7: null,
    C8: null,
    D1: null,
    D2: null,
    D3: null,
    D4: null,
    D5: null,
    D6: null,
    D7: null,
    D8: null,
    E1: null,
    E2: null,
    E3: null,
    E4: null,
    E5: null,
    E6: null,
    E7: null,
    E8: null,
    F1: null,
    F2: null,
    F3: null,
    F4: null,
    F5: null,
    F6: null,
    F7: null,
    F8: null,
    G1: <FaRegChessPawn />,
    G2: <FaRegChessPawn />,
    G3: <FaRegChessPawn />,
    G4: <FaRegChessPawn />,
    G5: <FaRegChessPawn />,
    G6: <FaRegChessPawn />,
    G7: <FaRegChessPawn />,
    G8: <FaRegChessPawn />,
    H1: <FaRegChessRook />,
    H2: <FaRegChessKnight />,
    H3: <FaRegChessBishop />,
    H4: <FaRegChessQueen />,
    H5: <FaRegChessKing />,
    H6: <FaRegChessBishop />,
    H7: <FaRegChessKnight />,
    H8: <FaRegChessRook />,
  });

  const [selectedSquare, setSelectedSquare] = useState(null);
  const [moveSquare,setMoveSquare]=useState(null)

 

  return (
 
  
    <div className="App">
      <div className="board">

        <div className="row">
          <Light ele={chessBoardState.A1} />
          <Green ele={chessBoardState.A2} />
          <Light ele={chessBoardState.A3} />
          <Green ele={chessBoardState.A4} />
          <Light ele={chessBoardState.A5} />
          <Green ele={chessBoardState.A6} />
          <Light ele={chessBoardState.A7} />
          <Green ele={chessBoardState.A8} />
        </div>

        <div className="row">
          <Green ele={chessBoardState.B1} />
          <Light ele={chessBoardState.B2} />
          <Green ele={chessBoardState.B3} />
          <Light ele={chessBoardState.B4} />
          <Green ele={chessBoardState.B5} />
          <Light ele={chessBoardState.B6} />
          <Green ele={chessBoardState.B7} />
          <Light ele={chessBoardState.B8} />
        </div>

        <div className="row">
          <Light ele={chessBoardState.C1} />
          <Green ele={chessBoardState.C2} />
          <Light ele={chessBoardState.C3} />
          <Green ele={chessBoardState.C4} />
          <Light ele={chessBoardState.C5} />
          <Green ele={chessBoardState.C6} />
          <Light ele={chessBoardState.C7} />
          <Green ele={chessBoardState.C8} />
        </div>

        <div className="row">
          <Green ele={chessBoardState.D1} />
          <Light ele={chessBoardState.D2} />
          <Green ele={chessBoardState.D3} />
          <Light ele={chessBoardState.D4} />
          <Green ele={chessBoardState.D5} />
          <Light ele={chessBoardState.D6} />
          <Green ele={chessBoardState.D7} />
          <Light ele={chessBoardState.D8} />
        </div>

       
        <div className="row">
          <Light ele={chessBoardState.E1} />
          <Green ele={chessBoardState.E2} />
          <Light ele={chessBoardState.E3} />
          <Green ele={chessBoardState.E4} />
          <Light ele={chessBoardState.E5} />
          <Green ele={chessBoardState.E6} />
          <Light ele={chessBoardState.E7} />
          <Green ele={chessBoardState.E8} />
        </div>

   
        <div className="row">
          <Green ele={chessBoardState.F1} />
          <Light ele={chessBoardState.F2} />
          <Green ele={chessBoardState.F3} />
          <Light ele={chessBoardState.F4} />
          <Green ele={chessBoardState.F5} />
          <Light ele={chessBoardState.F6} />
          <Green ele={chessBoardState.F7} />
          <Light ele={chessBoardState.F8} />
        </div>

      
        <div className="row">
          <Light ele={chessBoardState.G1} />
          <Green ele={chessBoardState.G2} />
          <Light ele={chessBoardState.G3} />
          <Green ele={chessBoardState.G4} />
          <Light ele={chessBoardState.G5} />
          <Green ele={chessBoardState.G6} />
          <Light ele={chessBoardState.G7} />
          <Green ele={chessBoardState.G8} />
        </div>

        
        <div className="row">
          <Green ele={chessBoardState.H1} />
          <Light ele={chessBoardState.H2} />
          <Green ele={chessBoardState.H3} />
          <Light ele={chessBoardState.H4} />
          <Green ele={chessBoardState.H5} />
          <Light ele={chessBoardState.H6} />
          <Green ele={chessBoardState.H7} />
          <Light ele={chessBoardState.H8} />
        </div>
      </div>
    </div>
  );
}

export default App;
