import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import "./index.css"
import pilogo from "../assets/pi_logo.png"
import fireside from "../assets/firesidepi.png"
import wallet from "../assets/walletpi.png"
import brainstorm from "../assets/brainstormpi.png"
import mine from "../assets/minepi.png"
import blockchain from "../assets/blockchainpi.png"
import develop from "../assets/developi.png"
import kyc from "../assets/kycpi.png"
import chat from "../assets/chatpi.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

function Verify() {
    return (
        <div>
            <div id="root">
                <div className="App">
                    <div className="piscreen">
                        <div className="pi_sign">
                            <img src={pilogo} alt="" />
                            <h3>Welcome to the Pi Browser </h3>
                        </div>
                        <div className="pilinks">
                            <ul>
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${fireside}")` }}>
                                        jkdkkf</div>
                                    <h4>Fireside</h4>
                                </a></li>
                                <li><a href="/verify" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${wallet}")` }}>
                                        jkdkkf</div>
                                    <h4>Wallet</h4>
                                </a></li>
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${brainstorm}")` }}>
                                        jkdkkf</div>
                                    <h4>Brainstorm</h4>
                                </a></li>
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${mine}")` }}>
                                        jkdkkf
                                    </div>
                                    <h4>Mine</h4>
                                </a></li>
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${blockchain}")` }}>
                                        jkdkkf</div>
                                    <h4>Blockchain</h4>
                                </a></li>
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${develop}")` }}>
                                        jkdkkf</div>
                                    <h4>Develop</h4>
                                </a></li>
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${kyc}")` }}>
                                        jkdkkf
                                    </div>
                                    <h4>KYC</h4>
                                </a></li >
                                <li><a href="/" className="pilinkcard">
                                    <div className="imgs" style={{ backgroundImage: `url("${chat}")` }}>
                                        jkdkkf
                                    </div>
                                    <h4>Chat</h4>
                                </a></li >
                            </ul >
                        </div >
                        <button className="explorebtn">
                            <FontAwesomeIcon icon={faCircleNotch} />
                            Explore the Testnet Ecosystem
                        </button>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Verify