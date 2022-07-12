import React from 'react';
import AppWrapper from '../components/appwrapper';
import AppItem from '../components/appitem';
import { turtles } from '../data/constants';
import { getItemDescription } from '../functions/utils.js';

export default class App extends React.Component {
    render() {
        return (
            <AppWrapper 
                title = "React Turtles" 
                children = {
                    turtles.map(turtle =>
                        <div key = {turtle.name}>
                            <AppItem 
                                name = {turtle.name}
                                imgUrl = {turtle.imgUrl}
                                alt = {turtle.name}
                                description = {turtle.nickName + getItemDescription() + turtle.weapon}
                            /> 
                        </div> 
                    )
                }
            />
        );
    }
}