import React from 'react';
import './Table.css'

const FirstTable = () => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>12:30 AM</td>
                        <td>487</td>
                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>10:30 AM</td>
                        <td>875</td>
                        <td>sf7s7ers4e7r7wser</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>11:00 AM</td>
                        <td>627</td>
                        <td>df2nw1eo7ihfs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FirstTable;