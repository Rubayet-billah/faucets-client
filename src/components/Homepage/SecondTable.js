import React from 'react';
import './Table.css'

const SecondTable = () => {
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
                        <td>08:30 AM</td>
                        <td>542</td>
                        <td>hs48743bfjkdsb8t43</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>11:30 AM</td>
                        <td>457</td>
                        <td>yqgw23qg</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>10:00 AM</td>
                        <td>965</td>
                        <td>ewgh46wuygvr324</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SecondTable;