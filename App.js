        
        
        const element = React.createElement("h1", {id: "heading"}, "Hello World from React 🙏🏼"); 
        // This element which is created via React.createElement is a Javascript Object.
        // It is React that converts it into a html element on our page.

        const parent = React.createElement("div", { id: "parent" }, [
            React.createElement("div", { id: "child" }, [
              React.createElement("h1", {}, "I'm an h1 tag"),
              React.createElement("h2", {}, "I'm an h2 tag"),
            ]),
            React.createElement("div", { id: "child2" }, [
              React.createElement("h1", {}, "I'm an h1 tag"),
              React.createElement("h2", {}, "I'm an h2 tag"),
            ]),
          ]);


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);

       