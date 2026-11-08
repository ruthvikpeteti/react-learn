// customRender: a tiny home-made version of what React's root.render() does.
// It takes a "description" object (reactElement) and turns it into a real DOM node
// inside a container that is already on the page.
function customRender(reactElement, mainContainer){
    // 1. Create a real HTML tag using the description's `type` (here: <a>).
    const domElement = document.createElement(reactElement.type)

    // 2. Put the text inside the tag. (Real React uses props.children for this;
    //    here the object stores it in a top-level key called `Children`.)
    domElement.innerHTML = reactElement.Children

    // The manual way to set attributes (works, but only for known props):
    // domELement.setAttribute('href', reactElement.props.href)
    // domELement.setAttribute('target', reactElement.props.target)

    // 3. The loop way: go through EVERY key in props and set it as an attribute,
    //    so it works for any element, not just links.
    for (const prop in reactElement.props) {
        // GUARD: in real React, props can contain a key called `children`
        // (the stuff between the opening and closing tag, e.g. the text in
        // <a>text</a>). `children` is CONTENT, not an HTML attribute, so it
        // must not end up as <a children="...">. `continue` skips this key and
        // moves on to the next one.
        // (In this file it never triggers, because our object keeps the text in
        // `Children` outside of props. It's here to mimic how React behaves.)
        if (prop == 'children') continue;

        // For every other key (href, target, ...) set it as an HTML attribute.
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    // 4. Until now the element only exists in memory. Appending it to the
    //    container is what makes it actually appear on the page.
    mainContainer.appendChild(domElement)
}

// A React element is just a plain object that DESCRIBES the UI:
//   type     -> which HTML tag to make
//   props    -> its attributes
//   Children -> what goes inside it
const reactElement = {
    type: "a",
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

// Find the empty <div id="root"> in index.html; our element will be placed inside it.
const mainContainer = document.querySelector('#root')

// Run it: build the <a> from the description and attach it to #root.
customRender(reactElement, mainContainer)
