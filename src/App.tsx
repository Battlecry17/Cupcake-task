import React, { useRef, RefObject, useEffect } from 'react';
import { cli } from 'webpack';

const Table = () => {
    const numberRefs1 = [useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null)];
    const numberRefs2 = [useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null)];
    const numberRefs3 = [useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null)];
    const numberRefs4 = [useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null)];
    const numberRefs5 = [useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null)];
    const numberRefs6 = [useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null), useRef<HTMLTableCellElement>(null)];

    const colorMinNumber = (refw: RefObject<HTMLTableCellElement>[]) => {

        const numbers = [
            refw[0].current?.innerText || "0",
            refw[1].current?.innerText || "0",
            refw[2].current?.innerText || "0"
        ];

        let minValue = numbers.reduce((min, num) => (num < min ? num : min));

        refw.forEach((ref) => {

            if (ref.current) {
                // console.log(ref.current.innerText);
                // console.log(minValue);

                if (ref.current.innerText === minValue) {
                    ref.current.classList.add('color');
                } else {
                    ref.current.classList.remove('color');
                }
            }
        });

    };

    const fetchData = async () => {
        try {
            const requests = [
                fetch('http://localhost:3000/api/v1/first'),
                fetch('http://localhost:3000/api/v1/second'),
                fetch('http://localhost:3000/api/v1/third')
            ];

            const responses = await Promise.all(requests);

            for (let index = 0; index < responses.length; index++) {
                const response = responses[index];

                if (response.ok) {
                    const data = await response.json();

                    numberRefs1[index].current!.innerText = data.rates.RUB;
                    numberRefs2[index].current!.innerText = data.rates.USD;
                    numberRefs3[index].current!.innerText = data.rates.EUR;

                    numberRefs4[index].current!.innerText = String(data.rates.RUB / data.rates.USD);
                    numberRefs5[index].current!.innerText = String(data.rates.RUB / data.rates.EUR);
                    numberRefs6[index].current!.innerText = String(data.rates.EUR / data.rates.USD);

                } else {
                    console.error("Ошибка получения данных c индексом");
                }
            }
            colorMinNumber(numberRefs1);
            colorMinNumber(numberRefs2);
            colorMinNumber(numberRefs3);
            colorMinNumber(numberRefs4);
            colorMinNumber(numberRefs5);
            colorMinNumber(numberRefs6);
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };

    const pollData = async () => {
        try {
            const requests = [
                fetch('http://localhost:3000/api/v1/first/poll'),
                fetch('http://localhost:3000/api/v1/second/poll'),
                fetch('http://localhost:3000/api/v1/third/poll')
            ];

            const responses = await Promise.all(requests);

            for (let index = 0; index < responses.length; index++) {
                const response = responses[index];

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    numberRefs1[index].current!.innerText = data.rates.RUB;
                    numberRefs2[index].current!.innerText = data.rates.USD;
                    numberRefs3[index].current!.innerText = data.rates.EUR;

                    numberRefs4[index].current!.innerText = String(data.rates.RUB / data.rates.USD);
                    numberRefs5[index].current!.innerText = String(data.rates.RUB / data.rates.EUR);
                    numberRefs6[index].current!.innerText = String(data.rates.EUR / data.rates.USD);

                } else {
                    console.error("Ошибка получения данных c индексом");
                }
            }
            colorMinNumber(numberRefs1);
            colorMinNumber(numberRefs2);
            colorMinNumber(numberRefs3);
            colorMinNumber(numberRefs4);
            colorMinNumber(numberRefs5);
            colorMinNumber(numberRefs6);
            pollData();
        } catch (error) {
            console.error('Ошибка получения данных:', error);
            pollData();
        }
    };


    useEffect(() => {
        fetchData();
        pollData();
    }, []);


    return (
        <table>
            <thead>
                <tr>
                    <th>Pair name/market</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>RUB/CUPCAKE</th>
                    <td ref={numberRefs1[0]}>1</td>
                    <td ref={numberRefs1[1]}>1</td>
                    <td ref={numberRefs1[2]}>1</td>
                </tr>
                <tr>
                    <th>USD/CUPCAKE</th>
                    <td ref={numberRefs2[0]}>1</td>
                    <td ref={numberRefs2[1]}>1</td>
                    <td ref={numberRefs2[2]}>1</td>
                </tr>
                <tr>
                    <th>EUR/CUPCAKE</th>
                    <td ref={numberRefs3[0]}>1</td>
                    <td ref={numberRefs3[1]}>1</td>
                    <td ref={numberRefs3[2]}>1</td>
                </tr>
                <tr>
                    <th>RUB/USD</th>
                    <td ref={numberRefs4[0]}>1</td>
                    <td ref={numberRefs4[1]}>1</td>
                    <td ref={numberRefs4[2]}>1</td>
                </tr>
                <tr>
                    <th>RUB/EUR</th>
                    <td ref={numberRefs5[0]}>1</td>
                    <td ref={numberRefs5[1]}>1</td>
                    <td ref={numberRefs5[2]}>1</td>
                </tr>
                <tr>
                    <th>EUR/USD</th>
                    <td ref={numberRefs6[0]}>1</td>
                    <td ref={numberRefs6[1]}>1</td>
                    <td ref={numberRefs6[2]}>1</td>
                </tr>
            </tbody>
        </table>
    );

}

function App() {
    return (
        <div>
            <Table />
        </div>
    );
};

export default App;