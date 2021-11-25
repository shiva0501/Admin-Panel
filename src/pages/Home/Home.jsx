import React from 'react';
import './Home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import {userData} from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/widgetSmall';
import WidgetLarge from '../../components/widgetLarge/widgetLarge';

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytics" data={userData}  datakey="ActiveUsers" grid  />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}