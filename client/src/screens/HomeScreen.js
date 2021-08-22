import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Bet from "../components/Bet";

export default function HomeScreen() {
  const [bets, setBets] = useState([]);
  const [activeBet, setActiveBet] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        setLoading(true);
        // axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
        const { data } = await axios.get("/api/bets");
        setLoading(false);
        setBets(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fecthData();
  }, []);

  function handleTab(id) {
    setActiveBet(id);
  }

  const bet = bets.find((x) => x._id === activeBet);

  return (
    <div className="home center">
      <div className="row center">
        <nav>
          {bets.map((bet) => (
            <Link
              className={`nav-item ${activeBet === bet._id ? "active" : ""}`}
              to=""
              onClick={() => handleTab(bet._id)}
            >
              {bet.category}
            </Link>
          ))}
        </nav>
      </div>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center bet">
          {/* {bet ? activeBet : <div> Bet Not Found </div>} */}
          {bet ? <Bet key={bet._id} bet={bet} /> : <div> Bet Not Found </div>}
        </div>
      )}
    </div>
  );
}
