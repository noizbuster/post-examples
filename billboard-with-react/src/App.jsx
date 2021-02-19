import React from 'react';
import MyPieChart from './charts/MyPieChart';
import './App.css';

function App() {
    const myChartRef = React.useRef(null);
    const [pieData, setPieData] = React.useState({pour: 50, deep: 40, fry: 5});

    React.useEffect(() => {
        setTimeout(() => {
            console.log('data updated from', pieData);
            setPieData({
                pour: pieData.pour + 1.5,
                deep: pieData.deep + 1,
                fry: pieData.fry + 2,
            });
        }, 2000);

        const myPie = new MyPieChart(myChartRef);
        myPie.render(MyPieChart.forgeData(pieData));
    }, [pieData]);

    return (
        <div className="App">
            <div ref={myChartRef} />
        </div>
    );
}

export default App;
