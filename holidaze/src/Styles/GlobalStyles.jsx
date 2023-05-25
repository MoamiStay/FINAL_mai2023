import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
    --color-primaryText: rgb(12, 12, 12);
    --color-menuText: rgb(213, 46, 46);
};

.menuText {
    /* color: ${(props) => props.theme.color.menuText}; */
    color: #e8e8e8;
    ::placeholder {
        color: #e8e8e8;
    }
}

.copytext, .copytext:hover {
    color: ${(props) => props.theme.color.primaryText};
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