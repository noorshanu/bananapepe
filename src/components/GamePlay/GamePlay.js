import React from "react";
import Line from "../../images/line.png";
import Tv from "../../images/icon/tv.svg";
import Hand from "../../images/icon/hand.svg";
import Skull from "../../images/icon/flag.svg";
import Flag from "../../images/icon/skull.svg";
import Lets from "../../images/button.png";
import "./Game.css";
function GamePlay() {
  return (
    <section className="game-play" id="game">
      <div className="container">
        <div className="head-game text-center">
          <h1>GAMEPLAY</h1>
          <img src={Line} alt="" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="game-box text-center">
              <div className="game-box-img text-center">
                <img src={Tv} alt="tv" />
              </div>
              <div className="game-box-title text-center">
                <h2>Virtual Competition</h2>
              </div>
              <div className="game-box-para">
                <p>
                Virtual Competition can be a great way to earn rewards, have fun, and meet new
                  people. It is a popular feature in many play-to-earn games,
                  and it is likely to become even more popular in the future.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="game-box text-center">
              <div className="game-box-img text-center">
                <img src={Hand} alt="tv" />
              </div>
              <div className="game-box-title text-center">
                <h2>Stake coins</h2>
              </div>
              <div className="game-box-para">
                <p>
                  When you stake cryptocurrency in a play-to-earn game, you are
                  essentially lending your cryptocurrency to the game's
                  developers. In return, you will earn rewards, such as in-game
                  currency, NFTs, or cryptocurrency.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="game-box text-center">
              <div className="game-box-img text-center">
                <img src={Skull} alt="tv" style={{ height: "54px" }} />
              </div>
              <div className="game-box-title text-center">
                <h2>Dex Build</h2>
              </div>
              <div className="game-box-para">
                <p>
                  DEXs allow players to exchange their in-game currency for any
                  cryptocurrency that is supported by the exchange. This makes
                  it easy for players to cash out their earnings and use them
                  for other purposes...{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="game-box text-center">
              <div className="game-box-img text-center">
                <img src={Flag} alt="tv" />
              </div>
              <div className="game-box-title text-center">
                <h2>WIn Exclusive</h2>
              </div>
              <div className="game-box-para">
                <p>
                  It can be a fun and engaging way for players to earn
                  cryptocurrency,and they can also be a way for developers to
                  generate revenue for their games.it is important to
                  note that lotteries are a form of gambling..
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lets-talk text-center">
          <h2>Try It Out Now!</h2>
          <img src={Lets} alt="" />
        </div>
      </div>
    </section>
  );
}

export default GamePlay;
