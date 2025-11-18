//! it shows us how react does it from scrach and how things work lets practise it also and just improve our understanding


function coustomrender(reactElement,root){
    const domele=document.createElement(reactElement.type)
    domele.innerHTML=reactElement.children
    domele.setAttribute('href',reactElement.props.href)
    domele.setAttribute('target',reactElement.props.target)
    root.appendChild(domele)
}

const reactElement={
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: "click me"
}


const root=document.querySelector('#radha');


coustomrender(reactElement,root)