import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <>
    
      <h1>CARD</h1>

      <Profile 
        image = 'https://w.namu.la/s/c6f01504cb69492ec73f876f9f77753a11f1c92c5bc77dbe57d763c24066a02201a08d757555de2c320241c5780729206ad3a642d59186d56cea76b38b8793b2142b062622d2cf6e2a9badc27e984e2177041825f9c9abea42855d1f1de935fcc9ec9dc1cb7467883d9e9f31106be7f7'
        name = '스티브 로저스'
        job = '캡틴 아메리카'
        isNew
        />
      <Profile 
        image = 'https://w.namu.la/s/4567c75d6ca305672a930f7b3f45a519982204db6b75c5abb8236a4d58d21801d3b9334ded30da63c7bc2b6d68fa265827662dcd16e5e113a4d09401ec48f642731fdbe1e41acc88a606a11f2ea9fb5515295db0548dd7a3f4dd218607709ecf'
        name = '브루스 배너'
        job = '헐크'
        isNew
        />
      <Profile 
        image = 'https://w.namu.la/s/e5c984760d2de6068ebfbed07a80fe0ecbfa6e711cef7bba8b6e31a8c3becb47e464195df0a9b44d7627a9d4294d7a6e232fcf5bd6d776140f157038c427d7c8328a642a94946048f154e87cb49ce6c223fec3732743c5a12d164b9a60ee708cd5b5df0001e55f4aa9056f729a09b913'
        name = '토르 오딘슨'
        job = '토르'
        />
      <Profile 
        image = 'https://w.namu.la/s/fec2bbc1637a46a6b21fdc98865bf092c27358b3b9a1e689a0a7b3e3ba7ae724f7d5f6066f1a1436e8a1d1752862a7193d34022ce4698c1c1b92fb2b87ce30598ef6ea2ea07c0201acffc1e52b52b7dd8228dcf6d0c4607f12b3fc09530d601a'
        name = '재닛 반 다인'
        job = '와스프'
        isNew
        />
      <Profile 
        image = 'https://w.namu.la/s/205e62e11c5c37eb28b0eff8f06adf271ee368a00615d524649d34dbed151826126b9027c2398a93b900b3bea43096a4cbd6ddbc38232e42f1fa5dce402a07ae654e2adecf776f623a6ef27881616a62d48097327600d96119ab159d44bd4004'
        name = '행크 핌'
        job = '앤트맨'
        />
      <Profile 
        image = 'https://w.namu.la/s/4b8ac010eb6740bacebdbb65d1c7ecbae79a0e00e8e5428ab0c05a72117f6559bf311e9013dd7dde1211fb037914a1fd8dfcdbab50fee52ff96be362926e289b322fba5282c9ff1d068851ce344732afe46bbe7131c35539df23fd212268fa59'
        name = '토니 스타크'
        job = '아이언맨'
        isNew
        />
      <Profile />
      <Profile />

    </>
  );
}

export default App;
