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
            <h1 style={{fontSize:50}}>Topics Covered</h1>
            <p style={ptagStyle}>The following is the list of topics that cover in the MDN learning area.</p>
            <br/>

            <a style ={atagStyle} href="https://geekster-in.notion.site/CDN-and-JSX-c3a4933eda0647359e05de79148f6afa">Getting Started with the web.</a>
            <p style={ptagStyle}>Provides a practical introduction to the web development.</p>
            <br/>
            <a style ={atagStyle} href="https://geekster-in.notion.site/CDN-and-JSX-c3a4933eda0647359e05de79148f6afa">Html structuring the web</a>
            <p style={ptagStyle}>HTML is the language that is used to structure the different part of our contenet and defining what there purpose and meaning.this topic teaches html in detail.</p>
            <br/>

            <a style ={atagStyle} href="https://geekster-in.notion.site/CDN-and-JSX-c3a4933eda0647359e05de79148f6afa">Css styling the web</a>
            <p style={ptagStyle}>Css is the language that is used to controll our css web page and Style and layout and for learning more css folow the above link.</p>

        </div>
    )
}


ReactDOM.render(<ReactElement/>, document.getElementById("root"));