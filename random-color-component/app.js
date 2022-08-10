const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(<App />);




function App(){

    const [background, setBackground] = React.useState("");
    console.log("rendered");
    React.useEffect(() => {
        getColor()
    }, [])

    function getColor(){
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => {
            const color = res.data.colors[0].hex;
            setBackground(color);
        })
        .catch(err => console.log(err));
    

}

    return (
        <div 
            className="app"
            style={{backgroundColor: `#${background}`}}
            >
            <button onClick={getColor}>Change Color</button>
        </div>
    )
}