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
    const a_style= {color: "white", textDecoration: "none", display: "inline-block",margin: "0.5rem", padding: "0.2rem 0.5rem", border: "1px solid currentColor"};
    const ul_style= {listStyle: "none", margin: "0 3rem"};
    const layout_style= {display: "flex", justifyContent: "center", alignItems: "center",padding: "5rem 0.2rem",};
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
    <>
        <Header />
        <Footer />
    </>
    );
}

export default Institue;