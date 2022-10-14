import { io } from "socket.io-client";

export const TICKET_ERROR = "TICKET_ERROR";
export const TICKET_SUCCESS = "TICKET_SUCCESS";

export const failedLoad = (error) => ({
  type: TICKET_ERROR,
  error: error,
});

export const successLoad = (ticker) => ({
  type: TICKET_SUCCESS,
  payload: ticker,
});

export const loadTickers = () => (dispatch) => {
  const URL = "http://localhost:4000";
  const socket = io(URL, { autoConnect: true });

  socket.emit("start");
  socket.on("ticker", function (response) {
    const tickers = Array.isArray(response) ? response : [response];
    const action = successLoad(tickers);
    dispatch(action);
  });
};
