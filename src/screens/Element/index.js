export { Element } from "./Element";
import React from "react";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-K3GKPJ5'
}

TagManager.initialize(tagManagerArgs)


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    document.getElementById('root')
)