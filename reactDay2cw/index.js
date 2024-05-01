const ReactElement = ()=>{
    const ptagStyle = {
        fontSize: "20px", 
        fontWeight: "normal",
        color:"green",
      };

    const atagStyle = {
        fontSize: "20px",   
    };
    return(
        <div>
            <h1 style={{fontSize:50}}>Learn WebDevelopment</h1>
            <p style={ptagStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur maxime tempora fugit expedita cum sit. Corrupti similique numquam laboriosam rerum porro sit sed unde, quia, praesentium reprehenderit ducimus eos dolor.</p>
            <br/>
            <p style={ptagStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum assumenda eos minus reprehenderit. Eius iure repellendus quis maiores ratione. Exercitationem sint fugiat labore recusandae totam voluptates nemo cumque ut ipsum autem provident <a style ={atagStyle} href="https://geekster-in.notion.site/CDN-and-JSX-c3a4933eda0647359e05de79148f6afa">The rest of MDN</a>
             illum amet a, sit corrupti, tenetur, libero nobis. Voluptatum quidem unde, quisquam ex assumenda corporis suscipit cum dignissimos!</p>
            <br/>

            <p style={ptagStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut incidunt sapiente eius dolor non error veniam voluptate, sequi facere velit, reiciendis laborum corrupti ut quaerat. Minima mollitia vero impedit quia dolorem expedita, iste reiciendis? Animi, blanditiis? Adipisci nesciunt, saepe modi rem voluptatum commodi recusandae nihil consequuntur illum aut accusamus et nam, rerum alias fugiat corporis reprehenderit assumenda, eligendi reiciendis!</p>

        </div>
    )
}


ReactDOM.render(<ReactElement/>, document.getElementById("root"));