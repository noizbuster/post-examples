import bb, {pie, Chart} from 'billboard.js';
import {findChartByRef, jsonToColumns} from '../utils/billboardHelper';

/**
 * @typedef {{pour: number, deep: number, fry: number}} PIE_DATA_JSON
 */

/**
 * @typedef {Array<Array<string, any>>} PIE_DATA_COLUMNS
 */

export default class MyPieChart {

    chartRef;
    chart;

    /**
     * @param {MutableRefObject} chartRef
     */
    constructor(chartRef) {
        this.chartRef = chartRef;
        this.chart = findChartByRef(this.chartRef);
    }

    /**
     * @param {PIE_DATA_COLUMNS}  data
     */
    render(data) {
        if (!this.chart) {
            this.create();
        }
        this.update(data);
    }

    /**
     * @return {Chart}
     */
    create() {
        const chartOptions = {
            title: {text: '탕수육 성전'},
            data: {
                columns: [
                    ['pour', 50],
                    ['deep', 40],
                    ['fry', 5],
                ],
                names: {
                    pour: '부먹',
                    deep: '찍먹',
                    fry: '볶먹',
                },
                type: pie(),
            },
            bindto: this.chartRef.current,
        };

        this.chart = bb.generate(chartOptions);
        return this.chart;
    }

    /**
     * @param {PIE_DATA_COLUMNS} data
     * @return {Chart}
     */
    update(data) {
        if (this.chart) {
            this.chart.load({columns: data});
            this.chart.resize();
        }
    }

    /**
     * @param {PIE_DATA_JSON}    jsonData
     * @return {PIE_DATA_COLUMNS}
     */
    static forgeData(jsonData) {
        return jsonToColumns(jsonData);
    }
}
