import { useState } from 'react';
import CatList from './component/CatList';
import Modal from './component/Modal';

function App() {

  const [ data, setData ] = useState(CatList.cats);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  let handleAddItem = (item) => {
    console.log(item);
    setData([...data, item]);
  };

  let handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>haha ha네 고양이</h1>
      </header>
      <main>
      <div className="sideBar">
                <button 
                  type="button" 
                  id="add"
                  onClick={() => setIsModalOpen(true)}>
                    추가
                </button>
                <span className="famName1">길막이네</span>
                <span className="famName">카오네</span>
                <span className="famName">삼색이네</span>
                <span className="famName">천하네</span>
      </div>
      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
      <CatList/>
      </main>
      </div>
  );
}

export default App;
