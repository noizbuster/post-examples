import * as _ from 'lodash';
import bb, {Chart} from 'billboard.js';

/**
 * @param {MutableRefObject} ref
 * @return {Chart}
 */
export function findChartByRef(ref) {
    return _.find(bb.instance, (i) => _.get(i, '$.chart._groups[0][0]') === ref.current);
}

/**
 * @param {object} jsonData
 * @return {Array<Array<string, any>>}
 */
export function jsonToColumns(jsonData) {
    return _.reduce(
        jsonData,
        (acc, value, key) => {
            acc.push([key, value]);
            return acc;
        },
        [],
    );
}
