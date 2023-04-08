import Box from '@mui/material/Box';
import Draggable from 'react-draggable';

import piecePngObj from './Util/piecePNGs';

const lightSquare = '#c4c4c4';
const darkSquare = '#005c28';

const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const fenToArray = (fen) => {
    const piecesString = fen.split(' ')[0].replace(/\//g, '');
    const piecesArrayNums = piecesString.split('');
    const piecesArray = piecesArrayNums.map(piece => {
        if (parseInt(piece)) {
            return [...Array(parseInt(piece)).fill(null)];
        };
        return piece;
    }).flat();

    return piecesArray;
};

const fenArray = fenToArray(fen);

function Board({ length }) {

    const squares = [];

    for (let i = 0; i < 64; i++) {

        const row = Math.floor(i / 8);
        const color = (row % 2 === 0 && i % 2 === 0) || 
                      (row % 2 === 1 && i % 2 === 1) 
                      ? lightSquare : darkSquare;

        squares.push(
            <Box 
              key={i}
              bgcolor={color}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box 
                component='img'
                src={piecePngObj[`${fenArray[i]}`]}
                alt=''
                sx={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>
          );
    };

    return (
        <Box
          sx={{
            height: length,
            width: length,
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gridTemplateRows: 'repeat(8, 1fr)',
          }}
        >
          {squares}
        </Box>
    );
}

export default Board;