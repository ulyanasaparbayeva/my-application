import AppHeader from './components/AppHeader';


function App() {
  return (
    <div className="App">
     <AppHeader/>
     <div className="container">
       <div class="columns-2">
        <div className="pt-[100px;]">
            <h1 className="font-bold text-black text-6xl">Data to enrich your</h1>
            <h2 className="font-bold text-[#4f46e5] text-6xl">online businness</h2>
            <div className="text-gray-500 font-normal text-[21px] pt-6">Anim aute id magna aliqua ad ad non deserunt sunt. Qui<br/>
                irure qui lorem cupidat comomodo .Elit sunt emit fugiat<br/>
                venam occaecat fugiat aliqua
            </div>
            <div className="pt-6">
                <button className="bg-[#4f46e5] rounded-[5px] py-4 w-[150px]"><div className="font-medium text-white text-lg">Get started</div></button>
                <button className="rounded-[5px] shadow-lg py-4 w-[150px] ml-6"><div className="text-[#4f46e5] font-medium text-lg">Live demo</div></button>
            </div>
            <img src="/images/home.jpg"/>
        </div>
       </div>
     </div>
    </div>
  );
}

export default App;
