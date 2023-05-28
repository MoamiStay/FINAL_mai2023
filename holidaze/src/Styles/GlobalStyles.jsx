import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
    --color-primaryText: rgb(12, 12, 12);
    --color-menuText: rgb(213, 46, 46);
};

.menuText, .menuText:active, .menuText:hover {
    color: #e8e8e8;
    ::placeholder {
        color: #e8e8e8;
    }
}

.ant-btn-text:not(:disabled):hover {
    color: white;
    font-weight: bolder;
}

.copytext, .copytext:hover {
    color: ${(props) => props.theme.color.primaryText};
}

.link {
    color: black;
}

.link:hover {
    color: #a2773f;
}

.menu-link {
    color: white;
}

.menu-link:hover {
    color: #a2773f;
}

@media screen and (min-width: 320px) {

// 

}

@media screen and (min-width: 768px) {

//

}

@media screen and (min-width: 1200px) {

//

}

@media screen and (min-width: 1800px) {

//

}
`;

export default GlobalStyle;