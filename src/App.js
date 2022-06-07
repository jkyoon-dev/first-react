import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log(counter, counter2);
  };
  /*
1. 유저가 버튼을 클릭한다.
2. counter+해서 1이됨
3. setState 함수 호출
4. console.log실행됨
변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
함수 끝
app 다시 re render
*/

  return (
    <div>
      {/* <Box name='리사' num={1} />
      <Box name='지수' num={2} />
      <Box name='로제' num={3} /> */}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
