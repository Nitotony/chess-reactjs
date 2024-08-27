
import { useContext } from 'react';
import './App.css';
import Green from './components/green';
import Light from './components/light';

import { useState } from 'react';

import { FaChessKing } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKnight } from 'react-icons/fa';
import { FaChessRook } from 'react-icons/fa';
import { FaChessPawn } from 'react-icons/fa';

import { FaRegChessKing} from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";







function App() {
const [chess_board_state, setChess_board_state] = useState({
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
  

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Light ele={<FaChessRook />} />
          <Green ele={<FaChessKnight />} />
          <Light ele={<FaChessBishop />} />
          <Green ele={<FaChessKing />} />
          <Light ele={<FaChessQueen />} />
          <Green ele={<FaChessBishop />} />
          <Light ele={<FaChessKnight />} />
          <Green ele={<FaChessRook />} />
        </div>

        <div className="row">
          <Green ele={<FaChessPawn />} />
          <Light ele={<FaChessPawn />} />
          <Green ele={<FaChessPawn />} />
          <Light ele={<FaChessPawn />} />
          <Green ele={<FaChessPawn />} />
          <Light ele={<FaChessPawn />} />
          <Green ele={<FaChessPawn />} />
          <Light ele={<FaChessPawn />} />
        </div>

        <div className="row">
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
        </div>

        <div className="row">
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
        </div>

        <div className="row">
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
        </div>

        <div className="row">
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
          <Green />
          <Light />
        </div>

        <div className="row">
          <Light ele={<FaRegChessPawn />} />
          <Green ele={<FaRegChessPawn />} />
          <Light ele={<FaRegChessPawn />} />
          <Green ele={<FaRegChessPawn />} />
          <Light ele={<FaRegChessPawn />} />
          <Green ele={<FaRegChessPawn />} />
          <Light ele={<FaRegChessPawn />} />
          <Green ele={<FaRegChessPawn />} />
        </div>

        <div className="row">
          <Green ele={<FaRegChessRook />} />
          <Light ele={<FaRegChessKnight />} />
          <Green ele={<FaRegChessBishop />} />
          <Light ele={<FaRegChessQueen />} />
          <Green ele={<FaRegChessKing />} />
          <Light ele={<FaRegChessBishop />} />
          <Green ele={<FaRegChessKnight />} />
          <Light ele={<FaRegChessRook />} />
        </div>
      </div>
    </div>
  );
}

export default App;
