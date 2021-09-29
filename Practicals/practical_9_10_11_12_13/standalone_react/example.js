function Player(props){
    //it returns the reusable code that
    //we want to render on actual html page
    return(
        //we are adding the first player div info
        <div className="player">
            <h1>{props.name}</h1>
            <p>My hobby: {props.hobby}</p>
        </div>
    );
}
var app= (
    <div>
        <Player name="Steve" hobbey="Cricket"/>
        <Player name="David" hobbey="Cricket"/>
    </div>
);
ReactDOM.render(app,document.querySelector('#app'));