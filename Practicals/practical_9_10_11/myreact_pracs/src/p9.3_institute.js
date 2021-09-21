function Header() {
    const h1_style= {fontSize: "2rem"};
    const tag_style= {fontSize: "1rem"};
    const layout_style= {background: "#303030", color: "white", textAlign: "center", padding: "5rem 0.2rem",};
    return (
    <div style={layout_style}>
        <h1 style={h1_style}>Somaiya The College</h1>
        <p st>Best Campus</p>
    </div>
    );
}

function Footer() {
    const a_style= {
        
    };
    const ul_style= {};
    const layout_style= {};
    return (
    <div style={layout_style}>
        <ul style={ul_style}>
            <li><a href="" style={a_style}>Course 1</a></li>
            <li><a href="" style={a_style}>Course 2</a></li>
            <li><a href="" style={a_style}>Course 3</a></li>
            <li><a href="" style={a_style}>Course 4</a></li>
            <li><a href="" style={a_style}>Course 5</a></li>
        </ul>

        <ul style={ul_style}>
            <li><a href="" style={a_style}>Subject 1</a></li>
            <li><a href="" style={a_style}>Subject 2</a></li>
            <li><a href="" style={a_style}>Subject 3</a></li>
            <li><a href="" style={a_style}>Subject 4</a></li>
            <li><a href="" style={a_style}>Subject 5</a></li>
        </ul>
    </div>
    );
}



function Institue() {
    return (
    <div>
        <Header />
        <Footer />
    </div>
    );
}

export default Institue;