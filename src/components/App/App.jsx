import React from 'react'

import styles from './App.scss';
import colors from '../shared/colors.scss'
import Button from '../Button/Button.jsx'
import Tooltip from '../Tooltip/Tooltip.jsx'
import Panel from '../Panel/Panel.jsx'
import DatePicker from '../DatePicker/DatePicker.jsx'
// import {Container, Row, Col} from '../Grid/Grid.jsx'

export default React.createClass({
    render() {
        return (
            <div>

                <div className="container">

                    <div className="row">
                        <div className="col col-1-2 md">
                            <Button text="testtest" className="btn-red"/>

                        </div>
                        <div className="col col-1-2 md">
                            <Panel>

                                <div className="row">

                                    <div className="col col-1-1 md nomargin">
                                        <h1>Test2</h1>
                                        Lorem ipsum
                                        <Tooltip text=" mo ">
                                            <p>[sex·y] /'seksē/</p>
                                            <p>
                                                <em>informal</em>
                                            </p>
                                            <p>exciting; appealing.
                                                <a href="www.google.com" target="_blank">link</a>
                                            </p>
                                        </Tooltip>
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        <Tooltip text=" ullamco ">
                                            <a href="http://www.google.com">
                                                Click me
                                            </a>
                                        </Tooltip>
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-flex h-end">
                                        <Button text="Submit" className="btn-green btn-inline"/>
                                    </div>
                                </div>
                            </Panel>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1-2 lg">
                            <Button text="5" className="btn-purple"/>
                        </div>
                        <div className="col col-1-2 lg">
                            <Button text="inline" className="btn-blue btn-inline"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1-3 md">
                            <Panel>
                                <h2>Test mako nadpis
                                </h2>
                                Lorem ipsum
                                <Tooltip text=" mo ">
                                    <p>[sex·y] /'seksē/</p>
                                    <p>
                                        <em>informal</em>
                                    </p>
                                    <p>exciting; appealing.
                                        <a href="www.google.com" target="_blank">link</a>
                                    </p>
                                </Tooltip>
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Panel>
                        </div>

                        <div className="col col-1-3 md">
                            <Panel>
                                <div className="row">
                                    <div className="col col-1-1 md nomargin">
                                        Lorem ipsum
                                        <Tooltip text="mo">
                                            <p>[sex·y] /'seksē/</p>
                                            <p>
                                                <em>informal</em>
                                            </p>
                                            <p>exciting; appealing.
                                                <a href="www.google.com" target="_blank">link</a>
                                            </p>
                                        </Tooltip>
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        <Tooltip text="ullamco">
                                            <a href="http://www.google.com">
                                                Click me
                                            </a>
                                        </Tooltip>
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                            </Panel>
                        </div>

                        <div className="col-flex col-1-3 md as-flex-start">
                            <Panel>
                                <div className="row">
                                    <div className="col col-1-2 md nomargin">
                                        <Button text="Mako a pako a jozef" className="btn-purple"/>
                                    </div>

                                    <div className="col col-1-2 md nomargin-md">
                                        <Button text="Mako a pako a jozef" className="btn-blue"/>
                                    </div>
                                </div>
                            </Panel>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1-5 xs-1-2">
                            <Button text="5" className="btn-purple"/>
                        </div>
                        <div className="col col-1-5 xs-1-2">
                            <Button text="5" className="btn-red"/>
                        </div>
                        <div className="col col-1-5 xs-1-2">
                            <Button text="5" className="btn-blue"/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col col-1-1">
                            <DatePicker />
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        )
    }
})
