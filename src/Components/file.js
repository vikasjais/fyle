import React, {Component} from "react";
import {Button, Col, Row} from 'antd';
import BG from './../images/BG.png'
import Group from './../images/Group 6.png'
import guy from './../images/guy.png'
import Group4 from './../images/Group 4.png'
import globe from './../images/globe.png'

export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn1: false,
            activeBtn2: false,
            activeBtn3: true,
            activeBtn4: false,
            activeDot1: true,
            activeDot2: false,
            activeDot3: false,
            activeDot4: false,
            lollipopPrice: 1,
            icecandyPrice: 2,
            totalLollipopPrice: 100,
            totalIceCandyPrice: 200,
            servingValue: 100,
            toggle1: true
        }
        this.servingValue = this.servingValue.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeDuration = this.changeDuration.bind(this);
    }

    servingValue(value) {

        if (value === 25)
            this.setState({
                activeBtn1: true,
                activeBtn2: false,
                activeBtn3: false,
                activeBtn4: false,
                servingValue: value
            });
        else if (value === 50)
            this.setState({
                activeBtn1: false,
                activeBtn2: true,
                activeBtn3: false,
                activeBtn4: false,
                servingValue: value
            })
        else if (value === 100)
            this.setState({
                activeBtn1: false,
                activeBtn2: false,
                activeBtn3: true,
                activeBtn4: false,
                servingValue: value
            })
        else if (value === 200)
            this.setState({
                activeBtn1: false,
                activeBtn2: false,
                activeBtn3: false,
                activeBtn4: true,
                servingValue: value
            })
    }


    changeDuration() {
        if (this.state.toggle1) {
            this.setState({lollipopPrice: 0.5, icecandyPrice: 1, toggle1: !this.state.toggle1});
        } else {
            this.setState({lollipopPrice: 1, icecandyPrice: 2, toggle1: !this.state.toggle1});
        }
    }

    changeColor(value) {
        if (value === 1)
            this.setState({activeDot1: true, activeDot2: false, activeDot3: false, activeDot4: false})
        else if (value === 2)
            this.setState({activeDot1: false, activeDot2: true, activeDot3: false, activeDot4: false})
        else if (value === 3)
            this.setState({activeDot1: false, activeDot2: false, activeDot3: true, activeDot4: false})
        else if (value === 4)
            this.setState({activeDot1: false, activeDot2: false, activeDot3: false, activeDot4: true})
    }


    render() {
        console.log(this.state);
        return <div>
            <Row>
                <Col xl={12} lg={12} md={6} sm={6} xs={3}>
                    <div>
            <span className={"looking-for-a-lollip"}>
                Looking for a
                lollipop alternative?
            </span>
                        <span className={"body"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
            </span>
                        <Button type={"primary"} className={"bg"}><span
                            className={"cta-text"}>Primary CTA</span></Button>
                        <Button type={"secondary"} className={"outline"}><span
                            className={"cta-text2"}>Secondary CTA</span></Button>
                    </div>
                </Col>
                <Col xl={12} lg={12} md={6} sm={6} xs={3}>
                    <img className={'globe'} src={globe}/>
                </Col>
            </Row>

            <img src={BG} className={"bg1"}/>
            <p className={"this-is-a-heading-in"}>
                This is a heading in
                two lines
            </p>
            <img className={"rectangle"} src={Group}/>

            <p className={"compare-pricing-today"}>
                Compare pricing today!
            </p>
            <p className={"lorem-ipsum-is-simpl"}>
                Lorem Ipsum is simply dummy text of the printing and <span style={{color: "#0099FF"}}>typesetting</span>.
            </p>

            <div style={{textAlign: "center", top: '1462px', left: '470px', position: 'absolute'}}>
                <Button onClick={() => this.servingValue(25)}
                        className={this.state.activeBtn1 ? "servingBtn1" : "servingBtn"}><span className={"serving"}>25 Serving</span></Button>
                <Button onClick={() => this.servingValue(50)}
                        className={this.state.activeBtn2 ? "servingBtn1" : "servingBtn"}><span className={"serving"}>50 Serving</span></Button>
                <Button onClick={() => this.servingValue(100)}
                        className={this.state.activeBtn3 ? "servingBtn1" : "servingBtn"}><span className={"serving"}>100 Serving</span></Button>
                <Button onClick={() => this.servingValue(200)}
                        className={this.state.activeBtn4 ? "servingBtn1" : "servingBtn"}><span className={"serving"}>200 Serving</span></Button>

            </div>

            <div>
                <span className={'annual'}>Annual </span>
                <span className={'fifty'}>50% off</span>
                <label className="switch">
                    <input type="checkbox" defaultChecked={true} onClick={this.changeDuration}/>
                    <span className="slider round"/>
                </label>
                <span className={'monthly'}>Monthly  </span>
            </div>

            <div className={"card"}>
                <span className={'lollipop'}>
                    lollipop
                </span>
                <span className={'lollipop-price'}>
                    ${this.state.servingValue * this.state.lollipopPrice}
                </span>
                <span className={'body-copy-35'}>
                   Per month
                </span>
                <span className={'body-copy-5'}>
                   For {this.state.servingValue} serving
                </span>
            </div>
            <div className={"card1"}>
                <span className={'icecandy'}>
                    Icecandy
                </span>
                <span className={'lollipop-price'}>
                    ${this.state.servingValue * this.state.icecandyPrice}
                </span>
                <span className={'body-copy-35'}>
                   Per month
                </span>
                <span className={'body-copy-5'}>
                   For {this.state.servingValue} serving
                </span>
            </div>

            <div className={"card2"}>
                <span className={'your-savings-with-lo'}>
                   Your savings with lollipop
                </span>
                <span className={'acd'}>
                    ${this.state.servingValue * this.state.icecandyPrice - this.state.servingValue * this.state.lollipopPrice}
                </span>
                <span className={'body-copy-37'}>
                   Per month
                </span>
            </div>

            <p className={"heres-what-our-cust"}>Here’s what our customers have to say </p>

            <div>
                <img src={guy} className="bitmap"/>
                <span className={'spanText'}> Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s.</span>
                <span className={'raja-ram'}>Raja Ram</span>
                <span className={'tip-world'}>Tip World</span>
            </div>
            <div className={'dotDiv'}>
                <span className={this.state.activeDot1 ? "dot1" : "dot"} onClick={() => this.changeColor(1)}/>
                <span className={this.state.activeDot2 ? "dot1" : "dot"} onClick={() => this.changeColor(2)}/>
                <span className={this.state.activeDot3 ? "dot1" : "dot"} onClick={() => this.changeColor(3)}/>
                <span className={this.state.activeDot4 ? "dot1" : "dot"} onClick={() => this.changeColor(4)}/>
            </div>
            <div>
                <span className={'loved-by-users-reco-copy-2'}>Loved by users,<br/>recommended by experts</span>
            </div>
            <div style={{width: '385px', height: '86px', position: 'absolute', top: '2624px', left: '333px'}}>
                <span className={'lorem-ipsum-is-simpl1'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
            </div>
            <Button type={"primary"} className={"shape"}><span className={"cta-text"}>Primary CTA</span></Button>
            <img className={'suitcase'} src={Group4}/>
        </div>
    }
}